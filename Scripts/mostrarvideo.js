import { data } from "../data/data.js";
import { mostrar } from "../modules/modulereproducir.js";
import {recomendados} from "../modules/recomendados.js"
let grid2 = document.getElementById("grid2");
let videoSeleccionado = JSON.parse(localStorage.getItem('video'));
let recomen = document.getElementById("recomendados");
console.log(videoSeleccionado);


mostrar(grid2, videoSeleccionado);

if({data}!=videoSeleccionado){
    recomendados(recomen, data);
}


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

