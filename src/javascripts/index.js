/*Esta funcion se encarga de cargar la 
barra de navegacion en la parte superior*/
$(document).ready(function() {
//alert("Navbar");
    $('#navbar_x').append('<nav class="navbar navbar-expand-lg navbar-light bg-light"><a class= "navbar-brand" href = "index.html" > <img src="src/images/logohome.png" width="50px"></a ><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link" href="index.html"><i class="fas fa-home"></i>Home<span class="sr-only"></span></a></li><li class="nav-item"><a class="nav-link" href="noticias.html"><i class="fas fa-newspaper"></i>Noticias</a></li><li class="nav-item"><a class="nav-link" href="libros.html"><i class="fas fa-book"></i>Libros</a></li><li class="nav-item"><a class="nav-link" href="acerca.html"><i class="fas fa-question-circle"></i>Acerca de</a></li></ul></div></nav >');
    $('#footer').append('<div class="row"><div class="col text-center foo_link"><center><img src="src/images/ubicacion.png" width="30px" alt=""></center><a href="http://" target="_blank" rel="noopener noreferrer">Ubicación</a></div><div class="col text-center foo_link"><center><img src="src/images/correo.png" width="30px" alt=""></center><a href="http://" target="_blank" rel="noopener noreferrer">Correo</a></div><div class="col text-center foo_link"><center><img src="src/images/telefono.png" width="30px" alt=""></center><a href="http://" target="_blank" rel="noopener noreferrer">Telefono</a></div></div>');

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
            imagen.classList.add("zoom");
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
            
        for (var i = 0 ; i <= json.libros.length-1; i++) {
            
            if (id == json.libros[i].id) {
                console.log(json.libros[i].año);
                document.getElementById('nombre').innerText=json.libros[i].nombre;
                document.getElementById('portada').src=json.libros[i].portada;
                document.getElementById('autor').innerText=json.libros[i].autor;
                document.getElementById("ano").innerText=json.libros[i].año;
                document.getElementById("descripcion").innerText = json.libros[i].descripcion;
            }
        }
    });




}

function cargar_noticias() {
    $.getJSON("src/javascripts/news.json", function (json) {
        console.log(json);
        console.log(json);
        json.noticias.forEach(element => {
            console.log(element);
            var div = document.createElement("div");
            var link = document.createElement("a");
            var titulo = document.createElement("h3");
            var desc = document.createElement("p");
            var division = document.createElement("hr");

            titulo.innerText = element.titulo;
            desc.innerText=element.cuerpo.substring(0,50);

            link.appendChild(titulo);
            link.href = "noticia.html?id=" + element.id;
            link.classList.add("libro_link");

            link.style.paddingBottom = "10px";
            div.appendChild(link);
            div.appendChild(desc);
            div.appendChild(division);

            div.classList.add("col-md-8");
            div.classList.add("superior");

            //div.appendChild(center);

            document.getElementById('news').appendChild(div);
        });
        document.getElementById('news').append
    });
}

function cargar_noticia() {
    var id = document.location.href.split("?");
    id = id[1].split("=");
    console.log(id);
    id = id[1];
    console.log(id);

    $.getJSON("src/javascripts/news.json", function (json) {
        console.log(json);
        for (var i = 0; i <= json.noticias.length - 1; i++) {

            if (id == json.noticias[i].id) {
                
                document.getElementById('titulo').innerText = json.noticias[i].titulo;
                document.getElementById('descripcion').innerText = json.noticias[i].cuerpo;
                document.getElementById("link").innerText = json.noticias[i].fuente;
                document.getElementById("link").href = json.noticias[i].fuente;
            }
        }
    });
}