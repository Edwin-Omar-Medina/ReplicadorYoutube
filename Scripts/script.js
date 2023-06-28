import { data } from "../data/data.js";
import { mostrarVideo } from "../modules/mostrar.js";
let btnmusica = document.getElementById("btnmusica");
let btntodos = document.getElementById("btntodos");
let btnprogramacion = document.getElementById("btnprogramacion");
let btndiseño = document.getElementById("btndiseño");

let textobuscar = document.getElementById("search");
let btnbuscar = document.getElementById("buscar");




let gridvideos = document.getElementById("grid");

mostrarVideo(gridvideos, data);

//----------------------------------
//Filtrado de videos
//----------------------------------

//Filtrado de musica
btnmusica.addEventListener('click', () => {
    let arreglo = data.filter(data => data.categoria == "musica");
    mostrarVideo(gridvideos, arreglo);
});

// Filtrado de diseño
btndiseño.addEventListener('click', () => {
    let arreglo = data.filter(data => data.categoria == "diseño");
    mostrarVideo(gridvideos, arreglo);
});

// Filtrado de diseño
btntodos.addEventListener('click', () => {
    let arreglo = data.filter(data => data.categoria != "");
    mostrarVideo(gridvideos, arreglo);
});

// Filtrado de diseño
btnprogramacion.addEventListener('click', () => {
    let arreglo = data.filter(data => data.categoria == "programacion");
    mostrarVideo(gridvideos, arreglo);
});


(function selecToVideo(){
    document.addEventListener('click', ({ target }) => {
        if(target.classList.contains('plays')){
            let id = target.id;
            let video = data.find(item => item.id == id);       
            localStorage.setItem('video', JSON.stringify(video));
            location.href = "../pages/Play.html";
        }
    });
})();



// btnbuscar.addEventListener('click', () => {
//     const texto = textobuscar.value.toLowerCase();
//     let arreglo = data.filter(data => data.categoria == "musica");
//     mostrarVideo(gridvideos, arreglo);
// });

//buscador  textobuscar    btnbuscar









