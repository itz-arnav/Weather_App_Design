var thumb = document.querySelector('#thumb');
var track = document.querySelector('#track');
var trackLength = track.getTotalLength();
var sliderRect = document.querySelector('#slider').getBoundingClientRect();
var trackStart = track.getPointAtLength(0);
var trackEnd = track.getPointAtLength(trackLength);
var body = document.querySelector('body');

// Initial position based on system time
var now = new Date();
var hours = now.getHours();
var minutesPastMidnight = hours * 60 + now.getMinutes();
var initialPosition = trackLength * minutesPastMidnight / 1440;
var initialPoint = track.getPointAtLength(initialPosition);
thumb.setAttribute('cx', initialPoint.x);
thumb.setAttribute('cy', initialPoint.y);

// Set initial background color
updateBackgroundColor(hours);

// Update position and background color every second
setInterval(function() {
  var now = new Date();
  var hours = now.getHours();
  var minutesPastMidnight = hours * 60 + now.getMinutes();
  var newPosition = trackLength * minutesPastMidnight / 1440;
  var newPoint = track.getPointAtLength(newPosition);
  thumb.setAttribute('cx', newPoint.x);
  thumb.setAttribute('cy', newPoint.y);

  // Update background color
  updateBackgroundColor(hours);
}, 1000);

// Function to update background color based on time of day
function updateBackgroundColor(hours) {
    if (hours >= 5 && hours < 8) {
      body.style.background = 'linear-gradient(180deg, #1C9FE3 0%, #4EAEE9 67%, #8EC2F1 100%)'; // Morning
    } else if (hours >= 8 && hours < 18) {
      body.style.background = 'linear-gradient(180deg, #0495E6 0%, #3EAFD7 67%, #77CCC7 100%)' // Day
    } else if (hours >= 18 && hours < 20) {
      body.style.background = 'linear-gradient(180deg, #A92B36 0%, #FDA380 67%, #F5D195 100%)'
    } else if (hours >= 20 && hours < 22) {
      body.style.background = 'linear-gradient(180deg, rgba(12,53,105,1) 0%, rgba(23,71,135,1) 67%, rgba(28,81,149,1) 100%)' // Evening
    } else {
      body.style.background = 'linear-gradient(180deg, rgba(12,53,105,1) 0%, rgba(23,71,135,1) 67%, rgba(28,81,149,1) 100%)' // Night
    }
  }


const dateTimeEle = document.querySelector(".dateTime");

