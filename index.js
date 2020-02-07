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

happyButton.addEventListener("click", function() {
  changeMessage(happyResponses);
});
sillyButton.addEventListener("click", function() {
  changeMessage(sillyResponses);
});
sadButton.addEventListener("click", function() {
  changeMessage(sadResponses);
});

function changeMessage(messageList) {
  var responseNum = Math.floor(Math.random() * messageList.length);
  if (message.innerText == messageList[responseNum]) {
    responseNum++;
    responseNum = responseNum % messageList.length;
  } 
  message.innerText = messageList[responseNum];
} 