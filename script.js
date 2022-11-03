//    start header 


let bar = document.querySelector(".bar")
let links = document.querySelector(".links")
let flesh = document.querySelector(".flesh")

bar.onclick = function () {
    if (links.hasAttribute("title") === true ) {
        links.style.display = "block";
        flesh.style.display = "block";
        links.removeAttribute("title")
    } else if (links.hasAttribute("title") === false) {
        links.style.display = "none";
        flesh.style.display = "none";
        links.setAttribute("title", "links")
    }
   }

//    end header 


// start sassoon

let episodes = document.querySelector(".episodes")

let next_right = document.querySelector(".next-rgith")
let next_left = document.querySelector(".next-left")

let nextRight = document.querySelector(".nextRight")
let nextLeft = document.querySelector(".nextLeft")


let  left = 1




    nextRight.addEventListener("click", (el) => {
    
 left += 1100
episodes.style.cssText = `left: -${left}px`

if(left >= 1000){
    next_left.style.display = "block";
}

if(left >= 2000){
    next_right.style.display = "none";
} 
})



nextLeft.addEventListener("click", (el) => {
    left = 0
   episodes.style.cssText = `left: ${left}px`
    

if (left <= 0){
    next_right.style.display = "block";
    next_left.style.display = "none";

}
   })


//    start home icons part


let home_icons = document.querySelector(".home_icone")
let windowScrollTop = this.pageYOffset


home_icons.addEventListener("click", (el) => {
    home_icons.style.display = "none"

})

setInterval(() => {
    if (windowScrollTop >= 640) {
    home_icons.style.display = "block"
} 

if (windowScrollTop <= 640) {
    home_icons.style.display = "none"
} 

}, 500);











//    start home icons part 


// end sassoon

// start Targaryen Art

let paintings = document.querySelectorAll(".painting img")
let shower = document.querySelector(".shower")
let art_image = document.querySelector(".art_image")
let art_title = document.querySelector(".tablo .title")
let close = document.querySelector(".close")

paintings.forEach(img => { 
 img.addEventListener("click", (el) => {
    shower.style.display = "block";
    art_image.src = img.src
    art_title.innerHTML = img.alt
 })
})

close.onclick = function () {
    shower.style.display = "none";
}

// end Targaryen Art
