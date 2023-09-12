function getSunriseSunset() {
  //Declare variables and pass their corresponding DOM
  const latitudeInput = document.getElementById("latitude");
  const longitudeInput = document.getElementById("longitude");
  const resultDiv = document.getElementById("result");

  const latitude = latitudeInput.value;
  const longitude = longitudeInput.value;
  //set condition to append the latitude, longitude and date to the Url
  if (latitude && longitude) {
    const baseURL = "https://api.sunrise-sunset.org/json?";
    const date = new Date().toISOString().slice(0, 10); // Get today's date in the format "YYYY-MM-DD"
    const url = `${baseURL}lat=${latitude}&lng=${longitude}&date=${date}`;
    //generate responses from the URL API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const sunrise = data.results.sunrise;
        const sunset = data.results.sunset;

        resultDiv.innerHTML = `<p>Sunrise: ${sunrise}</p><p>Sunset: ${sunset}</p>`;
      })
      // Catch error incase the there was the fetching of data
      .catch((error) => {
        console.error("Error:", error);
        resultDiv.textContent = "An error occurred while fetching the data.";
      });
    // the user has to provide both inputs
  } else {
    resultDiv.textContent = "Please enter both latitude and longitude.";
  }
}
