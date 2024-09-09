class Product{
    constructor(name, price, description, instock){
        // constructor(name, price, description, instock){
        this.name=name;
        this.price=price;
        this.description=description;
        // 
        this.instock=instock;
        
    }
    display(){
        
        // console.log(`Name: ${this.name}, Price: ${this.price}, Description: ${this.description}`)
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`}
}
module.exports = Product;

