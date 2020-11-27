---
id: 12971
title: T5
date: 2020-05-16
author: taimane
layout: post
permalink: /machine-learning/t5/
published: true
image: 
categories: 
   - machine-learning
tags:   
   - transformers
---
T5 is very intersting model. It is an example of multipurpose one-shot models. It can do several very important tasks such as to create a summary, to translate, to cola, to answer, to comprehend.

## Summary task

_Example:_
```python
from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained('t5-large')
model = T5ForConditionalGeneration.from_pretrained('t5-large')

text="""summarize:leopard gave up after spiky creature refused to back down in 
fightin kruger national park, south africa .  wildlife enthusiast lisl moolman, 41, 
caughtthe bizarre battle while out on the road and armed with her camera.  
the leopardand porcupine tumbled out of the bushes and began to fight by roadside - watchedby ms moolman.
</s>"""
input_ids = tokenizer.encode(text, return_tensors="pt")
outputs = model.generate(input_ids)
outputs.shape
tokenizer.decode(outputs[0])
```

_Output:_
```
'leopard and porcupine fight in kruger national park, south africa. '
```

## Translate task

It can also translate from English into German, French and Romanian.

```python
input_ids = tokenizer.encode('translate English to German: The house is wonderful. </s>', return_tensors='pt')
outputs = model.generate(input_ids=input_ids)
tokenizer.decode(outputs[0])
```

Output:
```
'Das Haus ist wunderbar.'
```

## Cola task

_Example:_
```python
input_ids = tokenizer.encode('cola sentence: The mouse is bigger than cat. </s>', return_tensors='pt')
outputs = model.generate(input_ids=input_ids)
tokenizer.decode(outputs[0])
```
_Output:_
```
'unacceptable'
```

In here the model is asked to literally predict text '**acceptable**' or '**unacceptable**'.


### Sentence similarity

In here we predict the float point number as text.
The more similar the sentences the number we predict will be greater and max is 5.0.

_Example:_
```python
input_ids = tokenizer.encode('stsb sentence1: The mouse is white. sentence2: The mouse is red. </s>', return_tensors='pt')

outputs = model.generate(input_ids=input_ids)
tokenizer.decode(outputs[0])
```

_Output:_
```
1.8
```


## Answering task

_Example:_
```python
text = """
Question:What does increased oxygen concentrations in the patient’s lungs displace?
Context:Hyperbaric (high-pressure) medicine uses special oxygen chambers to 
increase the partial pressure of O 2 around the patient and, when needed, the 
medical staff.Carbon monoxide poisoning, gas gangrene, and decompression sickness 
(the ’bends’)are sometimes treated using these devices.  Increased O2 
concentration in the lungs helps to displace carbon monoxide from the heme group 
of hemoglobin.  Oxygen gas is poisonous to the anaerobic bacteria that cause gas 
gangrene, so increasing its partial pressure helps kill them.  Decompression 
sickness occurs in divers who decompress too quickly after a dive, resulting in 
bubbles of inert gas, mostly nitrogen and helium, forming in their blood.  
Increasing the pressure of O 2 as soon as possible is part of the treatment."""

input_ids = tokenizer.encode(text, return_tensors='pt')
outputs = model.generate(input_ids=input_ids)
tokenizer.decode(outputs[0])
```
_Output:_
```
'carbon monoxide'
```

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/eKqWC577WlI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Finetuning T5

The finetunning task is the what we do after the initial training. You may check the [process of fintetuing in this colab](https://colab.research.google.com/github/google-research/text-to-text-transfer-transformer/blob/master/notebooks/t5-trivia.ipynb#scrollTo=zSeyoqE7WMwu){:rel="nofollow" target="_blank"}.




