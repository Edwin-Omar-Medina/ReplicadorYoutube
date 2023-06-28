export function recomendados(contenedor, array){
    contenedor.innerHTML = "";
    array.forEach(( element ) => {
        const { poster } = element;
        const { nombre } = element;
        const { icono } = element;
        const { visualizaciones } = element;
        const { canal }  = element;
        const { tiempo } = element;
        const { id } = element;
        contenedor.innerHTML += `<a href="../Pages/Play.html">
        <div class="grid3">                        
                <div>
                    <center>
                    <video id="${id}" width="100%" height="100%" class='plays' poster="${poster}" > 
                    </video></center>
                </div>
                <div>
                     <table class="tablacontent">
                        <tr>
                            <h2>${nombre}</h2>
                        </tr>
                        <tr>
                            <th style="width:50px;"> <img src="${icono}"
                                    class="iconos2"></th>

                            <td style="width: 360px;">
                                <h6>${canal}</h6>
                            </td>
                        </tr>
                    </table>

                    <table class="tabla2" style="max-width: 300px; margin-top: -20px;">
                        <tr>
                            <th>
                                <p class="infocanal">${visualizaciones}</p>
                            </th>
                            <th>
                                &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            </th>
                            <th>
                                <p class="infocanal">${tiempo}</p>
                            </th>
                        </tr>
                    </table>
                </div>
        </div>
       
    </a>`
    })
}