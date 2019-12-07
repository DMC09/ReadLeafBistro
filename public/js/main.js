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


// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }
//
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }

const reset = () => {
  tabContent.forEach(element => {
    if (element.style.opacity = "1") {
      console.log('this has an opacity of 1');
    }
  })
}

const appDrawer = () => {
  reset()
  appContent.style.opacity = "1"
}

// entreeDrawer()
// dessertsDrawer()
// drinksDrawer()


// NAVIGATION ANIMATION
const navAni = () => {
  console.log('Nav animation');
  menu.classList.toggle('navSlide')
  layout.forEach((obj) => {
    obj.classList.toggle('darken')
  })
}