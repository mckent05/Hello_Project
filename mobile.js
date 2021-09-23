let btn=document.querySelector ('.icon img')
let overlay = document.querySelector('.item-links')
let clos= document.querySelector('.close-btn')

btn.addEventListener('click', function () {
    overlay.classList.add ('show-link')
})
clos.addEventListener ('click', function() {
    overlay.classList.remove ('show-link')
})

window.addEventListener ('scroll', function () {
    let scroll=this.pageYOffset
    if (scroll > 700) {
        overlay.classList.remove('show-link')
    }
})