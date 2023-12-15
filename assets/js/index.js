const title = document.getElementById('title');
const body = document.getElementById('body');
const navbar = document.getElementById('navbar');
const arrow = document.getElementById('arrow');
const arrow2 = document.getElementById('arrow2');
const english = document.getElementById('english');
const persian = document.getElementById('persian');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const arrow3 = document.getElementById('arrow3');
const arrow4 = document.getElementById('arrow4');
const english2 = document.getElementById('english2');
const persian2 = document.getElementById('persian2');
const sun2 = document.getElementById('sun2');
const moon2 = document.getElementById('moon2');
const myName = document.getElementById('name');
const languages = document.getElementById('languages');
const languages2 = document.getElementById('languages2');
const languages3 = document.getElementById('languages3');
const languages4 = document.getElementById('languages4');
const contact = document.getElementById('contact');
const contact2 = document.getElementById('contact2');
const btn = document.getElementById('btn');
const menu = document.getElementById('menu');
const offcanvasHeader = document.getElementById('offcanvas-header');
const offcanvasBody = document.getElementById('offcanvas-body');
const repositories = document.getElementById('rep');
arrow.addEventListener('click', () => {
    arrow.classList.add('d-none');
    arrow2.classList.remove('d-none');
});
arrow2.addEventListener('click', () => {
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
});
arrow3.addEventListener('click', () => {
    arrow3.classList.add('d-none');
    arrow4.classList.remove('d-none');
});
arrow4.addEventListener('click', () => {
    arrow3.classList.remove('d-none');
    arrow4.classList.add('d-none');
});
english.addEventListener('click', () => {
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
    body.classList.add('font');
    body.classList.remove('font2');
    title.innerText = "Who Am I?";
    english.innerText = "English";
    persian.innerText = "Persian";
    myName.innerText = "Mohammad Amin Ahmadi";
    languages.innerText = "Languages";
    languages2.innerText = "Languages";
    contact.innerText = "Contact With Me";
    menu.innerText = "Menu";
    offcanvasHeader.setAttribute('dir', 'ltr');
    offcanvasBody.setAttribute('dir', 'ltr');
});
english2.addEventListener('click', () => {
    arrow3.classList.remove('d-none');
    arrow4.classList.add('d-none');
    body.classList.add('font');
    body.classList.remove('font2');
    title.innerText = "Who Am I?";
    english2.innerText = "English";
    persian2.innerText = "Persian";
    myName.innerText = "Mohammad Amin Ahmadi";
    languages3.innerText = "Languages";
    languages4.innerText = "Languages";
    contact2.innerText = "Contact With Me";
});
persian.addEventListener('click', () => {
    arrow.classList.remove('d-none');
    arrow2.classList.add('d-none');
    body.classList.add('font2');
    body.classList.remove('font');
    title.innerText = "من کی هستم؟";
    english.innerText = "انگلیسی";
    persian.innerText = "فارسی";
    myName.innerText = "محمد امین احمدی";
    languages.innerText = "زبان ها";
    languages2.innerText = "زبان ها";
    contact.innerText = "ارتباط با من";
    menu.innerText = "منو";
    offcanvasHeader.setAttribute('dir', 'rtl');
    offcanvasBody.setAttribute('dir', 'rtl');
});
persian2.addEventListener('click', () => {
    arrow3.classList.remove('d-none');
    arrow4.classList.add('d-none');
    body.classList.add('font2');
    body.classList.remove('font');
    title.innerText = "من کی هستم؟";
    english2.innerText = "انگلیسی";
    persian2.innerText = "فارسی";
    myName.innerText = "محمد امین احمدی";
    languages3.innerText = "زبان ها";
    languages4.innerText = "زبان ها";
    contact2.innerText = "ارتباط با من";
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
    contact.classList.add('txt2');
    contact.classList.remove('txt');
    btn.classList.add('txt2');
    btn.classList.remove('txt');
    menu.classList.add('text2');
    menu.classList.remove('text');
    offcanvasHeader.classList.add('head2');
    offcanvasHeader.classList.remove('head');
    offcanvasBody.classList.add('head');
});
sun2.addEventListener('click', () => {
    sun2.classList.add('d-none');
    moon2.classList.remove('d-none');
    arrow3.classList.remove('d-none');
    arrow4.classList.add('d-none');
    body.classList.add('body2');
    body.classList.remove('body');
    navbar.classList.add('bg2');
    navbar.classList.remove('bg');
    myName.classList.add('txt2');
    myName.classList.remove('txt');
    arrow3.classList.add('txt2');
    arrow3.classList.remove('txt');
    arrow4.classList.add('txt2');
    arrow4.classList.remove('txt');
    contact2.classList.add('txt2');
    contact2.classList.remove('txt');
    btn.classList.add('txt2');
    btn.classList.remove('txt');
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
    contact.classList.add('txt');
    contact.classList.remove('txt2');
    btn.classList.add('txt');
    btn.classList.remove('txt2');
    menu.classList.add('text');
    menu.classList.remove('text2');
    offcanvasHeader.classList.add('head');
    offcanvasHeader.classList.remove('head2');
    offcanvasBody.classList.remove('head');
});
moon2.addEventListener('click', () => {
    moon2.classList.add('d-none');
    sun2.classList.remove('d-none');
    body.classList.add('body');
    body.classList.remove('body2')
    arrow3.classList.remove('d-none');
    arrow4.classList.add('d-none');
    navbar.classList.add('bg');
    navbar.classList.remove('bg2');
    myName.classList.add('txt');
    myName.classList.remove('txt2');
    arrow3.classList.add('txt');
    arrow3.classList.remove('txt2');
    arrow4.classList.add('txt');
    arrow4.classList.remove('txt2');
    contact2.classList.add('txt');
    contact2.classList.remove('txt2');
    btn.classList.add('txt');
    btn.classList.remove('txt2');
});
myName.addEventListener('click', () => {
    for (let i = 1; i <= 20; i++) {
        time = setTimeout(() => {
            repositories.innerText++;
        }, i * 100);
        if (+repositories.innerText !== 0) {
            clearTimeout(time);
        }
    }
});