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
  hMenu.style.transform = 'translateX(-100%)' 
  hMenu.style.transition = ".9s" 
}))



// skills hover effect
let skills = document.querySelectorAll('.skills-items h3')
console.log(skills);

skills.forEach((skill) => skill.addEventListener('mouseover',() => {
  skill.style.marginLeft = '30px'
  skill.style.transition = '.7s'
  skill.style.color = 'orangered'
}))
    
skills.forEach((skill) => skill.addEventListener('mouseleave',() => {
  skill.style.marginLeft = ''
  skill.style.color = ''
}))

//
let projects = document.querySelectorAll('.projects-div')

projects.forEach((project) => project.addEventListener('mouseover',() => {
  project.style.cursor = "pointer" ;
  project.style.boxShadow = "0px 0px 25px #ee5a24" ;
}))

projects.forEach((project) => project.addEventListener('mouseleave',() => {
  project.style.boxShadow = "none" ;
}))

// footer current year
let year = document.querySelector('.year')
year.innerHTML = new Date().getFullYear()