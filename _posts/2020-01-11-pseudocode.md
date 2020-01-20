---
id: 470
title: Pseudocode
date: 2011-06-08 01:03:12
author: taimane
layout: post
permalink: /pseudocode/
published: true
categories:
   -
tags:
   -
---
There are many ways to translate the requirements to programming code. You may not escape the software modeling: Use Case diagrams, Activity diagrams, etc. However, one should never forget the _pseudocode_ technique. Here is an example:
```
<!--
    ########################################################
    Start Join Team Code
    ########################################################
    Pseudocode:

    if user requests to add a goal to a team
      if a team.has_opening exists for that category (on a team that I'm not already on)
        add goal to the team
        increment team.qty_current
        evaluate and set team.has_opening
        notify members of team
        notify new member
      else
        create a team
        add goal to team
        notify new member
        let member name team
    #############
    -->
```