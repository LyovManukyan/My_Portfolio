let arr =[];
let i = 0;

arr[0] = "./images/Rectangle 15 (1).png";
arr[1] =  "./images/Rectangle 15 (2).png";
arr[2] =  "./images/Rectangle 15.png";
arr[3] =  "./images/Rectangle 16.png";


let slide = document.querySelector(".slide-img")
function slidelist(){
  slide.src = arr[i]
  if(i<arr.length-1){
    i++
  }else{
    i=0
  }
}
slidelist()
// setInterval(slidelist,2000)
let btn = document.querySelector(".mode")
btn.addEventListener("click",()=>{
  document.querySelector(".l-d-mode").classList.toggle("mode-change")
  document.querySelector("header").classList.toggle("switch")
  document.querySelector(".sect2").classList.toggle("switch")
  document.querySelector(".sect3").classList.toggle("switch")
  document.querySelector(".sect4").classList.toggle("switch")
  document.querySelector(".footer").classList.toggle("switch")
})
let hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click",()=>{
  document.querySelector(".menu").classList.toggle("menu-block")
  document.querySelector(".burger-itm1").classList.toggle("hamburger-item1")
  document.querySelector(".burger-itm2").classList.toggle("hamburger-item3")
  document.querySelector(".burger-itm3").classList.toggle("hamburger-item2")
})