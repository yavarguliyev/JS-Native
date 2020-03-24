"use strict";

// Section Form

let colInfo = document.getElementById('form-info');

let form = document.createElement('form');
form.setAttribute('id', 'form-onsubmit');
form.setAttribute('method', 'post');

let fnameDiv = document.createElement('div');
fnameDiv.setAttribute('class', 'form-group');
let fnameLabel = document.createElement('label');
fnameLabel.setAttribute('class', 'control-label')
fnameLabel.setAttribute('for', 'fname')
fnameLabel.innerHTML = 'Firstname';
fnameDiv.append(fnameLabel);
let fnameInput = document.createElement('input');
fnameInput.setAttribute('type', 'text');
fnameInput.setAttribute('id', 'fname');
fnameInput.setAttribute('class', 'form-control input-val');
fnameInput.setAttribute('placeholder', 'Enter Firstname...');
fnameDiv.append(fnameInput);
let fnameSpan = document.createElement('span');
fnameSpan.setAttribute('id', 'span-val')
fnameSpan.setAttribute('class', 'invisible font-weight-bold text-danger')
fnameDiv.append(fnameSpan);

let lnameDiv = document.createElement('div');
lnameDiv.setAttribute('class', 'form-group');
let lnameLabel = document.createElement('label');
lnameLabel.setAttribute('class', 'control-label')
lnameLabel.setAttribute('for', 'lname')
lnameLabel.innerHTML = 'Lastname';
lnameDiv.append(lnameLabel);
let lnameInput = document.createElement('input');
lnameInput.setAttribute('type', 'text');
lnameInput.setAttribute('id', 'lname');
lnameInput.setAttribute('class', 'form-control input-val');
lnameInput.setAttribute('placeholder', 'Enter Lastname...');
lnameDiv.append(lnameInput);
let lnameSpan = document.createElement('span');
lnameSpan.setAttribute('id', 'span-val')
lnameSpan.setAttribute('class', 'invisible font-weight-bold text-danger')
lnameDiv.append(lnameSpan);

let emailDiv = document.createElement('div');
emailDiv.setAttribute('class', 'form-group');
let emailLabel = document.createElement('label');
emailLabel.setAttribute('class', 'control-label')
emailLabel.setAttribute('for', 'email')
emailLabel.innerHTML = 'Email';
emailDiv.append(emailLabel);
let emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('class', 'form-control input-val');
emailInput.setAttribute('placeholder', 'Enter Email Address...');
emailDiv.append(emailInput);
let emailSpan = document.createElement('span');
emailSpan.setAttribute('id', 'span-val')
emailSpan.setAttribute('class', 'invisible font-weight-bold text-danger')
emailDiv.append(emailSpan);

let passwordDiv = document.createElement('div');
passwordDiv.setAttribute('class', 'form-group');
let passwordLabel = document.createElement('label');
passwordLabel.setAttribute('class', 'control-label')
passwordLabel.setAttribute('for', 'password')
passwordLabel.innerHTML = 'Password';
passwordDiv.append(passwordLabel);
let passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('class', 'form-control input-val');
passwordInput.setAttribute('placeholder', '******');
passwordDiv.append(passwordInput);
let passwordSpan = document.createElement('span');
passwordSpan.setAttribute('id', 'span-val')
passwordSpan.setAttribute('class', 'invisible font-weight-bold text-danger')
passwordDiv.append(passwordSpan);

let cpasswordDiv = document.createElement('div');
cpasswordDiv.setAttribute('class', 'form-group');
let cpasswordLabel = document.createElement('label');
cpasswordLabel.setAttribute('class', 'control-label')
cpasswordLabel.setAttribute('for', 'cpassword')
cpasswordLabel.innerHTML = 'Repeat Password';
cpasswordDiv.append(cpasswordLabel);
let cpasswordInput = document.createElement('input');
cpasswordInput.setAttribute('type', 'password');
cpasswordInput.setAttribute('id', 'cpassword');
cpasswordInput.setAttribute('class', 'form-control input-val');
cpasswordInput.setAttribute('placeholder', '******');
cpasswordDiv.append(cpasswordInput);
let cpasswordSpan = document.createElement('span');
cpasswordSpan.setAttribute('id', 'span-val')
cpasswordSpan.setAttribute('class', 'invisible font-weight-bold text-danger')
cpasswordDiv.append(cpasswordSpan);

let addInput = document.createElement('input');
addInput.setAttribute('type', 'submit');
addInput.setAttribute('class', 'btn btn-primary');
addInput.value = 'Add';

form.append(fnameDiv);
form.append(lnameDiv);
form.append(emailDiv);
form.append(passwordDiv);
form.append(cpasswordDiv);
form.append(addInput);