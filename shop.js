var customerName = "Song";
var price = 10;
var quantity = 1;
var totalprice = 0;
var currency = "";
var country = "";

if (country === "Thailand") {
	currency = "THB";
} else if (country === "China") {
	currency = "";
} else {
	currency = "$";
}

document.getElementById("customer-name").innerHTML = customerName;

var products = [
    "Pizza",
    "Naan",
    "Sourdough",
    "Foccacia",
    "iPhone X"
];

var price = [
    40,
    10,
    20,
    80,
    1000
];

var productsText = "";
var productsElement = document.getElementById("product-list");



for (var i in products) {
    productsText = productsText + "<li class='list-group-item'>" + products[i] + 
    "<span class='badge badge-pill badge-secondary float-right'>$" + price[i] * quantity + "</span></li>";

    totalprice += price[i];

}

var discountAmount = totalprice * 0.25;

totalprice -= discountAmount;

productsElement.innerHTML = productsText;
document.getElementById("price").innerHTML = currency + totalprice;

var greeting = "";
var hour = new Date().getHours();

if (hour < 13) {
    greeting = "Good Morning";
} else if (hour >= 13 && hour < 17) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

document.getElementById("greeting").innerHTML = greeting;