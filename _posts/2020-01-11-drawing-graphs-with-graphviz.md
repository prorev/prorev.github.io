---
id: 995
title: Drawing graphs with graphviz
date: 2013-01-03 15:05:49
author: taimane
layout: post
permalink: /drawing-graphs-with-graphviz/
published: true
categories:
   -
tags:
   -
---
<a rel="nofollow" href="http://www.graphviz.org/">Graphviz</a> is a great resource for drawing both directed and undirected graphs.



<a href="https://programming-review.com/drawing-graphs-with-graphviz/dotguide/" rel="attachment wp-att-999">DOT</a> draws directed graphs as hierarchies. 

<a href="https://programming-review.com/drawing-graphs-with-graphviz/neatoguide/" rel="attachment wp-att-1000">NEATO</a> is a program that makes layouts of undirected graphs.



Here are the two graph examples:



<code>digraph G1 {

start -> a0;

start -> b0;

a1 -> b3;

b2 -> a3;

a3 -> a0;

a3 -> end;

b3 -> end;

start[shape=Mdiamond];

end[shape=Msquare];

a1[color=blue;];

}</code>



<a href="https://programming-review.com/drawing-graphs-with-graphviz/g1/" rel="attachment wp-att-997"><img src="https://programming-review.com/wp-content/uploads/2013/01/g1.png" alt="g1" width="379" height="528" class="alignnone size-full wp-image-997" /></a>





<code>graph G2 {

run[color=red];

run -- intr ;

intr -- runbl;

runbl -- run;

run -- kernel;

kernel -- zombie;

kernel -- sleep;

kernel -- runmem;

sleep -- swap;

swap -- runswap ;

runswap -- new;

runswap -- runmem ;

new -- runmem;

sleep -- runmem;

overlap=false

label="Linux process states"

fontsize=15;

}

</code>



<a href="https://programming-review.com/drawing-graphs-with-graphviz/g2/" rel="attachment wp-att-998"><img src="https://programming-review.com/wp-content/uploads/2013/01/g2.png" alt="g2" width="493" height="348" class="alignnone size-full wp-image-998" /></a>



<code>neato -Tsvg   g2.txt -o g2.svg</code>



Thanks  

