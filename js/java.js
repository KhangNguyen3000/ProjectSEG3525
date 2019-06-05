var inames = [];
var iprice = [];


/*exported displayCart*/
function displayCart() {
   var cartdata = "";
    for(var i = 0; i < inames.length; i++){
        if(inames[i] != ","){
        cartdata = cartdata + '<div class="pad2"><label>'+inames[i]+'</label><label>...........</label><label> $'+iprice[i]+'</label><button onclick="removeI2(\''+inames[i]+'\')" class="boxed br" type="button" style="float:right"> Cancel </button><br></div><br><br>';
        }
    }
    document.getElementById('cart').innerHTML = cartdata;
}


/* exported addItem */
/*eslint-env browser*/
function addItem(iden, price) {
    inames.push(iden);
    iprice.push(price);
    displayCart();
}
/* exported checkout */
/*eslint-env browser*/
function checkout(){
    sessionStorage.clear();
    sessionStorage.setItem("inames", JSON.stringify(inames));
   sessionStorage.setItem("iprice", JSON.stringify(iprice));
}
/* exported loadCart */
/*eslint-env browser*/
function loadCart(){
    inames = JSON.parse(sessionStorage.getItem("inames"));
    iprice = JSON.parse(sessionStorage.getItem("iprice"));
    showCart();
}
/* exported loadCart2 */
/*eslint-env browser*/
function loadCart2(){
    inames = JSON.parse(sessionStorage.getItem("inames"));
    iprice = JSON.parse(sessionStorage.getItem("iprice"));
    displayCart();
}

function showCart(){
    var cartdata = '<label class="b fon">command:</label><br>';
    for(var i = 0; i < inames.length; i++){
        if(inames[i] != ","){
        cartdata = cartdata + '<div class="pad2"><label>'+inames[i]+'</label><label>...........</label><label> $'+iprice[i]+'</label><button onclick="removeI(\''+inames[i]+'\')" class="boxed br" type="button" style="float:right"> Cancel </button><br></div>';
        }
    }
    document.getElementById('cart').innerHTML = cartdata;
}
/* exported removeI */
/*eslint-env browser*/
function removeI(iname){
    for(var i = 0; i < inames.length; i++){
        if(iname == inames[i]){
            inames.splice(i,1);
            iprice.splice(i,1);
            break;
           }
    }
    showCart();
}
/* exported removeI2 */
/*eslint-env browser*/
function removeI2(iname){
    for(var i = 0; i < inames.length; i++){
        if(iname == inames[i]){
            inames.splice(i,1);
            iprice.splice(i,1);
            break;
           }
    }
    displayCart();
}

/* exported first */
/*eslint-env browser*/
function first(){
    if(sessionStorage.length < 1){
         document.getElementById('cart').innerHTML = "Begin adding items to your order and they will show up here";
    }else{
        loadCart2();
    }
}