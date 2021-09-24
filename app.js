
// selecting menu btn DIV
var menuDiv = document.querySelectorAll(".menu-btns button");
console.log(menuDiv);

// selecting all menu button
var allMenu = document.querySelector(".all");

// selecting asian menu item
var asianMenu= document.querySelector(".asian");

// selecting chinese menu item 
var chnsMenu = document.querySelector(".chinese");

// selecting desi menu item 
var desiMenu = document.querySelector(".desi");

// selecting desert menu item 
var desertMenu = document.querySelector(".desert");

// selecting the cuisine DIV

var asianCuisine = document.querySelector(".asian-cuisine");

var chineseCuisine = document.querySelector(".chinese-cuisine");

var desiCuisine = document.querySelector(".desi-cuisine");

var desertCuisine  = document.querySelector(".desert-cuisine");






// add eventlister to all the buttons

for (let i=0;i<menuDiv.length;i++){
    menuDiv[i].addEventListener("click", function(e){
            
        e.target.preventDefault;

        if(e.target == asianMenu){
                asianCuisine.classList.replace("hidden" ,"active");
                chineseCuisine.classList.add("hidden");
                desiCuisine.classList.add("hidden");
                desertCuisine.classList.add("hidden");
                
            }

            if(e.target == chnsMenu){
                console.log("Kazi");
                chineseCuisine.classList.replace("hidden","active");
                desiCuisine.classList.add("hidden");
                desertCuisine.classList.add("hidden");
                asianCuisine.classList.add("hidden");
            }

            if(e.target == desiMenu){
                console.log("Kazi");
                desiCuisine.classList.replace("hidden","active");
                chineseCuisine.classList.add("hidden");
                desertCuisine.classList.add("hidden");
                asianCuisine.classList.add("hidden");
            }

            if(e.target == desertMenu){
                console.log("Kazi");
                desertCuisine.classList.replace("hidden","active");
                
                chineseCuisine.classList.add("hidden");
                desiCuisine.classList.add("hidden");
                asianCuisine.classList.add("hidden");
            }

            if(e.target == allMenu){
                console.log("Kazi");
                desertCuisine.classList.replace("hidden","active");
                chineseCuisine.classList.replace("hidden","active");
                desiCuisine.classList.replace("hidden","active");
                asianCuisine.classList.replace("hidden","active");
            }
    })
}






