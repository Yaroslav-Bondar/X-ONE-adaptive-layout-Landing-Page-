
// import {Overlap} from '../../common/classes/overlapC'

let prizeSlider = document.querySelector('.prize__slider')
let prizeSlides = document.getElementsByClassName('prize__slide')
let prizeDots = document.getElementsByClassName('prize__dot')
let prizeSlideDescrips = document.querySelectorAll('.prize__slide-descrip')
let prizeDescribe = document.querySelector('.prize__describe')
let prizeTitle = document.querySelector('.prize__title')
let prizeBlock2 = document.querySelector('.prize__block2')

let slideIndex = 1
let overlapA
let overlapB
let isOverlap = false
// set the same height for all slides

// function getMaxHeight(obj) {
//   let slidesHeight = new Array()
//   for (const item of obj) {
//     slidesHeight.push(item.offsetHeight)
//   }
//   console.log((slidesHeight))
//   return Math.max(...slidesHeight)  
// }

// prizeBlock2.style.height = getMaxHeight(prizeSlides) + 'px'
// prizeBlock2.style.height = maxSlideHeight + 'px' 

// for (const item of prizeSlides) {
//   if(item.offsetHeight !== maxSlideHeight)
//     item.style.height = maxSlideHeight + 'px'
// }
// // set the same height for all slides

function setIsOverlap(val) {
  if(!isOverlap) {
    isOverlap = val
  }
}

function showSlides (n) {
  // spin slides in a circle
  if(n > prizeSlides.length) slideIndex = 1
  
  for (const el of prizeSlides) {
    el.style.display = 'none'  
  }
  for (const el of prizeDots) {
    el.classList.remove('prize__dot_active')  
  }
  // prizeSlides[slideIndex - 1].classList.add('prize__fade')

  prizeSlides[slideIndex - 1].style.display = 'block'
  prizeDots[slideIndex - 1].classList.add('prize__dot_active')

  // eliminate the intersection with the current slide
  overlapA = new Overlap(prizeDescribe, prizeSlideDescrips[slideIndex - 1], 50)
  overlapA.changeOverlap()
  setIsOverlap(overlapA.isOverlap)
  // eliminate the intersection with the current slide
  overlapB = new Overlap(prizeTitle, prizeSlideDescrips[slideIndex - 1], 50)
  overlapB.changeOverlap()
  setIsOverlap(overlapB.isOverlap)
}
showSlides(slideIndex)

// we eliminate the intersection and adjust the indentation with 
// the current slide when resizing the browser window
window.addEventListener('resize', ()=> {
    overlapA.changeOverlap()
    overlapB.changeOverlap()
    if(isOverlap) {
        overlapA.killGap()
    }
    if(isOverlap) {
        overlapB.killGap()
    }
    // prizeBlock2.style.height = getMaxHeight(prizeSlides) + 'px'
})

// click on slider conteiner
prizeSlider.addEventListener('click', (e)=> {
  if (e.target.closest('.prize__dots')) return
  showSlides(slideIndex += 1)
  // maxHeight()
})

// click on dots
for (let i = 0; i < prizeDots.length; i++) {
  prizeDots[i].addEventListener('click', ()=> {
    // showSlides(slideIndex = i + 1)
    showSlides(slideIndex += 1)
  })  
}
 

