
const dateElement = document.querySelector('[data-js="date"]');
const date = new Date().toLocaleDateString("en-US");
dateElement.textContent = date;

const yearElement = document.querySelector('[data-js="year"]');
yearElement.textContent = new Date().getFullYear();