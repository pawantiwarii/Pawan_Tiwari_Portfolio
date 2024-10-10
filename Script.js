
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.scrollY = () =>{
    sections.forEach((sec)=>{
        let top = window.scrollY
        let offset = sec.offset - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
                
            })
        }
    })
}

menuIcon.addEventListener('click', (e)=>{
    console.log(e.value)
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active')
})