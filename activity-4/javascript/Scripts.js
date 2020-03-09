//welcome message
var user = 'Matt';
var salutation = 'Hello, ';
var message='! Here are your Samsung reviews.';
var greeting = salutation + user + message;
var greetingEl=document.getElementById('greeting');

greetingEl.textContent= greeting;

//product price
var price = 799.99;
var studentDiscount= .15;
var studentPrice = price -(price*studentDiscount);
var priceEl=document.getElementById('price');
var studentPriceEl=document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent= studentPrice.toFixed(2);