let items = sessionStorage.getItem("items");
let prices = sessionStorage.getItem("prices");
var names = items.split(",");
var iprices = prices.split(",")
var subtotal = 0;
var tax;
var total;
var delivery;
 

window.onload = function(){
    $("#credit-card-form").hide();
    $("#visa-button").click(function(){
        $("#credit-card-form").show();
        $(this).css('background-color','#83B7EB');
        $("#mastercard-button").css('background-color', '#ffffff');
    });
    $("#mastercard-button").click(function(){
        $("#credit-card-form").show();
        $(this).css('background-color','#83B7EB');
        $("#visa-button").css('background-color','#ffffff')
    });
    $.each(names,function(index,value) {
        console.log(value);
        $("#orderItems").append(value + " " + iprices[index] + "<br/>" );
        console.log(parseFloat(iprices[index]));
        subtotal += parseFloat(iprices[index]);
    });
    tax = subtotal * 0.13;
    tax = tax.toPrecision(2);
    tax = parseFloat(tax);
    delivery = 3.99;
    total = subtotal + tax + delivery;
    total = total.toPrecision(4);
    total = parseFloat(total);
    $("#total").append(total + "<br>");
    $("#subtotal").append(subtotal + "<br>");
    $("#deliveryFee").append(delivery + "<br>");
    $("#tax").append(tax + "<br>");

}

