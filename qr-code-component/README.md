# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![Desktop solution](.\images\final-solution-desktop.png)
<!-- ![Mobile solution](images\final-solution-mobile.png) -->


### Links

- Solution URL: [https://github.com/CelineTrann/frontendmentor-qr-code-component](https://github.com/CelineTrann/frontendmentor-qr-code-component)
- Live Site URL: []()

## My process
First I create a div for the main container, and placed the text as a header and paragraph respectively. Then with the basic components created, I create a stylesheet to place all the given information of provided in style-guide.md as well as center aligned the text. At this point, I imported the fonts from Google Fonts. Then the div with the class="content" had the width and height set. As the background colour of this div was different from the main background colour, the values of the width were played with until it was a suitable size. Then the image and padding was added to the div. Then the div was centered vertically and horizontally and the borders rounded. Finally a media query was used for the desktop version, with the only difference being the width of the div.

### Built with
- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned
There are many different ways to centre a div, and every technique varies depending on a bunch of factors such as positioning, what is being centered, etc. The use of `transform: translateY(25%);` was the method I implemented to transform the div to the vertical center. However, in the future I could like to experiment with other techniques as well.


### Useful resources
- [CSS Vertical Align – How to Center a Div, Text, or an Image](https://www.freecodecamp.org/news/css-vertical-align-how-to-center-a-div-text-or-an-image-example-code/) - This article provide methods to vertically centre my div without the use to flexboxes or grids
- [Box Shadow CSS Generator](https://cssgenerator.org/box-shadow-css-generator.html) - This is an amazing tool that lets you play around with box shadows.


## Author
- Website - [Celine Tran](https://github.com/CelineTrann)
- Frontend Mentor - [@CelineTrann](https://www.frontendmentor.io/profile/CelineTrann)

