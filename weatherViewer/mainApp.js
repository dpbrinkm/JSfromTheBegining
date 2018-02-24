//init Storage
const storage = new Storage();
//local saved storage call
const weatherLocation = storage.getLocationData(); 
//init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state); //saved as city and state
//init UI
const ui = new UI();

//Get weather on DOM load 
document.addEventListener('DOMContentLoaded', getWeather)

//change location event
document.getElementById('w-change-btn').addEventListener('click',(e) => { 
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  storage.setLocationData(city, state)

  getWeather();

  $('#locModal').modal('hide');
});

//weather.changeLocation('Maimi', 'FL');

function getWeather(){
weather.getWeather()
  .then(results => {
    ui.paint(results);
    console.log(results);
  })
  .catch(err => console.log(err));
} 