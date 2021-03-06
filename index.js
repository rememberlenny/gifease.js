var Gifease = function(){
  this.blastOff();
};

Gifease.prototype.blastOff = function(){
  console.log('Blast off!');
  this.getGifeaseNodes();
}

Gifease.prototype.getGifeaseNodes = function(){
  if (document.querySelectorAll){
    console.log('Using querySelectorAll');
    // This is more performant
    var gifElements = document.querySelectorAll("*[data-gifease]");
  } else {
    console.log('Using getElementsByTagname');
    // This works in all browsers
    var gifElements = document.getElementsByTagName("*");
  }
  this.reviewAllResults(gifElements);
}

Gifease.prototype.reviewAllResults = function(gifElements){
  console.log('Reviewing all results');
  var self = this;
  for (var i=0, max=gifElements.length; i < max; i++) {
    console.log('Reviewing ', gifElements[i]);
    self.createClickHandler(gifElements[i]);
  }
}

Gifease.prototype.createClickHandler = function(gifElement){
  console.log('Adding click event to ', gifElement);
  var self = this,
      hasGifease;
  if(gifElement.dataset.gifease != undefined){
    hasGifease = true;
  } else {
    hasGifease = false;
  }

  if( hasGifease )
  this.addEvent( gifElement, 'click', function (e){
    console.log('Click event triggered on ', gifElement);
    self.swapImgWithGif(gifElement);
  });
}

Gifease.prototype.addEvent = function(element, evnt, funct){
  if (element.attachEvent){
   return element.attachEvent('on'+evnt, funct);
  } else {
   return element.addEventListener(evnt, funct, false);
  }
}

Gifease.prototype.swapImgWithGif = function(target){
  window.test = target;
  var targetData = target.dataset,
      gifUrl     = targetData.gifease;
  target.src     = gifUrl;
}
