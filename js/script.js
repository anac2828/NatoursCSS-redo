const navLink = document.querySelector(".navigation__list");
const navBackground = document.querySelector(".navigation__background")
const nav = document.querySelector('.navigation__nav');
const navMenuBtn = document.querySelector('.navigation__checkbox');
// const menu = document.querySelector('.navigation__button')

// menu.addEventListener('click', ()=> { console.log(navMenuBtn, navBackground.style)})

navLink.addEventListener('click', function (event) {
  
  const selectedLink = event.target

  if (selectedLink.tagName !== 'A') return;
  
  navBackground.style.transform = '';
  nav.style.opacity = ''
  nav.style.width = ''
  navMenuBtn.checked = false;
  
})