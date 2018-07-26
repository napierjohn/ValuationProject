
# CodeLou_FrontEnd Project May 2018

>## Project Name:  Valuation
## site:  https://napierjohn.github.io/ValuationProject/
>## Student:  John Napier

    - 502-643-2784
    - napierjohn@gmail.com

## Description

This website is on its way to become a personal tool of mine to do research on real estate property. Though not yet.  The end goal is to create more complex financial analyis tools and the ability to scrape Louisville's Commishioner's Sales site and pull deeds from Jeff Co Reg. of Deeds.  

## Project Build

This site was also built to test my HTML, CSS, and JS skills gained from Code Louisville and Treehouse.  I first built the home page (index.html) by hand then built the JeffCoTools.html + .css using the Bootstrap framework and CSS modifications.  Click around and find the other interactivity. 

The homepage code was either typed in or pasted snippets adjusted to work for my page.  I wanted to determine everything myself, make it responsive, and expereince all the obstacles one might find when making their first webpage.  Infact, I wanted that experience because this would be my only first webpage.  This page uses Normalize.css.

The JeffCoTools page and associated files were made with Bootstrap.  My **goal** was to **mimic** the homepage in all styles and each componant (tabs, responsive actions, hero background, navigation sequence, etc) using Bootstrap and some adjustments (like the serachbox in the main navbar).  This page relies on Bootstrap for the Normaize.css features.  I started the page using a grid system for the main content but switched to Bootstrap's row/column ability.

## Custom CSS Classes

I made many custom classes but below are a few:
The class(es) I created are:

1. Index.html and Hopempage.css

```CSS
    .navList {}
        /* Class containing code for a CSS navigation bar from tablet and larger screens.
        For a tablet, the navigation display is block but changes to inline-block.
        The size, fonts, and such change to look good in larger screens.
        */
    .tab {}
        /* Class that directs the changes of the tabbed Multi-family Trulia properties.  
        */
    .dropdown-content{}
        /*Class that controls the navigation dropdown menu in the smallest of screens.
        CSS based dropdown snippet I adjusted for my use.
        */
```

2. JeffCoTools.html and css

```CSS
    .banner {}
        /* Container for banner at top.  Banner is responsive and verbage and fonts change
        to accomodate screen size.
        */
    .navbar {}
        /* Bootstrap code for navigation.  I added other features to include icons, dropdown
        styling/method, and other responsive features.
        */
```

## Custom JavaScript Functions

The javascript functions I created are:

1. Index.html and Hopempage.css

```javascript
   // Click on Calc svg, open the popup
function clickPopup() {
    var popup = document.getElementById("calcPopup");
    popup.classList.toggle("show");
}
```

2. JeffCoTools.html and css

```javascript
    /*
    */
```


