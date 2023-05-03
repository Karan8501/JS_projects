// select modal-btn,modal-overlay,close-btn
const btnModal = document.querySelector(".modal-btn");
const btnClose = document.querySelector(".close-btn");
const  overlay = document.querySelector(".modal-overlay");
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
btnModal.addEventListener("click",()=>{
    overlay.classList.add("open-modal")
})


// when user clicks close-btn remove .open-modal from modal-overlay
btnClose.addEventListener("click",()=>{
    overlay.classList.remove("open-modal")
})
