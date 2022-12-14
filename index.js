const {shampoo,aceite,jabon,cepillo} = require('./db.js')

class ProductManager {
    constructor(){
        this.products = [];
        this.product = Product;
    }

    getProducts(){
        return this.products;
    }

    addProduct(product){
        if (this.getProducts().find((p) => p.code == product.code)) return console.log(`El producto con codigo ${product.code} ya existe.`)
        else product.id = this.getProducts().length + 1; this.products.push(product)
    }

    getProductById(product){
    }
}

class Product extends ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const newProductManager = new ProductManager()

newProductManager.addProduct(shampoo)
newProductManager.addProduct(aceite)
newProductManager.addProduct(jabon)
newProductManager.addProduct(cepillo)

console.log(newProductManager.getProducts())