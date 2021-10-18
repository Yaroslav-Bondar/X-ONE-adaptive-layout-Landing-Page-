// the constructor function solves the block intersection problem
// for example when the content of the html template changes 
function Overlap(objA, objB, gap) {
    this.objA = objA
    this.objB = objB
    this.gap = gap
    this.isOverlap = false
    
    getCoords = function(obj) {
        return {
            coords: obj.getBoundingClientRect(),
        }
    }
    // if objects intersect horizontally and vertically return true
    this.checkOverlap = function() {
        let overlapX = getCoords(this.objA).coords.right - getCoords(this.objB).coords.left
        let overlapY = getCoords(this.objA).coords.bottom - getCoords(this.objB).coords.top 
        return overlapX > 0 && overlapY > 0 ? true : false
    }
    // remove the amount of intersection and add padding
    this.killOverlap = function() {
        let overlapX = getCoords(this.objA).coords.right - getCoords(this.objB).coords.left
        this.objA.style.width = this.objA.offsetWidth - overlapX - this.gap + 'px'
    }
    this.changeOverlap = function() {
        if(this.checkOverlap()) {
            this.killOverlap()  
            this.isOverlap = true
        }
    }
    // if the indent between blocks is greater than this.gap, set it to this.gap
    this.killGap = function() {
        let overlapX = getCoords(this.objA).coords.right - getCoords(this.objB).coords.left
        if(overlapX < (this.gap * -1)) {
            this.objA.style.width = this.objA.offsetWidth + ((overlapX - (this.gap * -1)) * -1) + 'px'   
        }
    }
}

