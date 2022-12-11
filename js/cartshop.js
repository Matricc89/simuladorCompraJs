function recoverCar(){
    let tablaHTML = ""
    const tbody= document.querySelector("tbody")
    const carrito = JSON.parse(localStorage.getItem("carrito"))
        if(carrito.length > 0){
            carrito.forEach(shoe =>tablaHTML += armarCarrito(shoe))
        }
        tbody.innerHTML = tablaHTML
        calcTotal()

}

recoverCar()

function activarBtn(){
    const buttonsDelete = document.querySelectorAll("button.btn-delete")
    buttonsDelete.forEach( btn =>{
        btn.addEventListener("click", ()=>{
            const posicion = carrito.findIndex(shoe =>shoe.nombre === btn.id)
            if(posicion > -1){
                carrito.splice(posicion, 1)
                localStorage.setItem("carrito",JSON.stringify(carrito))
                recoverCar()
                activarBtn()
            }
        })
    })
}
activarBtn()

function calcTotal(){
    let total = document.querySelector("h3#total")
    let totalCarrito = carrito.reduce((acc, shoe)=> acc + shoe.precio, 0)
        total.innerText = `Total: $ ${totalCarrito.toLocaleString()}` 
}

const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("click", ()=> {
    Swal.fire({
        icon: 'question',
        title: '¿Confirmas la compra?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: `Cancel`,
    })
    .then(result =>{
        if(result.isConfirmed){
            localStorage.removeItem("carrito")
            carrito.length = 0
            Swal.fire("Gracias Por Elegirnos", '','','info')
            .then(()=>{
                location.href = '../index.html'
            })
        }
    })
})