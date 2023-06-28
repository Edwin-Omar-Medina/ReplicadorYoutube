export function mostrarVideo( gridcontent, array){
    gridcontent.innerHTML ="";
    array.forEach((element) => {
        const { id } = element;
        const { nombre } = element;
        const { canal } = element;
        const { visualizaciones } = element;
        const { tiempo } = element;
        const { icono } = element;
        const { poster } = element;

        gridcontent.innerHTML += `<a href="../Pages/Play.html">
        <div>
            <center>
                <video id="${id}" width="300px" height="170px" class='plays' poster="${poster}"></video>

                <table class="tablacontent">
                    <tr>
                        <h2>${nombre}</h2>
                    </tr>
                    <tr>
                        <th  style="width:50px;"> <img src="${icono}" class="iconos"></th>

                        <td  style="width: 360px;">
                            <h6>${canal}</h6>
                        </td>
                    </tr>
                    </table >

                    <table class="tabla2" style="max-width: 300px; margin-top: -20px;">
                    <tr>
                        <th>
                            <p>${visualizaciones}</p>
                        </th>
                        <th>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        </th>
                        <th style="width: 60%;">
                            <p>${tiempo}</p>
                        </th>
                    </tr>
                </table>
            </center>
        </div>
    </a>`
        })
}