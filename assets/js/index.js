const title = document.getElementById('title');
const arrow = document.getElementById('arrow');
const arrow2 = document.getElementById('arrow2');
const english = document.getElementById('english');
const persian = document.getElementById('persian');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
arrow.addEventListener('click', () => {
    arrow.classList.add('d-none');
    arrow2.classList.remove('d-none');
});
arrow2.addEventListener('click', () => {
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
});
english.addEventListener('click', () => {
    title.innerText = "Who Am I?";
});
persian.addEventListener('click', () => {
    title.innerText = "من کی هستم؟";
});
sun.addEventListener('click', () => {
    sun.classList.add('d-none');
    moon.classList.remove('d-none');
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
});
moon.addEventListener('click', () => {
    moon.classList.add('d-none');
    sun.classList.remove('d-none');
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
});