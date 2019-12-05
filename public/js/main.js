const burger = document.querySelector('.hamburger')
const menu = document.querySelector('.nav-menu')
const layout = document.querySelectorAll('footer , #main-content')
const appContent = document.querySelector('.apps')
const entContent = document.querySelector('.entrees')
const desContent = document.querySelector('.desserts')
const driContent = document.querySelector('.drinks')
const tabContent = [appContent, entContent, desContent, driContent]

// console.log(tabContent);

const navAni = () => {
  console.log('function is starting');
  menu.classList.toggle('navSlide')
  layout.forEach((obj) => {
    obj.classList.toggle('darken')
  })
}

const reset = () => {
  tabContent.forEach(element => {
    element.classList.remove("tab-Content-active")
  })
}




const appDrawer = () => {
  reset()
  appContent.classList.toggle("tab-Content-active")
};

const entreeDrawer = () => {
  reset()
  entContent.classList.toggle("tab-Content-active")
};
const dessertsDrawer = () => {
  reset()
  desContent.classList.toggle("tab-Content-active")
};
const drinksDrawer = () => {
  reset()
  driContent.classList.toggle("tab-Content-active")
};