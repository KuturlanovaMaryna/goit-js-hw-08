import '../css/03-feedback.css';
import '../css/common.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback';

const form = document.querySelector('.js-feedback-form');
const message = document.querySelector('.js-feedback-form textarea');
const email = document.querySelector('.js-feedback-form input');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));


populateTextarea();

function onTextareaInput() {
    const objectSave = { email: email.value, message: message.value };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectSave));
};

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log({ email: email.value, message: message.value });
    evt.currentTarget.reset();
   
    localStorage.removeItem(STORAGE_KEY);
};

function populateTextarea() {
    const savedMsg = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMsg) {
        email.value = savedMsg.email;
        message.value = savedMsg.message;
       
    };
};
