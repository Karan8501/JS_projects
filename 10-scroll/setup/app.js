// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",()=>{
    // linksContainer.classList.toggle("show-links"); fixed hight
    // find the height of the container links
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight===0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
})

// ********** fixed navbar ************
const nav = document.getElementById("nav");
const topbtn = document.querySelector(".top-link");
window.addEventListener("scroll",()=>{
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    if(scrollHeight>=nav.getBoundingClientRect().height){
        nav.classList.add("fixed-nav");
    }
    else{
        nav.classList.remove("fixed-nav");
    }
    // setting top link
    if(scrollHeight>500){
        topbtn.classList.add("show-link");
    }else{
        topbtn.classList.remove("show-link");
    }
})

// ********** smooth scroll ************
// select links
const smoothLinks = document.querySelectorAll(".scroll-link");
smoothLinks.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        // prevent default scroll
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //calculate heights
        const navhight = nav.getBoundingClientRect().height;
        console.log(navhight);
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = nav.classList.contains("fixed-nav");
        
        
        let position = element.offsetTop - navhight;
        if(!fixedNav){
            position = position - navhight;
        }
        if(navhight>82){
            position = position + containerHeight;
        }
    
        console.log(position);
        window.scrollTo({
            left: 0,
            top:position
        });
        // closing the nav on clicks
        linksContainer.style.height = 0;
    });
    
})


