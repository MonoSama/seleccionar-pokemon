
function nombre_Usuario(){
    var nombre_capturado=document.getElementById("nombre").value;
    document.getElementById("pregunta_elegir").innerHTML="Hola" + " " + nombre_capturado + " " + ", ¿cual de estos pokemonos vas a elegir? Elije sabiamente";
    console.log(nombre_capturado);

        // Habilitar los botones Seleccionar
        var botonesSeleccionar = document.querySelectorAll('.btn_2');
        botonesSeleccionar.forEach(function(boton) {
            boton.removeAttribute('disabled');
        });

        var botonAceptar = document.querySelector('.btn_1');
        botonAceptar.setAttribute('disabled', 'true');
            
       
}

function pokebola_Abierta_charmander() {
    var imagenCharmander = document.getElementById('poke_charmander');
    var imagenSquarltle = document.getElementById('poke_squarltle');
    var imagenBulbasur = document.getElementById('poke_bulbasur');

    if (imagenCharmander.src.includes('pokeball_abierta.png')) {
        imagenCharmander.src = "img/pokeball.png"; // Cierra la pokebola de Charmander
    } else {
        imagenCharmander.src = "img/pokeball_abierta.png"; // Abre la pokebola de Charmander
        // Cierra las otras pokebolas
        imagenSquarltle.src = "img/pokeball.png";
        imagenBulbasur.src = "img/pokeball.png";
    }

    var div = document.getElementById("fondo_pokedex");
    if (imagenCharmander.src.includes('pokeball_abierta.png')) {
        div.style.backgroundImage = "url('img/pokemon_charmander.jpg')";
    } else {
        div.style.backgroundImage = "url('img/pokedex_normal.jpg')";
    }
}


function alerta_charmander(){

    Swal.fire({
        title: "¿Desea elegir a este pokemón?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
            var nombre_capturado=document.getElementById("nombre").value;
            document.getElementById("pregunta_elegir").innerHTML="¡Felicidades" + " " + nombre_capturado + " " + "has elejido a Charmander!";

            // Deshabilitar los botones de selección nuevamente
            var botonesSeleccionar = document.querySelectorAll('.btn_2');
            botonesSeleccionar.forEach(function(boton) {
            boton.setAttribute('disabled', 'true');
            });
        }
      });
}



function pokebola_Abierta_squarltle() {
    var imagenCharmander = document.getElementById('poke_charmander');
    var imagenSquarltle = document.getElementById('poke_squarltle');
    var imagenBulbasur = document.getElementById('poke_bulbasur');

    if (imagenSquarltle.src.includes('pokeball_abierta.png')) {
        imagenSquarltle.src = "img/pokeball.png"; // Cierra la pokebola de Squarltle
    } else {
        imagenSquarltle.src = "img/pokeball_abierta.png"; // Abre la pokebola de Squarltle
        // Cierra las otras pokebolas
        imagenCharmander.src = "img/pokeball.png";
        imagenBulbasur.src = "img/pokeball.png";
    }

    var div = document.getElementById("fondo_pokedex");
    if (imagenSquarltle.src.includes('pokeball_abierta.png')) {
        div.style.backgroundImage = "url('img/pokemon_squirtle.jpg')";
    } else {
        div.style.backgroundImage = "url('img/pokedex_normal.jpg')";
    }
}


function alerta_squarltle() {
    Swal.fire({
        title: "¿Desea elegir a este pokemón?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            var nombre_capturado = document.getElementById("nombre").value;
            document.getElementById("pregunta_elegir").innerHTML = "¡Felicidades" + " " + nombre_capturado + " " + "has elegido a Squarltle!";

            // Deshabilitar los botones de selección nuevamente
            var botonesSeleccionar = document.querySelectorAll('.btn_2');
            botonesSeleccionar.forEach(function(boton) {
                boton.setAttribute('disabled', 'true');
            });
        }
    });
}


function pokebola_Abierta_bulbasur() {
    var imagenCharmander = document.getElementById('poke_charmander');
    var imagenSquarltle = document.getElementById('poke_squarltle');
    var imagenBulbasur = document.getElementById('poke_bulbasur');

    if (imagenBulbasur.src.includes('pokeball_abierta.png')) {
        imagenBulbasur.src = "img/pokeball.png"; // Cierra la pokebola de Bulbasur
    } else {
        imagenBulbasur.src = "img/pokeball_abierta.png"; // Abre la pokebola de Bulbasur
        // Cierra las otras pokebolas
        imagenCharmander.src = "img/pokeball.png";
        imagenSquarltle.src = "img/pokeball.png";
    }

    var div = document.getElementById("fondo_pokedex");
    if (imagenBulbasur.src.includes('pokeball_abierta.png')) {
        div.style.backgroundImage = "url('img/pokemon_bulbasur.jpg')";
    } else {
        div.style.backgroundImage = "url('img/pokedex_normal.jpg')";
    }
}


function alerta_bulbasur(){

    Swal.fire({
        title: "¿Desea elegir a este pokemón?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí",
        cancelButtonText: "No"
      }).then((result) => {
        if (result.isConfirmed) {
            var nombre_capturado=document.getElementById("nombre").value;
            document.getElementById("pregunta_elegir").innerHTML="¡Felicidades" + " " + nombre_capturado + " " + "has elejido a Bulbasur!";

                   // Deshabilitar los botones de selección nuevamente
            var botonesSeleccionar = document.querySelectorAll('.btn_2');
            botonesSeleccionar.forEach(function(boton) {
            boton.setAttribute('disabled', 'true');
            });
        }

 
      });
}








