# Gif.js

A gif performance management service.

## description

Gif.js looks at your DOM for all your images with a data-gif attribute. If an image tag has a data-gif attribute, it will create a click handler on the element. The handler will replace the image with the gif file on click. This will help reduce unnecessary gif loading bandwidth.

## instructions

1. Instantiate Gifjs.
`gifjs = new Gifjs`

2. Done.

## example

Before click
![Before](http://fakeimg.pl/250x150)
`<img src="/a/path/image.jpg" data-gifjs="/a/path/animate.gif">`

After click
![After](http://media.giphy.com/media/12Ek91HBQ4khAA/giphy.gif)
`<img src="/a/path/animate.gif" data-gifjs="/a/path/animate.gif">`
