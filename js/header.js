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
navbarItemHome.setAttribute('class', 'nav-item');
let navbarButtonHome = document.createElement('a');
navbarButtonHome.setAttribute('href', 'index.html');
navbarButtonHome.setAttribute('class', 'nav-link');
navbarButtonHome.innerHTML = 'Home';
navbarItemHome.append(navbarButtonHome);

let navbarItemAbout = document.createElement('li');
navbarItemAbout.setAttribute('class', 'nav-item');
let navbarButtonAbout = document.createElement('a');
navbarButtonAbout.setAttribute('href', 'about.html');
navbarButtonAbout.setAttribute('class', 'nav-link');
navbarButtonAbout.innerHTML = 'About';
navbarItemAbout.append(navbarButtonAbout);

let navbarItemContact = document.createElement('li');
navbarItemContact.setAttribute('class', 'nav-item');
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