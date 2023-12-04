let btn = document.querySelector('.hamburger-icon')
let hMenu = document.querySelector(".hamburger-menu")

btn.addEventListener('click', () => {
 console.log('click');
 hMenu.style.transform = 'translateX(0%)' 
 hMenu.style.transition = ".9s" 
})


let  mobLink = document.querySelectorAll('.mobile-link')
console.log(mobLink);
mobLink.forEach((link) => link.addEventListener('click' , () => {
 console.log('link');
  hMenu.style.transform = 'translateX(100%)' 
  hMenu.style.transition = ".9s" 
}))

// footer current year
let year = document.querySelector('.year')
year.innerHTML = new Date().getFullYear()