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
    if(gapX >= 0) {
        if(gapX < this.gap) {
            return { type: 'gap is small', value: gapX };
        }
        if(gapX > this.gap) {
            return { type: 'gap is big', value: gapX };
        }
        if(gapX == this.gap) {
            return { type: 'gap is 0', value: gapX };
        }
    }
    else if(gapX < 0 ) {
        return { type: 'intersection', value: gapX };
    }
    else if(gapX == this.gapX) {
        return false;
    } 
}
Gap.prototype.setGapBothX = function(gapX) {
    // let gapX = Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right;
    console.log('setGapBothX', gapX);
    if(gapX.type == 'intersection') {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        // console.log('intersection');
        // console.log(Math.abs(obj.value)/2);
        // console.log(this.gapX);
        // console.log(this.objA.style.width = '20px');
        this.objA.style.width = this.objA.offsetWidth - Math.abs(gapX.value)/2 - this.gapX/2 + 'px';
        this.objB.style.width = this.objB.offsetWidth - Math.abs(gapX.value)/2 - this.gapX/2 + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type == 'gap is small') {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        this.objA.style.width = this.objA.offsetWidth + ((this.gapX - gapX.value) / 2) + 'px';
        this.objB.style.width = this.objB.offsetWidth + ((this.gapX - gapX.value) / 2) + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type == 'gap is big') {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        this.objA.style.width = this.objA.offsetWidth + ((gapX.value - this.gapX) / 2) + 'px';
        this.objB.style.width = this.objB.offsetWidth + ((gapX.value - this.gapX) / 2) + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type == 'gap is 0') {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        this.objA.style.width = this.objA.offsetWidth + this.gapX / 2 + 'px';
        this.objB.style.width = this.objB.offsetWidth + this.gapX / 2 + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
}
Gap.prototype.checkGapY = function() {
    let gapY = Gap.prototype.getCoords(this.objB).coords.top - Gap.prototype.getCoords(this.objA).coords.bottom;
    if(gapY < this.gapY) {
        return false;
    }
    else if(gapY > this.gapY) {
        return true;
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

