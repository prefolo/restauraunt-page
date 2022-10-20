import writeHome from './pages/home/home.js';
import writeMenu from './pages/menu/menu.js';
//import writeContact from './pages/contact/contact.js';
import './style.css';

writeHome();

document.querySelector('#nav-home').addEventListener('click', writeHome);
document.querySelector('#nav-menu').addEventListener('click', writeMenu);
