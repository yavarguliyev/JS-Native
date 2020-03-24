"use strict";

let formAddToCart = document.getElementById('form-add-to-cart');
let addProduct = document.getElementById('add-value');
let count = document.getElementById('count-value');
let item = document.getElementById('value-count');
let basketButton = document.getElementById('basket-button');
let productName = document.getElementById('product-name');
let productPrice = document.getElementById('product-price');
let productQuantity = document.getElementById('product-quantity');
let quantity = document.getElementById('quantity-value');
let img = document.getElementById('product-img');
let clear = document.getElementById('product-clear');

formAddToCart.addEventListener('submit', function (ev) {
    ev.preventDefault();
    count.innerHTML = item.childElementCount;
    img.setAttribute('src', `${item.firstElementChild.children[0].getAttribute('src')}`);
    productName.innerHTML = 'Model: ' + item.firstElementChild.children[1].children[0].innerHTML;
    productPrice.innerHTML = 'Price: ' + item.firstElementChild.children[1].children[1].innerHTML;
    productQuantity.innerHTML = 'Quantity: ' + quantity.value;
});

clear.addEventListener('click', function (ev) {
    count.innerHTML = 0;
    img.removeAttribute('src', '');
    productName.innerHTML = '';
    productPrice.innerHTML = '';
    productQuantity.innerHTML = '';
    $.toast({
        heading: 'Success',
        icon: 'success',
        position: 'bottom-right',
        text: 'The selected items removed from card!',
        showHideTransition: 'slide',
        hideAfter: 3000
    });
});