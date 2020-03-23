"use strict";

// Form Score

let colScore = document.getElementById('form-score');

let formScore = document.createElement('form');
formScore.setAttribute('id', 'core-form');
formScore.setAttribute('method', 'post');

let dailyDiv = document.createElement('div');
dailyDiv.setAttribute('class', 'form-group');
let dailyLabel = document.createElement('label');
dailyLabel.setAttribute('class', 'control-label')
dailyLabel.setAttribute('for', 'Daily')
dailyLabel.innerHTML = 'Daily';
dailyDiv.append(dailyLabel);
let dailyInput = document.createElement('input');
dailyInput.setAttribute('type', 'number');
dailyInput.setAttribute('step', '0.01');
dailyInput.setAttribute('id', 'Daily');
dailyInput.setAttribute('class', 'form-control');
dailyInput.setAttribute('placeholder', 'Enter Salary $00.1...');
dailyDiv.append(dailyInput);
let dailySpan = document.createElement('span');
dailySpan.setAttribute('id', 'span-val')
dailySpan.setAttribute('class', 'invisible font-weight-bold text-danger')
dailyDiv.append(dailySpan);

let addScoreInput = document.createElement('input');
addScoreInput.setAttribute('type', 'submit');
addScoreInput.setAttribute('class', 'btn btn-primary');
addScoreInput.value = 'Add';

formScore.append(dailyDiv)
formScore.append(addScoreInput)