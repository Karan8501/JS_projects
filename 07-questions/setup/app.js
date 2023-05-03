//using selectors inside the element
const questions = document.querySelectorAll(".question");

// trsaversing all the article
questions.forEach((question)=>{
    const btn = question.querySelector(".question-btn")
    // click events on the all btns
    btn.addEventListener("click",()=>{
        //setting other article in hidden state
            questions.forEach(function(item){
                if(item !== question){
                    item.classList.remove("show-text");
                }
            }
            );
            question.classList.toggle("show-text");
    });
}
);

// traversing the dom
// const text = document.querySelector(".question");
// const btnQuestion = document.querySelectorAll(".question-btn")

// btnQuestion.forEach((e)=>{
//     e.addEventListener("click",()=>{
//         const question = e.parentElement.parentElement
//         question.classList.toggle("show-text");
//     })

// })
