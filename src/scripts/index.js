import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

// untuk fetch data
const list = document.querySelector('#list-content')
const listContent = data => {
    list.innerHTML = '';
    data.forEach(restoran => {
        const { name, description, pictureId, city, rating } = restoran;
        const listResto = document.createElement('div');
        listResto.innerHTML =
            `
        <div class="list-item">
        <div class="card">
        <img src="${pictureId}" alt="${name}" class="item-img" title="${name}">
        <div class="item-city"><p>${city}</p></div>
        <div class="item-content">
            <p class="item-rating"> Rating : <span class="item-rating-value">${rating}</span></p>
            <h1 class="item-title"><a href="#">${name}</a></h1>
            <div class="item-description">
                ${description}
            </div>
        </div>
        </div>
    </div>
        `
        list.appendChild(listResto);
    })
}

listContent(data.restaurants);


// menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');

// event untuk menu mobile
menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

// event untuk menghapus menu sesudah di klik bagian hero
hero.addEventListener('click', function() {
    drawer.classList.remove('open');
});

// event untuk menghapus menu sesudah di klik bagian main
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});