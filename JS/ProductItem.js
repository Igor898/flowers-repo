"use strict"
class ProductItem {
    constructor(product){
        this.none = product.none
        this.name = product.name
        this.meaning = product.meaning
        this.img = product.img
    }
    render(){
        return ` <div class="product ${this.none}">
                    <div class="product-bg">
                        <img class="product_img" src="${this.img}" alt="">
                    </div>
                    <h1 class="product-title">${this.name}</h1>
                    <p class="product-text">${this.meaning}</p>
                    <button class="product_button">Подробнее</button>
                </div>`
    }
}