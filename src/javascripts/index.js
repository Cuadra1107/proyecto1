/*Esta funcion se encarga de cargar la 
barra de navegacion en la parte superior*/
$(document).ready(function() {
//alert("Navbar");
    $('#navbar_x').append('<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class= "navbar-brand" href = "index.html" > Logo</a ><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="index.html">Home<span class="sr-only"></span></a></li><li class="nav-item"><a class="nav-link" href="noticias.html">Noticias</a></li><li class="nav-item"><a class="nav-link" href="libros.html">Libros</a></li><li class="nav-item"><a class="nav-link" href="acerca.html">Acerca de</a></li></ul></div></nav >');
    $('#footer').append('<div class="row"><div class="col text-center foo_link"><a href="http://" target="_blank" rel="noopener noreferrer">Ubicación</a></div><div class="col text-center foo_link"><a href="http://" target="_blank" rel="noopener noreferrer">Correo</a></div><div class="col text-center foo_link"><a href="http://" target="_blank" rel="noopener noreferrer">Telefono</a></div></div>');
});

function cargar_libros() {
    $.getJSON("src/javascripts/utilities.json", function (json) {
        console.log(json);
        json.libros.forEach(element => {
            console.log(element);
            var div = document.createElement("div"); 
            var imagen = document.createElement("img"); 
            var link = document.createElement("a");
            var titulo = document.createElement("h3");  
            var center = document.createElement("center");

            titulo.innerText=element.nombre;
            link.appendChild(titulo);
            link.href="libro.html?id="+element.id;
            link.classList.add("libro_link");
            imagen.src=element.portada;
            imagen.width=200;
            imagen.height=320;
            imagen.style.paddingBottom="10px";
            center.appendChild(imagen);
            center.appendChild(link);


            div.classList.add("col-md-4");
            div.classList.add("superior");
            div.appendChild(center);

            document.getElementById('libros').appendChild(div);
        });
        document.getElementById('libros').append
    });
}


function cargar_libro() {
    var id = document.location.href.split("?");
    id=id[1].split("=");
    console.log(id);
    id=id[1];
    console.log(id);


    $.getJSON("src/javascripts/utilities.json", function (json){

//HACER EL FOR AQUI, para bucar por ID el libro y cargar cada cosa en la pagina 
            
            for (var i = 1 ; i >= json.libros.length; i++) {
                if (id == i) {

                    

                    document.getElementById('portada').src=json.libros[i].portada;


                }
            }
        });




}

function cargar_noticias() {
    $.getJSON("src/javascripts/news.json", function (json) {
        console.log(json);
    });
}

function cargar_noticia() {
    var id = document.location.href.split("?");
    id = id[1].split("=");
    console.log(id);
    id = id[1];
    console.log(id);
}