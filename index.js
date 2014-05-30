var Gifjs = function(){
  this.blastOff();
};

Gifjs.prototype.blastOff = function(){
  console.log('Blast off!');
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
  this.addEvent( gifElement, 'click', function (e){
    self.swapImgWithGif(e.target);
  });
}

Gifjs.prototype.swapImgWithGif = function(target){
  var targetData = target.dataset,
      gifUrl     = targetData.gif;
  target.src     = gifUrl;
}
