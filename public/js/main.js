burger = document.querySelector('.hamburger')
menu = document.querySelector('.nav-menu')
layout = document.querySelectorAll('footer , #main-content')
console.log(layout);


const navAni = () => {
  console.log('function is starting');
  menu.classList.toggle('navSlide')
  layout.forEach((obj) => {
    obj.classList.toggle('darken')
  })

}