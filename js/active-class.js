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

    // localStorage.setItem('name', 'Bob');
    // localStorage.removeItem('name');

    // sessionStorage.setItem('name', 'Bob');
    // sessionStorage.removeItem('name');

    // document.cookie = 'name=Kyle; expires=' + new Date('2020/06/12').toUTCString();
    // console.log(document.cookie);

    
}