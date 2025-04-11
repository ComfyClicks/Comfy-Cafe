import "./styles.css";
import homePage from "./modules/home.js";
import contactPage from './modules/contact.js';
import createMenu from './modules/menu.js';

console.log('Hello restaurant lover!');

const loadWebsite = () => {
  const content = document.getElementById('content');
  console.log(content);
  content.textContent = '';
  const home = homePage();
  console.log('Is this working?');
  content.appendChild(home);
}

loadWebsite();
