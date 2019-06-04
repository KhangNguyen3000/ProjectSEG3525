class product{
    constructor(productName,price){
        this._productName = productName;
        this._price = price;
    }
    get productName() {
        return this._productName;
    }
    set productName(value){
        this._productName = value;
    }
}

var products = [];

var item1 = new product("shawarma", 5)
var item2 = new product("lamb", 5)

products.push(item1);

$(function(){
    $(".atc").click(function(){
    });
});