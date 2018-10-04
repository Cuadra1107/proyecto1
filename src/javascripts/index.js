/*Esta funcion se encarga de cargar la 
barra de navegacion en la parte superior*/
$(document).ready(function() {
//alert("Navbar");
    $('#navbar_x').append('<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class= "navbar-brand" href = "index.html" > Logo</a ><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="index.html">Home<span class="sr-only"></span></a></li><li class="nav-item"><a class="nav-link" href="noticias.html">Noticias</a></li><li class="nav-item"><a class="nav-link" href="libros.html">Libros</a></li><li class="nav-item"><a class="nav-link" href="acerca.html">Acerca de</a></li></ul></div></nav >');
});