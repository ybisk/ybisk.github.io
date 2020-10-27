import os
import sys
import string
import subprocess
import urllib.request
import xml.etree.ElementTree as ET
import yaml

pubs = yaml.load(open("library.yaml"), Loader=yaml.CLoader)

base = "http://export.arxiv.org/api/query?id_list="
identifiers = sys.argv[1:]
for identifier in identifiers:

  if identifier[0].isnumeric(): # ArXiv
    url = base + identifier
    tree = ET.parse(urllib.request.urlopen(url))
    root = tree.getroot()

    authors = []
    url = "https://arxiv.org/abs/" + identifier
    for child in root:
      for grand in child:
        if "}title" in grand.tag:
          title = grand.text
        elif "}author" in grand.tag:
          for name in grand:
            authors.append(name.text)
        elif "}published" in grand.tag:
          date = grand.text.split("-")
          year = date[0]
          month = date[1]
        elif "}comment" in grand.tag:
          conference = grand.text

    subprocess.call("wget --user-agent=Lynx https://arxiv.org/pdf/" + identifier + ".pdf", shell=True)

    entry = {}
    if conference is None:
      entry["TYPE"] = "preprint"
      entry["VENUE"] = "arXiv:{}".format(identifier)
    else:
      entry["TYPE"] = "conference"
      entry["VENUE"] = conference

    entry["AUTHORS"] = authors
    entry["TITLE"] = title
    entry["URL"] = url
    entry["YEAR"] = year
    entry["month"] = month
    
  else: # ACL anthology
    base = "https://www.aclweb.org/anthology"
    bib = "{}/{}.bib".format(base, identifier)
    pdf = "{}/{}.pdf".format(base, identifier)
    
    bibtex = str(urllib.request.urlopen(bib).read(), 'utf-8')
    entry = {}
    chunks = []
    for line in bibtex.split(",\n")[1:]:
      line = line.strip()[:-1].split("=")
      a = line[0].strip()
      if len(line) == 2:
        b = line[1].strip()[1:] # remove initial quote
        if a == "title":
          entry["TITLE"] = b
        elif a == "booktitle":
          entry["TYPE"] = "conference"
          entry["VENUE"] = b
        elif a == "year":
          entry["YEAR"] = b
        elif a == "url":
          entry["URL"] = b
        elif a == "author":
          entry["AUTHORS"] = ["{} {}".format(a.split(",")[1].strip(), a.split(",")[0].strip()) for a in b.split(" and")]
        elif a != "month": # don't want to handle the non-quoted BS
          entry[a] = b

    subprocess.call("wget --user-agent=Lynx {}".format(pdf), shell=True)

  new_name = "".join([a.split()[-1].translate(str.maketrans('','',string.punctuation)) for a in entry["AUTHORS"][:5]])
  new_name += "_"
  new_name += "_".join(entry["TITLE"].translate(str.maketrans('','',string.punctuation)).split())
  new_name = "{}/".format(entry["YEAR"]) + new_name + ".pdf"
  new_loc = "/Users/ybisk/Dropbox/Website/papers/" + new_name
  entry["file"] = "https://github.com/ybisk/papers/blob/master/{}".format(new_name)
  if not os.path.isdir("/Users/ybisk/Dropbox/Website/papers/{}".format(entry["YEAR"])):
    os.mkdir("/Users/ybisk/Dropbox/Website/papers/{}".format(entry["YEAR"]))
  if not os.path.isfile(new_loc):
    os.rename("{}.pdf".format(identifier), new_loc)
    pubs.append(entry)
  else:
    print("File already exists: {} {}".format(identifier, new_loc))

o = open("library.yaml",'wt')
o.write(yaml.dump(pubs))
o.close()
