# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Links

- Solution URL: [Github](https://github.com/rendrez/responsive-product-preview-card/tree/main)
- Live Site URL: [Github Pages](https://rendrez.github.io/responsive-product-preview-card/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - Development environment
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

I'm learning about extend theme on tailwind using my own color, font, and breakpoint.

```cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "hsl(30, 38%, 92%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        darkCyan: "hsl(158, 36%, 37%)",
        veryDarkCyan: "hsl(158, 36%, 25%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
      },
      fontFamily: {
        fraunces: ['"Fraunces"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      screens: {
        mobile: "376px",
        laptop: "1440px",
      },
    },
  },
  plugins: [],
};
```

I'm learning about how to hidden your desire object like photo using tailwind with

```html
<img class="hidden mobile:block" />
```

### Continued development

Responsive when mobile wiidth > 375px
Add hovering state (same with active) 

### Useful resources

- [Stackoverflow](https://stackoverflow.com/) - This helped me for hidding picture when on mobile version.
- [Tailwind](https://tailwindcss.com/) - This helped me for know what i need.

## Author

- Github - [Muhammad Randy](https://github.com/rendrez)
- Frontend Mentor - [@rendrez](https://www.frontendmentor.io/profile/rendrez)
