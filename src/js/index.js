import '../scss/main.scss';

const textareaInput = document.querySelector('.textarea--js');
let result = '';
const entry = localStorage.getItem('entry');

if (entry) {
    result = entry;
    textareaInput.value = result;
}

const saveButton = document.querySelector('.save-button--js');
saveButton.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textareaInput.value);
})

const loadButton = document.querySelector('.load-button--js');
loadButton.addEventListener('click', (e) => {
    e.preventDefault();
    textareaInput.value = localStorage.getItem('entry');
})
