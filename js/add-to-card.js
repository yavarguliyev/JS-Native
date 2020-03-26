"use strict";

let addProduct = document.querySelectorAll('#add-value');
let basketButton = document.getElementById('basket');
let clear = document.getElementById('product-clear');

clear.addEventListener('click', function (ev) {
    ev.preventDefault();
    basketButton.children[0].children[1].innerHTML = 0;
    basketButton.children[1].children[1].children[0].setAttribute('src', '');
    basketButton.children[1].children[1].children[0].setAttribute('alt', '');
    basketButton.children[1].children[1].children[1].innerHTML = '';
    basketButton.children[1].children[1].children[2].innerHTML = '';
    basketButton.children[1].children[1].children[3].innerHTML = '';
});


for (let i = 0; i < addProduct.length || i < basketButton.length; i++) {
    let addCard = addProduct[i];
    addCard.addEventListener('click', function (ev) {
        ev.preventDefault();
        let basketitems = basketButton.children[1].children[1].children[0];
        let basketquantity = basketButton.children[0].children[1];
        let basketTitle = basketButton.children[1].children[1].children[1];
        let basketPrice = basketButton.children[1].children[1].children[2];
        let basketQuantity = basketButton.children[1].children[1].children[3];

        let itemCount = addCard.parentNode.parentNode.parentNode.parentNode.parentElement.parentNode.childElementCount;
        let itemImg = addCard.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].getAttribute('src');
        let itemAlt = addCard.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].getAttribute('alt');
        let itemTitle = addCard.parentNode.parentNode.parentNode.parentNode.parentNode.lastElementChild.children[0].innerHTML;
        let itemPrice = addCard.parentNode.parentNode.parentNode.parentNode.parentNode.lastElementChild.children[1].innerHTML;
        let itemQuantity = addCard.parentNode.parentNode.parentNode.parentNode.parentNode.lastElementChild.lastElementChild.children[0].children[0].children[0].value;

        basketquantity.innerHTML = itemCount;
        basketTitle.innerHTML = 'Model: ' + itemTitle;
        basketPrice.innerHTML = 'Price: ' + itemPrice;
        basketQuantity.innerHTML = 'Quantity: ' + itemQuantity;
        basketitems.setAttribute('src', `${itemImg}`);
        basketitems.setAttribute('alt', `${itemAlt}`);
    });
}