## To add a paper to library
`python add_paper.py`

Options:
1. `--auto` This takes in a single (or comma separated list) of ArXiv, OpenReview, or ACL Anthology IDs and tries to make records for them
2. `--bib` Creates a record from an existing bibtex file
3. `--manual` Asks you to enter each field manually
4. `--file` For adding a file to an existing record (`--idx`) or one created with either `--bib` or `--manual`


## To generate the website
`python generate.py` 

## To convert your old BibTeX to yaml to get started
`python convert_bib_to_yaml.py` but reset all the directory names appropriately

## HTML Design
**HTML rows**
`entry.html`

**Main Website**
`index_template.html`


## FAQ
1. Where are the PDFs? In a private https://github.com/ybisk/papers repo so I don't get sued
2. Why not use a DB? You ~can't in GitHub
3. Why not have the JS in the website update a backend yaml and load from it?  Because the JS processing is sorta slow for such a large number of records
4. Why a yaml? JSON works too, either way is just much more manageable than BibTeX, it's easier to generate the record than store things that way
5. Feature requests? Sure, but no promises :) 
