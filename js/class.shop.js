class toBuy {
    constructor(shopCart){
        this.shopCart = shopCart
    }
    totalCompra(){
        if(shopCart.length > 0){
            return this.shopCart.reduce((acc, shoe) => acc + shoe.precio, 0).toFixed(2)
        } else {
            return 'Error inesperado'
        }
    }

 
}