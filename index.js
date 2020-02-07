
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

happyButton.addEventListener("click", messageHappy);
sillyButton.addEventListener("click", messageSilly);

function messageHappy() {
  var responseNum = Math.floor(Math.random() * happyResponses.length);
  message.innerText = happyResponses[responseNum];
}
function messageSilly() {
  var responseNum = Math.floor(Math.random() * sillyResponses.length);
  message.innerText = sillyResponses[responseNum];
}