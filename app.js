let toggleMenu = document.querySelector('.toggleMenu')
let navigation = document.querySelector('.navigation')
toggleMenu.onclick = () => {
  navigation.classList.toggle('active')
}