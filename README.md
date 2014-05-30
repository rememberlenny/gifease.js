# Gif.js

A gif performance management service.

## description

Gif.js looks at your DOM for all your images with a data-gif attribute. If an image tag has a data-gif attribute, it will create a click handler on the element. The handler will replace the image with the gif file on click. This will help reduce unnecessary gif loading bandwidth.

## example

`<img src="/a/path/image.jpg" data-gif="/a/path/animate.gif">`
