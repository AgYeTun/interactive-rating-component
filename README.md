# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-rating-component-using-reactjs-and-tailwindcss-wHk25ShvWX)
- Live Site URL: [Vercel](https://interactive-rating-component-six-mu.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Animate.css](https://animate.style/) - For animation


### What I learned

I learned how to use animation before submitting the form with setTimeout() function

Here is how I use. active is the state that i use to toggle the classes from animate.css. setTimeout function with delay of 500ms before navigating to the next component.

```jsx
 const handleSubmit = () => {
        setActive(!active)
        setTimeout(() => navigate(`thankyou/${rate}`), 500)
    }
```

### Useful resources

- [Animate.css](https://animate.style/) - This helped me for using animation. I really liked this library and will use it going forward.

## Author

- Github - [Aung Ye Tun](https://github.com/AgYeTun)
- Frontend Mentor - [@AgYeTun](https://www.frontendmentor.io/profile/AgYeTun)

