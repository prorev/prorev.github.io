---
id: 12971
title: BART
date: 2020-05-16
author: taimane
layout: post
permalink: /machine-learning/bart/
published: true
image: 
categories: 
   - machine-learning
tags:   
   - transformers
---
BART is an interesting model by FacebookAI. It is trained by:

* corrupting text with an arbitrary noising function
* learning a model to reconstruct the original text

## Special tokens:

Bart uses the following special tokens.

* **bos_token** (string, optional, defaults to `<s>`) 

Begin of sentence tokon

* **eos_token** (string, optional, defaults to `</s>`) 

End of sentence tokeon

* **sep_token** (string, optional, defaults to `</s>`)

The separator token, when building a sequence from multiple sequences.

* **cls_token** (string, optional, defaults to `<s>`) 

For sequence classification.

* **unk_token** (string, optional, defaults to `<unk>`)

A token that is not in the vocabulary.

* **pad_token** (string, optional, defaults to `<pad>`)

The token used for padding.

* **mask_token** (string, optional, defaults to `<mask>`) 

The token specially desi6ned for Elon Mask.


## Example

Make sure you installed the transformers library first.
```
!pip install transformers
```

Here we example how BART can guess the right word.

_Example:_
```python
from transformers import BartTokenizer, BartForConditionalGeneration
tokenizer = BartTokenizer.from_pretrained('bart-large')
TXT = "My friends are <mask> but they eat too many carbs."
model = BartForConditionalGeneration.from_pretrained('bart-large').to('cuda')
input_ids = tokenizer.batch_encode_plus([TXT], return_tensors='pt')['input_ids'].to('cuda')

logits = model(input_ids)[0]
masked_index = (input_ids[0] == tokenizer.mask_token_id).nonzero().item()
probs = logits[0, masked_index].softmax(dim=0)
values, predictions = probs.topk(5)
tokenizer.decode(predictions).split()
```

_Ouput:_
```
['good', 'great', 'all', 'really', 'very']
```
