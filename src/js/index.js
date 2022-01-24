import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

let textArea = document.querySelector('.text-area--js');
let saveButton = document.querySelector('.button-save--js');
let loadButton = document.querySelector('.button-load--js');

let entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    result = entry;
};

textArea.value = result;

saveButton.addEventListener('click', () => {
    localStorage.setItem('entry', textArea.value);
});

loadButton.addEventListener('click', () => {
    console.log("asz ty w zyciu!");
    textArea.value = localStorage.getItem('entry');
});
