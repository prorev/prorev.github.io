---
id: 3183
title: List of Sass script functions
date: 2016-10-03 16:27:01
author: taimane
layout: post
permalink: /css/list-of-sass-script-functions/
redirect_from: /list-of-sass-script-functions/
published: true
categories:
   - css
tags:
   - sass
---
RGB Functions

rgb<small> Creates a Color from red, green, and blue values.</small>

rgba<small> Creates a Color from red, green, blue, and alpha values.</small>

red<small> Gets the red component of a color.</small>

green<small> Gets the green component of a color.</small>

blue<small> Gets the blue component of a color.</small>

mix<small> Mixes two colors together. </small>



HSL Functions



hsl<small> Creates a Color from hue, saturation, and lightness values.</small>

hsla<small> Creates a Color from hue, saturation, lightness, and alpha values.</small>

hue<small> Gets the hue component of a color.</small>

saturation<small> Gets the saturation component of a color.</small>

lightness<small> Gets the lightness component of a color.</small>

adjust-hue<small> Changes the hue of a color.</small>

lighten<small> Makes a color lighter.</small>

darken<small> Makes a color darker.</small>

saturate<small> Makes a color more saturated.</small>

desaturate<small> Makes a color less saturated.</small>

grayscale<small> Converts a color to grayscale.</small>

complement<small> Returns the complement of a color.</small>

invert<small> Returns the inverse of a color. </small>



Opacity Functions



alpha<small> Gets the alpha component rgba Changes the alpha component for a color.</small>

opacify<small> Makes a color more opaque.</small>

transparentize<small> Makes a color more transparent.</small>



OtherColor Functions



adjust-color<small> Increases or decreases one or more components of a color.</small>

scale-color<small> Fluidly scales one or more properties of a color.</small>

change-color<small> Changes one or more properties of a color.</small>

ie-hex-str<small> Converts a color into the format understood by IE filters. </small>



String Functions



unquote<small> Removes quotes from a string.</small>

quote<small> Adds quotes to a string.</small>

str-length<small> Returns the number of characters in a string.</small>

str-insert<small> Inserts $insert into $string at $index.</small>

str-index<small> Returns the index of the first occurrence of $substring in $string.</small>

str-slice<small> Extracts a substring from $string.</small>

to-upper-case<small> Converts a string to upper case.</small>

to-lower-case<small> Converts a string to lower case.</small>



Number Functions



percentage<small> Converts a unitless number to a percentage.</small>

round<small> Rounds a number to the nearest whole number.</small>

ceil<small> Rounds a number up to the next whole number.</small>

floor<small> Rounds a number down to the previous whole number.</small>

abs<small> Returns the absolute value of a number.</small>

min<small> Finds the minimum of several numbers.</small>

max<small> Finds the maximum of several numbers.</small>

random<small> Returns a random number.</small>



List Functions



length<small> Returns the length of a list.</small>

nth<small> Returns a specific item in a list.</small>

set-nth<small> Replaces the nth item in a list.</small>

join<small> Joins together two lists into one.</small>

append<small> Appends a single value onto the end of a list.</small>

zip<small> Combines several lists into a single multidimensional list.</small>

index<small> Returns the position of a value within a list.</small>

list-separator<small> Returns the separator of a list.</small>



Map Functions



map-get<small> Returns the value in a map associated with a given key.</small>

map-merge<small> Merges two maps together into a new map.</small>

map-remove<small> Returns a new map with keys removed.</small>

map-keys<small> Returns a list of all keys in a map.</small>

map-values<small> Returns a list of all values in a map.</small>

map-has-key<small> Returns whether a map has a value associated with a given key.</small>

keywords<small> Returns the keywords passed to a function that takes variable arguments.</small>



Selector Functions



selector-nest<small> Nests selector beneath one another like they would be nested in the stylesheet.</small>

selector-append<small> Appends selectors to one another without spaces in between.</small>

selector-extend<small> Extends $extendee with $extender within $selector.</small>

selector-replace<small> Replaces $original with $replacement within $selector.</small>

selector-unify<small> Unifies two selectors to produce a selector that matches elements matched by both.</small>

is-superselector<small> Returns whether $super matches all the elements $sub does, and possibly more.</small>

simple-selectors<small> Returns the simple selectors that comprise a compound selector.</small>

selector-parse<small> Parses a selector into the format returned by &.</small>





Introspection Functions



feature-exists<small> Returns whether a feature exists in the current Sass runtime.</small>

variable-exists<small >Returns whether a variable with the given name exists in the current scope.</small>

global-variable-exists<small> Returns whether a variable with the given name exists in the global scope.</small>

function-exists<small> Returns whether a function with the given name exists.</small>

mixin-exists<small> Returns whether a mixin with the given name exists.</small>

inspect<small> Returns the string representation of a value as it would be represented in Sass.</small>

type-of<small> Returns the type of a value.</small>

unit<small> Returns the unit </small>

unitless<small> Returns whether a number has units.</small>

comparable<small> Returns whether two numbers can be added, subtracted, or compared.</small>

call<small> Dynamically calls a Sass function.</small>







Miscellaneous Functions



if<small> Returns one of two values, depending on whether or not $condition is true.</small>

unique-id<small> Returns a unique CSS identifier.</small>  

