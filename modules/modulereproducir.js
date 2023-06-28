export function mostrar(contenedor, element) {
    contenedor.innerHTML = "";
    const { poster } = element;
    const { nombre } = element;
    const { canal } = element;
    const { visualizaciones } = element;
    const { tiempo } = element;
    const { icono } = element;
    const { url } = element;
    const { id } = element;

    if (url != "") {
        contenedor.innerHTML += ` <div>
        <center>
            <video autoplay controls src="${url}" id="myvideo" 
                height="80%" poster="${poster}" class='recplay' style="width: 800px"></video>

            <table class="tablacontent" style="width: 100%;">
                <tr>
                    <h2 style="font-size: 30px; margin-bottom: 1%; margin-left: -50px">${nombre}</h2>
                </tr>
                <tr>
                    <th style="width: 7%;"> <img src="${icono}" class="iconos">
                    </th>

                    <td style="width: 100%; ">
                        <h6 style="font-size: 18px; margin-bottom: 1%;">${canal}</h6>
                    </td>
                </tr>
            </table>

            <table class="tabla2" style="width: 100%; margin-top: 15px; ">
                <tr>
                    <th>
                        <p class="contenplay">${visualizaciones}</p>
                    </th>
                    <th>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    </th>
                    <th style="width: 50%;">
                        <p class="contenplay">${tiempo}</p>
                    </th>
                </tr>
            </table>
        </center>
    </div>`
    } 
}