const title = document.getElementById('title');
const body = document.getElementById('body');
const arrow = document.getElementById('arrow');
const arrow2 = document.getElementById('arrow2');
const english = document.getElementById('english');
const persian = document.getElementById('persian');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const myName = document.getElementById('name');
const languages = document.getElementById('languages');
const languages2 = document.getElementById('languages2');
const navbar = document.getElementById('navbar');
arrow.addEventListener('click', () => {
    arrow.classList.add('d-none');
    arrow2.classList.remove('d-none');
});
arrow2.addEventListener('click', () => {
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
});
english.addEventListener('click', () => {
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
    title.innerText = "Who Am I?";
    myName.innerText = "Mohammad Ahmadi";
    languages.innerText = "Languages";
    languages2.innerText = "Languages";
});
persian.addEventListener('click', () => {
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
    title.innerText = "من کی هستم؟";
    myName.innerText = "محمد احمدی";
    languages.innerText = "زبان ها";
    languages2.innerText = "زبان ها";
});
sun.addEventListener('click', () => {
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
    body.classList.add('body2');
    body.classList.remove('body');
    navbar.classList.add('bg2');
    navbar.classList.remove('bg');
    myName.classList.add('txt2');
    myName.classList.remove('txt');
    arrow.classList.add('txt2');
    arrow.classList.remove('txt');
    arrow2.classList.add('txt2');
    arrow2.classList.remove('txt');
});
moon.addEventListener('click', () => {
    moon.classList.add('d-none');
    sun.classList.remove('d-none');
    body.classList.add('body');
    body.classList.remove('body2')
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
    navbar.classList.add('bg');
    navbar.classList.remove('bg2');
    myName.classList.add('txt');
    myName.classList.remove('txt2');
    arrow.classList.add('txt');
    arrow.classList.remove('txt2');
    arrow2.classList.add('txt');
    arrow2.classList.remove('txt2');
});