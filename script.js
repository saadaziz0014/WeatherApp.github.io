const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4a4f6b6cc1msh4ce0cff358a18bap187a2djsn52ffbbd0c9b6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getW = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
  cityN.innerHTML = city;
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getW(city.value);
});

getW("Lahore");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jeddah",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    j_cloud_pct.innerHTML = response.cloud_pct;
    j_temp.innerHTML = response.temp;
    j_feels_like.innerHTML = response.feels_like;
    j_humidity.innerHTML = response.humidity;
    j_min_temp.innerHTML = response.min_temp;
    j_max_temp.innerHTML = response.max_temp;
    j_wind_speed.innerHTML = response.wind_speed;
    j_wind_degrees.innerHTML = response.wind_degrees;
    j_sunrise.innerHTML = response.sunrise;
    j_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Doha",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    d_cloud_pct.innerHTML = response.cloud_pct;
    d_temp.innerHTML = response.temp;
    d_feels_like.innerHTML = response.feels_like;
    d_humidity.innerHTML = response.humidity;
    d_min_temp.innerHTML = response.min_temp;
    d_max_temp.innerHTML = response.max_temp;
    d_wind_speed.innerHTML = response.wind_speed;
    d_wind_degrees.innerHTML = response.wind_degrees;
    d_sunrise.innerHTML = response.sunrise;
    d_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    b_cloud_pct.innerHTML = response.cloud_pct;
    b_temp.innerHTML = response.temp;
    b_feels_like.innerHTML = response.feels_like;
    b_humidity.innerHTML = response.humidity;
    b_min_temp.innerHTML = response.min_temp;
    b_max_temp.innerHTML = response.max_temp;
    b_wind_speed.innerHTML = response.wind_speed;
    b_wind_degrees.innerHTML = response.wind_degrees;
    b_sunrise.innerHTML = response.sunrise;
    b_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Cape Town",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    c_cloud_pct.innerHTML = response.cloud_pct;
    c_temp.innerHTML = response.temp;
    c_feels_like.innerHTML = response.feels_like;
    c_humidity.innerHTML = response.humidity;
    c_min_temp.innerHTML = response.min_temp;
    c_max_temp.innerHTML = response.max_temp;
    c_wind_speed.innerHTML = response.wind_speed;
    c_wind_degrees.innerHTML = response.wind_degrees;
    c_sunrise.innerHTML = response.sunrise;
    c_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    s_cloud_pct.innerHTML = response.cloud_pct;
    s_temp.innerHTML = response.temp;
    s_feels_like.innerHTML = response.feels_like;
    s_humidity.innerHTML = response.humidity;
    s_min_temp.innerHTML = response.min_temp;
    s_max_temp.innerHTML = response.max_temp;
    s_wind_speed.innerHTML = response.wind_speed;
    s_wind_degrees.innerHTML = response.wind_degrees;
    s_sunrise.innerHTML = response.sunrise;
    s_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    t_cloud_pct.innerHTML = response.cloud_pct;
    t_temp.innerHTML = response.temp;
    t_feels_like.innerHTML = response.feels_like;
    t_humidity.innerHTML = response.humidity;
    t_min_temp.innerHTML = response.min_temp;
    t_max_temp.innerHTML = response.max_temp;
    t_wind_speed.innerHTML = response.wind_speed;
    t_wind_degrees.innerHTML = response.wind_degrees;
    t_sunrise.innerHTML = response.sunrise;
    t_sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
