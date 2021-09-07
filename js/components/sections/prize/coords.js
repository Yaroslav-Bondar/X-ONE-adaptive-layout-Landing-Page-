// when elements overlap when adding content
// (so that the layout does not break)
let prizeDescribe = document.querySelector('.prize__describe')
let prizeSlideDescrip = document.querySelector('.prize__slide-descrip')
let coordsPrizeDescribe = prizeDescribe.getBoundingClientRect()
let coordsSlideDescrip = prizeSlideDescrip.getBoundingClientRect()
let addValue = 40 // additional value
// console.log('coordsPrizeDescribe', coordsPrizeDescribe)
// console.log('coordsSlideDescrip', coordsSlideDescrip)

// if elements intersect
if(coordsPrizeDescribe.right > coordsSlideDescrip.left 
    && coordsPrizeDescribe.bottom > coordsSlideDescrip.top) {
        // console.log(coordsPrizeDescribe.right - coordsSlideDescrip.top)
        // console.log(prizeDescribe.offsetWidth)
        // find the width of intersecting elements and adjust the width
        prizeDescribe.style.width = prizeDescribe.offsetWidth - (coordsPrizeDescribe.right - coordsSlideDescrip.top) - addValue + 'px'
        // console.log(coordsSlideDescrip.offsetWidth)
        // console.log('Alarma !!!')
}
else {
    console.log('OK')
}
