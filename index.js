
var message = document.querySelector(".message");

var happyButton = document.querySelector(".happy");
var happyResponses = [
  "You go!",
  "Your smile just cheered me up!",
  "YAY!"
];
var sillyButton = document.querySelector(".silly");
var sillyResponses = [
  "Interesting response",
  "Sounds ... good?",
  "Me too."
];
var sadButton = document.querySelector(".crying");
var sadResponses = [
  "Do you want to talk?",
  "Keep your head up",
  "We can cry together!",
  "What can I do?"
];

happyButton.addEventListener("click", messageHappy);
sillyButton.addEventListener("click", messageSilly);
sadButton.addEventListener("click", messageSad);

function messageHappy() {
  var responseNum = Math.floor(Math.random() * happyResponses.length);
  if (message.innerText == happyResponses[responseNum]) {
    responseNum++;
    responseNum = responseNum % happyResponses.length;
  } 
  message.innerText = happyResponses[responseNum];
}
function messageSilly() {
  var responseNum = Math.floor(Math.random() * sillyResponses.length);
  if (message.innerText == sillyResponses[responseNum]) {
    responseNum++;
    responseNum = responseNum % sillyResponses.length;
  } 
  message.innerText = sillyResponses[responseNum];
}
function messageSad() {
  var responseNum = Math.floor(Math.random() * sadResponses.length);
  if (message.innerText == sadResponses[responseNum]) {
    responseNum++;
    responseNum = responseNum % sadResponses.length;
  } 
  message.innerText = sadResponses[responseNum];
}