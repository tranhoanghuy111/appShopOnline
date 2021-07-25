class Global {
    static infoUser = null
    static arrCart = []
    static updateCart = null
    static setNumCart = null
    static saveUser = null
    static orderHis = []


    static countCart() {
        let sum = 0;
        for (let i in this.arrCart) {
            sum += this.arrCart[i]?.quantity || 1;
        }
        return sum
    }

    static updateData(arr) {
        this.arrCart = arr
        if (this.setNumCart) {
            this.setNumCart(this.countCart())
        }
    }


    static addProductToCart(product) {
        console.log("Cart: ", JSON.stringify(product))
        let hasSame = false;
        for (let i = 0; i < this.arrCart.length; i++) {
            if (this.arrCart[i].id == product.id) {
                if (!this.arrCart[i].quantity) {
                    this.arrCart[i].quantity = 0;
                }
                this.arrCart[i].quantity++
                hasSame = true;
            }
        }
        if (!hasSame) {
            this.arrCart.push(product)
        }
        if (this.setNumCart) {
            this.setNumCart(this.countCart())
        }
        if (this.updateCart) {
            this.updateCart(this.arrCart)
        }
    }

}

module.exports = Global