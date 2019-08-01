// Init Storage
const storage = new Storage();

// Init UI object
const ui = new UI();

//get Stored location data
const weatherLocation = storage.getLocationData();

// Init Weather object
const weather = new Weather(weatherLocation.zip, weatherLocation.country_code);

// get weather function
const getWeather = () => {
  weather
    .getWeather()
    .then(res => {
      ui.paint(res);
      console.log(res); // in order to get specifc things from the api, use res.whatever
    })
    .catch(error => console.log(error));
};

// write code for this after weather function has been created
// Get Weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", () => {
  const changeZip = document.getElementById("zip").value;
  const changeCountry = document.getElementById("country").value;

  // Change location
  weather.changeLocation(changeZip, changeCountry);

  // Set location in LS
  storage.setLocationData(changeZip, changeCountry);

  // Get and display weather
  getWeather();

  // Close modal, jquery
  $("#locModal").modal("hide");
});

// convert Kelvin to Celsius
const convertKelvinToFahrenheit = kelvin => {
  if (kelvin < 0) {
    return "below absolute zero (0 K)";
  } else {
    let myCelcius = 0;
    let myCelciusRounded = 0;
    let myFahrenheit = 0;

    myCelcius = kelvin - 273.15;
    myCelciusRounded = Math.round(myCelcius);
    myFahrenheit = myCelciusRounded * (9 / 5) + 32;
    return myFahrenheit;
  }
};

// conversion
const MetresPerSecondToMilesPerHour = mps => {
  let milesPerSecond = 0;
  let milesPerHour = 0;
  let milesPerHourRounded = 0;

  milesPerSecond = mps / 1609.34;
  milesPerHour = milesPerSecond * 3600;
  milesPerHourRounded = Math.round(milesPerHour);
  return milesPerHourRounded;
};
