
// We need to set the countdown time and it take with the present time
var countDown = new Date("Jun 13, 2018 20:10:00").getTime();

//  we need to set an interval which updates for every second.
var x = setInterval(function() {

// we need to fetch current time
var now = new Date().getTime();

// now we have to know the time remaining between the present and given time
var timeRemaining = countDown - now;

// now we have to calculate times so we can say 1000 is the 1000 milliseconds in one second and 60 seconds in amin and 60 mins in an hour and 24 hours 
// when you calucualting for hoursJun 13, 2017

var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

// now we have to display the results
document.getElementById("timer").innerHTML =   days + "d" + ":" +hours + "h" + ":" + minutes + "m" + ":" + seconds + "s";

if (timeRemaining < 0) {
  clearInterval(x);
  document.getElementById("timer").innerHTML = "EXPIRED";
 }
});

// blinking function
var t = setInterval(function () {
    
    var now = new Date().getTime(); 
    var timeRemaining = countDown - now;
    console.log(timeRemaining);
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));   
    if(hours === 0 && minutes === 0 && days === 0){
    var blink = document.getElementById('timer');
    blink.style.visibility = (blink.style.visibility == 'hidden' ? '' : 'hidden');
    }
}, 1000);

