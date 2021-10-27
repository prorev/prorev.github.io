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
Table of Contents:
- [RGB Functions](#rgb-functions)
- [HSL Functions](#hsl-functions)
- [Opacity Functions](#opacity-functions)
- [OtherColor Functions](#othercolor-functions)
- [String Functions](#string-functions)
- [Number Functions](#number-functions)
- [List Functions](#list-functions)
- [Map Functions](#map-functions)
- [Selector Functions](#selector-functions)
- [Introspection Functions](#introspection-functions)
- [Miscellaneous Functions](#miscellaneous-functions)
## RGB Functions

`rgb`` -- Creates a Color from red, green, and blue values.

`rgba` ` -- Creates a Color from red, green, blue, and alpha values.

`red`` -- Gets the red component of a color.

`green`` -- Gets the green component of a color.

`blue`` -- Gets the blue component of a color.

`mix`` -- Mixes two colors together. 



## HSL Functions



`hsl`` -- Creates a Color from hue, saturation, and lightness values.

`hsla`` -- Creates a Color from hue, saturation, lightness, and alpha values.

`hue`` -- Gets the hue component of a color.

`saturation`` -- Gets the saturation component of a color.

`lightness`` -- Gets the lightness component of a color.

`adjust-hue`` -- Changes the hue of a color.

`lighten`` -- Makes a color lighter.

`darken`` -- Makes a color darker.

`saturate`` -- Makes a color more saturated.

`desaturate`` -- Makes a color less saturated.

`grayscale`` -- Converts a color to grayscale.

`complement`` -- Returns the complement of a color.

`invert`` -- Returns the inverse of a color. 



## Opacity Functions



`alpha`` -- Gets the alpha component rgba Changes the alpha component for a color.

`opacify`` -- Makes a color more opaque.

`transparentize`` -- Makes a color more transparent.



## OtherColor Functions



`adjust-color` -- Increases or decreases one or more components of a color.

`scale-color`` -- Fluidly scales one or more properties of a color.

`change-color`` -- Changes one or more properties of a color.

`ie-hex-str`` -- Converts a color into the format understood by IE filters. 



## String Functions



`unquote` -- Removes quotes from a string.

`quote` -- Adds quotes to a string.

`str-length` -- Returns the number of characters in a string.

`str-insert` -- Inserts $insert into $string at $index.

`str-index` -- Returns the index of the first occurrence of $substring in $string.

`str-slice` -- Extracts a substring from $string.

`to-upper-case` -- Converts a string to upper case.

`to-lower-case` -- Converts a string to lower case.



## Number Functions



`percentage` -- Converts a unitless number to a percentage.

`round` -- Rounds a number to the nearest whole number.

`ceil` -- Rounds a number up to the next whole number.

`floor` -- Rounds a number down to the previous whole number.

`abs` -- Returns the absolute value of a number.

`min` -- Finds the minimum of several numbers.

`max` -- Finds the maximum of several numbers.

`random` -- Returns a random number.



## List Functions



`length` -- Returns the length of a list.

`nth` -- Returns a specific item in a list.

`set-nth` -- Replaces the nth item in a list.

`join` -- Joins together two lists into one.

`append` -- Appends a single value onto the end of a list.

`zip` -- Combines several lists into a single multidimensional list.

`index` -- Returns the position of a value within a list.

`list-separator` -- Returns the separator of a list.



## Map Functions



`map-get` -- Returns the value in a map associated with a given key.

`map-merge` -- Merges two maps together into a new map.

`map-remove` -- Returns a new map with keys removed.

`map-keys` -- Returns a list of all keys in a map.

`map-values` -- Returns a list of all values in a map.

`map-has-key` -- Returns whether a map has a value associated with a given key.

`keywords` -- Returns the keywords passed to a function that takes variable arguments.



## Selector Functions



`selector-nest` -- Nests selector beneath one another like they would be nested in the stylesheet.

`selector-append` -- Appends selectors to one another without spaces in between.

`selector-extend` -- Extends $extendee with $extender within $selector.

`selector-replace` -- Replaces $original with $replacement within $selector.

`selector-unify` -- Unifies two selectors to produce a selector that matches elements matched by both.

`is-superselector` -- Returns whether $super matches all the elements $sub does, and possibly more.

`simple-selectors` -- Returns the simple selectors that comprise a compound selector.

`selector-parse` -- Parses a selector into the format returned by &.





## Introspection Functions



`feature-exists` -- Returns whether a feature exists in the current Sass runtime.

`variable-exists` -- Returns whether a variable with the given name exists in the current scope.

`global-variable-exists` -- Returns whether a variable with the given name exists in the global scope.

`function-exists` -- Returns whether a function with the given name exists.

`mixin-exists` -- Returns whether a mixin with the given name exists.

`inspect` -- Returns the string representation of a value as it would be represented in Sass.

`type-of` -- Returns the type of a value.

`unit` -- Returns the unit 

`unitless` -- Returns whether a number has units.

`comparable` -- Returns whether two numbers can be added, subtracted, or compared.

call` -- Dynamically calls a Sass function.







## Miscellaneous Functions



`if` -- Returns one of two values, depending on whether or not $condition is true.

`unique-id` -- Returns a unique CSS identifier. 

