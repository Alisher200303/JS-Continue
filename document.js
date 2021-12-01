"use strict";
/*
const greeting = document.getElementById('greeting'),
    paragraph = document.getElementsByTagName("p"),
    wrapper = document.getElementsByClassName("wrapper");


// greeting.style.color = 'red';
// greeting.style.background = 'black';
// greeting.style.display = 'inline-block';
// greeting.style.padding = '10px';


// greeting.style.cssText = 'margin: 10px; font-size: 16px;'


// greeting.classList.add('cssH1');
console.log(greeting);

console.log(wrapper);

console.log(paragraph);
*/


/********************** New */

const wrapper = document.querySelector('.wrapper'),
    btns = document.querySelectorAll("button");

//  btn[0].style.background = 'crimson';
//  btn[3].style.background = 'crimson';

for (let i = 0; i < btns.length; i++) {
    btns[i].style.padding = '10px'
}


btns.forEach((btn) => {
    btn.style.background = 'crimson';
    btn.style.border = 'none';
})

console.log(btns);

const input = document.querySelector('input');

input.style.width = '200px'