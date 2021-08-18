document.getElementById("header").draggable = (true)
var x5 = Math.PI / 180
function doc1() {
    document.getElementById("body1").style.backgroundColor = "rgba(255, 0, 0, 0.623)";
    document.getElementById("body1").style.color="black"
}
function doc2() {
    document.getElementById("body1").style.backgroundColor = "rgba(0, 255, 0, 0.500)";
    document.getElementById("body1").style.color="black"
}
function doc3() {
    document.getElementById("body1").style.backgroundColor = "rgba(0, 0, 255, 0.500)";
    document.getElementById("body1").style.color="black"
}




/*
// if (a > .111e+310) {
//     document.getElementById("outf").innerHTML = "infinity";
// }
// else {
//     document.getElementById("outf").innerHTML = "-infinity";
//????????*/
// To remove head ....?
function nohead1() {
    document.getElementById('header').hidden = true;
    document.getElementById("nohead").style.border = '1px dotted black';
}
// to show head....?
function nohead2() {
    document.getElementById('header').hidden = false;
    document.getElementById("head3").style.border = '1px dotted black';
}
var b = [1, 2, 3, 4, 5, 6, 7] // ignore it.
function showDate() {
    document.getElementById("date_and_time").innerHTML = Date();

}
// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(51.508742, -0.120850),
//         zoom: 5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
//...


// grab a reference of every hands

// hour hand
let hourHand = document.querySelector('.h');
// minute hand 
let minuteHand = document.querySelector('.m');
// second hand
let secondHand = document.querySelector('.s');

// function that rotates the hands
function rotate() {
  // get the current Date object from which we can obtain the current hour, minute and second
  const currentDate = new Date();

  // get the hours, minutes and seconds
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // rotating fraction --> how many fraction to rotate for each hand.
  const secondsFraction = seconds / 60;
  const minutesFraction = (secondsFraction + minutes) / 60;
  const hoursFraction = (minutesFraction + hours) / 12;

  // actual deg to rotate
  const secondsRotate = secondsFraction * 360;
  const minutesRotate = minutesFraction * 360;
  const hoursRotate = hoursFraction * 360;
  //????????????????????????????????????????
  // apply the rotate style to each element
  // ??????????????????????????????????????
  
  secondHand.style.transform = `rotate(${secondsRotate}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotate}deg)`;
  hourHand.style.transform = `rotate(${hoursRotate}deg)`;
}

// for every 1000 milliseconds(ie, 1 second) interval, activate the rotate() function.
setInterval(rotate, 1000);
//black background
function blbg() {
    document.getElementById("body1").style.backgroundColor="rgba(0, 0, 0, 0.828)";
    document.getElementById("body1").style.color="#ec407a";

}
// blanchedalmond background
function whbg() {
    document.getElementById("body1").style.backgroundColor="blanchedalmond";
    document.getElementById("body1").style.color="black";
}
/* white - background;';';'*/
function whibg() {
    document.getElementById("body1").style.backgroundColor="white";
    document.getElementById("body1").style.color="black";
}