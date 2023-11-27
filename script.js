let btn = document.querySelector('.hamburger-icon')
let hMenu = document.querySelector(".hamburger-menu")


btn.addEventListener('click', () => {
 console.log('click');
 hMenu.style.transform = 'translateX(0%)' 
 hMenu.style.transition = ".9s" 
})