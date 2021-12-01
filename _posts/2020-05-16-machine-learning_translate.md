---
id: 12971
title: Language Translation (Helsinki)
date: 2020-05-03
author: taimane
layout: post
permalink: /machine-learning/translation/
published: true
image: 
categories: 
   - machine-learning
tags:
   - marijan
   - transformers
---
Machine learning stepped the era of machine translation. Here is the example how to do translation using the transformers.

First install the transformers library:

```python
!pip install -q transformers
```

Then select the model:

```python
from transformers import MarianMTModel, MarianTokenizer

model_name = 'Helsinki-NLP/opus-mt-en-fr'
tokenizer = MarianTokenizer.from_pretrained(model_name)
print(tokenizer.supported_language_codes)
model = MarianMTModel.from_pretrained(model_name)
```

In here the we are using Marian machine translation model from english to french.

```python
import textwrap
text = [
""">>fr<< In any case, when users tried to use the service, an error pop ups saying: 

>> "Unfortunately, this payment method is not possible for new customers. Please choose another payment method." """
]

translated = model.generate(**tokenizer.prepare_translation_batch(text))
text = [tokenizer.decode(t, skip_special_tokens=True) for t in translated]
print (textwrap.fill(text[0], width=50))
```

The output from this would be:

```
En tout cas, lorsque les utilisateurs ont essayé
d'utiliser le service, une erreur apparaît en
disant: >> "Malheureusement, ce mode de paiement
n'est pas possible pour les nouveaux clients.
Veuillez choisir un autre mode de paiement."
```


In general case you can specify the source and target language because all models in Helsinki are named in the format:
```
Helsinki-NLP/opus-mt-{src}-{tgt}
```
_Example:_
```python
from transformers import MarianTokenizer, MarianMTModel
from typing import List
src = 'fr'  # source language
trg = 'en'  # target language
text = "où est l'arrêt de bus ?"
model = f'Helsinki-NLP/opus-mt-{src}-{trg}'

model = MarianMTModel.from_pretrained(model)
tok = MarianTokenizer.from_pretrained(model)

batch = tok.prepare_translation_batch(src_texts=[text]) 
gen = model.generate(**batch) 
words: List[str] = tok.batch_decode(gen, skip_special_tokens=True) 
words # ["Where's the bus stop?"]
```

For all the existing models search Hugging Face website for [Helsinki](https://huggingface.co/models?search=Helsinki){:rel="nofollow"}


## Helsinki model details:

Each model is ~ 300MB, and there are [~ 1000 models](https://huggingface.co/models?search=Helsinki){:rel="nofollow"}.

Models were trained using the [Marian C++ library](https://marian-nmt.github.io/){:rel="nofollow"}.

All models are transformer based very similar to **BartForConditionalGeneration** with the few differences in config including:

* **MarianConfig.static_position_embeddings=True**
* **MarianConfig.add_bias_logits=True**
* **MarianConfig.normalize_embedding=False** 
* pad_token_id should be 0

Bart uses `</s>` to pad (not 0).
In other words Helsinki models doesn't use LayerNomrs and add certain bias to logits (probabilities out of softmax).
