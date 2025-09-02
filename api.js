const key = "" // Coloque sua key do openweathermap aqui!!

function SetDados (dados) {
    document.querySelector(".city").innerHTML = "Tempo em "+ dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " C"
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: "+ dados.main.humidity + "%"
    document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


    console.log(dados)
}


async function GetCity (city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt-br&units=metric`).then( response => response.json())
    SetDados (dados)
}

function SearchCity (){
    const city = document.querySelector(".input-search").value
    GetCity(city)
}