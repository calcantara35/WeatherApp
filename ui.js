class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.string = document.getElementById("w-string");
    this.desc = document.getElementById("w-desc");
    this.temp = document.getElementById("w-temp");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.windspeed = document.getElementById("w-wind-speed");
  }

  paint(res) {
    this.location.textContent = `${res.name}, ${res.sys.country}`;
    this.string.textContent = `Weather: ${res.weather[0].main}`;
    this.desc.textContent = `Description: ${res.weather[0].description}`;

    // converting temp, kelvin to cel
    //pressure hPa
    this.temp.textContent = `Temperature: ${convertKelvinToFahrenheit(
      res.main.temp
    )}\u00B0F`;
    this.humidity.textContent = `Relative Humidity: ${res.main.humidity}%`;
    this.pressure.textContent = `Pressure: ${res.main.pressure} hPa`;
    this.windspeed.textContent = `Wind Speed: ${MetresPerSecondToMilesPerHour(
      res.wind.speed
    )} mph`;
  }
}
