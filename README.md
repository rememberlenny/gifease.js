![image](https://raw.githubusercontent.com/rememberlenny/gif.js/master/example/example.gif)

# Gif.js

A gif performance management service.

## description

Gif.js looks at your DOM for all your images with a data-gif attribute. If an image tag has a data-gif attribute, it will create a click handler on the element. The handler will replace the image with the gif file on click. This will help reduce unnecessary gif loading bandwidth.

## instructions
This is one way to include gifjs.

1. Include gif.js.
`<script src="gif.js"></script>`

2. Instantiate gif.js.
`<script>gifjs = new Gifjs</script>`

3. There is no step 3.

## example

Before click

`<img src="/a/path/image.jpg" data-gifjs="/a/path/animate.gif">`

![Before](http://fakeimg.pl/250x150?text=Static Image)



After click

`<img src="/a/path/animate.gif" data-gifjs="/a/path/animate.gif">`

![After](http://media.giphy.com/media/12Ek91HBQ4khAA/giphy.gif)
