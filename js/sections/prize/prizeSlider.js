
const prizeSlider = document.querySelector('.prize__slider')
const prizeSlides = document.getElementsByClassName('prize__slide')
const prizeDots = document.querySelector('.prize__dots')
const prizeDot = document.querySelectorAll('.prize__dot')
const prizeSlideDescrips = document.querySelectorAll('.prize__slide-descrip')
const prizeDescribe = document.querySelector('.prize__describe')
const prizeTitle = document.querySelector('.prize__title')
const prizeBlock2 = document.querySelector('.prize__block2')

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
})

// click on dots
prizeDots.addEventListener('click', (e) => {
  if(!e.target.closest('.prize__dot')) return
  slideIndex = +e.target.dataset.index
  addClass(prizeSlides, 'prize__fade')
  showSlides(slideIndex - 1)
})

 

