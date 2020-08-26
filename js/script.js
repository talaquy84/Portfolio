window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    }, 1000)
})

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
        showSection(this);
    })
}

function showSection(element){
    for( let i = 0; i<totalNavList.length; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute('href').split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element){
    for( let i = 0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    showSection(this);
    updateNav(this);
})

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