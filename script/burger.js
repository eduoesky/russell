const bourger = document.getElementById('burger')
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close-btn')


bourger.addEventListener('click', () => {
  menu.style.right = '0'
  overlay.style.display = 'block'
})

const closeMenu = () => {
  menu.style.right = '-300px'
  overlay.style.display = 'none'
}

closeBtn.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)
