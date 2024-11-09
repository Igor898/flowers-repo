"use strict"
class ProductsList {
    constructor(){
        this.goods = [];
        this._getProducts()
            .then(data => { 
                 this.goods = data;
                 this.render()
            });
    }

    _getProducts(){
      
        return fetch("../JS/goods.json")
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
       
    }
    render(){
        const block = document.querySelector('.products');
        for (let product of this.goods){
            const productObj = new ProductItem(product);

            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}
let list = new ProductsList();