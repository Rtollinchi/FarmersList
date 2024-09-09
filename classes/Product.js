class Product{
    constructor(name, price, description, inStock){
        this.name=name;
        this.price=price;
        this.description=description;
        inStock=true;
        this.inStock=inStock;    
    }
    display(){
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`}
}
module.exports = Product;

