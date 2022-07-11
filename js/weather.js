// JavaScript Document
$(document).ready(function() {
    
    $("#submitCity").click(function(){
        return getWeather();        
    });
                 

});

/* make the AJAX request here */
function getWeather(){
    var city = $("#city").val();
    /* "&units=imperial&appid=015dc82b4ed6b23e8a17a06130023715" */
    /* "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25" */
    /* url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=015dc82b4ed6b23e8a17a06130023715" */
    /* change to: url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=015dc82b4ed6b23e8a17a06130023715" */
    
    if(city != ''){
        
        /* the call is formatted in ajax string.  city is concat, &units is concat, &APPID is concat */
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type:"GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data)
            
                $("#showWeather").html(widget);
                
                $("#city").val('');
                
                /* data.main.temp */
            
            }
            
        });
        
    }else{
        
        /* original: <a href='#' class='close' data-dismiss='alert' aria-label='close'> */
        /* changed : <a href='' class='close' data-dismiss='alert' aria-label='close'> */
        /* $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>"); */
        
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
       
    }
}

/* http://openweathermap.org/img/wn/10d@2x.png */
/* http://openweathermap.org/img/w  */

/* this function returns the formatted data. data placed in the showweather div */
/* weather icon is formatted here: retrived data via the URL, via index, with .png */
/* &deg is the symbol for degree */
/* "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='https://openweathermap.org/img/w/"
+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
*/


/* funtion to format and show data from the .ajax */
function showResults(data){
    
    return '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h2>'+
            "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='https://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+"&deg; F</h3>"+ 
            "<h3 style='padding-left:40px;'><strong>Pressure</strong>: "+data.main.pressure+" hPa</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+data.main.humidity+"%</h3>"+
            "<h3 style='padding-left:40px;'><strong>Min Temperature</strong>: "+data.main.temp_min+"&deg; F</h3>"+ /* change C to F */
            "<h3 style='padding-left:40px;'><strong>Max Temperature</strong>: "+data.main.temp_max+"&deg; F</h3>"+
            "<h3 style='padding-left:40px;'><strong>Wind Speed</strong>: "+data.wind.speed+" mph</h3>"+  /* question: change to miles/hr ? */
            "<h3 style='padding-left:40px; padding-bottom:30px;'><strong>Wind Derection</strong>: "+data.wind.deg+"&deg;</h3>";
}