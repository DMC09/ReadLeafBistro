// nav vars
const burger = document.querySelector('.hamburger')
const menu = document.querySelector('.nav-menu')
const layout = document.querySelectorAll('footer , #main-content')

//  menu vars
const items = document.querySelector('.items')
const appContent = document.querySelector('.apps')
const entContent = document.querySelector('.entrees')
const desContent = document.querySelector('.desserts')
const driContent = document.querySelector('.drinks')
const tabContent = [appContent, entContent, desContent, driContent]
const button = document.querySelectorAll('.tab-button')





reset = () => {
  tabContent.forEach(element => {
    element.classList.remove("tab-Content-active")
  })
  button.forEach(element => {
    element.style.background = ""
  })
}
appDrawer = () => {
  reset()
  appContent.classList.toggle("tab-Content-active")
  button[0].style.background = "#3D180E"

}

entreeDrawer = () => {
  reset()
  entContent.classList.toggle("tab-Content-active")
  button[1].style.background = "#3D180E"

}

dessertsDrawer = () => {
  reset()
  desContent.classList.toggle("tab-Content-active")
  button[2].style.background = "#3D180E"

}

drinksDrawer = () => {
  reset()
  driContent.classList.toggle("tab-Content-active")
  button[3].style.background = "#3D180E"

}





// NAVIGATION ANIMATION
const navAni = () => {
  console.log('Nav animation');
  burger.classList.toggle('change')
  menu.classList.toggle('navSlide')
  layout.forEach((obj) => {
    obj.classList.toggle('darken')
  })
}