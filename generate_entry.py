import ast

prefix = [line for line in open("prefix.html")]
suffix = [line for line in open("suffix.html")]

code = "\
    <div class=\"rTableRow row #CAT#\">\n\
    \t    <div class=\"rTableCell col-md-1\"><button type=\"button\" disabled class=\"card text-dark border-#TYPE# btn-sm\">#YEAR-btn#</button>\n\
    \t    </div>\n\
    \t    <div class=\"rTableCell col-md-11\">\n\
    \t    \t  <a href=#URL# onclick=\"captureOutboundLink('#URL#');\"><b>#TITLE#</b></a>#EXTRA#\n\
    \t    \t  <div style=\"float: right; clear: right;\">\n\
    \t    \t  \t  <a href=javascript:void(0) onclick=\"show('idx#IDX#')\"><i>#VENUE-ACR#</i></a>\n\
    \t    \t  </div>\n\
    \t    \t  <br>\n\
    \t    \t  <object width=20px height=0px></object>#AUTH1#  <div class=\"name\">Yonatan Bisk</div>#AUTH2#\n\
    \t    \t  <br>\n\
    \t    \t  <p id=\"idx#IDX#\"  class=\"dynamic_link\">\n\
    \t\t\t       &nbsp;&nbsp;&nbsp;&nbsp;@#BIBREC#{#CITEKEY#,\n\
    \t\t\t       <br>\n\
    \t\t\t       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;author    = {#AUTH-BIB#},\n\
    \t\t\t       <br>\n\
    \t\t\t       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title     = {#TITLE#}, \n\
    \t\t\t       <br>\n\
    \t\t\t       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#BOOK# = {#VENUE#},\n\
    \t\t\t       <br>\n\
    \t\t\t       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;year      = {#YEAR#},\n\
    \t\t\t       <br>\n\
    \t\t\t        &nbsp;&nbsp;&nbsp;&nbsp;}\n\
    \t\t      </p>\n\
    \t    </div>\n\
    </div>\n\
    "

website = open("index.html",'wt')
for l in prefix:
  website.write(l)

colors = {"L":"primary", "R": "success", "V": "danger", "O": "warning", "A": "secondary"}

pubs = [line.split("\t") for line in open("publications.tsv")]

idx = len(pubs)
for cat, pub, title, year, url, authors, venue, acr, extra in pubs:
  entry = code.replace("#TITLE#",title)
  entry = entry.replace("#YEAR-btn#", year if pub != "un" else "Pre.")
  entry = entry.replace("#YEAR#", year)
  entry = entry.replace("#URL#", url)
  entry = entry.replace("#VENUE#", venue)
  entry = entry.replace("#VENUE-ACR#", acr)
  entry = entry.replace("#TYPE#", colors[cat[0]])
  entry = entry.replace("#IDX#", str(idx))
  entry = entry.replace("#CAT#", " ".join(cat))

  if pub == "un":
    entry = entry.replace("#BIBREC#", "unpublished")
    entry = entry.replace("#BOOK#", "booktitle")
  elif pub == "proc":
    entry = entry.replace("#BIBREC#", "inproceedings")
    entry = entry.replace("#BOOK#", "booktitle")
  elif pub == "jour":
    entry = entry.replace("#BIBREC#", "article")
    entry = entry.replace("#BOOK#", "journal")

  As = [v.strip() for v in authors.strip().split(",")]
  me = As.index("Yonatan Bisk")
  a0 = As[:me]
  a1 = As[me + 1:]

  if len(a0) > 0:
    entry = entry.replace("#AUTH1#", ", ".join(a0) + ", ")
  else:
    entry = entry.replace("#AUTH1#", "")
  if len(a1) > 0:
    entry = entry.replace("#AUTH2#", ", " + ", ".join(a1))
  else:
    entry = entry.replace("#AUTH2#", "")

  entry = entry.replace("#CITEKEY#", As[0].split()[-1] + year)
  entry = entry.replace("#AUTH-BIB#", " and ".join(authors.split(",")))


  additional = ""
  if len(extra.strip()) > 0:
    vals = [v.strip() for v in extra.split(",")]
    for i in range(0, len(vals), 2):
      link = vals[i]
      name = vals[i+1]
      additional += "&nbsp;<a href=\"{}\" onclick=\"captureOutboundLink('{}');\">[{}]</a>".format(link, link, name)
  entry = entry.replace("#EXTRA#", additional)

  idx -= 1
  website.write(entry)

for l in suffix:
  website.write(l)

website.close()
