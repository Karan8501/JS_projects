const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    // get random no between 1 to 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor  = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(colors.length*Math.random());
}


