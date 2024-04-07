let  qu=[" He and his brother have gone to a forest; they lose their way and it is becoming dark., start running in the direction of his village "," While going to attend an important meeting, he saw a ghastly accident between an auto rickshaw and a tonga."," He and his friend are standing on a bridge over a river. His friend who does not know swimming, suddenly falls down"]
const questionbox=document.querySelector("#quesboxb");
console.log(questionbox);

previous=document.querySelector("#prev");
next=document.querySelector("#next");
console.log(previous);
console.log(next);

let i=0

previous.addEventListener("click",()=>{
    i=i-1;
    questionbox.textContent=qu[i];
    if (i<0) {
    questionbox.textContent="no previous question";
        
    }
})

next.addEventListener("click",()=>{
    i=i+1;
    questionbox.textContent=qu[i];
    if (i>(qu.length)-1) {
    questionbox.textContent="no  noext questions";
    }
})
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
    var text = document.getElementById("ans").value;
    answers.push(text);
    console.log("Text saved:", text);

})

