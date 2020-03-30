if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    "use strict";

    // Main 
    // Section Info Table Starts 

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

    // Section Info Table Starts 

    // Main 
    // Section Score Table Starts

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
    tableScoreTbody.setAttribute('id', 'score');

    tableRow.append(tableScoreCol);
    tableScoreCol.append(tableScore);
    tableScore.append(tableScoreThead);
    tableScoreThead.appendChild(tableScoreTheadTr);
    tableScore.append(tableScoreTbody);

    // Section Score Table Starts

    // Info Inputs Starts

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

    // Info Inputs Ends

    // Score Inputs Starts

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
    dailyInput.setAttribute('class', 'form-control score-input');
    dailyInput.setAttribute('placeholder', 'Enter Salary $10.01...');
    dailyDiv.append(dailyInput);
    let dailySpan = document.createElement('span');
    dailySpan.setAttribute('id', 'score-val')
    dailySpan.setAttribute('class', 'invisible font-weight-bold text-danger')
    dailyDiv.append(dailySpan);

    let addScoreInput = document.createElement('input');
    addScoreInput.setAttribute('type', 'submit');
    addScoreInput.setAttribute('class', 'btn btn-primary');
    addScoreInput.value = 'Add';

    formScore.append(dailyDiv)
    formScore.append(addScoreInput)

    // Score Inputs Starts

    class Validation {
        constructor() {
            const input = document.getElementsByClassName('input-val');

            const span = document.querySelectorAll('span[id="span-val"]');

            const input_error_messages = {
                fname: 'Firstname required!',
                lname: 'Lastname required!',
                email: 'Email address required!',
                password: 'Password required!',

                cpassword: 'Confirm Password required!',
                fnameMin: 'Firstname can be min 2 characters!',
                lnameMin: 'Lastname can be min 2 characters!',
                emailMin: 'Email address can be min 11 characters!',
                passwordMin: 'Password can be min 6 characters!',
                cpasswordMin: 'Confirm password can be min 6 characters!',

                fnameMax: 'Firstname can be max 50 characters!',
                lnameMax: 'Lastname can be max 50 characters!',
                emailMax: 'Email address can be max 50 characters!',
                passwordMax: 'Password can be max 100 characters!',
                cpasswordMax: 'Confirm password can be max 100 characters!',

                matchesPasswords: 'Confirm password should match current password!'
            };

            const person = [];

            this.input = input;
            this.span = span;

            this.fnameRequired = input_error_messages.fname;
            this.lnameRequired = input_error_messages.lname;
            this.emailRequired = input_error_messages.email;
            this.passwordRequired = input_error_messages.password;
            this.cpasswordRequired = input_error_messages.cpassword;

            this.fnameMin = input_error_messages.fnameMin;
            this.lnameMin = input_error_messages.lnameMin;
            this.emailMin = input_error_messages.emailMin;
            this.passwordMin = input_error_messages.passwordMin;
            this.cpasswordMin = input_error_messages.cpasswordMin;

            this.fnameMax = input_error_messages.fnameMax;
            this.lnameMax = input_error_messages.lnameMax;
            this.emailMax = input_error_messages.emailMax;
            this.passwordMax = input_error_messages.passwordMax;
            this.cpasswordMax = input_error_messages.cpasswordMax;

            this.match = input_error_messages.matchesPasswords;

            this.person = person;
        }

        required() {
            const fname = this.input[0];
            const fnameStyle = this.input[0];

            const fnameSpanClass = this.span[0].classList;
            const fnameContains = this.span[0].classList.contains('invisible') ? true : false;
            const fnameSpanText = this.span[0];

            const fnameRequired = this.fnameRequired;
            const fnameMin = this.fnameMin;
            const fnameMax = this.fnameMax;

            fname.addEventListener('keyup', function (ev) {
                if (fname.value.length == 0) {
                    if (fnameContains == false) {
                        fnameSpanText.innerHTML = fnameRequired;
                        fnameStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (fnameContains == true) {
                        fnameSpanClass.remove('invisible');
                        fnameSpanText.innerHTML = fnameRequired;
                        fnameStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (fname.value.length < 2) {
                    if (fnameContains == false) {
                        fnameSpanText.innerHTML = fnameMin;
                        fnameStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (fnameContains == true) {
                        fnameSpanClass.remove('invisible');
                        fnameSpanText.innerHTML = fnameMin;
                        fnameStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (fname.value.length > 50) {
                    if (fnameContains == false) {
                        fnameSpanText.innerHTML = fnameMax;
                        fnameStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (fnameContains == true) {
                        fnameSpanClass.remove('invisible');
                        fnameSpanText.innerHTML = fnameMax;
                        fnameStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (fname.value.length >= 2 && fname.value.length <= 50) {
                    fnameSpanClass.add('invisible');
                    fnameSpanText.innerHTML = '';
                    fnameStyle.style.borderColor = '';
                }
            }, true);

            const lname = this.input[1];
            const lnameStyle = this.input[1];

            const lnameSpanClass = this.span[1].classList;
            const lnameContains = this.span[1].classList.contains('invisible') ? true : false;
            const lnameSpanText = this.span[1];

            const lnameRequired = this.lnameRequired;
            const lnameMin = this.lnameMin;
            const lnameMax = this.lnameMax;

            lname.addEventListener('keyup', function (ev) {
                if (lname.value.length == 0) {
                    if (lnameContains == false) {
                        lnameSpanText.innerHTML = lnameRequired;
                        lnameStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (lnameContains == true) {
                        lnameSpanClass.remove('invisible');
                        lnameSpanText.innerHTML = lnameRequired;
                        lnameStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (lname.value.length < 2) {
                    if (lnameContains == false) {
                        lnameSpanText.innerHTML = lnameMin;
                        lnameStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (lnameContains == true) {
                        lnameSpanClass.remove('invisible');
                        lnameSpanText.innerHTML = lnameMin;
                        lnameStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (lname.value.length > 50) {
                    if (lnameContains == false) {
                        lnameSpanText.innerHTML = lnameMax;
                        lnameStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (lnameContains == true) {
                        lnameSpanClass.remove('invisible');
                        lnameSpanText.innerHTML = lnameMax;
                        lnameStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (lname.value.length >= 2 && lname.value.length <= 50) {
                    lnameSpanClass.add('invisible');
                    lnameSpanText.innerHTML = '';
                    lnameStyle.style.borderColor = '';
                }
            }, true);

            const email = this.input[2];
            const emailStyle = this.input[2];

            const emailSpanClass = this.span[2].classList;
            const emailContains = this.span[2].classList.contains('invisible') ? true : false;
            const emailSpanText = this.span[2];

            const emailRequired = this.emailRequired;
            const emailMin = this.emailMin;
            const emailMax = this.emailMax;

            email.addEventListener('keyup', function (ev) {
                if (email.value.length == 0) {
                    if (emailContains == false) {
                        emailSpanText.innerHTML = emailRequired;
                        emailStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (emailContains == true) {
                        emailSpanClass.remove('invisible');
                        emailSpanText.innerHTML = emailRequired;
                        emailStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (email.value.length < 11) {
                    if (emailContains == false) {
                        emailSpanText.innerHTML = emailMin;
                        emailStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (emailContains == true) {
                        emailSpanClass.remove('invisible');
                        emailSpanText.innerHTML = emailMin;
                        emailStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (email.value.length > 50) {
                    if (emailContains == false) {
                        emailSpanText.innerHTML = emailMax;
                        emailStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (emailContains == true) {
                        emailSpanClass.remove('invisible');
                        emailSpanText.innerHTML = emailMax;
                        emailStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (email.value.length >= 11 && email.value.length <= 50) {
                    emailSpanClass.add('invisible');
                    emailSpanText.innerHTML = '';
                    emailStyle.style.borderColor = '';
                }
            });

            const password = this.input[3];
            const passwordStyle = this.input[3];

            const cpassword = this.input[4];
            const cpasswordStyle = this.input[4];

            const passwordSpanClass = this.span[3].classList;
            const passwordContains = this.span[3].classList.contains('invisible') ? true : false;
            const passwordSpanText = this.span[3];

            const cpasswordSpanClass = this.span[4].classList;
            const cpasswordContains = this.span[4].classList.contains('invisible') ? true : false;
            const cpasswordSpanText = this.span[4];

            const passwordRequired = this.passwordRequired;
            const passwordMin = this.passwordMin;
            const passwrodMax = this.passwordMax;

            const cpasswordRequired = this.cpasswordRequired;
            const cpasswordMin = this.cpasswordMin;
            const cpasswrodMax = this.cpasswordMax;
            const cpasswrodMatch = this.match;


            password.addEventListener('keyup', function (ev) {
                if (password.value.length == 0) {
                    if (passwordContains == false) {
                        passwordSpanText.innerHTML = passwordRequired;
                        passwordStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (passwordContains == true) {
                        passwordSpanClass.remove('invisible');
                        passwordSpanText.innerHTML = passwordRequired;
                        passwordStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (password.value.length < 6) {
                    if (passwordContains == false) {
                        passwordSpanText.innerHTML = passwordMin;
                        passwordStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (passwordContains == true) {
                        passwordSpanClass.remove('invisible');
                        passwordSpanText.innerHTML = passwordMin;
                        passwordStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (password.value.length > 100) {
                    if (passwordContains == false) {
                        passwordSpanText.innerHTML = passwrodMax;
                        passwordStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (passwordContains == true) {
                        passwordSpanClass.remove('invisible');
                        passwordSpanText.innerHTML = passwrodMax;
                        passwordStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (password.value.length >= 6 && password.value.length <= 100) {
                    passwordSpanClass.add('invisible');
                    passwordSpanText.innerHTML = '';
                    passwordStyle.style.borderColor = '';
                }
                if (password.value == cpassword.value) {
                    cpasswordSpanClass.add('invisible');
                    cpasswordSpanText.innerHTML = '';
                    cpasswordStyle.style.borderColor = '';
                }
            }, true);

            cpassword.addEventListener('keyup', function (ev) {
                if (cpassword.value.length == 0) {
                    if (cpasswordContains == false) {
                        cpasswordSpanText.innerHTML = cpasswordRequired;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (cpasswordContains == true) {
                        cpasswordSpanClass.remove('invisible');
                        cpasswordSpanText.innerHTML = cpasswordRequired;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (cpassword.value.length < 6) {
                    if (cpasswordContains == false) {
                        cpasswordSpanText.innerHTML = cpasswordMin;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (cpasswordContains == true) {
                        cpasswordSpanClass.remove('invisible');
                        cpasswordSpanText.innerHTML = cpasswordMin;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (cpassword.value.length > 100) {
                    if (cpasswordContains == false) {
                        cpasswordSpanText.innerHTML = cpasswrodMax;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (cpasswordContains == true) {
                        cpasswordSpanClass.remove('invisible');
                        cpasswordSpanText.innerHTML = cpasswrodMax;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (password.value != cpassword.value) {
                    if (cpasswordContains == false) {
                        cpasswordSpanText.innerHTML = cpasswrodMatch;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                    if (cpasswordContains == true) {
                        cpasswordSpanClass.remove('invisible');
                        cpasswordSpanText.innerHTML = cpasswrodMatch;
                        cpasswordStyle.style.borderColor = 'red';
                        return false;
                    }
                }
                if (cpassword.value.length >= 6 && cpassword.value.length <= 100 && password.value == cpassword.value) {
                    cpasswordSpanClass.add('invisible');
                    cpasswordSpanText.innerHTML = '';
                    cpasswordStyle.style.borderColor = '';
                }
            }, true);
        }
        valid() {
            if (this.input[0].value.length >= 2 && this.input[1].value.length >= 2 &&
                this.input[2].value.length >= 11 && this.input[3].value.length >= 6 &&
                this.input[4].value.length >= 6) {
                return true;
            }
            return false;
        }
        pushPerson() {
            let p = new Validation();
            this.person.push(p);
        }
        append() {
            this.pushPerson();
            let tableTbody = document.getElementById('person');
            let tableTbodyTr = document.createElement('tr');
            let tableTbodyTrTdFirstname = document.createElement('td');
            let tableTbodyTrTdLastname = document.createElement('td');
            let tableTbodyTrTdEmail = document.createElement('td');
            let tableTbodyTrTdIcons = document.createElement('td');
            let tableTbodyTrTdIconsEdit = document.createElement('a');
            let tableTbodyTrTdIconsEditIcon = document.createElement('i');
            let tableTbodyTrTdIconsDelete = document.createElement('a');
            let tableTbodyTrTdIconsDeleteIcon = document.createElement('i');

            tableTbodyTrTdIconsEdit.setAttribute('id', 'edit-info');
            tableTbodyTrTdIconsEdit.setAttribute('href', '#');
            tableTbodyTrTdIconsEdit.setAttribute('data-toggle', 'modal');
            tableTbodyTrTdIconsEdit.setAttribute('data-target', 'modalInfo');
            tableTbodyTrTdIconsEditIcon.setAttribute('class', 'fas fa-edit');
            tableTbodyTrTdIconsEditIcon.setAttribute('aria-hidden', 'true');
            tableTbodyTrTdIconsEdit.append(tableTbodyTrTdIconsEditIcon);
            tableTbodyTrTdIcons.append(tableTbodyTrTdIconsEdit);
            tableTbodyTrTdIconsDelete.append(tableTbodyTrTdIconsDeleteIcon);
            tableTbodyTrTdIcons.append(tableTbodyTrTdIconsDelete);
            tableTbodyTrTdIconsDelete.setAttribute('id', 'sweet-delete');
            tableTbodyTrTdIconsDelete.setAttribute('aria-hidden', 'true');
            tableTbodyTrTdIconsDelete.setAttribute('href', '#');
            tableTbodyTrTdIconsDeleteIcon.setAttribute('class', 'fas fa-trash-alt text-danger');

            tableTbodyTr.append(tableTbodyTrTdFirstname);
            tableTbodyTr.append(tableTbodyTrTdLastname);
            tableTbodyTr.append(tableTbodyTrTdEmail);
            tableTbodyTr.append(tableTbodyTrTdIcons);

            for (let i = 0; i < this.person.length; i++) {
                const p = this.person[i];

                tableTbodyTrTdFirstname.innerHTML = p.input[0].value;
                tableTbodyTrTdLastname.innerHTML = p.input[1].value;
                tableTbodyTrTdEmail.innerHTML = p.input[2].value;
            }

            tableTbody.prepend(tableTbodyTr);
            this.reset();

            document.getElementById("sweet-delete").addEventListener("click", function (ev) {
                ev.preventDefault();
                let row = this.parentNode.parentNode;

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        row.parentNode.removeChild(row);
                        $.toast({
                            heading: 'Success',
                            icon: 'success',
                            position: 'bottom-right',
                            text: 'Deleted!',
                            showHideTransition: 'slide',
                            hideAfter: 3000
                        });
                    }
                });
            });

            document.getElementById("edit-info").addEventListener("click", function (ev) {
                ev.preventDefault();
            });
        }
        reset() {
            for (let i = 0; i < this.span.length; i++) {
                this.span[i].classList.add('invisible');
                this.span[i].innerHTML = '';
            }
            document.getElementById('form-onsubmit').reset();
        }
    }

    // Show Info Inputs Starts

    modalClickButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        colInfo.append(form);

        let formInfo = document.getElementById('form-onsubmit');

        formInfo.addEventListener('keyup', function (ev) {
            ev.preventDefault();
            let form = new Validation();
            form.required();
        }, true);

        formInfo.addEventListener('submit', function (ev) {
            ev.preventDefault();
            let val = new Validation();
            if (val.required() == false) {
                return false;
            }
            if (val.valid()) {
                val.append();
                val.reset();
                $.toast({
                    heading: 'Success',
                    icon: 'success',
                    position: 'bottom-right',
                    text: 'New Person Created!',
                    showHideTransition: 'slide',
                    hideAfter: 3000
                });
                return true;
            }
        });
    });

    modalRemoveButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        let form = document.getElementById('form-onsubmit');
        const input = document.querySelectorAll('.input-val');
        const span = document.querySelectorAll('span[id="span-val"]');
        for (let i = 0; i < span.length; i++) {
            span[i].classList.add('invisible');
            span[i].innerHTML = '';
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            input[i].style.borderColor = '';
        }
        colInfo.removeChild(form);
    });

    // Show Info Inputs Ends

    class ScoreValidation {
        constructor() {
            this.scoreInput = document.getElementsByClassName('score-input');
            this.span = document.getElementById('score-val');

            const score = [];
            this.score = score;
        }

        required() {
            const input = this.scoreInput;
            const span = this.span;
            let contains = span.classList.contains('invisible') ? true : false;
            for (let i = 0; i < input.length; i++) {
                const inputEle = input[i];

                if (parseFloat(inputEle.value) < 10.01) {
                    if (contains) {
                        inputEle.value = 10.01;
                        span.classList.remove('invisible');
                        span.innerHTML = 'The min daily salary can be 10 USD!';
                        return false;
                    }
                    if (!contains) {
                        inputEle.value = 10.01;
                        span.innerHTML = 'The min daily salary can be 10 USD!';
                        return false;
                    }
                }
                if (parseFloat(inputEle.value) > 100) {
                    if (contains) {
                        inputEle.value = 100.00;
                        span.classList.remove('invisible');
                        span.innerHTML = 'The max daily salary can be 100 USD!';
                        return false;
                    }
                    if (!contains) {
                        inputEle.value = 100.00;
                        span.innerHTML = 'The max daily salary can be 100 USD!';
                        return false;
                    }
                }
                if (parseFloat(inputEle.value) >= 10.01 && parseFloat(inputEle.value) <= 100) {
                    span.classList.add('invisible');
                    span.innerHTML = '';
                    return true;
                }
            }
        }
        push() {
            let newScore = new ScoreValidation();
            this.score.push(newScore);
        }
        valid() {
            if (parseFloat(this.scoreInput[0].value) >= 10 && parseFloat(this.scoreInput[0].value) <= 100) {
                return true;
            }
            return false;
        }
        append() {
            this.push();
            let tableScoreTbody = document.getElementById('score');
            let tableScoreTbodyTr = document.createElement('tr');
            let tableScoreTbodyTrTdFirstname = document.createElement('td');
            let tableScoreTbodyTrTdLastname = document.createElement('td');
            let tableScoreTbodyTrTdEmail = document.createElement('td');
            let tableScoreTbodyTrTdIcons = document.createElement('td');
            let tableScoreTbodyTrTdIconsEdit = document.createElement('a');
            let tableScoreTbodyTrTdIconsEditIcon = document.createElement('i');
            let tableScoreTbodyTrTdIconsDelete = document.createElement('a');
            let tableScoreTbodyTrTdIconsDeleteIcon = document.createElement('i');

            tableScoreTbodyTrTdIconsEdit.setAttribute('id', 'edit-score-info');
            tableScoreTbodyTrTdIconsEdit.setAttribute('href', '#');
            tableScoreTbodyTrTdIconsEdit.setAttribute('data-toggle', 'modal');
            tableScoreTbodyTrTdIconsEdit.setAttribute('data-target', 'modalInfo');
            tableScoreTbodyTrTdIconsEditIcon.setAttribute('class', 'fas fa-edit');
            tableScoreTbodyTrTdIconsEditIcon.setAttribute('aria-hidden', 'true');
            tableScoreTbodyTrTdIconsEdit.append(tableScoreTbodyTrTdIconsEditIcon);
            tableScoreTbodyTrTdIcons.append(tableScoreTbodyTrTdIconsEdit);
            tableScoreTbodyTrTdIconsDelete.append(tableScoreTbodyTrTdIconsDeleteIcon);
            tableScoreTbodyTrTdIcons.append(tableScoreTbodyTrTdIconsDelete);
            tableScoreTbodyTrTdIconsDelete.setAttribute('id', 'sweet-score-delete');
            tableScoreTbodyTrTdIconsDelete.setAttribute('aria-hidden', 'true');
            tableScoreTbodyTrTdIconsDelete.setAttribute('href', '#');
            tableScoreTbodyTrTdIconsDeleteIcon.setAttribute('class', 'fas fa-trash-alt text-danger');

            tableScoreTbodyTr.append(tableScoreTbodyTrTdFirstname);
            tableScoreTbodyTr.append(tableScoreTbodyTrTdLastname);
            tableScoreTbodyTr.append(tableScoreTbodyTrTdEmail);
            tableScoreTbodyTr.append(tableScoreTbodyTrTdIcons);

            for (let i = 0; i < this.score.length; i++) {
                const s = this.score[i];

                let daily = (parseFloat(s.scoreInput[0].value));
                daily = Math.round(daily * 100) / 100;
                tableScoreTbodyTrTdFirstname.innerHTML = '$ ' + daily;
                let monthly = (parseFloat(s.scoreInput[0].value * 20));
                monthly = Math.round(monthly * 100) / 100;
                tableScoreTbodyTrTdLastname.innerHTML = '$ ' + monthly;
                let yearly = (parseFloat(s.scoreInput[0].value * 240));
                yearly = Math.round(yearly * 100) / 100;
                tableScoreTbodyTrTdEmail.innerHTML = '$ ' + yearly;
            }

            tableScoreTbody.prepend(tableScoreTbodyTr);
            this.reset();
            document.getElementById("sweet-score-delete").addEventListener("click", function (ev) {
                ev.preventDefault();
                let row = this.parentNode.parentNode;

                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        row.parentNode.removeChild(row);
                        $.toast({
                            heading: 'Success',
                            icon: 'success',
                            position: 'bottom-right',
                            text: 'Deleted!',
                            showHideTransition: 'slide',
                            hideAfter: 3000
                        });
                    }
                });
            });

            document.getElementById("edit-score-info").addEventListener("click", function (ev) {
                ev.preventDefault();
            });
        }
        reset() {
            this.span.classList.add('invisible');
            this.span.innerHTML = '';
            document.getElementById('core-form').reset();
        }
    }

    // Show Score Inputs Starts

    modalScoreClickButton.addEventListener('click', function (ev) {
        ev.preventDefault();
        colScore.append(formScore);

        document.getElementById('core-form').addEventListener('change', function (ev) {
            ev.preventDefault();
            let score = new ScoreValidation();
            score.required();
        });

        document.getElementById('core-form').addEventListener('submit', function (ev) {
            ev.preventDefault();
            let scoreAppend = new ScoreValidation();

            if (scoreAppend.required() == false) {
                return false;
            }
            if (scoreAppend.valid()) {
                scoreAppend.append();
                scoreAppend.reset();
                $.toast({
                    heading: 'Success',
                    icon: 'success',
                    position: 'bottom-right',
                    text: 'Salary Statement Created!',
                    showHideTransition: 'slide',
                    hideAfter: 3000
                });
                return true;
            }
        });
    });

    modalScoreRemoveButton.addEventListener('click', function (ev) {
        ev.preventDefault();

        let form = document.getElementById('core-form');
        let input = document.getElementsByClassName('score-input');
        let span = document.getElementById('score-val');

        span.classList.add('invisible');
        span.innerHTML = '';

        input[0].value = '';

        colScore.removeChild(form);
    });

    // Show Score Inputs Ends
}