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
          "WS1":"primary", 
          "WS2":"primary", 
          "WS3": "success", 
          "WS4": "danger", 
          "WS5": "warning", 
          "O": "info", 
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
  if len(entry["URL"].strip()) > 0:
    html = "".join([line for line in open("entry.html")])
  else:
    html = "".join([line for line in open("entry_nourl.html")])
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
            "#FIELD#":     colors[entry["FIELD"]], 
            "#FIELDS#":    entry["FIELD"],
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
  btn = "<a class=\"sbtn\" "
  if "EXTRAS" in entry:
    for key in entry["EXTRAS"]:
      link = entry["EXTRAS"][key]
      additional += "&nbsp; {} href=\"{}\"><i>{}</i></a>".format(btn, link, key)
  html = html.replace("#EXTRA#", additional)

  return html

def create_latex_entry(entry):
  tex = "{\href{#URL#}{#TITLE#}\hfill \\textnormal{#YEAR#}}\n\t{#AUTHORS#}\n\t{#VENUE#}{#PRESENTATION#}{}\n"
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

## Generate Plot ##
data = {"WS1":0, "WS2":0, "WS3":0, "WS4":0, "WS5":0, "O":0}
for entry in pubs:
    u = 1.0/len(pubs)
    #for f in entry["FIELD"]:
    data[entry["FIELD"]] += u

table = f"['Text',{data['WS1'] + data['WS2']},'#007EF6'],\n"\
      + f"['Vision',    {data['WS3']},'#53A351'],\n"\
      + f"['Action',    {data['WS4']},'#CB444A'],\n"\
      + f"['Social',    {data['WS5']},'#f6c144'],\n"\
      + f"['Other',  {data['O']},'#49A0B5']\n"


website = website.replace("###AUTOGENERATED###", generated_html)
website = website.replace("###PLOT###", table)
out = open("../publications.html",'wt')
out.write(website)
out.close()


## Generate CV ##
latex = "".join([line for line in open("CV_template.tex")])
latex_papers = {"journal": [],
                "conference": [],
                "workshop": [],
                "preprint": [],
                "phdthesis": [],
                }
previous = 10000
for entry in pubs:
  latex_papers[entry["TYPE"]].append(create_latex_entry(entry))

# Hi dear reader, why is Yonatan doing this ugly thing? 
# This categorization and numbering is a required format for submitting 
# promotion materials
pub_count = 1
def number_pub(vals):     
  global pub_count
  comb = ""
  for v in vals:
    comb += "\pub{" + str(pub_count) + ".}\n\t" + v
    pub_count += 1
  return comb

latex = latex.replace("##JOUR##", number_pub(latex_papers["journal"]))
latex = latex.replace("##CONF##", number_pub(latex_papers["conference"]))
latex = latex.replace("##WORK##", number_pub(latex_papers["workshop"]))
latex = latex.replace("##TECH##", number_pub(latex_papers["preprint"] + latex_papers["phdthesis"]))
out = open("CV.tex",'wt')
out.write(latex)
out.close()
os.system("pdflatex CV.tex")
os.system("rm CV.tex CV.log CV.aux CV.out")
os.system("mv CV.pdf ../")
