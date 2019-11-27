## Physical Interaction: Question Answering

There are two files for each split:  `X.jsonl` and `X-labels.lst`.  Lines are aligned.  Each item in the `jsonl` takes the form:
```
{
"goal": "How do I ready a guinea pig cage for it's new occupants?", 
"sol1": "Provide the guinea pig with a cage full of a few inches of bedding made of ripped paper strips, you will also need to supply it with a water bottle and a food dish.", 
"sol2": "Provide the guinea pig with a cage full of a few inches of bedding made of ripped jeans material, you will also need to supply it with a water bottle and a food dish."
}
```

and each line in the `.lst` is a `0` or `1`.  Pretty simple.

---

FAQ:  

1. **Some of these "goals" are one word/item?** Yeah, in those cases, the goal is often how to use that item or what you can use that item for.
2. **Some of these are definitions?** True
