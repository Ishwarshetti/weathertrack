const apikey = "812a80a5176f32e6a5b75ba6f64c0f35";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apikey;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".w-img");

async function checkWeather(city) 
{

    try {
        const response = await fetch(apiUrl + `&q=${city}`);
    
    if (!response.ok) {
        throw new Error("City not found");
    }

        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main=="Clouds")
{
        weatherIcon.src="clouds.png"

}
        else if(data.weather[0].main=="Clear")
        {
            weatherIcon.src="clear.png"
        }   
        else if(data.weather[0].main=="Rain")
        {
            weatherIcon.src="rain.png"
        }   
        else if(data.weather[0].main=="Drizzle")
        {
            weatherIcon.src="drizzle.png"
        }   
        else if(data.weather[0].main=="Mist")
        {
            weatherIcon.src="mist.png"
        }   


        document.querySelector(".weather").style.display="block";
        

}   catch (error) {
        alert(error.message);
}
}

searchBtn.addEventListener("click", () => {
checkWeather(searchBox.value);
});
