let animation = document.querySelector('.animation');
console.log(animation.childNodes);

let listNav = document.querySelector('.nav-list'),
    currentWidth =  0;
function showNav() {
    listNav.classList.add('nav-list-resp')
    listNav.style.left = '0'
}

function hideNav() {
    currentWidth = window.innerWidth;
    if(currentWidth > 768) {
        listNav.classList.remove('nav-list-resp')
        listNav.style.right = '64px'
        listNav.style.left = '-64px'
    } else {
        listNav.style.left = '100%'
    }
}

window.addEventListener('load', ()=>{
    animation.classList.add('loading');
    console.log('load');
})
window.onload = function() {
    console.log('onload');
    setTimeout(()=> {
        animation.classList.remove('loading');
        animation.childNodes[1].style.transform = 'scale(0)'
        animation.childNodes[3].style.transform = 'scale(0)'
    },4000)
    setTimeout(()=> {
        animation.style.display = 'none'
    },4350)

    if(currentWidth <= 768) {listNav.classList.add('nav-list-resp')}
    hideNav()
}
    


window.onresize = function() {
    hideNav()
}

let nav = document.querySelector('nav');
function addBackgroundNav() {
    nav.style.background = 'white'
    nav.style.top = '0';
    nav.style.padding = '13px 27px'
    nav.style.boxShadow = '0px -1px 6px grey'
}
function removeBackgroundNav() {
    nav.style.background = 'transparent'
    nav.style.top = '24px';
    nav.style.padding = '0 27px'
    nav.style.boxShadow = 'none'
}
window.onscroll = function() {
    console.log(this.scrollY);
    currentWidth = window.innerWidth;
    if((this.scrollY > 0) && (currentWidth < 992)) {
        addBackgroundNav()
    } else {
        removeBackgroundNav()
    }
}