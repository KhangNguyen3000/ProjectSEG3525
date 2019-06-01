var inames = [];
var iprice = [];



function displayCart() {

    var cartdata = '<ul class="card2">';
    var total = 0;
    for(var i = 0; i < inames.length; i++){
        total = total + iprice[i];
        cartdata = cartdata + '<div>' + '<label>' + inames[i] + '  </label>'+ '<label>$' + iprice[i] + '</label></div><label>----------</label>'
    }
    cartdata = cartdata + '</ul>'

    document.getElementById('cart').innerHTML = cartdata;
}


/* exported addItem */
/*eslint-env browser*/
function addItem(iden, price) {
    inames.push(iden);
    iprice.push(price);
    displayCart();
}