const carrito = JSON.parse(localStorage.getItem("carrito")) || []

function armarHTML ({imagen, id,nombre,precio}) {
    return `<div class="art-main">
                <img src="${imagen}" alt="Botita">
                <h3>${nombre}</h3>
                <p>Botita de 100% Cuero Vacuno.<br>
                    Plantilla entera para mayor confort.<br>
                    Forro vacuno y base artesanal.<br>
                    
                </p>
                <h3 class="precio">Precio $${precio}</h3>
                <div>
                    <button class="btn" id="${id}" title="Clic para agregar '${nombre}' al carrito" >Comprar</button>
                </div>
            </div>`
}
 
function armarCarrito(shoe){
   return  `<tr>
                <td><img src="${shoe.imagen}" width="70px"></td>
                <td>${shoe.nombre}</td>
                <td>${shoe.precio}</td>
                <td><button id="${shoe.nombre}" class="btn-delete" title="Quitar del carrito">X</button></td>
            </tr>`
}