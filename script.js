async function getWheather(city) {
   await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
      method: "GET",
      headers: {
         "X-Api-Key": "K9CsLsdrCAjCtJvpJ+yIMw==AyAuiIqjqJNvIVuh",
      },
      contentType: "application/json",
   })
      .then((response) => response.json())
      .then((res) => (document.querySelector(".celsius").innerHTML = res.temp))
      .catch((err) => console.log(err));
}
async function getWheatherInitial(lat, lon) {
   await fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`, {
      method: "GET",
      headers: {
         "X-Api-Key": "K9CsLsdrCAjCtJvpJ+yIMw==AyAuiIqjqJNvIVuh",
      },
      contentType: "application/json",
   })
      .then((response) => response.json())
      .then((res) => (document.querySelector(".celsius").innerHTML = res.temp))
      .catch((err) => console.log(err));
}

const btnClick = document
   .querySelector("#Locationbtn")
   .addEventListener("click", (e) => {
      const inputLocation = document.querySelector("#locationInput").value;
      document.querySelector(".locationAnswer").innerHTML = inputLocation;
      console.log(inputLocation);
      getWheather(inputLocation);
   });

navigator.geolocation.getCurrentPosition((position) => {
   getWheatherInitial(position.coords.latitude, position.coords.longitude);
   // (position.coords.latitude, position.coords.longitude);
});
