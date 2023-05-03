const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    // get random no between 1 to 3
    hexCode = getRandomHexCode();
    console.log(hexCode);
    document.body.style.backgroundColor  = hexCode;
    color.textContent = hexCode;
    color.style.color = hexCode;
});

// Getting random hex-code
function getRandomHexCode(){
    let hexCode = "#";
    for(let i = 0 ; i < 6 ;i++){
        hexCode += hex[Math.floor(Math.random()*15)];
    }
    return hexCode;
}
