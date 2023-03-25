---
id: 12971
title: Object detection
date: 2022-03-20
author: taimane
layout: post
permalink: /machine-learning/object-detection/
published: false
image: 
categories:
   - machine-learning
tags:
   - CNN
   - R-CNN
---
AlexNet paper
https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf

R-CNN
Fast R-CNN
Faster R-CNN


HOG histogram of oriented gradients

The process of object detection consists of three parts:

* region proposal generator
* asdf
* asdf





## Region proposal idea

The next image shows some of the region proposals. 

![Regions](/wp-content/uploads/2022/s9.jpg)

In reality the number of regions can exceed 2000.
A fixed length feature vector is extracted from each region proposal.

Some techniques to get the feature vector are:
* HOG (Histogram of Oriented Graphs)
* Canny Edge Detector
* SIFT (Scale Invariant and Feature Transform)

Example: Canny edge detector with different parameter alpha

These are slightly improved techniques over the primitive edge detector techniques:
* sobel

Example Sobel edge detector (open cv)



The vector should describe an object even if it is scaled or translated.

Transforming the input into set of features is called the feature extraction, but in here we are just getting one feature per region. 
Feature detection: finding interesting features from the image (based on rectangular feature detection).

R-CNN once it gets the features fear each 2000+ regions uses selective search algorithm. 

4096 feature vector.

How Selective Search Algorithm works.

What are anchor boxes?










