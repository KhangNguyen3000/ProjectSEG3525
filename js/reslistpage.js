window.onload = function() {
    var elements = document.getElementsByClassName("card");
    var numElements = elements.length;
    for (i = 0; i <numElements; i++) {
        elements[i].addEventListener("click", redirect);
    }
}
function redirect() {
        window.location.href = 'menu.html';}