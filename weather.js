var top=document.getElementById("country")

function weatherApp(){
   let City= document.getElementById("name").value;
   var key='3eec2fc8dd58b7418ed1648e8669ccb1';
   api= `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${key}`;
   
     
fetch(api).then((x)=> x.json()).then(data=>{
  time =parseInt(data.main.temp - 273)
 //document.getElementById("clouds").innerHTML= data.weather[0].description,
 document.getElementById("country").innerHTML=data.name +" "+ data.sys.country;
 document.getElementById("clouds").innerHTML= time;
 console.log(data.weather[0].icon,data.clouds.all);
 //console.log(new Date(data.dt*1000-(data.timezone*1000))); // minus 
console.log(new Date(data.dt*1000));

 var iconurl="http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
 document.getElementById("imagee").innerHTML= `<img src="${iconurl}" style="max-width:100%"/>`;
  document.getElementById("winds").innerHTML= "wind speed:"+data.wind.speed+"mph"
 document.getElementById("realc").innerHTML= "Precipitation:"+data.clouds.all + "%";
 document.getElementById("humidity").innerHTML= "Humidity:"+data.main.humidity + "%";  
 document.getElementById("desc").innerHTML= data.weather[0].description;
 //document.getElementById("score").innerHTML= data.main.temp;// "temp":300.74,
//       "feels_like":303.39,
//       "temp_min":300.74,
//       "temp_max":300.74,
} ).catch()
}


function ctof(temperature){
   return (temperature * 9/5) + 32;
}
 units= "celsius"
function myFun(){
   if(units=="celsius"){
      document.getElementById("clouds").innerHTML= ctof(time)
      document.getElementById("units").innerHTML= "°F | °C ";
      units="fahrenheit"
   }
   else {
      document.getElementById("clouds").innerHTML= time;
      document.getElementById("units").innerHTML= "°C | °F";
      units="celsius"
   }
   
}  