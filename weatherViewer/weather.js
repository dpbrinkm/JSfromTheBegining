class Weather {
  constructor(city, state){
    this.apiKey = '99ff4288e5ac95e5';
    this.city = city;
    this.state = state;
  }

  //Fetch weather from API
  async getWeather(){
    const response = await fetch(`http://api.wunderground.com/api/99ff4288e5ac95e5/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  //Change Location

  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}