import os
import yaml
import random
from hashlib import blake2b

# Load Publications 
pubs = yaml.load(open("library.yaml"), Loader=yaml.CLoader)

# Load template
types = {
         "conference": ["inproceedings", "booktitle"],
         "journal": ["article", "journal"],
         "phdthesis": ["phdthesis", "school"],
         "mastersthesis": ["mastersthesis", "school"],
         "preprint": ["article", "journal"],
         "workshop": ["inproceedings", "booktitle"],
         "inbook": ["inbook", "booktitle"],
         "book": ["book"],
         "electronic": ["electronic"],
         "misc": ["misc"],
        }

def generate_bibtex(entry):
  tex = "@{}".format(types[entry["TYPE"]][0])
  tex += "{" + "{}{},\n".format(entry["AUTHORS"][0].split()[-1], entry["YEAR"])
  tex += "\ttitle = {},\n".format(entry["TITLE"])
  tex += "\tauthors = {},\n".format(" and ".join(entry["AUTHORS"]))
  tex += "\tyear = {},\n".format(entry["YEAR"])
  if "VENUE" in entry:
    if len(types[entry["TYPE"]]) == 2:
      tex += "\t{} = {},\n".format(types[entry["TYPE"]][1], entry["VENUE"])
    else:
      tex += "\tbooktitle = {},\n".format(entry["VENUE"])
  for key in ["month", "number", "pages", "volume", "doi", "URL"]:
    if key in entry:
      if key == "month" and entry[key][-1] == ",":
        tex += "\t{} = {},\n".format(key, entry[key][:-1])
      else:
        tex += "\t{} = {},\n".format(key, entry[key])
  tex += "}"
  return tex

def create_html_entry(entry, idx):
  # Read entry template
  html = "".join([line for line in open("entry.html")])
  if "file" not in entry:
    h = blake2b(key=b'library', digest_size=8) #small_keys
    h.update(entry["TITLE"].encode('utf8'))
    dig = "nofile{}".format(h.hexdigest())
  else:
    dig = entry["file"].rsplit("/")[-1]
  html = html.replace("#IDX#",  dig)

  # Authors
  authors = ", ".join(entry["AUTHORS"])
  values = {
            "#TITLE#":     entry["TITLE"],
            "#YEAR#":      entry["YEAR"],
            "#YEAR-btn#":  entry["YEAR"],
            "#VENUE#":     entry["VENUE"] if "VENUE" in entry else entry["TYPE"], #entry["TYPE"] not in ["book","preprint"] else entry["TYPE"],
            "#BOOK#":      types[entry["TYPE"]][1] if len(types[entry["TYPE"]]) == 2 else "",
            "#AUTHORS#":    authors,
            "#URL#":       "<a class=\"btn border-success\" href={} target=\"_blank\">URL</a>".format(entry["URL"]) if "URL" in entry else "",
            "#PDF#":       "<a class=\"btn border-primary\" href={} target=\"_blank\">PDF</a>".format(entry["file"]) if "file" in entry else "",
            "#GROUPS#":    " ".join("<button type=\"button\" class=\"btn btn-light\" onclick=\"myHash('#{}')\">#{}</button>".format(g,g) for g in entry["groups"]) if "groups" in entry else ""
          }

  # Replace values
  for key in values:
    html = html.replace(key, values[key])
  html = html.replace("#BIBTEX#", generate_bibtex(entry))
  return html

## Generate Website ##
website = "".join([line for line in open("index_template.html")])
idx = len(pubs)
generated_html = ""
for entry in pubs:
  generated_html += create_html_entry(entry, idx)
  idx -= 1

website = website.replace("###AUTOGENERATED###", generated_html)
out = open("index.html",'wt')
out.write(website)
out.close()
