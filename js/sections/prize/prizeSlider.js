
// import {Overlap} from '../../common/classes/overlapC'

let prizeSlider = document.querySelector('.prize__slider')
let prizeSlides = document.getElementsByClassName('prize__slide')
let prizeDots = document.querySelector('.prize__dots')
let prizeDot = document.querySelectorAll('.prize__dot')
let prizeSlideDescrips = document.querySelectorAll('.prize__slide-descrip')
let prizeDescribe = document.querySelector('.prize__describe')
let prizeTitle = document.querySelector('.prize__title')
let prizeBlock2 = document.querySelector('.prize__block2')

let slideIndex = 1
const prizeGapWidth = 1024; // used the value from media queries in _prize.scss file
let prizeGapA // Gap constructor function object
let prizeGapB // Gap constructor function object

function prizeCheckGapSmallY(obj) {
  let gapType;
  try {
    gapType = obj.checkGap('y').type;
    return gapType === SMALL || gapType === INTERSECTION ? true : false;
  }
  catch(e){
    console.log(e);
  }
}
// console.log('prizeCheckGapSmallY', prizeCheckGapSmallY); 
//  = getComputedStyle(document.documentElement).getPropertyValue('--prize-gap-width');
// set the same height for all slides
// console.log('prizeGapWidth = ', prizeGapWidth);
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
function addClass(obj, name) {
  if(!obj[slideIndex - 1].classList.contains(name)) {
    obj[slideIndex - 1].classList.add(name)
  }
}

function showSlides (n) {
  // spin slides in a circle
  if(n > prizeSlides.length) slideIndex = 1
  
  for (const el of prizeSlides) {
    el.style.display = 'none'  
  }
  for (const el of prizeDot) {
    el.classList.remove('prize__dot_active')  
  }

  prizeSlides[slideIndex - 1].style.display = 'block'
  prizeDot[slideIndex - 1].classList.add('prize__dot_active')
  prizeGapA = new prizeGap(prizeDescribe, prizeSlideDescrips[slideIndex - 1], 140, 30);
  prizeGapB = new prizeGap(prizeTitle, prizeSlideDescrips[slideIndex - 1], 20, 30);

  if(window.innerWidth > prizeGapWidth && prizeCheckGapSmallY(prizeGapA)) {
    prizeGapA.setGapBothX(prizeGapA.checkGap('x'))
  }
  if(window.innerWidth > prizeGapWidth && prizeCheckGapSmallY(prizeGapB)) {
    prizeGapB.setGapBothX(prizeGapB.checkGap('x'))
  }

}
showSlides(slideIndex);

window.addEventListener('resize', ()=> {
  // reset gap
  if(window.innerWidth > prizeGapWidth ) {
    prizeGapA.resetGap(prizeGapA.objA, prizeGapA.objB);
    prizeGapB.resetGap(prizeGapB.objA, prizeGapB.objB);
  }
  // set gap
  if(window.innerWidth > prizeGapWidth && prizeCheckGapSmallY(prizeGapA)) {
    prizeGapA.setGapBothX(prizeGapA.checkGap('x'))
  }
  if(window.innerWidth > prizeGapWidth && prizeCheckGapSmallY(prizeGapB)) {
    prizeGapB.setGapBothX(prizeGapB.checkGap('x'))
  }

})

// click on slider conteiner
prizeSlider.addEventListener('click', (e)=> {
  if (e.target.closest('.prize__dots')) return
    showSlides(slideIndex += 1)
    addClass(prizeSlides, 'prize__fade')
  // maxHeight()
})

// click on dots
prizeDots.addEventListener('click', (e) => {
  if(!e.target.closest('.prize__dot')) return
  slideIndex = +e.target.dataset.index
  addClass(prizeSlides, 'prize__fade')
  showSlides(slideIndex - 1)
})

 

