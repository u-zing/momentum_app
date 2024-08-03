const API_KEY = "58c60e6ab429d91a5114bfaed88ff745";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
}
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
fetch(url);
function onGeoError() {
  alert("Can't find you,No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
