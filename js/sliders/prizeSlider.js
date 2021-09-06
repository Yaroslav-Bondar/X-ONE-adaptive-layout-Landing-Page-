let prizeSlider = document.querySelector('.prize__slider')
let prizeSlides = document.getElementsByClassName('prize__slide')
let prizeDots = document.getElementsByClassName('prize__dot')

let slideIndex = 1

function showSlides (n) {
  // spin slides in a circle
  if(n > prizeSlides.length) slideIndex = 1
  
  for (const el of prizeSlides) {
    el.style.display = 'none'  
  }
  for (const el of prizeDots) {
    el.classList.remove('prize__dot_active')  
  }
  prizeSlides[slideIndex - 1].style.display = 'block'
  prizeDots[slideIndex - 1].classList.add('prize__dot_active')
}
showSlides(slideIndex)

// click on slider conteiner
prizeSlider.addEventListener('click', (e)=> {
  if (e.target.closest('.prize__dots')) return
  showSlides(slideIndex += 1)
})

// click on dots
for (let i = 0; i < prizeDots.length; i++) {
  prizeDots[i].addEventListener('click', ()=> {
    showSlides(slideIndex = i + 1)
  })  
}

 

