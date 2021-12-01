"use strict";

const btn = document.querySelector('#btn');
const a = document.querySelector('.a');
const link = document.querySelector("a");

const div = document.querySelector('.div');

const input = document.querySelector('form input');

input.addEventListener('input', (event) => {
    console.log(event.target.value);
});

const callFunc = (e) => {
    console.log(e.currentTarget);
};

btn.addEventListener('click', callFunc);
div.addEventListener('click', callFunc);

let index = 0;

const  callFunc = () => {
    console.log("Hello World");
    index++;
    console.log(index);
    if (index == 2) {
        btn.removeEventListener('click', callFunc);
    }
}

btn.addEventListener('click', callFunc);

a.addEventListener('click', (event) => {
    console.log(event.target);
});

link.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Hello');
    console.log(e.target);
});







a.addEventListener('click', callFunc);



btn.onclick = function () {
    console.log('Hello World');
}

btn.onclick = function() {
    console.log(2);
}

function hi() {
    console.log("hello world");
}