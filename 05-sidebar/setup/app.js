// select reqired varible
const sidebarToggle = document.querySelector(".sidebar-toggle");
const btnClose = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

// Activating side bar by adding clas
sidebarToggle.addEventListener("click",()=>{
    sidebar.classList.add("show-sidebar")
})


// clear sidebar

btnClose.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar");
})
