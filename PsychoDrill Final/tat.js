// let  qu=['tatimg\set2.1tat.jpg','tatimg\set2.4tat.jpg','tatimg\set2.2tat.jpg','tatimg\set2.3tat.jpg'];

// const questionbox=document.querySelector("#quesboxb");
// console.log(questionbox);

// previous=document.querySelector("#prev");
// next=document.querySelector("#next");
// var text = document.getElementById("ans").value;
// console.log(previous);
// console.log(next);

// let i=0

// previous.addEventListener("click",()=>{
//     i=i-1;
//     questionbox.textContent=qu[i];
//     if (i<0) {
//     questionbox.textContent="no previous question";
        
//     }
// })

// next.addEventListener("click",()=>{
//     document.getElementById("ans").value="";
//     i=i+1;
//     questionbox.textContent=qu[i];
//     if (i>(qu.length)-1) {
//     questionbox.textContent="no  noext questions";
//     }
// })
const images = ['tatimg/set2.1tat.jpg', 'tatimg/set2.4tat.jpg', 'tatimg/set2.2tat.jpg', 'tatimg/set2.3tat.jpg'];

const questionbox = document.querySelector("#quesboxb");
const previous = document.querySelector("#prev");
const next = document.querySelector("#next");
const answer = document.getElementById("ans");

let i = 0;

questionbox.style.backgroundImage = `url(${images[i]})`;

// `fsfsgfgs ${sststts}`
// questionbox.style.backgroundImage = url('images[i]');

console.log(images[i]);

previous.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = 0;
        questionbox.style.backgroundImage = `url(${images[i]})`;
        answer.value = "No previous question";
    } else {
        questionbox.style.backgroundImage = `url(${images[i]})`;
        answer.value = "";
    }
});

next.addEventListener("click", () => {
    i++;
    if (i >= images.length) {
        i = images.length - 1;
        questionbox.style.backgroundImage = `url(${images[i]})`;
        answer.value = "No more questions";
    } else {
        questionbox.style.backgroundImage = `url(${images[i]})`;
        answer.value = "";
    }
});
let timeInSeconds = 3240;
let timerElement = document.getElementById('timertwo');


function displayTime() {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = timeInSeconds % 60;
    
   
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
   
    timerElement.textContent = minutes + ':' + seconds;
}


function startTimer() {
    displayTime(); 
    let timer = setInterval(function() {
        timeInSeconds--;
        displayTime(); 
        
        
        if (timeInSeconds === 0) {
            clearInterval(timer);
            timerElement.textContent = 'Time\'s up!'; 
        }
    }, 1000); 
}


startTimer();

let answers=[]

function saveText() {
    var text = document.getElementById("ans").value;
    console.log("Text saved:", text);
    
}

let submit=document.querySelector("#submit");
submit.addEventListener("click",()=>{
   
    answers.push(text);
    console.log("Text saved:", text);
    document.getElementById("ans").value="";

})

