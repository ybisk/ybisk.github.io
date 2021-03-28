import os
import yaml

# Load Publications 
pubs = yaml.load(open("publications.yaml"), Loader=yaml.CLoader)

# Load Author urls
webs = yaml.load(open("websites.yaml"), Loader=yaml.CLoader)

# Load template
types = {
         "conference": ["inproceedings", "booktitle"],
         "journal": ["article", "journal"],
         "phdthesis": ["phdthesis", "school"],
         "preprint": ["article", "journal"],
         "workshop": ["inproceedings", "booktitle"],
        }
colors = {
          "L":"primary", 
          "R": "success", 
          "V": "danger", 
          "O": "warning", 
          "A": "secondary"
        }

# TODO: Redundant with library
accents = {"{\\'e}": "é", "{\\`e}": "è", "{\\'a}": "á", "{\\'o}": "ó", 
           "{\\'u}": "ú", "{\\'c}": "ć", "{\\'\\\\i}":"í",
           "{\\\"a}": "ä", "{\\o}": "ø", "{\\aa}": "å", "{\\l}": "ł", "{\\'y}": "ý",
           "{\\\"o}": "ö","{\\\"u}": "ü", "{\\'s}": "ś", "{\\^o}": "ô",
           "\\v{c}": "č", "\\v{s}": "š", "\\v{r}": "ř"}
def pretty(s):
  for k in accents:
    s = s.replace(k, accents[k])
    s = s.replace(k.upper(), accents[k].upper())
  if s[0] == "{" and s[-1] == "}":
    s = s[1:-1]
  return s

def create_html_entry(entry, idx):
  # Read entry template
  html = "".join([line for line in open("entry.html")])
  html = html.replace("#IDX#", str(idx))

  # Authors
  authors = pretty(", ".join(entry["AUTHORS"]))
  # Add links to all co-authors
  for v in webs:
    authors = authors.replace(v, "<a href={}>{}</a>".format(webs[v], v))
  authors = authors.replace("Yonatan Bisk", "<div class=\"name\">Yonatan Bisk</div>")

  values = {
            "#TITLE#":     entry["TITLE"],
            "#YEAR#":      entry["YEAR"],
            "#YEAR-btn#":  entry["YEAR"] if entry["VENUE"] != "ArXiv" else "Pre.",
            "#VENUE#":     entry["VENUE"],
            "#VENUE-ACR#": entry["VENUE-ACR"],
            "#BIBREC#":    types[entry["TYPE"]][0],
            "#BOOK#":      types[entry["TYPE"]][1],
            "#FIELD#":     colors[entry["FIELD"][0]], 
            "#FIELDS#":    " ".join(entry["FIELD"]),
            "#CITEKEY#":   entry["AUTHORS"][0].split()[-1] + entry["YEAR"],
            "#AUTH-BIB#":  " and ".join(entry["AUTHORS"]),
            "#AUTHORS#":    authors,
            "#URL#":       entry["URL"]
          }

  # Replace values
  for key in values:
    html = html.replace(key, values[key])

  # Include extra links
  additional = ""
  btn = "<a class=\"sbtn btn btn-light\" "
  if "EXTRAS" in entry:
    for key in entry["EXTRAS"]:
      link = entry["EXTRAS"][key]
      additional += "&nbsp; {} href=\"{}\"><i>{}</i></a>".format(btn, link, key)
  html = html.replace("#EXTRA#", additional)

  return html


def create_latex_entry(entry):
  tex = "\pub{#YEAR#}\n\t{\href{#URL#}{#TITLE#}}\n\t{#AUTHORS#}\n\t{#VENUE#}{#PRESENTATION#}{}\n"
  tex = tex.replace("#YEAR#", entry["YEAR"])
  tex = tex.replace("#URL#", entry["URL"])
  tex = tex.replace("#TITLE#", entry["TITLE"].replace("&","\\&"))
  tex = tex.replace("#VENUE#", entry["VENUE"])
  tex = tex.replace("#PRESENTATION#", "(Oral)" if "Oral" in entry["VENUE-ACR"] else "")
  authors = ", ".join(entry["AUTHORS"])
  authors = authors.replace("Yonatan Bisk","\\YB{}")
  tex = tex.replace("#AUTHORS#", authors)
  return tex


## Generate Website ##
website = "".join([line for line in open("pub_template.html")])
idx = len(pubs)
generated_html = ""
for entry in pubs:
  generated_html += create_html_entry(entry, idx)
  idx -= 1

website = website.replace("###AUTOGENERATED###", generated_html)
out = open("../publications.html",'wt')
out.write(website)
out.close()


## Generate CV ##
latex = "".join([line for line in open("CV_template.tex")])
latex_publications = ""
latex_techreports = ""
previous = 10000
for entry in pubs:
  if entry["TYPE"] in ["conference", "journal"]:
    latex_publications += create_latex_entry(entry)
  elif entry["TYPE"] in ["preprint", "workshop"]:
    latex_techreports += create_latex_entry(entry)
latex = latex.replace("##PUBLICATIONS##", latex_publications)
latex = latex.replace("##TECHREPORTS##", latex_techreports)
out = open("CV.tex",'wt')
out.write(latex)
out.close()
os.system("pdflatex CV.tex")
os.system("rm CV.tex CV.log CV.aux CV.out")
os.system("mv CV.pdf ../")
