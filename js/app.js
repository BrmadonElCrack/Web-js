// Js for the buttons

/* --- To add <Li> ---*/
const sections = Array.from(document.getElementsByTagName("section")); 
const menu = document.getElementById('navbar__list');

for(section of sections){
    const listItem = document.createElement('li');
    listItem.textContent=section.dataset.nav;
    listItem.classList = section.id;
    listItem.setAttribute("href", '#' + section.id);
    menu.appendChild(listItem);
  }

/* --- To change the color of the buttons and scroll--- */
const buttonSec1 = document.querySelector('.section1')
const buttonSec2 = document.querySelector('.section2')
const buttonSec3 = document.querySelector('.section3')
const buttonSec4 = document.querySelector('.section4')
const buttonSec5 = document.querySelector('.section5')

const contentSec1 = document.querySelector('#section1')
const contentSec2 = document.querySelector('#section2')
const contentSec3 = document.querySelector('#section3')
const contentSec4 = document.querySelector('#section4')
const contentSec5 = document.querySelector('#section5')

buttonSec1.addEventListener('click', () => {
    contentSec1.scrollIntoView({block: "center", behavior: "smooth"})
    contentSec1.classList.add('your-active-class')
    buttonSec1.classList.add('active');

    buttonSec2.classList.remove('active');
    buttonSec3.classList.remove('active');
    buttonSec4.classList.remove('active');
    buttonSec5.classList.remove('active');

    contentSec2.classList.remove('your-active-class');
    contentSec3.classList.remove('your-active-class');
    contentSec4.classList.remove('your-active-class');
    contentSec5.classList.remove('your-active-class');
})
buttonSec2.addEventListener('click', () => {
    contentSec2.scrollIntoView({block: "center", behavior: "smooth"});
    contentSec2.classList.add('your-active-class')
    buttonSec2.classList.add('active');

    buttonSec1.classList.remove('active');
    buttonSec3.classList.remove('active');
    buttonSec4.classList.remove('active');
    buttonSec5.classList.remove('active');

    contentSec1.classList.remove('your-active-class');
    contentSec3.classList.remove('your-active-class');
    contentSec4.classList.remove('your-active-class');
    contentSec5.classList.remove('your-active-class');
})
buttonSec3.addEventListener('click', () => {
    contentSec3.scrollIntoView({block: "center", behavior: "smooth"});
    contentSec3.classList.add('your-active-class')
    buttonSec3.classList.add('active');

    buttonSec1.classList.remove('active');
    buttonSec2.classList.remove('active');
    buttonSec4.classList.remove('active');
    buttonSec5.classList.remove('active');

    contentSec1.classList.remove('your-active-class');
    contentSec2.classList.remove('your-active-class');
    contentSec4.classList.remove('your-active-class');
    contentSec5.classList.remove('your-active-class');
})
buttonSec4.addEventListener('click', () => {
    contentSec4.scrollIntoView({block: "center", behavior: "smooth"});
    contentSec4.classList.add('your-active-class')
    buttonSec4.classList.add('active');

    buttonSec1.classList.remove('active');
    buttonSec2.classList.remove('active');
    buttonSec3.classList.remove('active');
    buttonSec5.classList.remove('active');

    contentSec1.classList.remove('your-active-class');
    contentSec2.classList.remove('your-active-class');
    contentSec3.classList.remove('your-active-class');
    contentSec5.classList.remove('your-active-class');
})
buttonSec5.addEventListener('click', () => {
    contentSec5.scrollIntoView({block: "center", behavior: "smooth"})
    contentSec5.classList.add('your-active-class')
    buttonSec5.classList.add('active');

    buttonSec1.classList.remove('active');
    buttonSec2.classList.remove('active');
    buttonSec3.classList.remove('active');
    buttonSec4.classList.remove('active');

    contentSec1.classList.remove('your-active-class');
    contentSec2.classList.remove('your-active-class');
    contentSec3.classList.remove('your-active-class');
    contentSec4.classList.remove('your-active-class');
})

/* --- To change color according to the scroll --- */
const encabezados = document.querySelectorAll('main section');
const enlaces = document.querySelectorAll('li')
const content = document.querySelectorAll('section')

const observer = new  IntersectionObserver(entradas => {
    entradas.forEach(entrada =>{
        if(entrada.isIntersecting){
            const id = '#' + entrada.target.id;
            history.pushState({}, entrada.target.innerText, id);
            enlaces.forEach(enlace => {
                enlace.classList.remove('active')
                const href = enlace.attributes.href.nodeValue;
                if(href === id){
                    enlace.classList.add('active');
                }
            })
            content.forEach(cont => {
                cont.classList.remove('your-active-class')
                const idcont1 = '#' + contentSec1.id
                const idcont2 = '#' + contentSec2.id
                const idcont3 = '#' + contentSec3.id
                const idcont4 = '#' + contentSec4.id
                const idcont5 = '#' + contentSec5.id
                if(idcont1 === id){
                    contentSec1.classList.add('your-active-class')
                }else if (idcont2 === id) {
                    contentSec2.classList.add('your-active-class')
                }else if (idcont3 === id) {
                    contentSec3.classList.add('your-active-class');
                }else if (idcont4 === id) {
                    contentSec4.classList.add('your-active-class');
                }else if (idcont5 === id) {
                    contentSec5.classList.add('your-active-class');
                }
            })
        }
    })
},{
    threshold: 1,
    rootMargin: '0px '
});

encabezados.forEach(encabezado => {
    observer.observe(encabezado);
});
