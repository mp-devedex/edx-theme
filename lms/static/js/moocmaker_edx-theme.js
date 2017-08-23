$(document).ready(function(){

  // Trick for .includes working on IE
  if (!String.prototype.includes) {
      String.prototype.includes = function() {
          'use strict';
          return String.prototype.indexOf.apply(this, arguments) !== -1;
      };
  }

	// Detect URL param
	urlContains = function(name){
    if ( (window.location.href) == name ) {
      return true;
    } else {
      return false;
    }
	} 

	if ( urlContains('http://campus.mooc-maker.org/') ) {
    window.location.replace('http://campus.moocmaker.org/');
	}

  var elementos = document.getElementsByClassName('description');
  var texto = "";
  var texto2 = "";
  for (var cont=0; cont<=elementos.length; cont++) {
    if ($(elementos[cont]).text() != "None") {
	// Limit Characters
	texto = $(elementos[cont]).text().substring(0, 125);

        // Limit to the Last Complete Word
	texto2 = texto.substring(0, texto.lastIndexOf(' '));
        $(elementos[cont]).text(texto2 + '...');
    } else {
        texto2 = "Click en Ver Más para mas detalles.";
	$(elementos[cont]).text(texto2);
    }
  }

  var imageURLs = $('.content');
  imageURLs.each(function(index, element){
    var imageURL = $(element).css('background-image');
    // imageURL = imageURL.replace('url(\"', '').replace('\")', '');
    // console.log(imageURL);
    // if (imageURL != "none"){
    //     $.ajax({
    //        url: imageURL,
    //        type: 'HEAD',
    //        error: function(){
  	 //   $(element).css('background-image', 'url("/static/images/replace-image.png")');
    //        }
    //     });
    // }
    if (imageURL == "none" || imageURL == "") {
      $(element).css('background-image', 'url("/static/images/replace-image.png")');
    }
  });

  // Trick for hover in ios devices
  $('.text-container').click(function() {

  });

});
