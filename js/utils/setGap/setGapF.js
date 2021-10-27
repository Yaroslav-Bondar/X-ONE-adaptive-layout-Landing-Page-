// the constructor function solves the block intersection problem
// for example when the content of the html template changes 

function Gap(objA, objB, gapX, gapY) {
    this.objA = objA;
    this.objB = objB;
    this.gapX = gapX;
    this.gapY = gapY;
}

Gap.prototype.getCoords = function(obj) {
    return {
        coords: obj.getBoundingClientRect(),
    }
}
Gap.prototype.checkGapX = function() {
    let gapX = Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right;
    console.log('checkGapX', gapX);
    // console.log('this.gapX = ', this.gapX);
    if (gapX == this.gapX) return false;
    if(gapX >= 0) {
        console.log('gapX >= 0');
        if(gapX < this.gapX) {
            console.log(X_SMALL);
            return { type: X_SMALL, value: gapX };
        }
        if(gapX > this.gapX) {
            console.log(X_BIG);
            return { type: X_BIG, value: gapX };
        }
        if(gapX == 0) {
            console.log(X_ZERO);
            return { type: X_ZERO, value: gapX };
        }
        // return gapX < this.gapX ? { type: X_SMALL, value: gapX } : gapX > this.gapX ? { type: X_BIG, value: gapX } : gapX == 0 ? { type: X_ZERO, value: gapX } : '';
    }
    if(gapX < 0 ) {
        console.log(X_INTERSECTION);
        return { type: X_INTERSECTION, value: gapX };
    }
    // return gapX >= 0 ? gapX < this.gapX : { type: X_SMALL, value: gapX } ? gapX > this.gapX : { type: X_BIG, value: gapX }
    //     ? gapX == 0 : { type: X_ZERO, value: gapX };      
}
Gap.prototype.checkGapY = function() {
    // Gap.prototype.checkGapX.call(this);
    // let gapY = Gap.prototype.getCoords(this.objB).coords.top - Gap.prototype.getCoords(this.objA).coords.bottom;
    // if(gapY < this.gapY) {
    //     return false;
    // }
    // else if(gapY > this.gapY) {
    //     return true;
    // } 
}
Gap.prototype.setGapBothX = function(gapX) {
    console.log(`setGapBothX - gapX`, gapX)
    if(!gapX) return  // if gapX == this.gapX - do nothing
    // console.log(`setGapBothX - gapX`, gapX)
    if(gapX.type === X_INTERSECTION) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        let difference = Math.abs(gapX.value)/2 + this.gapX/2;
        this.objA.style.width = this.objA.offsetWidth - difference + 'px';
        this.objB.style.width = this.objB.offsetWidth - difference + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === X_SMALL) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        let difference = (this.gapX - gapX.value) / 2;
        this.objA.style.width = this.objA.offsetWidth - difference + 'px';
        this.objB.style.width = this.objB.offsetWidth - difference + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === X_BIG) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        let difference = (gapX.value - this.gapX) / 2;
        this.objA.style.width = this.objA.offsetWidth + difference + 'px';
        this.objB.style.width = this.objB.offsetWidth + difference + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === X_ZERO) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        let difference = this.gapX / 2;
        this.objA.style.width = this.objA.offsetWidth + difference + 'px';
        this.objB.style.width = this.objB.offsetWidth + difference + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
}


function prizeGap(objA, objB, gapX, gapY) {
    Gap.call(this, objA, objB, gapX, gapY);
}
prizeGap.prototype = Object.create(Gap.prototype);
Object.defineProperty(prizeGap.prototype, 'constructor', {
    value: prizeGap,
    enumerable: false,
    writable: true,
});

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

