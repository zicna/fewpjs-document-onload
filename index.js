// Your code goes here

document.addEventListener("DOMContentLoaded", function(){
    console.log('The DOM has loaded');
});
// console.log("This cosole.log() fires when index.js loads...")
const text = document.getElementById('text');

document.addEventListener("DOMContentLoaded", function (){
    text.innerHTML = "This is really cool!"
})

