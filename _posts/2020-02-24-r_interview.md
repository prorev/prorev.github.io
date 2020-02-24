---
id: 12971
title: Data Analyst Interview Questions (R)
date: 2020-02-24
author: taimane
layout: post
permalink: /r/interview
published: false
image: http://www.sr.bham.ac.uk/~ajrs/R/r-function_list.html
categories: 
  - r
tags:
  - interview 
---
## What is R used for?

R is object-oriented, interpreted programming language designed for **data manipulation** and **data visualization**. It is natural to use R for data science. Part of the R legacy R's unmatched graphing quality.

## Data Mining and Data Analysis. What is the difference?

Data Mining is a process of collecting the data where data analysis is a process of understanding (interpreting) the data in some way.

## What is RStudio?

From Wikipedia: _RStudio is an integrated development environment for R._

There are two forms or RStudio:
* RStudio Desktop application.
* RStudio Server (runs on a web server, you access it from a web browser)

R studio includes many open source software components such as: Qt, Ace, Boost, RapidXml, JSON Spirit, Google Web Toolkit, Guice, Hunspell , pdf.js, SyncTeX, ZLib, highlight.js, MathJax.


## What is the output of `data()`?

This will list all the datasets from the package 'datasets'. These are also preloaded datasets.

As I am using at the moment RStudio version 3.6.2 (nickname Dark and Stormy Night), here is the list of the datasets.

```
AirPassengers        Monthly Airline Passenger Numbers
                     1949-1960
BJsales              Sales Data with Leading Indicator
BJsales.lead (BJsales)
                     Sales Data with Leading Indicator
BOD                  Biochemical Oxygen Demand
CO2                  Carbon Dioxide Uptake in Grass Plants
ChickWeight          Weight versus age of chicks on different
                     diets
DNase                Elisa assay of DNase
EuStockMarkets       Daily Closing Prices of Major European
                     Stock Indices, 1991-1998
Formaldehyde         Determination of Formaldehyde
HairEyeColor         Hair and Eye Color of Statistics Students
Harman23.cor         Harman Example 2.3
Harman74.cor         Harman Example 7.4
Indometh             Pharmacokinetics of Indomethacin
InsectSprays         Effectiveness of Insect Sprays
JohnsonJohnson       Quarterly Earnings per Johnson & Johnson
                     Share
LakeHuron            Level of Lake Huron 1875-1972
LifeCycleSavings     Intercountry Life-Cycle Savings Data
Loblolly             Growth of Loblolly pine trees
Nile                 Flow of the River Nile
Orange               Growth of Orange Trees
OrchardSprays        Potency of Orchard Sprays
PlantGrowth          Results from an Experiment on Plant Growth
Puromycin            Reaction Velocity of an Enzymatic Reaction
Seatbelts            Road Casualties in Great Britain 1969-84
Theoph               Pharmacokinetics of Theophylline
Titanic              Survival of passengers on the Titanic
ToothGrowth          The Effect of Vitamin C on Tooth Growth in
                     Guinea Pigs
UCBAdmissions        Student Admissions at UC Berkeley
UKDriverDeaths       Road Casualties in Great Britain 1969-84
UKgas                UK Quarterly Gas Consumption
USAccDeaths          Accidental Deaths in the US 1973-1978
USArrests            Violent Crime Rates by US State
USJudgeRatings       Lawyers' Ratings of State Judges in the US
                     Superior Court
USPersonalExpenditure
                     Personal Expenditure Data
UScitiesD            Distances Between European Cities and
                     Between US Cities
VADeaths             Death Rates in Virginia (1940)
WWWusage             Internet Usage per Minute
WorldPhones          The World's Telephones
ability.cov          Ability and Intelligence Tests
airmiles             Passenger Miles on Commercial US Airlines,
                     1937-1960
airquality           New York Air Quality Measurements
anscombe             Anscombe's Quartet of 'Identical' Simple
                     Linear Regressions
attenu               The Joyner-Boore Attenuation Data
attitude             The Chatterjee-Price Attitude Data
austres              Quarterly Time Series of the Number of
                     Australian Residents
beaver1 (beavers)    Body Temperature Series of Two Beavers
beaver2 (beavers)    Body Temperature Series of Two Beavers
cars                 Speed and Stopping Distances of Cars
chickwts             Chicken Weights by Feed Type
co2                  Mauna Loa Atmospheric CO2 Concentration
crimtab              Student's 3000 Criminals Data
discoveries          Yearly Numbers of Important Discoveries
esoph                Smoking, Alcohol and (O)esophageal Cancer
euro                 Conversion Rates of Euro Currencies
euro.cross (euro)    Conversion Rates of Euro Currencies
eurodist             Distances Between European Cities and
                     Between US Cities
faithful             Old Faithful Geyser Data
fdeaths (UKLungDeaths)
                     Monthly Deaths from Lung Diseases in the
                     UK
freeny               Freeny's Revenue Data
freeny.x (freeny)    Freeny's Revenue Data
freeny.y (freeny)    Freeny's Revenue Data
infert               Infertility after Spontaneous and Induced
                     Abortion
iris                 Edgar Anderson's Iris Data
iris3                Edgar Anderson's Iris Data
islands              Areas of the World's Major Landmasses
ldeaths (UKLungDeaths)
                     Monthly Deaths from Lung Diseases in the
                     UK
lh                   Luteinizing Hormone in Blood Samples
longley              Longley's Economic Regression Data
lynx                 Annual Canadian Lynx trappings 1821-1934
mdeaths (UKLungDeaths)
                     Monthly Deaths from Lung Diseases in the
                     UK
morley               Michelson Speed of Light Data
mtcars               Motor Trend Car Road Tests
nhtemp               Average Yearly Temperatures in New Haven
nottem               Average Monthly Temperatures at
                     Nottingham, 1920-1939
npk                  Classical N, P, K Factorial Experiment
occupationalStatus   Occupational Status of Fathers and their
                     Sons
precip               Annual Precipitation in US Cities
presidents           Quarterly Approval Ratings of US
                     Presidents
pressure             Vapor Pressure of Mercury as a Function of
                     Temperature
quakes               Locations of Earthquakes off Fiji
randu                Random Numbers from Congruential Generator
                     RANDU
rivers               Lengths of Major North American Rivers
rock                 Measurements on Petroleum Rock Samples
sleep                Student's Sleep Data
stack.loss (stackloss)
                     Brownlee's Stack Loss Plant Data
stack.x (stackloss)
                     Brownlee's Stack Loss Plant Data
stackloss            Brownlee's Stack Loss Plant Data
state.abb (state)    US State Facts and Figures
state.area (state)   US State Facts and Figures
state.center (state)
                     US State Facts and Figures
state.division (state)
                     US State Facts and Figures
state.name (state)   US State Facts and Figures
state.region (state)
                     US State Facts and Figures
state.x77 (state)    US State Facts and Figures
sunspot.month        Monthly Sunspot Data, from 1749 to
                     "Present"
sunspot.year         Yearly Sunspot Data, 1700-1988
sunspots             Monthly Sunspot Numbers, 1749-1983
swiss                Swiss Fertility and Socioeconomic
                     Indicators (1888) Data
treering             Yearly Treering Data, -6000-1979
trees                Diameter, Height and Volume for Black
                     Cherry Trees
uspop                Populations Recorded by the US Census
volcano              Topographic Information on Auckland's
                     Maunga Whau Volcano
warpbreaks           The Number of Breaks in Yarn during
                     Weaving
women                Average Heights and Weights for American
                     Women
```
## How to list datasets from a packet 'boot'

Use the `data(package="boot")` command from RStudio.

## What is a preferred way to assign a variable in R?

1) `x <- 9`
2) `9 -> x`
3) `x = 9`

Non of the assignments `x <- 9`, `9 -> x`, `x = 9` is forbidden. Meaning you can use any of these based on your personal preference.

## To write "hello world" what would you use?

```r
paste("hello", "world") # 1
glue("hello", " world") # 2
"hello" + " world" # 3
"hello" . " world" # 4
paste("hello", "world", sep=" ") # 5
```

The correct would be way is 1 and 5 but 1 is simpler.

## Which one is better?

```r
f1 <- function(a, b){ a + b }

f2 <- function(a, b){ 
    return a + b
}
f3 <- function(a, b){ 
    return (a + b)
}
```
`f2` is bad, won't work and `f1` is an example of an implicit style not recommended. [Google R Style guideline](https://google.github.io/styleguide/Rguide.html){:rel="nofollow"}.

So the `f3` should be the way you go.


## You need to read data.csv file that looks like this:
```
age height sex
23  183    m
22  177    w
```
How would you load this file:

1) `yourRDateHere <- read.csv("data.csv", header = TRUE)`
2) `yourRDateHere <- read.table("data.csv", header = TRUE)`

Correct would be to use 2). This file is not in CSV format. The extension is wrong. For the plain textual file use the `read.table`.


## What will happen?
```R
install.packages("qint")
library(qint)
```





