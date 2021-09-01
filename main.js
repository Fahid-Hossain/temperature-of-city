const getCityName = ()=>{
    //spinner start 
    document.getElementById("spinner").classList.remove("d-none");
    const inputField = document.getElementById("input-field");
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    //clear input field
    inputField.value = "";

    if(inputFieldValue.length>0){
        
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputFieldValue}&appid=17ce6dd592b44b2010bd44070ad384c7`;
        
                fetch(url)
                .then(res=>res.json())
                .then(data=>getWeather(data))
                .catch(error=>getError(error))

    }
    else{
        //spinner stop
        document.getElementById("spinner").classList.add("d-none");
        const weatherContainer = document.getElementById("weatherContainer");
        weatherContainer.innerHTML =`
        <h5 class="text-warning text-center">Enter a city name to show weather</h5>
        `;
    }

}

//get error 
const getError = (error)=>{
    // console.log(error);
    document.getElementById("spinner").classList.add("d-none");
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML =`
    <h5 class="text-danger text-center">
    Something went wrong:
    Enter valid city or try again later</h5>
    `;
}

const getWeather = weather =>{
    // spinner stop 
    document.getElementById("spinner").classList.add("d-none");
    // console.log(weather)
    const weatherContainer = document.getElementById("weatherContainer");
    weatherContainer.innerHTML = `
                
    <div class="weather-status text-white text-center">
        <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">
        <h1>${weather.name}</h1>
        <h3><span>${Math.round(weather.main.temp-273)}</span>&deg;C</h3>
        <h1 class="lead">${weather.weather[0].main}</h1>
    </div>
    `;
}