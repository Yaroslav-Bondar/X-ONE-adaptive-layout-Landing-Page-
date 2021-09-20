
let prizeDescribe = document.querySelector('.prize__describe')
let prizeSlideDescrip = document.querySelector('.prize__slide-descrip')
let prizeTitle = document.querySelector('.prize__title')

const overlapA = new Overlap(prizeDescribe, prizeSlideDescrip, 50)
const overlapB = new Overlap(prizeTitle, prizeSlideDescrip, 50)

overlapA.changeOverlap()
overlapB.changeOverlap()

window.addEventListener('resize', ()=> {
    overlapA.changeOverlap()
    overlapB.changeOverlap()
    if(overlapA.isOverlap) {
        overlapA.killGap()
    }
    if(overlapB.isOverlap) {
        overlapB.killGap()
    }
})
