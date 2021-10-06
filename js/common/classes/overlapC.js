// the class solves the block intersection problem
// for example when the content of the html template changes 
export class Overlap {
    // intersecting objects, the desired distance between them
    constructor(objA, objB, gap) {
        this.objA = objA
        this.objB = objB
        this.gap = gap
        // console.log('Hello I am Overlap')
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
        console.log('Hello I am Overlap')
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