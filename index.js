var Gifjs = {};

Gifjs.prototype.blastOff = function(){

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

  for (var i=0, max=all.length; i < max; i++) {

  }

}
