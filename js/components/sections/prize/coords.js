// the class solves the block intersection problem
// for example when the content of the html template changes 

let prizeDescribe = document.querySelector('.prize__describe')
let prizeSlideDescrip = document.querySelector('.prize__slide-descrip')
let prizeTitle = document.querySelector('.prize__title')

class Overlap {
    // intersecting objects, the desired distance between them
    constructor(objA, objB, gap) {
        this.objA = objA
        this.objB = objB
        this.gap = gap
    }
    isOverlap = false
    getCoords(obj) {
        return {
            coords: obj.getBoundingClientRect(),
        }
    }
    // if objects intersect horizontally and vertically return true
    checkOverlap() {
        let overlapX = this.getCoords(this.objA).coords.right - this.getCoords(this.objB).coords.left
        let overlapY = this.getCoords(this.objA).coords.bottom - this.getCoords(this.objB).coords.top 
        return overlapX > 0 && overlapY > 0 ? true : false
    }
    // remove the amount of intersection and add padding
    killOverlap() {
        let overlapX = this.getCoords(this.objA).coords.right - this.getCoords(this.objB).coords.left
        this.objA.style.width = this.objA.offsetWidth - overlapX - this.gap + 'px'
    }
    changeOverlap() {
        if(this.checkOverlap()) {
            this.killOverlap()  
            this.isOverlap = true
        }
    }
    // if the indent between blocks is greater than this.gap, set it to this.gap
    killGap() {
        let overlapX = this.getCoords(this.objA).coords.right - this.getCoords(this.objB).coords.left
        if(overlapX < (this.gap * -1)) {
            this.objA.style.width = this.objA.offsetWidth + ((overlapX - (this.gap * -1)) * -1) + 'px'   
        }
    }
}

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
