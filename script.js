/*
var myLat;
var myLng;

function success (pos) {
    
    myLat = pos.coords.latitude;
    myLng = pos.coords.longitude;
    console.log("Latitude :" + myLat);
    console.log("Longitutde :" + myLng);
    //Get Initial TEMP in Celsius + City & Icon
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ myLat +"&lon="+ myLng +"&units=metric&APPID=fb9a84522f36f6602a50ff35f1f0b985", function (e) {
    $("#demo").html(e.main.temp);
    $("#city").html(e.name + ", " + e.sys.country);
        console.log(e.weather[0].id);
        switch(e.weather[0].id) {
            case 200 :
            case 201 :
            case 202 :
            case 210 :
            case 211 :
            case 212 :
            case 221 :
            case 230 :
            case 231 :
            case 232 :
        $("#icon").html("<i class=wi wi-day-thunderstorm></i>");
            break;
            case 300 : 
            case 301 : 
            case 302 : 
            case 310 :
            case 311 :
            case 312 :
            case 313 :
            case 314 :
            case 321 :
        $("#icon").html("<i class=wi wi-day-rain></i>");
            break;
            case 500 :
            case 501 :
            case 502 :
            case 503 :
            case 504 :
            case 511 :
            case 520 :
            case 521 :
            case 522 :
            case 531 :
        $("#icon").html("<i class=wi wi-day-rain></i>");
            break;
            case 600 :
            case 601 :
            case 602 :
            case 611 :
            case 612 :
            case 615 :
            case 616 :
            case 620 :
            case 621 :
            case 622 :
        $("#icon").html("<i class=wi wi-day-snow-wind></i>");
            break;
            case 800 :
        $("#icon").html("<i class=wi wi-day-snow-wind></i>");
            break;
        }
    });
    
    //Get TEMP in Celsius OR Fahrenheit
     $("#units").on("click", function () {   
        if($("#units").html() == "C") {
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ myLat +"&lon="+ myLng +"&units=metric&APPID=fb9a84522f36f6602a50ff35f1f0b985", function (e) {
            $("#demo").html(e.main.temp);   
            });
        } else {
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ myLat +"&lon="+ myLng +"&units=imperial&APPID=fb9a84522f36f6602a50ff35f1f0b985", function (e) {
            $("#demo").html(e.main.temp);   
            });
        }  
    });     
}

navigator.geolocation.getCurrentPosition(success);

//Toggel Button Between Units C & F
$("#units").on("click", function () {
    if($("#units").html() == "C") {
        $("#units").html("F");
    } else {
        $("#units").html("C");
    }
});
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var myLat;
var myLng;

function success (pos) {
    
    myLat = pos.coords.latitude;
    myLng = pos.coords.longitude;
    
    //Get Initial TEMP in Celsius + City & Icon
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ myLat +"&lon="+ myLng +"&units=metric&APPID=fb9a84522f36f6602a50ff35f1f0b985", function (e) {
    $("#demo").html(e.main.temp);
    $("#city").html(e.name + ", " + e.sys.country);
    $("#icon").attr("src", "http://openweathermap.org/img/w/" + e.weather[0].icon + ".png");
    });
    
    //Get TEMP in Celsius OR Fahrenheit
     $("#units").on("click", function () {   
        if($("#units").html() == "C") {
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ myLat +"&lon="+ myLng +"&units=metric&APPID=fb9a84522f36f6602a50ff35f1f0b985", function (e) {
            $("#demo").html(e.main.temp);   
            });
        } else {
            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ myLat +"&lon="+ myLng +"&units=imperial&APPID=fb9a84522f36f6602a50ff35f1f0b985", function (e) {
            $("#demo").html(e.main.temp);   
            });
        }  
    });     
}

navigator.geolocation.getCurrentPosition(success);

//Toggel Button Between Units C & F
$("#units").on("click", function () {
    if($("#units").html() == "C") {
        $("#units").html("F");
    } else {
        $("#units").html("C");
    }
});
