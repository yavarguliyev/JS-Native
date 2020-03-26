"use strict";

let dropDownValues = document.getElementById('dropdown-menu-values');
let itemValues = document.getElementById('value-count');
let addItem = document.querySelectorAll('#add-value');

let dropDownMenuImg = document.createElement('img');
dropDownMenuImg.setAttribute('id', 'product-img');
dropDownMenuImg.setAttribute('class', 'card-img-top');
dropDownMenuImg.setAttribute('style', 'width:170px; height:70px;');
let dropDownMenuModel = document.createElement('h6');
dropDownMenuModel.setAttribute('class', 'dropdown-item p-0 my-0 font-weight-bold');
let dropDownMenuPrice = document.createElement('p');
dropDownMenuPrice.setAttribute('class', 'dropdown-item p-0 my-0 font-weight-bold');
let dropDownMenuQuantity = document.createElement('p');
dropDownMenuQuantity.setAttribute('class', 'dropdown-item p-0 my-0 font-weight-bold');
let itemsDivClearButton = document.createElement('button');
itemsDivClearButton.setAttribute('type', 'submit');
itemsDivClearButton.setAttribute('id', 'clear-item');
let itemsDivClearIcon = document.createElement('i');
itemsDivClearIcon.setAttribute('class', 'fas fa-minus text-danger')
itemsDivClearButton.append(itemsDivClearIcon);
let itemsDivValues = document.createElement('div');
itemsDivValues.setAttribute('class', 'col-12 mb-4');

itemsDivValues.append(dropDownMenuImg);
itemsDivValues.append(dropDownMenuModel);
itemsDivValues.append(dropDownMenuPrice);
itemsDivValues.append(dropDownMenuQuantity);
itemsDivValues.append(itemsDivClearButton);

for (let i = 0; i < addItem.length; i++) {
    let add = addItem[i];
    add.addEventListener('click', function (ev) {
        ev.preventDefault();
        let img = addItem[i].parentElement.parentElement.parentElement.parentElement.parentElement.children[0];
        let title = addItem[i].parentElement.parentElement.parentElement.parentElement.children[0].innerHTML;
        let price = addItem[i].parentElement.parentElement.parentElement.parentElement.children[1].innerHTML;
        let quatity = addItem[i].parentElement.parentElement.children[0].children[0].value;

        let basketQuantity = dropDownValues.parentElement.parentElement.parentElement.parentElement.children[0].children[1];
        let basketQuantityCount = addItem[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childElementCount;

        dropDownMenuImg.setAttribute('src', `${img.getAttribute('src')}`);
        dropDownMenuImg.setAttribute('alt', `${img.getAttribute('alt')}`);
        dropDownMenuModel.innerHTML = 'Model: ' + title;
        dropDownMenuPrice.innerHTML = 'Price: ' + price;
        dropDownMenuQuantity.innerHTML = 'Price: ' + quatity;

        basketQuantity.innerHTML = basketQuantityCount;

        dropDownValues.prepend(itemsDivValues.cloneNode(true));

        let itemClearAll = document.getElementById('product-clear');
        let elementsValue = document.getElementsByClassName('col-12');
        itemClearAll.addEventListener('click', function (ev) {
            ev.preventDefault();
            for (let del = 0; del < elementsValue.length; del++) {
                let element = elementsValue[del];
                element.remove();
                break;
            }
        });

        let clear = document.querySelectorAll('#clear-item');

        for (let val = 0; val < clear.length; val++) {
            let ele = clear[val];

            ele.addEventListener('click', function (event) {
                event.preventDefault();
                ele.parentElement.remove();
            });
            break;
        }
    });
}