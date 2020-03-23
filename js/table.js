"use strict";

// Main 
// Section Table 

let mainSectionTable = document.getElementById('table');

let tableContainer = document.createElement('div');
tableContainer.setAttribute('class', 'container');

let tableScoreRow = document.createElement('div');
tableScoreRow.setAttribute('class', 'row');

// Main Section Table Button Starts

let buttonDiv = document.createElement('div');
buttonDiv.setAttribute('class', 'col-lg-6');

let modalClickButton = document.createElement('button');
modalClickButton.setAttribute('type', 'submit');
modalClickButton.setAttribute('class', 'btn btn-primary my-2 mr-1');
modalClickButton.innerHTML = 'Add Row';

let modalRemoveButton = document.createElement('button');
modalRemoveButton.setAttribute('type', 'submit');
modalRemoveButton.setAttribute('class', 'btn btn-danger my-2');
modalRemoveButton.innerHTML = 'Remove Form';

buttonDiv.append(modalClickButton);
buttonDiv.append(modalRemoveButton);
tableScoreRow.append(buttonDiv);
tableContainer.append(tableScoreRow);

// Main Section Table Button Ends

let tableRow = document.createElement('div');
tableRow.setAttribute('class', 'row');

let tableCol = document.createElement('div');
tableCol.setAttribute('class', 'col-lg-6');

let table = document.createElement('table');
table.setAttribute('id', 'table');
table.setAttribute('class', 'table table-bordered text-center');

let tableThead = document.createElement('thead');
tableThead.setAttribute('class', 'thead-dark');

let tableTheadTr = document.createElement('tr');

let tableTheadTrThFirstname = document.createElement('th');
tableTheadTrThFirstname.setAttribute('scope', 'col');
tableTheadTrThFirstname.innerHTML = 'Firstname';
tableTheadTr.append(tableTheadTrThFirstname);

let tableTheadTrThLastname = document.createElement('th');
tableTheadTrThLastname.setAttribute('scope', 'col');
tableTheadTrThLastname.innerHTML = 'Lastname';
tableTheadTr.append(tableTheadTrThLastname);

let tableTheadTrThEmail = document.createElement('th');
tableTheadTrThEmail.setAttribute('scope', 'col');
tableTheadTrThEmail.innerHTML = 'Email';
tableTheadTr.append(tableTheadTrThEmail);

let tableTheadTrTh = document.createElement('th');
tableTheadTrTh.setAttribute('scope', 'col');
tableTheadTrTh.innerHTML = 'Edit&Delete'
tableTheadTr.append(tableTheadTrTh);

let tableTbody = document.createElement('tbody');
tableTbody.setAttribute('id', 'person');

mainSectionTable.append(tableContainer);
tableContainer.append(tableRow);
tableRow.append(tableCol);
tableCol.append(table);
table.append(tableThead);
tableThead.appendChild(tableTheadTr);
table.append(tableTbody);