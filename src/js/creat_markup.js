import menu from './menu.json';
import foodServiceTpl from '../templates/food_service.hbs';

const galleryMenu = document.querySelector('ul.js-menu');

const markupMenu = foodServiceTpl(menu)

galleryMenu.insertAdjacentHTML('beforeend', markupMenu);