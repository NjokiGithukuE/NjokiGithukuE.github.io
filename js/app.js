const sections = document.querySelectorAll(".section");
const sectionButtons = document.querySelectorAll(".controls");
const sectionButton = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {

    //Button click active class
    for(let i = 0; i < sectionButton; i++) {
        sectionButton[i].addEventListener("click", function() {
            let currentButton = document.querySelectorAll(".active-btn");
            currentButton[0].className = currentButton[0].className.replace("active-btn", "");
            this.className += "active-btn";
        })
    }

    //Sections active
    allSections.addEventListener("click", function(e) {
        const id = e.target.dataset.id;
        if(id) {
            //Remove selected from buttons
            sectionButtons.forEach((btn) => {
                btn.classList.remove("active");
            })
            e.target.classList.add("active");

            //Hide other sections
            sections.forEach((section) => {
                section.classList.remove("active");
            })

            const element = document.getElementById(id);
        }
    })
}

pageTransitions();