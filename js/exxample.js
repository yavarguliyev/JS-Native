"use strict";

let students = [];
let inputs = document.getElementsByClassName("form-control");
let inputScore = document.getElementsByClassName("form-score");

let studentArray = [];

let scoreList = document.querySelector("#scores");
let studentList = document.querySelector("#students");

let inputsEmail = document.querySelector("#student-email");
let inputsScore = document.querySelector("#student-score");


/* Constructor objects */

function Student(name, surname, email, birthday) {
    this.Name = name;
    this.Surname = surname;
    this.Email = email;
    this.Birthday = birthday;
    this.Score = [];
    this.AddScore = function (score) {
        this.Score.push(score);
    };

    this.GetAverageScore = function () {
        let average = 0;

        if (this.Score.length > 0) {
            for (let i = 0; i < this.Score.length; i++) {
                average += this.Score[i];
            }
            average = average / this.Score.length;
        }
        return average;
    };
    this.info = function () {
        return this.Name + " " + this.Surname + " " + this.Email + " " + this.Birthday + " " + this.Score;

    }
}

/* Add student info */

function addStudent() {
    let IsEmailValid = inputs[2].value;
    var re = /^.+@.+\..+$/;
    console.log(re.test(IsEmailValid.toLowerCase));
    if (inputs[0].value != "" && inputs[1].value != "" && inputs[2].value != "" && inputs[3].value != "") {
        let s = new Student(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        students.push(s);
        reset();
        showStudents();
    } else {
        alert("you cannot leave the inputs empty!");
    }

}

function showStudents() {
    let rows = "";

    for (let i = 0; i < students.length; i++) {
        rows += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${students[i].Name}</td>
            <td>${students[i].Surname}</td>
            <td>${students[i].Email}</td>
            <td>${students[i].Birthday}</td>
        </tr>`
    }

    document.getElementById("table-body").innerHTML = rows;
}

/* Reset function */

// function reset(){
//     for(let i = 0; i < inputs.length; i++){
//         inputs[i].value = "";
//     }
// }

/* Add student score */

function addScore() {
    let val = document.getElementById('student-email').value;
    let index = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].Email.toLowerCase() == val.toLowerCase()) {
            students[i].AddScore(Number(inputsScore.value));
            index = i;
            let tr = document.createElement('tr');
            let th = document.createElement('th');
            th.setAttribute('scope', 'col');
            let th2 = document.createElement('th');
            th2.setAttribute('scope', 'col');
            let th3 = document.createElement('th');
            th3.setAttribute('scope', 'col');

            th2.innerHTML = students[i].Email;
            th3.innerHTML = students[i].Score;
            th.innerHTML = ++i;
            tr.appendChild(th);
            tr.appendChild(th2);
            tr.appendChild(th3);
            scoreList.appendChild(tr);
        }
    }
    // for(let k=0;k<students.length;k++){
    //     if(students[k].Score!=null && students[k].Score!=''){

    //                 console.log(students[k].Score);
    //     }
    // }
    // students.forEach(item=>{
    //     if(item.Email.toLowerCase()==val.toLowerCase()){

    //         item.AddScore(Number(inputsScore.value));

    //         for(let k=0;k<students.length;k++){
    //             let count=0;
    //             if(students[k].Score.length!=0){
    //                 let tr = document.createElement('tr');
    //                 let th = document.createElement('th');
    //                 th.setAttribute('scope','row');
    //                 let td1= document.createElement('td');
    //                 let td2= document.createElement('td');
    //                 th.innerHTML=count++
    //                 td1.innerHTML=students[k].Email;
    //                 td2.innerHTML=students[k].Score[k];
    //                 th.appendChild(td1);
    //                 th.appendChild(td2);
    //                 tr.appendChild(th);
    //                 scoreList.appendChild(tr);
    //                 // scoreList.appendChild(rows);
    //             }
    //         }
    //         // students.forEach(element=>{
    //         //     let count=0;
    //         //     if(element.Score.length!=0){

    //         //     };
    //         // });
    //     }
    // let index = studentArray.findIndex((val, ind, arr) => {
    //     if(val.Email.toLowerCase() == inputsEmail.value.toLowerCase()) {
    //         return true;
    //     }
    //         return false;
    // });
    // if(index != -1) {
    //     studentArray[index]. AddScore(Number(inputsScore.value));

    //     scoreList.innerHTML = "";

    //     for(let i = 0; i < studentArray[index].Score.length; i++) {
    //         rows.innerText = studentArray[index].Score[i];

    //         scoreList.appendChild(rows);
    //     }
    // }
}

function addStudentScore() {
    if (inputs[0].value != "" && inputs[1].value != "") {
        let s = new Student(inputs[0].value, inputs[1].value);
    } else {
        alert("you cannot leave the inputs empty!");
    }

}

function showStudentsScore() {
    let rows = "";

    for (let i = 0; i < students.length; i++) {
        rows += `<tr>
            <th scope="row">${i + 1}</th>
            <td>${students[i].Email}</td>
            <td>${students[i].Score}</td>
        </tr>`
    }

    document.getElementById("scores").innerHTML = rows;
}