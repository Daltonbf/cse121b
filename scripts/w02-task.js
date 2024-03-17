const fullName = '';
const currentYear = 2024;
const profilePicture = 'images/pic_of_me.jpg';

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

const favoriteFoods = ['Sushi'];

foodElement.innerHTML = favoriteFoods.join('<br>');
