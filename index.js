var Gifjs = function(){
  this.blastOff();
};

Gifjs.prototype.blastOff = function(){
  console.log('Blast off!');
  this.getGifjsNodes();
}

Gifjs.prototype.getGifjsNodes = function(){
  if (document.querySelectorAll){
    console.log('Using querySelectorAll');
    // This is more performant
    var gifElements = document.querySelectorAll("*[data-gifjs]");
  } else {
    console.log('Using getElementsByTagname');
    // This works in all browsers
    var gifElements = document.getElementsByTagName("*");
  }
  this.reviewAllResults(gifElements);
}

Gifjs.prototype.reviewAllResults = function(gifElements){
  console.log('Reviewing all results');
  var self = this;
  for (var i=0, max=gifElements.length; i < max; i++) {
    console.log('Reviewing ', gifElements[i]);
    self.createClickHandler(gifElements[i]);
  }
}

Gifjs.prototype.createClickHandler = function(gifElement){
  console.log('Adding click event to ', gifElement);
  var self = this,
      hasGifjs;
  if(gifElement.dataset.gifjs != undefined){
    hasGifjs = true;
  } else {
    hasGifjs = false;
  }

  if( hasGifjs )
  this.addEvent( gifElement, 'click', function (e){
    console.log('Click event triggered on ', gifElement);
    self.swapImgWithGif(gifElement);
  });
}

Gifjs.prototype.addEvent = function(element, evnt, funct){
  if (element.attachEvent){
   return element.attachEvent('on'+evnt, funct);
  } else {
   return element.addEventListener(evnt, funct, false);
  }
}

Gifjs.prototype.swapImgWithGif = function(target){
  window.test = target;
  var targetData = target.dataset,
      gifUrl     = targetData.gifjs;
  target.src     = gifUrl;
}
