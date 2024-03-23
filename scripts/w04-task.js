let myProfile = {
    name: "Braden Dalton",
    photo: "images/pic_of_me.jpg",
    favoriteFoods: [
      'Sushi',
      'Brownies',
      'A good burger'
    ],
    hobbies: ['Motorcycles/Cars', 'Technology', 'Exploration'],
    placesLived: []
  };
  myProfile.placesLived.push(
    {
      place: 'Castle Rock, Colorado',
      length: '19 years'
    }
  );
  myProfile.placesLived.push(
    {
      place: 'Anaheim, California',
      length: '2 years'
    },
    {
      place: 'Rexburg, Idaho',
      length: '1 year and 1/2'
    }
  );
  document.querySelector('#name').textContent = myProfile.name;
  document.querySelector('#photo').src = myProfile.photo;
  document.querySelector('#photo').alt = myProfile.name;
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  