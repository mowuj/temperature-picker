
const API_KEY='3cad876bad781caba91c588799d9092c'
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    // console.log(temperature);
    setInnerText('city',temperature.name)
    setInnerText('temp',temperature.main.temp)
    setInnerText('condition',temperature.weather[0].main)
    console.log(temperature.weather[0].icon)
    // set weather icon 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);

}