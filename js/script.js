//Aside Navigation Bar
const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    const allSection = document.querySelectorAll(".section");

for(let i = 0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        // remove back section
        for( let i = 0; i<allSection.length; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // Add back section 
                allSection[j].classList.add("back-section");
            }

            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active");
        showSelection(this);
    })
}

function showSelection(element){
    for( let i = 0; i<allSection.length; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute('href').split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for( let i = 0; i<allSection.length; i++){
        allSection[i].classList.toggle("open");
    }
}