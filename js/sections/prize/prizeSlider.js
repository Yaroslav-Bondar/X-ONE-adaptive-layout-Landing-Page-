
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
// let overlapA  // variable for new Overlap
// let overlapB  // variable for new Overlap
// let isOverlap = false
const prizeGapWidth = 1024; // used the value from media queries in _prize.scss file
let prizeGapA
let prizeGapB 
function prizeCheckGapAY(obj) {
  // prizeCheckGapAY = obj.checkGap('y');
  let gapType;
  try {
    gapType = obj.checkGap('y').type;
    return gapType === SMALL || gapType === INTERSECTION ? true : false;
  }
  catch(e){
    console.log(e);
  }
  // prizeCheckGapAY = prizeCheckGapAY.type === SMALL || prizeCheckGapAY.type === INTERSECTION;
}
// console.log('prizeCheckGapAY', prizeCheckGapAY); 
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

 
// = new prizeGap(prizeDescribe, prizeSlideDescrips[slideIndex - 1], 70, 50);
// const prizeBetweenB = new prizeGap(prizeDescribe, prizeSlideDescrips[1], 40, 50);
// console.log(prizeSlideDescrips[0].offsetWidth);
// console.log(prizeSlideDescrips[1].offsetWidth);
// console.log("prizeBetweenB.checkGap('x')", prizeBetweenB.checkGap('x'))
// console.log(prizeGapA.checkGapX())
// if(window.innerWidth > prizeGapWidth) {
//   prizeGapA.setGapBothX(prizeGapA.checkGap('x'))
//   // prizeBetweenB.setGapBothX(prizeBetweenB.checkGap('x'))
// }
// prizeGapA.setGapOneX(prizeGapA.checkGap('x'), prizeSlideDescrips[slideIndex - 1]);
// console.log(prizeGapA.checkGapY())
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
  prizeGapA = new prizeGap(prizeDescribe, prizeSlideDescrips[slideIndex - 1], 70, 30);
  // prizeCheckGapAY = prizeGapA.checkGap('d').type;
  // console.log('prizeCheckGapAY', prizeCheckGapAY); 
  // prizeCheckGapAY = prizeCheckGapAY.type === SMALL || prizeCheckGapAY.type === INTERSECTION;
  // console.log('prizeCheckGapAY', prizeCheckGapAY);
  if(window.innerWidth > prizeGapWidth && prizeCheckGapAY(prizeGapA)) {
    prizeGapA.setGapBothX(prizeGapA.checkGap('x'))
    // prizeBetweenB.setGapBothX(prizeBetweenB.checkGap('x'))
  }
}
showSlides(slideIndex);
// console.log('prizeCheckGapAY', prizeCheckGapAY); 

// we eliminate the intersection and adjust the indentation with 
// the current slide when resizing the browser window
// function resize(ab = prizeGapA.checkGapX, b = prizeGapA.checkGapX()) {
//   prizeGapA.setGapBothX(b);
//   console.log('b', b)
// }
// resize() resize
window.addEventListener('resize', 
()=> 
{
  // prizeGapA.setGapBothX(prizeGapA.checkGapX())
  // prizeGapA.setGapBothX(prizeGapA.checkGap('x'))
  
  if(window.innerWidth > prizeGapWidth && prizeCheckGapAY(prizeGapA)) {
    prizeGapA.setGapBothX(prizeGapA.checkGap('x'))
    // prizeBetweenB.setGapBothX(prizeBetweenB.checkGap('x'))
  }
    // prizeBlock2.style.height = getMaxHeight(prizeSlides) + 'px'
}
)

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

 

