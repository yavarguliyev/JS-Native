"use strict";

// Header

let header = document.getElementById('header');

let nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-primary fixed-top');

let container = document.createElement('div');
container.setAttribute('class', 'container');

let symbolButton = document.createElement('a');
symbolButton.setAttribute('href', 'index.html');
symbolButton.setAttribute('class', 'navbar-brand');
symbolButton.innerHTML = 'JavaScript';

let symbolButtonImage = document.createElement('img');
symbolButtonImage.setAttribute('class', 'd-inline-block align-top');
symbolButtonImage.setAttribute('widht', '30');
symbolButtonImage.setAttribute('height', '30');
symbolButtonImage.setAttribute('src', 'img/javascript-icon-clipart-6.png');
symbolButtonImage.setAttribute('alt', 'js');

let navbarList = document.createElement('div');
navbarList.setAttribute('id', 'navbarSupportedContent');
navbarList.setAttribute('class', 'collapse navbar-collapse');

let navbarUl = document.createElement('ul');
navbarUl.setAttribute('id', 'navbar-list');
navbarUl.setAttribute('class', 'navbar-nav ml-auto');

let navbarItemHome = document.createElement('li');
navbarItemHome.setAttribute('class', 'nav-item font-weight-bold');
let navbarButtonHome = document.createElement('a');
navbarButtonHome.setAttribute('href', 'index.html');
navbarButtonHome.setAttribute('class', 'nav-link');
navbarButtonHome.innerHTML = 'Home';
navbarItemHome.append(navbarButtonHome);

let navbarItemAbout = document.createElement('li');
navbarItemAbout.setAttribute('class', 'nav-item font-weight-bold');
let navbarButtonAbout = document.createElement('a');
navbarButtonAbout.setAttribute('href', 'about.html');
navbarButtonAbout.setAttribute('class', 'nav-link');
navbarButtonAbout.innerHTML = 'About';
navbarItemAbout.append(navbarButtonAbout);

let navbarItemContact = document.createElement('li');
navbarItemContact.setAttribute('class', 'nav-item font-weight-bold');
let navbarButtonContact = document.createElement('a');
navbarButtonContact.setAttribute('href', 'contact.html');
navbarButtonContact.setAttribute('class', 'nav-link');
navbarButtonContact.innerHTML = 'Contact';
navbarItemContact.append(navbarButtonContact);

header.append(nav);
nav.append(container);
container.append(symbolButtonImage);
container.append(symbolButton);
container.append(navbarList);
navbarList.append(navbarUl);
navbarUl.append(navbarItemHome);
navbarUl.append(navbarItemAbout);
navbarUl.append(navbarItemContact);

let searchBar = document.createElement('form')
searchBar.setAttribute('class', 'form-inline my-2 my-lg-0');
let searchBarInput = document.createElement('input');
searchBarInput.setAttribute('id', 'search-input');
searchBarInput.setAttribute('class', 'form-control search-form mr-sm-2');
searchBarInput.setAttribute('type', 'search');
searchBarInput.setAttribute('placeholder', 'Search');
searchBarInput.setAttribute('aria-label', 'Search');
let searchSubmitButon = document.createElement('input');
searchSubmitButon.setAttribute('id', 'search-submit-input');
searchSubmitButon.setAttribute('class', 'btn btn-success my-2 my-sm-0');
searchSubmitButon.setAttribute('type', 'submit');
searchSubmitButon.setAttribute('value', 'Search');
let serachValueSpan = document.createElement('span');
serachValueSpan.setAttribute('id', 'search-span');
serachValueSpan.setAttribute('class', 'invisible font-weight-bold text-danger');

container.append(searchBar);
searchBar.append(searchBarInput);
searchBar.append(searchSubmitButon);
searchBar.append(serachValueSpan);

let basket = document.createElement('div');
basket.setAttribute('id', 'basket');
basket.setAttribute('class', 'basket d-flex m-2');

let basketbutton = document.createElement('a');
basketbutton.setAttribute('href', '#');
basketbutton.setAttribute('id', 'basket-button');
basketbutton.setAttribute('class', 'basket-button text-dark');

let basketbuttonIcon = document.createElement('i');
basketbuttonIcon.setAttribute('class', 'fas fa-cart-plus fa-2x');

let showProduct = document.createElement('div');
showProduct.setAttribute('class', 'dropdown');

let showProductButton = document.createElement('button');
showProductButton.setAttribute('id', 'dropdownMenu2');
showProductButton.setAttribute('class', 'btn btn-secondary dropdown-toggle');
showProductButton.setAttribute('type', 'submit');
showProductButton.setAttribute('data-toggle', 'dropdown');
showProductButton.setAttribute('aria-haspopup', 'true');
showProductButton.setAttribute('aria-expanded', 'false');
showProduct.append(showProductButton);

let showProductMenu = document.createElement('div');
showProductMenu.setAttribute('class', 'dropdown-menu');
showProductMenu.setAttribute('aria-labelledby', 'dropdownMenu2');

showProduct.append(showProductMenu);

let showProductMenuProduct6 = document.createElement('img');
showProductMenuProduct6.setAttribute('id', 'product-img');
showProductMenuProduct6.setAttribute('class', 'card-img-top');
showProductMenuProduct6.setAttribute('alt', '');
showProductMenuProduct6.setAttribute('style', 'width:170px; height:100px;');

showProductMenu.append(showProductMenuProduct6);

let showProductMenuProduct1 = document.createElement('p');
showProductMenuProduct1.setAttribute('type', 'submit');
showProductMenuProduct1.setAttribute('id', 'product-name');
showProductMenuProduct1.setAttribute('class', 'dropdown-item text-center');
showProductMenuProduct1.innerHTML = ``;

showProductMenu.append(showProductMenuProduct1);

let showProductMenuProduct2 = document.createElement('p');
showProductMenuProduct2.setAttribute('type', 'submit');
showProductMenuProduct2.setAttribute('id', 'product-price');
showProductMenuProduct2.setAttribute('class', 'dropdown-item text-center');
showProductMenuProduct2.innerHTML = ``;

showProductMenu.append(showProductMenuProduct2);

let showProductMenuProduct3 = document.createElement('p');
showProductMenuProduct3.setAttribute('type', 'submit');
showProductMenuProduct3.setAttribute('id', 'product-quantity');
showProductMenuProduct3.setAttribute('class', 'dropdown-item text-center');
showProductMenuProduct3.innerHTML = ``;

showProductMenu.append(showProductMenuProduct3);

let showProductMenuProduct5 = document.createElement('button');
showProductMenuProduct5.setAttribute('type', 'submit');
showProductMenuProduct5.setAttribute('id', 'product-clear');
showProductMenuProduct5.setAttribute('class', 'btn btn-danger m-1');
showProductMenuProduct5.innerHTML = 'Clear';

let showProductMenuProduct4 = document.createElement('button');
showProductMenuProduct4.setAttribute('type', 'submit');
showProductMenuProduct4.setAttribute('id', 'product-checkout');
showProductMenuProduct4.setAttribute('class', 'btn btn-success m-1');
showProductMenuProduct4.innerHTML = 'Checkout';

showProductMenu.append(showProductMenuProduct5);
showProductMenu.append(showProductMenuProduct4);

let basketQuantity = document.createElement('span');
basketQuantity.setAttribute('id', 'count-value');
basketQuantity.setAttribute('class', 'm-2');
basketQuantity.innerHTML = 0;

container.append(basket);
basket.append(basketbutton);
basket.append(showProduct);
basketbutton.append(basketbuttonIcon);
basketbutton.append(basketQuantity);

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

let urlActive = new ActiveClass();
urlActive.activeUrl();