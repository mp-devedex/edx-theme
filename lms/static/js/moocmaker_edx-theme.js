$(document).ready(function(){
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
  var imageURL = $(element).css('background-image').replace('url("', '').replace('")', '');
  if (imageURL != "none"){
      $.ajax({
         url: imageURL,
         type: 'HEAD',
         error: function(){
	   $(element).css('background-image', 'url("/static/images/replace-image.png")');
         }
      });
  }
});

});
