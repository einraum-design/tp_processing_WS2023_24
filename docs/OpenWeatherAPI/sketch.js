let temp = 0;
let wind = 0;

let lat;
let long;
let submit;

function setup() {
  createCanvas(400, 400);

  let url = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,daily&units=metric&appid=582804ab121fe4507cf623203a072dc4";
  // weatherLoaded function is called as soon as the data is available
  loadJSON(url, weatherLoaded);

  lat = select("#lat");
  long = select("#long");
  submit = select("#submit");
  submit.mouseClicked(loadData);
}

function draw() {
  background(220);

  fill(50);
  ellipse(100, 100, temp*5, temp*5);
  fill(255);
  textAlign(CENTER, CENTER);
  text(temp, 100, 100);

  fill(50);
  ellipse(300, 100, wind*10, wind*10);
  fill(255);
  textAlign(CENTER, CENTER);
  text(wind, 300, 100);
}

function weatherLoaded(data){
  console.log(data);
  console.log("temperature: " + data.current.temp);
  temp =  data.current.temp;
  wind = data.current.wind_speed;
}

function loadData(){
  console.log(lat.value());

  // API call:
  let baseurl = "https://api.openweathermap.org/data/3.0/onecall?";
  let latVal = "lat=" + lat.value();
  let longVal = "lon=" + long.value();
  let params = "&exclude=minutely,hourly,daily&units=metric&appid=582804ab121fe4507cf623203a072dc4";

  let callurl = baseurl + latVal + "&" + longVal + params;
  console.log(callurl);
  loadJSON(callurl, weatherLoaded);

}