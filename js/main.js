"use strict";

let gun = {
    currentPistol: 10,
    pistolCapacity: 30,
    pistolCount: 20,

    shoot: function (count) {
        if (count == undefined) {
            return false;
        }

        if (typeof (count) != "number") {
            return false;
        }

        if (count > this.currentPistol) {
            console.log("Atmaq istediyiniz qeder gulle yoxdur");
            return false;
        }

        this.currentPistol -= count;
        console.log(`${count} qeder gulle atildi, daraqda ${this.currentPistol} qeder gulle qaldi`);
        return true;
    },

    reload: function () {
        if (this.currentPistol == this.pistolCapacity) {
            console.log("Gulle sayi tamdir");
            return false;
        }

        if (this.pistolCount == 0) {
            console.log("Gulle yoxdur");
            return false;
        }

        let diff = this.pistolCapacity - this.currentPistol;

        if (this.pistolCount > diff) {
            this.currentPistol = diff;
            this.pistolCount -= diff;
        } else {
            this.currentPistol = this.pistolCount;
            this.pistolCount = 0;
        }

        console.log(`Daraqda ${this.currentPistol} qeder var, cantada is ${this.pistolCount} qeder gulle var`);
    },

    addPistol: function (pistol) {
        this.pistolCount += pistol;
        console.log(`Cantaya ${pistol} gulle elave edildi`);
    }
};

// gun.shoot(5);

// gun.reload();

// gun.shoot(20);

// gun.shoot(4);

// gun.addPistol(40);

// gun.reload();

// gun.shoot(25);

// gun.reload();

// console.log(gun);

class Gun {
    constructor(pistolCapacity) {
        this.pistolCapacity = pistolCapacity;
        this.currentPistol = 0;
        this.pistolCount = 0;
    }

    shoot(count) {
        if (count == undefined) {
            return false;
        }

        if (typeof (count) != "number") {
            return false;
        }

        if (count > this.currentPistol) {
            console.log("Atmaq istediyiniz qeder gulle yoxdur");
            return false;
        }

        this.currentPistol -= count;
        console.log(`${count} qeder gulle atildi, daraqda ${this.currentPistol} qeder gulle qaldi`);
        return true;
    }

    reload() {
        if (this.currentPistol == this.pistolCapacity) {
            console.log("Gulle sayi tamdir");
            return false;
        }

        if (this.pistolCount == 0) {
            console.log("Gulle yoxdur");
            return false;
        }

        let diff = this.pistolCapacity - this.currentPistol;

        if (this.pistolCount > diff) {
            this.currentPistol = diff;
            this.pistolCount -= diff;
        } else {
            this.currentPistol = this.pistolCount;
            this.pistolCount = 0;
        }

        console.log(`Daraqda ${this.currentPistol} qeder var, cantada is ${this.pistolCount} qeder gulle var`);
    }

    addPistol(pistol) {
        this.pistolCount += pistol;
        console.log(`Cantaya ${pistol} gulle elave edildi`);
    }
};

// let ak47 = new Gun(30);

// ak47.addPistol(100);
// ak47.reload();
// ak47.shoot(3);

// console.log(ak47);

// let m416 = new Gun(40);

// m416.addPistol(50);
// m416.reload();
// m416.shoot(5);
// m416.reload();

// console.log(m416);

// let akm = new Gun(5);

// akm.addPistol(20);
// akm.reload();
// akm.shoot(1);
// akm.shoot(1);
// akm.reload();

// console.log(akm);


// let f = document.getElementById('fname');
    // let s = document.querySelectorAll('span[id="span-val"]');

    // f.addEventListener('focus', function(ev){
    //     if (f.value.length == 0) {
    //         s[0].classList.remove('invisible');
    //         s[0].innerHTML = 'Not valid';
    //     }
    // }, true);

    // f.addEventListener('blur', function(ev){
    //     if (f.value.length == 0) {
    //         s[0].classList.remove('invisible');
    //         s[0].innerHTML = 'Not valid';
    //     }
    // }, true);

    // f.addEventListener('keyup', function(ev){
    //     if (f.value.length == 0) {
    //         s[0].classList.remove('invisible');
    //         s[0].innerHTML = 'Not valid';
    //         return false;
    //     }
    //     if (f.value.length > 0) {
    //         s[0].classList.add('invisible');
    //         s[0].innerHTML = '';
    //         return true;
    //     }
    // }, true);