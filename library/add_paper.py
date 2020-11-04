import os
import sys
import json
import string
import subprocess
import argparse
import urllib.request
import xml.etree.ElementTree as ET
import yaml

pubs = yaml.load(open("library.yaml"), Loader=yaml.CLoader)

parser = argparse.ArgumentParser(description='Add paper to library.')
parser.add_argument('--auto',  type=str, default=None,
                    help='ArXiv, ACL, or OpenReview identifier or comma separated list')
parser.add_argument('--file', help='Add a file', type=str, default=None)
parser.add_argument('--bib', help='new record for file', type=str, default=None)
parser.add_argument('--idx', help='idx for file', type=int, default=None)
parser.add_argument('--manual', help='interactive mode for old papers', action='store_true')
args = parser.parse_args()

def new_file(entry, download):
  """
    1. Computes target file location for new PDF given entry.
    2. Moves file to location
    3. executes git add and commit
  """
  new_name = "".join([a.split()[-1].translate(str.maketrans('','',string.punctuation)) for a in entry["AUTHORS"][:5]])
  new_name += "_"
  new_name += "_".join(entry["TITLE"].translate(str.maketrans('','',string.punctuation)).split())
  new_name = "{}/".format(entry["YEAR"]) + new_name + ".pdf"
  new_loc = "/Users/ybisk/Dropbox/Website/papers/" + new_name
  entry["file"] = "https://github.com/ybisk/papers/blob/master/{}".format(new_name)
  if not os.path.isdir("/Users/ybisk/Dropbox/Website/papers/{}".format(entry["YEAR"])):
    os.mkdir("/Users/ybisk/Dropbox/Website/papers/{}".format(entry["YEAR"]))
  if not os.path.isfile(new_loc):
    os.rename(download, new_loc)
    os.system('cd ~/Dropbox/website/papers;' + 
              'git add {};'.format(new_loc) + 
              'git commit -m {};'.format(new_loc.rsplit("/",1)[-1]))
    return True
  else:
    print("File already exists: {}".format(new_loc))
  return False

def arxiv_entry(entry, identifier):
  """
    Create BibTeX record from ArXiv api call
  """
  url = "http://export.arxiv.org/api/query?id_list=" + identifier
  tree = ET.parse(urllib.request.urlopen(url))
  root = tree.getroot()
  
  conference = None
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

def bib_entry(entry, bibtex):
  """
    Parse BibTeX to yaml
  """
  chunks = []
  for line in bibtex:
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
        entry["AUTHORS"] = []
        for a in b.split(" and"):
          if "," in a:
            entry["AUTHORS"].append("{} {}".format(a.split(",")[1].strip(), a.split(",")[0].strip()))
          else:
            entry["AUTHORS"].append(a.strip())
      elif a != "month": # don't want to handle the non-quoted BS
        entry[a] = b
 
max_idx = max([e["idx"] for e in pubs])
### Run through a series of arxiv or ACL links creating entries and linking files
if args.auto is not None:
  for identifier in args.auto.split(","):
    entry = {}
    max_idx += 1
    entry["idx"] = max_idx
    if "." not in identifier and "-" not in identifier: # OpenReview hack
      url = "https://openreview.net/forum?id=" + identifier
      tree = ET.parse(urllib.request.urlopen(url))
      for child in tree.getroot():
        for grand in child:
          if grand.text is not None and "_bibtex" in grand.text:
            v = json.loads(grand.text)["props"]["pageProps"]["forumNote"]["content"]
      bib_entry(entry, v['_bibtex'].split(",\n")[:])
      pdf = url.replace("forum", "pdf")
      subprocess.call("wget -O {}.pdf --user-agent=Lynx '{}'".format(identifier, pdf), shell=True)

    elif identifier[0].isnumeric(): # ArXiv
      arxiv_entry(entry, identifier)
      subprocess.call("wget --user-agent=Lynx https://arxiv.org/pdf/" + identifier + ".pdf", shell=True)
    else: # ACL anthology
      base = "https://www.aclweb.org/anthology"
      bib = "{}/{}.bib".format(base, identifier)
      bibtex = str(urllib.request.urlopen(bib).read(), 'utf-8')
      bib_entry(entry, bibtex.split(",\n")[1:])

      pdf = "{}/{}.pdf".format(base, identifier)
      subprocess.call("wget --user-agent=Lynx {}".format(pdf), shell=True)

    if new_file(entry, "{}.pdf".format(identifier)):
      pubs.append(entry)

### Load a downloaded BibTeX file
elif args.bib is not None:
  entry = {}
  max_idx += 1
  entry["idx"] = max_idx
  acl_entry(entry, "".join([line for line in open(args.bib)]).split(",\n")[1:])

  if args.file is not None:
    if new_file(entry, args.file):
      pubs.append(entry)

### Attach a PDF to an existing record
elif args.file is not None and args.idx is not None:
  new_loc = new_file(pubs[args.idx], args.file)

### Manual model
elif args.manual:
  entry = {}
  max_idx += 1
  entry["idx"] = max_idx
  entry["TITLE"] = input("Enter title\t").strip()
  entry["AUTHORS"] = [v.strip() for v in input("Enter authors -- 'and' separated\t").split(" and ")]
  entry["VENUE"] = input("Enter venue\t").strip()
  entry["YEAR"] = input("Enter year\t").strip()
  entry["TYPE"] = input("Enter type: conference/journal/preprint/...")
  print("Beginning optional fields")
  print("enter key to create new field or type DONE to finish")
  key = input("Enter key:\t")
  while key.strip().lower() != "done":
    entry[key.strip()] = input("Enter {}:\t".format(key)).strip()
    key = input("Enter key:\t")

  if args.file is not None:
    if new_file(entry, args.file):
      pubs.append(entry)

else:
  print("Invalid combination of arguments")
  print("    --file must be coupled with --idx or --bib")

o = open("library.yaml",'wt')
o.write(yaml.dump(pubs))
o.close()
