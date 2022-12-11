const inputSearch = document.querySelector("input#inputSearch")
const container = document.getElementById("article")
const URL = "../bbdd/productos.json"
const productos = []

async function obtenerInfoProductos(){
     try{
        
        const response = await fetch(URL)
        const data = await response.json()
        
             if (data.length > 0){
                 productos.push(...data)
                 cargarProductos(productos)
                 onClickBtn()
             }
       
     } catch (error) {
        toast('No hay Productos disponibles','red')
    }
}

obtenerInfoProductos()

function cargarProductos(array){
    let contenido = ""
    if(array.length > 0){
        array.forEach(producto =>{
            contenido += armarHTML(producto)
        })
        container.innerHTML = contenido
    }
}


function onClickBtn(){
    const botonesAdd = document.querySelectorAll("button.btn")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", ()=>{
            let resultado = productos.find(prod => prod.id === parseInt(btn.id))
            carrito.push(resultado)
            localStorage.setItem("carrito", JSON.stringify(carrito))
            toast(`'${resultado.nombre}' se agregó al carrito`, 'green')

        })
    })
}

function filterProd(){
    let resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(inputSearch.value.toUpperCase().trim()))
    if(resultado.length > 0){
        cargarProductos(resultado)
        onClickBtn()
    }else{
        toast('No hay resultados disponibles','red')
    }
}

inputSearch.addEventListener("search", ()=>{
    inputSearch.value.trim() !=="" ? filterProd() : cargarProductos(productos)
})

inputSearch.addEventListener("change", ()=> onClickBtn())




const toast = (text, bgcolor)=> {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: { background: bgcolor || 'CornFlowerBlue', fontSize: '24px'}
      }).showToast();
}