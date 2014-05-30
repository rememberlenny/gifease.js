var Gifjs = {};

Gifjs.prototype.blastOff = function(){
  this.getGifjsNodes();
}

Gifjs.prototype.getGifjsNodes = function(){
  if (document.querySelectorAll){
    // This is more performant
    var gifElements = document.querySelectorAll("*[data-gifjs]");
  } else {
    // This works in all browsers
    var gifElements = document.getElementsByTagName("*");
  }
  this.reviewAllResults(gifElements);
}

Gifjs.prototype.reviewAllResults = function(gifElements){
  var self = this;
  for (var i=0, max=gifElements.length; i < max; i++) {
    self.createClickHandler(gifElements[i]);
  }
}

Gifjs.prototype.addEvent = function(element, evnt, funct){
  if (element.attachEvent){
   return element.attachEvent('on'+evnt, funct);
  } else {
   return element.addEventListener(evnt, funct, false);
  }
}

Gifjs.prototype.createClickHandler = function(gifElement){
  var self = this;
  this.addEvent( gifElement, 'click', function (){
    this.swapImgWithGif(gifElement);
  });
}

Gifjs.prototype.swapImgWithGif = function(gifElement){

}
