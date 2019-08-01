class Storage {
  constructor() {
    this.zip;
    this.country_code;
    this.defaultZip = 94040;
    this.defaultCountry = "us";
  }

  getLocationData() {
    if (localStorage.getItem("zip") === null) {
      this.zip = this.defaultZip;
    } else {
      this.zip = localStorage.getItem("zip");
    }

    if (localStorage.getItem("country_code") === null) {
      this.country_code = this.defaultCountry;
    } else {
      this.country_code = localStorage.getItem("country_code");
    }
    return {
      zip: this.zip,
      country_code: this.country_code
    };
  }

  setLocationData(zip, country_code) {
    // no need to parse data since they are strings
    localStorage.setItem("zip", zip);
    localStorage.setItem("country_code", country_code);
  }
}
