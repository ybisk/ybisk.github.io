import os, sys
from shutil import copyfile
import yaml
import string
import random

TYPE = {"inproceedings": "conference",
        "article": "journal",
        "book": "book",
        "techreport": "preprint",
        "electronic": "electronic",
        "phdthesis": "phdthesis",
        "inbook": "inbook",
        "misc": "misc",
        "unpublished": "preprint",
        "mastersthesis": "mastersthesis",
      }

pubs = []
for line in open("Jabref.bib"):
  if line[0] == "@" and "comment" not in line.lower():
    rec_type = line.split("{")[0][1:]
    rec_keys = line.split("{")[1][:-2]
    pubs.append({"TYPE": TYPE[rec_type.lower()]})

  elif "=" in line:
    key = line.split("=")[0].strip()
    val = line.split("=")[1].strip()[1:].rsplit("}",1)[0]
    if key == "author":
      authors = val.replace(" AND "," and ").split(" and ")
      for i in range(len(authors)):
        if "," in authors[i]:
          last, first = authors[i].split(",")
          authors[i] = "{} {}".format(first.strip(), last.strip())
      pubs[-1]["AUTHORS"] = authors
    elif key in ["title", "url", "venue", "year"]:
      pubs[-1][key.upper()] = val
    elif key in ["booktitle", "journal", "school"]:
      pubs[-1]["VENUE"] = val
    elif key == "groups":
      pubs[-1][key] = [v.strip().replace(" ","_").lower() for v in val.split(",")]
    else:
      pubs[-1][key] = val

    if pubs[-1]["TYPE"] == "journal" \
      and "VENUE" not in pubs[-1] \
      and "URL" in pubs[-1] \
      and "arxiv" in pubs[-1]["URL"]:
      pubs[-1]["VENUE"] = "ArXiv"

# Sort
s = []
for p in pubs:
  k = p["YEAR"]
  for a in p["AUTHORS"]:
    a = a.split()[-1]
  k += a
  k += str(random.random())
  s.append((k, p))
s.sort()
pubs = [v[1] for v in s]

# Go back and change filenames
for p in pubs:
  if "file" in p:
    val = p["file"]
    old_name = val.rsplit(":", 1)[0].replace(":Papers/","/Users/ybisk/Dropbox/Papers/")
    ftype = old_name.rsplit(".",1)[-1].lower()
    new_name = "".join([a.split()[-1].translate(str.maketrans('','',string.punctuation)) for a in p["AUTHORS"][:5]])
    new_name += "_"
    new_name += "_".join(p["TITLE"].translate(str.maketrans('','',string.punctuation)).split())
    new_name = "{}/".format(p["YEAR"]) + new_name
    new_name += "." + ftype
    new_loc = "/Users/ybisk/Dropbox/Website/papers/" + new_name
    if not os.path.isfile(old_name):
      del p["file"]
    else:
      p["file"] = "https://github.com/ybisk/papers/blob/master/{}".format(new_name)
      print(old_name, new_loc)
      if not os.path.isdir("/Users/ybisk/Dropbox/Website/papers/{}".format(p["YEAR"])):
        os.mkdir("/Users/ybisk/Dropbox/Website/papers/{}".format(p["YEAR"]))
      if not os.path.isfile(new_loc):
        copyfile(old_name, new_loc)

o = open("library.yaml",'wt')
o.write(yaml.dump(pubs))
o.close()
#json.dump(pubs, open("publications.json",'wt'), sort_keys=True, indent='  ', separators=(',', ': '))
