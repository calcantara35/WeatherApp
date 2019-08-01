class Weather {
  constructor(zip, country_code) {
    this.apiKey = "bc525a5b599a473b784f8197abcff2f5";
    this.zip = zip;
    this.country_code = country_code;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      // dont forget to do http:// (im a dumb ass and forgot)
      `http://api.openweathermap.org/data/2.5/weather?zip=${this.zip},${
        this.country_code
      }&APPID=${this.apiKey}`
    );
    console.log(response);

    const responseData = await response.json();
    return responseData;
  }

  // Change Weather Location
  changeLocation(zip, country_code) {
    this.zip = zip;
    this.country_code = country_code;
  }
}
