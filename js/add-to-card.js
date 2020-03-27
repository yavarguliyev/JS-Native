if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    "use strict";

    class ActiveClass {
        constructor() {
            this.classElement = document.querySelectorAll('.nav-item');
        }

        activeUrl() {
            let urlDirection = this.classElement;
            for (let i = 0; i < urlDirection.length; i++) {
                let url = urlDirection[i].children[0].attributes[0];
                let urlClass = urlDirection[i];
                let currentPage = location.pathname;
                if (currentPage == '/' + url.value) {
                    urlClass.classList.add('active');
                }
            }
        }
    }

    let active = new ActiveClass();
    active.activeUrl();

    let checkout = document.getElementById('shopping-purchase');
    let removeButton = document.getElementsByClassName('remove-item');
    let items = document.getElementsByClassName('card-items')[0];
    let totalPrice = document.getElementsByClassName('card-total-price')[0];
    let inputQuantity = document.getElementsByClassName('card-quantity');
    let addCardItems = document.getElementsByClassName('add-value');
    let parentElement = document.getElementsByClassName('parent-element')[0];
    let itemTitle = document.getElementsByClassName('item-title');

    class AddToCart {
        constructor() {
            this.checkoutItem = checkout;
            this.removeButton = removeButton;
            this.items = items;
            this.total = totalPrice;
            this.quantity = inputQuantity;
            this.cardItems = addCardItems;
            this.parentElement = parentElement;
            this.itemTitle = itemTitle;
        }

        purchase() {
            let checkItem = this.checkoutItem;
            checkItem.addEventListener('click', function (ev) {
                ev.preventDefault();
            });
        }
        remove() {
            let removeItem = this.removeButton;
            let removePrice = new AddToCart();
            for (let i = 0; i < removeItem.length; i++) {
                let item = removeItem[i];
                item.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    item.parentElement.parentElement.remove();
                    removePrice.updateTotal();
                });
            }
        }
        updatePrice() {
            let inputvalue = this.quantity;
            let updatePrice = new AddToCart();
            for (let i = 0; i < inputvalue.length; i++) {
                let inputEle = inputvalue[i];
                inputEle.addEventListener('change', function (ev) {
                    ev.preventDefault();
                    if (isNaN(inputEle.value) || inputEle.value <= 0) {
                        inputEle.value = 1;
                    }
                    updatePrice.updateTotal();
                });
            }
        }
        addCard() {
            let card = this.cardItems;
            let newCard = new AddToCart();
            for (let i = 0; i < card.length; i++) {
                let cardEle = card[i];
                cardEle.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    let parent = cardEle.parentElement.parentElement.parentElement.parentElement.parentElement;
                    let imgSrc = parent.children[0].getAttribute('src');
                    let imgAlt = parent.children[0].getAttribute('alt');
                    let title = parent.children[1].children[0].innerText;
                    let price = parseFloat(parent.children[1].children[1].innerText.replace('$', ''));
                    newCard.appendRow(imgSrc, imgAlt, title, price);
                    newCard.updateTotal();
                });
            }
        }
        appendRow(imgSrc, imgAlt, title, price) {
            let parentElementValue = this.parentElement;
            let titleEel = this.itemTitle;
            let cardButtons = new AddToCart();

            for (let i = 0; i < titleEel.length; i++) {
                let nameEle = titleEel[i];

                if (nameEle.innerText == title) {
                    $.toast({
                        heading: 'Info',
                        icon: 'info',
                        position: 'bottom-right',
                        text: 'This item is already added!',
                        showHideTransition: 'slide',
                        hideAfter: 3000
                    });
                    return false;
                }
            }

            let cardRow = document.createElement('div');
            cardRow.setAttribute('class', 'row card-row d-flex align-items-center');
            let cardCol3Img = document.createElement('div');
            cardCol3Img.setAttribute('class', 'col-3');
            let img = document.createElement('img');
            img.setAttribute('src', `${imgSrc}`)
            img.setAttribute('alt', `${imgAlt}`)
            img.setAttribute('class', 'my-1')
            img.setAttribute('style', 'width: 300px; height: 100px')
            cardRow.append(cardCol3Img);
            cardCol3Img.append(img);
            let cardCol3Model = document.createElement('div');
            cardCol3Model.setAttribute('class', 'col-3');
            let cardCol3ModelName = document.createElement('p');
            cardCol3ModelName.setAttribute('class', 'font-weight-bold text-center mt-1 item-title');
            cardCol3ModelName.innerText = title;
            cardRow.append(cardCol3Model);
            cardCol3Model.append(cardCol3ModelName);
            let cardCol3Price = document.createElement('div');
            cardCol3Price.setAttribute('class', 'col-2');
            let cardCol3PriceValue = document.createElement('p');
            cardCol3PriceValue.setAttribute('class', 'font-weight-bold text-center mt-1');
            cardCol3PriceValue.innerText = price;
            cardRow.append(cardCol3Price);
            cardCol3Price.append(cardCol3PriceValue);
            let cardCol3Quantity = document.createElement('div');
            cardCol3Quantity.setAttribute('class', 'col-2');
            let cardCol3QuantityInput = document.createElement('input');
            cardCol3QuantityInput.setAttribute('type', 'number');
            cardCol3QuantityInput.setAttribute('class', 'form-control card-quantity');
            cardCol3QuantityInput.setAttribute('value', '1');
            cardRow.append(cardCol3Quantity);
            cardCol3Quantity.append(cardCol3QuantityInput);
            let cardCol3Button = document.createElement('div');
            cardCol3Button.setAttribute('class', 'col-2');
            let cardCol3ButtonRemove = document.createElement('button');
            cardCol3ButtonRemove.setAttribute('class', 'btn btn-danger remove-item');
            cardCol3ButtonRemove.innerText = 'Remove';
            cardRow.append(cardCol3Button);
            cardCol3Button.append(cardCol3ButtonRemove);

            parentElementValue.append(cardRow);
            cardRow.getElementsByClassName('remove-item')[0].addEventListener('click', cardButtons.remove());
            cardRow.getElementsByClassName('card-quantity')[0].addEventListener('change', cardButtons.updatePrice());
        }
        updateTotal() {
            let itemTotoal = this.items;
            let totalPrice = this.total;
            let totalSum = 0;
            let itemRow = itemTotoal.getElementsByClassName('card-row');

            for (let i = 0; i < itemRow.length; i++) {
                let rowEle = itemRow[i];
                let cardPrice = rowEle.children[2].children[0];
                let cardQuantity = rowEle.children[3].children[0];
                let price = parseFloat(cardPrice.innerText.replace('$', ''));
                let quantity = parseFloat(cardQuantity.value);
                totalSum = totalSum + (price * quantity);
            }
            totalSum = Math.round(totalSum * 100) / 100;
            totalPrice.innerHTML = 'Total: $' + totalSum;
        }
    }

    let removeValue = new AddToCart();
    removeValue.remove();
    removeValue.updatePrice();
    removeValue.addCard();
}