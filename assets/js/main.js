/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/

let swiperProjects = new Swiper(".projects__container", {

  loop:true,
  spaceBetween:24,

  cssMode: true,
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  pagination: {
    el:".swiper-pagination",
  },
  breakpoints:{
    1200:{
      slidesPerView:2,
      spaceBetween:-56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor:true,
  navigation: {
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
});

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e)=>{
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value ===''){
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      contactMessage.textContent ='Write all the input fields'
    } else{
      emailjs.sendForm('service_mnbm4s8','template_yy4qxkh','#contact-form','hjwtgkFXlFZj--plt')
      .then(() =>{
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message sent success !!'

        setTimeout(()=>{
          contactMessage.textContent = ''
        }, 5000)
      }, (error)=>{
        alert('Sorry, Failed Send ...', error)
      })

      contactName.value=''
      contactEmail.value=''
      contactProject.value=''
    }
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset

  sections.forEach( current =>{
    const sectionHeight = current.offsetHeigth,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                              : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SCROLL REVEAL ANIMATION ===============*/
