"use strict";

// Info Validation

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
            document.getElementById('modalInfo').modal('show');
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

// Show Inputs Starts

modalClickButton.addEventListener('click', function (ev) {
    ev.preventDefault();
    colInfo.append(form);

    let formInfo = document.getElementById('form-onsubmit');

    formInfo.addEventListener('keyup', function (ev) {
        ev.preventDefault();
        let form = new Validation();
        form.required();
    });

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

// Show Inputs Ends