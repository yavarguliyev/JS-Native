"use strict";

// Main 
// Section Score Table

// Main Section Table Button Starts

let buttonScoreDiv = document.createElement('div');
buttonScoreDiv.setAttribute('class', 'col-lg-6');

let modalScoreClickButton = document.createElement('button');
modalScoreClickButton.setAttribute('type', 'submit');
modalScoreClickButton.setAttribute('class', 'btn btn-primary my-2 mr-1');
modalScoreClickButton.innerHTML = 'Add Score Row';

let modalScoreRemoveButton = document.createElement('button');
modalScoreRemoveButton.setAttribute('type', 'submit');
modalScoreRemoveButton.setAttribute('class', 'btn btn-danger my-2');
modalScoreRemoveButton.innerHTML = 'Remove Form';

buttonScoreDiv.append(modalScoreClickButton);
buttonScoreDiv.append(modalScoreRemoveButton);
tableScoreRow.append(buttonScoreDiv);

// Main Section Table Button Ends

let tableScoreCol = document.createElement('div');
tableScoreCol.setAttribute('class', 'col-lg-6');

let tableScore = document.createElement('table');
tableScore.setAttribute('id', 'table');
tableScore.setAttribute('class', 'table table-bordered text-center');

let tableScoreThead = document.createElement('thead');
tableScoreThead.setAttribute('class', 'thead-dark');

let tableScoreTheadTr = document.createElement('tr');

let tableScoreTheadTrThFirstname = document.createElement('th');
tableScoreTheadTrThFirstname.setAttribute('scope', 'col');
tableScoreTheadTrThFirstname.innerHTML = 'Daily';
tableScoreTheadTr.append(tableScoreTheadTrThFirstname);

let tableScoreTheadTrThLastname = document.createElement('th');
tableScoreTheadTrThLastname.setAttribute('scope', 'col');
tableScoreTheadTrThLastname.innerHTML = 'Monthly';
tableScoreTheadTr.append(tableScoreTheadTrThLastname);

let tableScoreTheadTrThEmail = document.createElement('th');
tableScoreTheadTrThEmail.setAttribute('scope', 'col');
tableScoreTheadTrThEmail.innerHTML = 'Yearly';
tableScoreTheadTr.append(tableScoreTheadTrThEmail);

let tableScoreTheadTrTh = document.createElement('th');
tableScoreTheadTrTh.setAttribute('scope', 'col');
tableScoreTheadTrTh.innerHTML = 'Edit&Delete'
tableScoreTheadTr.append(tableScoreTheadTrTh);

let tableScoreTbody = document.createElement('tbody');
tableScoreTbody.setAttribute('id', 'info');

tableRow.append(tableScoreCol);
tableScoreCol.append(tableScore);
tableScore.append(tableScoreThead);
tableScoreThead.appendChild(tableScoreTheadTr);
tableScoreTheadTr.append(tableScoreTbody);