$(document).ready(function(){
  // Non MOOC Maker Courses
  var externalCourses = ["course-v1:ProyectoDiego+PD01+2019_T1", "course-v1:ProyectoDiego+PD02+2019_T1"]

  // Trick for .includes working on IE
  if (!String.prototype.includes) {
      String.prototype.includes = function() {
          'use strict';
          return String.prototype.indexOf.apply(this, arguments) !== -1;
      };
  }

	// Detect URL param
	urlContains = function(name){
  	if ( (window.location.href).includes(name) ) {
  		return true;
		} else {
  		return false;
 		}
	} 

	if ( urlContains('http://campus.mooc-maker.org') ) {
			var new_url = window.location.href;
			var new_url = new_url.replace('http://campus.mooc-maker.org', 'http://campus.moocmaker.org');
    	window.location.replace(new_url);
	}

  // Hide Partners Area for courses external to MOOC Maker
  function getCourseId(url) {
    courseId = url.substring(url.indexOf("course-v1"));
    courseId = courseId.substring(0, courseId.indexOf("/"));
    return courseId;
  }

  if (externalCourses.includes(getCourseId(window.location.href))) {
    $("#partners").css("display", "none");
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

  $('#courses-carousel .item').each(function(){
    var items_delimiter=4; // default 4 - will keep 5 or 6 items
    var width = $(window).width();

    if ( width < 528 ) {
      items_delimiter = 999;
    } else if ( width < 768 ) {
      items_delimiter = 0;
    } else if ( width < 1024 ) {
      items_delimiter = 1;
    } else if ( width < 1280 ) {
      items_delimiter = 2;
    } else if ( width > 1280 ) {
      items_delimiter = 3;
    }

    if ( items_delimiter == 999 ) {
      if ($(this).siblings(':last')) {
        $(this).siblings(':first').find('.item-content:first-child').clone().appendTo($(this));
      } else {
          next.find('.item-content:first-child').clone().appendTo($(this));   
      }
    } else {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      if (items_delimiter != 0) {

        for (var i=0;i<items_delimiter;i++) {
          next=next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
          
          next.children(':first-child').clone().appendTo($(this));
        }
      }
    }
  });

  // display course info in mobile devices 
  $('.course-info ').click(function() {
    description_visibility = $(this).parent().children('.thumbnail').children('.description').css('visibility');
    console.log(description_visibility);
    if ( description_visibility != "visible" ) {
      $(this).parent().children('.thumbnail').children('.description').css({"visibility": "visible", "opacity": 1, "top": 0});
    } else {
      $(this).parent().children('.thumbnail').children('.description').css("visibility", "hidden").animate({"top": "100%"}, 1000);
    }
  })

});
