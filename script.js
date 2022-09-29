let change1 = document.querySelector('.color1');
let change2 = document.querySelector('.color2');
let change3 = document.querySelector('.color3');
let change4 = document.querySelector('.color4');
let change5 = document.querySelector('.color5');
let change6 = document.querySelector('.color6');
let change7 = document.querySelector('.color7');
let change8 = document.querySelector('.color8');
let change9 = document.querySelector('.color9');
let change10 = document.querySelector('.color10');
let img = document.querySelector('.first-img');
let allImages = document.querySelectorAll('img')

ative()
let color = [
 "#ff8080",
 "#ffbf80",
 "#ffe680",
 "#80bfff",
 "#8080ff",
 "#80ffff",
 "#80ffdf",
 "#ff80ff",
 "#99e699",
 "#df9f9f"
]

let counter = 0;

function ative(){
  setInterval( ()=> {
  counter++
  
  if(counter > 9){
  counter = 0
   }
 
  document.body.style.backgroundColor = color[counter]
  
  var percentage = `-${counter}00%`
  img.style.marginLeft = percentage
  }, 3000)
}

change1.addEventListener("click", () =>{ 
  document.body.style.backgroundColor = "#ff8080"
  img.style.marginLeft = '00%'
})

change2.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffbf80"
  img.style.marginLeft = '-100%'
})

change3.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffe680"
  img.style.marginLeft = '-200%'
})

change4.addEventListener("click", () => {
 document.body.style.backgroundColor = "#80bfff"
 img.style.marginLeft = '-300%'
})

change5.addEventListener("click", () => {
  document.body.style.backgroundColor = "#8080ff"
  img.style.marginLeft = '-400%'
})

change6.addEventListener("click", () => {
  document.body.style.backgroundColor = "#80ffff"
  img.style.marginLeft = '-500%'
})

change7.addEventListener("click", () => {
  document.body.style.backgroundColor = "#80ffdf"
  img.style.marginLeft = '-600%'
})

change8.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ff80ff"
  img.style.marginLeft = '-700%'
})

change9.addEventListener("click", () => {
  document.body.style.backgroundColor = "#99e699"
  img.style.marginLeft = '-800%'
})

change10.addEventListener("click", () => {
  document.body.style.backgroundColor = "#df9f9f"
  img.style.marginLeft = '-900%'

})
