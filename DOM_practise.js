"use strict";

const button = document.querySelector("#click");
const body = document.querySelector("body");
const input = document.querySelector('input');
const box = document.querySelector('.box')

let index = 0;
const callFunc = () => {
    button.style.background = 'lightblue';
    button.style.boxShadow = '0px 0px 10px 5px rgb(89, 110, 231)';
    body.style.background = 'blue';
    index++;
    console.log(index);

    if (index == 1) {
        button.style.background = 'yellow';
        body.style.background = 'greenyellow'
        box.style.background = 'red'
    } else if(index == 2) {
        button.style.background = 'green';
        body.style.background = 'lightgreen';
    } else if (index == 3) {
        button.style.borderRadius = '1px';
        button.style.background = 'lightgreen';
    }else {
        button.style.background = 'rgb(89, 110, 231)';
        button.style.borderRadius = '10px';
        body.style.background = '#fff'
    }
};

button.addEventListener('click', callFunc);



input.addEventListener('input', (e) => {
    console.log(e.target.value);
});