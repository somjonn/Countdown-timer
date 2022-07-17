const item = document.querySelectorAll(".countdown-item > h2");
const countdownElement = document.querySelector(".countsown");
//start timer

let countdownDate = new Date(2022, 07, 16, 10, 0, 0).getTime();

function getCountdownTime() {
   // take current time
   const now = new Date().getTime();

   const distance = countdownDate - now;

   //1s = 1000ms 
   // 1m = 60s 
   // 1h = 60 minutes
   // 1d = 24 hours

   // in milliseconds
   const oneDay = 24 * 60 * 60 * 1000;
   const oneHour = 60 * 60 * 1000;
   const oneMinute = 60 * 1000;

   let days = Math.floor(distance / oneDay);
   let hours = Math.floor((distance % oneDay) / oneHour);
   let minutes = Math.floor((distance % oneHour) / oneMinute);
   let seconds = Math.floor((distance % oneHour) / 1000);


const values = [days, hours, minutes, seconds];
console.log(values);

   item.forEach(function (item, index) {
      item.textContent = values[index];
});
if ( distance < 0) {
   clearInterval(countdown);
   countdownElement.innerHTML = "<h2 class='expired'> Time out</h2>";
}
}

let countdown = setInterval(getCountdownTime, 1000);

getCountdownTime();