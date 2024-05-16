# YH_Vue_template

## what's this?

this is a base template for tampermonkey developer

## Feature

- support vue.js to develop frontend page
- support use tailwindcss
- support view and model data exchanger
- use ShadowRoot to mounted dom


## How to use?

1. `npm install` or `pnpm install` or anyway you like.
2. `npm run build:css` to start watching css file and build, (tailwind css)
3. `npm run build:prod` to start watching file change and build bundle
4. copy the `dist/bundle.js` file content to tampermonkey for test


## About

`banner.txt` tampermonkey header lines

```js
// ==UserScript==
// @name         Ucopy
// @namespace    Ucopy
// @version      0.0.1
// @description  ******
// @icon         icon url
// @author       helsonlin
// @license      MIT
// @namespace    https://github.com/helson-lin
// @homepage     https://github.com/helson-lin
// @match        *://*/*
// @exclude      *://github.com/*
// @connect      *
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
```

You can write you code in `src/main.js` or `src/bin/index.js`. view and js data exchange you need use `mitter`.