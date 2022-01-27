const hamburIcon=document.querySelector('#burger')
const navbarmenu=document.querySelector('#nav-links')

hamburIcon.addEventListener('click',()=>{
    navbarmenu.classList.toggle('is-active')

})

