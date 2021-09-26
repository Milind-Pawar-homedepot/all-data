var target_date = new Date('08/30/2010');
var todays_date = new Date();
var diffDays = target_date.getDate() - todays_date.getDate(); 

if(diffDays>1){

let newHtml= `<span class="countdown-timer__wrapper countdown-timer__wrapper--verbose"><img src="https://assets.thdstatic.com/images/v1/clock-black.svg" alt="">
<span class="countdown-timer__wrapper countdown-timer__wrapper--verbose">Ends in </span><strong>`+diffDays+` Days</strong></span>`

document.querySelector("#root > div > div:nth-child(3) > div > div > div.product--sticky.col__12-12.col__7-12--sm > div > div.grid > div > div > span > span.product-details__badge-container.product-details__badge-container--timer > span")
.innerHTML= newHtml

}
else{

// Set the date we're counting down to
var countDownDate = new Date("Aug 30, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

  if (hours < 10)   { hours = "0" + hours;}
  if (minutes < 10) {minutes = "0" + minutes;}
  if (seconds < 10) {seconds = "0" + seconds;}
  // Output the result in an element with id="demo"

  let newHtml= `<span class="countdown-timer__wrapper countdown-timer__wrapper--verbose"><img src="https://assets.thdstatic.com/images/v1/clock-black.svg" alt="">
<span class="countdown-timer__wrapper countdown-timer__wrapper--verbose">Ends in </span><strong>`+hours + ":"
+ minutes + ":" + seconds + ` hours</strong></span>`
  
document.querySelector("#root > div > div:nth-child(3) > div > div > div.product--sticky.col__12-12.col__7-12--sm > div > div.grid > div > div > span > span.product-details__badge-container.product-details__badge-container--timer > span")
.innerHTML= newHtml
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



}