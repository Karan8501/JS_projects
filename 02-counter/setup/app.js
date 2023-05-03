// Select the value and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


// Set the initial count

let count = 0;

// 

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            // decrease count
            count--;
        }else if(styles.contains("reset")){
            // reset count
            count = 0;
        }else{
            //increase count
            count++;
        }
        // setting color of the value text
        if(count>=0){
            value.style.color = "green";
        }else{
            value.style.color = "red";
        } 
        // setiing the value to upadated count
        value.textContent = count;
    })
});