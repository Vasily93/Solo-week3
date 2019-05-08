import api from '../services/api.js';

const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const life = document.getElementById('life');
const food = document.getElementById('food');

const user = api.getUser();

if(!user) {
    window.location = './';
}

avatar.src = 'assets/avatars/' + user.animal + '.png';
name.textContent = user.name;
life.textContent = user.life;
food.textContent = user.food;
//console.log(user);