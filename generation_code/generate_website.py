import ast
import json

# Load Publications 
pubs = json.load(open("publications.json"))

# Load Author urls
webs = json.load(open("websites.json"))

# Load template
website = "".join([line for line in open("index_template.html")])
bibrec = {"journal": "article", 
          "inproceedings":"booktitle", 
          "school": "phdthesis" }
colors = {"L":"primary", 
          "R": "success", 
          "V": "danger", 
          "O": "warning", 
          "A": "secondary"}

with_url = "          <a href=#URL# onclick=\"captureOutboundLink('#URL#');\"><b>#TITLE#</b></a>#EXTRA#\n"
without = "          <b>#TITLE#</b>#EXTRA#\n"

def create_html_entry(entry, idx):
  # Read entry template
  html = "".join([line for line in open("entry.html")])
  html = html.replace("#IDX#", str(idx))

  # Do we have a URL?
  if "url" in entry:
    html = html.replace("##LINKS##", with_url)
    html = html.replace("#URL#", entry["url"])
  else:
    html = html.replace("##LINKS##", without)

  # Replace most values
  for key in ["YEAR", "VENUE", "VENUE-ACR", "TITLE", "BOOK"]:
    html = html.replace("#{}#".format(key), entry[key])
  html = html.replace("#BIBREC#", bibrec[entry["BOOK"]])
  html = html.replace("#YEAR-btn#", entry["YEAR"] if entry["VENUE"] != "ArXiv" else "Pre.")
  html = html.replace("#TYPE#", colors[entry["cat"][0]])
  html = html.replace("#CAT#", " ".join(entry["cat"]))

  # Authors
  me = entry["authors"].index("Yonatan Bisk")
  # If I'm first author -- remove field
  if me == 0:
    html = html.replace("#AUTH1#", "")
  else:
    html = html.replace("#AUTH1#", ", ".join(entry["authors"][:me]) + ", ")

  # If I'm last author -- remove field
  if me == len(entry["authors"]) - 1:
    html = html.replace("#AUTH2#", "")
  else:
    html = html.replace("#AUTH2#", ", " + ", ".join(entry["authors"][me+1:]))

  # Add links to all co-authors
  for v in webs:
    html = html.replace(v, "<a href={}>{}</a>".format(webs[v], v))

  # Generate cite key from first author
  html = html.replace("#CITEKEY#", entry["authors"][0].split()[-1] + entry["YEAR"])
  html = html.replace("#AUTH-BIB#", " and ".join(entry["authors"]))

  # Include extra links
  additional = ""
  for key in entry["extras"]:
    link = entry["extras"][key]
    additional += "&nbsp;<a href=\"{}\" onclick=\"captureOutboundLink('{}');\">[{}]</a>".format(link, link, key)
  html = html.replace("#EXTRA#", additional)

  return html


idx = len(pubs)
generated_html = ""
for entry in pubs:
  generated_html += create_html_entry(entry, idx)
  idx -= 1

# Generate Website
website = website.replace("###AUTOGENERATED###", generated_html)
out = open("../index.html",'wt')
out.write(website)
out.close()
