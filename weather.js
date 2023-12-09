const apiKey="1b101e608602ae11d414b84ad10bd6dd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkweather(city){
    const response =await fetch(apiUrl+ city +`&appid=${apiKey}`);
    if(response.status==404){
    document.querySelector(".error").style.display="block" ;
    document.querySelector(".weather").style.display="none";  
    }else{
        const data = await response.json() ;
  
    
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round (data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%" ;
        document.querySelector(".wind") .innerHTML= data.wind.speed + "km/h";
        
        if (data.weather[0].main=="Clouds"){
        weatherIcon.src="https://freesvg.org/img/weather-overcast.png" ;   
        }
        if (data.weather[0].main=="Clear"){
            weatherIcon.src="https://cdn-icons-png.flaticon.com/512/3222/3222800.png" ;   
        }
        if (data.weather[0].main=="Rain"){
            weatherIcon.src="https://i.pinimg.com/1200x/df/ea/92/dfea9226400215b6781b3027b796501a.jpg"  ;  
            }
            if (data.weather[0].main=="Drizzle"){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/512/106/106044.png" ;   
           }
            if (data.weather[0].main=="Mist"){
            weatherIcon.src="https://i.pinimg.com/564x/1e/c4/e8/1ec4e83f5d60afc434ac5dc8a9efcdf4.jpg" ;   
        }
        document.querySelector(".weather").style.display='block';   
        document.querySelector(".error").style.display='none';  
    }
}
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);    
})