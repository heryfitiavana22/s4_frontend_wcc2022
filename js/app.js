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

window.onresize = function() {
    hideNav()
}

window.onload = function() {
    if(currentWidth <= 768) {listNav.classList.add('nav-list-resp')}
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