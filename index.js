
const hamberger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const dower = document.querySelector(".mobileNav");
hamberger.addEventListener("click", ()=>{
    bar1.classList.toggle("amimatbar1");
    bar2.classList.toggle("amimatbar2");
    bar3.classList.toggle("amimatbar3");
    dower.classList.toggle("openDower");
})