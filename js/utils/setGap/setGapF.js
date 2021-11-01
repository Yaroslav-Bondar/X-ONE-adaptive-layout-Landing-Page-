// the constructor function solves the block intersection problem
// for example when the content of the html template changes 

function Gap(objA, objB, gapX, gapY) {
    this.objA = objA;
    this.objB = objB;
    this.gapX = gapX;
    this.gapY = gapY;
    this.gapDifferenceX = this.getCoords(this.objB).coords.left - this.getCoords(this.objA).coords.right;
    this.gapDifferenceY = this.getCoords(this.objB).coords.top - this.getCoords(this.objA).coords.bottom;
}

Gap.prototype.resetGap = function(obj1, obj2) {
        if(obj1) {
            obj1.style.width = '';
        }
        if(obj2) {
            obj2.style.width = '';
        }
}
Gap.prototype.getCoords = function(obj) {
    return {
        coords: obj.getBoundingClientRect(),
    }
}
Gap.prototype.checkGap = function(axis) {
    let gap, gapDifference;
    if(axis === 'x') {
        gap = this.gapX;
        gapDifference = Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right; 
    }
    else if(axis === 'y') {
        gap = this.gapY;
        gapDifference = Gap.prototype.getCoords(this.objB).coords.top - Gap.prototype.getCoords(this.objA).coords.bottom;
    }
    else {
        console.log("checkGap: wrong function parameter !!! should be a string 'x' or 'y'");
        return false;
    }

    if(gapDifference == gap) return false;
    if(gapDifference >= 0) {
        console.log('gapDifference >= 0');
        if(gapDifference < gap) {
            // console.log('checkGap', SMALL);
            return { type: SMALL, value: gapDifference, axis: axis };
        }
        if(gapDifference > gap) {
            // console.log('checkGap', BIG);
            return { type: BIG, value: gapDifference , axis: axis};
        }
        if(gapDifference == 0) {
            // console.log('checkGap', ZERO);
            return { type: ZERO, value: gapDifference , axis: axis};
        }
    }
    if(gapDifference < 0 ) {
        // console.log('checkGap', INTERSECTION);
        return { type: INTERSECTION, value: gapDifference , axis: axis};
    }
    return false;
}
Gap.prototype.setGapBothX = function(gapX) {
    // let gapX = Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right;
    // if gapX == this.gapX - do nothing
    if(!gapX) return
    if(gapX.axis !== 'x') {
        console.log("setGapBothX: wrong function parameter when calling the checkGap function !!! should be a string 'x'");
        return;
    }
    // console.log('setGapBothX - gapX', gapX);
    if(gapX.type === INTERSECTION) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        let difference = Math.abs(gapX.value)/2 + this.gapX/2;
        console.log('difference', difference);
        this.objA.style.width = this.objA.offsetWidth - difference + 'px';
        this.objB.style.width = this.objB.offsetWidth - difference + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === SMALL) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        let difference = (this.gapX - gapX.value) / 2; 
        this.objA.style.width = this.objA.offsetWidth - difference + 'px';
        this.objB.style.width = this.objB.offsetWidth - difference + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === BIG) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        let difference = (gapX.value - this.gapX) / 2;
        this.objA.style.width = this.objA.offsetWidth + difference + 'px';
        this.objB.style.width = this.objB.offsetWidth + difference + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === ZERO) {
        console.log(gapX.type);
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
        this.objA.style.width = this.objA.offsetWidth - this.gapX / 2 + 'px';
        this.objB.style.width = this.objB.offsetWidth - this.gapX / 2 + 'px';
        console.log(Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
}
Gap.prototype.setGapOneX = function(gapX, obj) {
    if(!gapX) return
    if(gapX.axis !== 'x') {
        console.log("setGapBothX: wrong function parameter when calling the checkGap function !!! should be a string 'x'");
        return;
    }
    if(gapX.type === INTERSECTION) {
        console.log('setGapOneX = ', gapX.type);
        console.log('setGapOneX = ', gapX.value);
        let difference = Math.abs(gapX.value) + this.gapX;
        obj.style.width = obj.offsetWidth - difference + 'px';
        console.log('setGapOneX = ', Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === SMALL) {
        console.log('setGapOneX = ', gapX.type);
        console.log('setGapOneX = ', gapX.value);
        let difference = this.gapX - gapX.value;
        obj.style.width = obj.offsetWidth - difference + 'px';
        console.log('setGapOneX = ', Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === BIG) {
        console.log('setGapOneX = ', gapX.type);
        console.log('setGapOneX = ', gapX.value);
        let difference = gapX.value - this.gapX;
        obj.style.width = obj.offsetWidth + difference + 'px';
        console.log('setGapOneX = ', Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
    }
    if(gapX.type === ZERO) {
        console.log('setGapOneX = ', gapX.type);
        console.log('setGapOneX = ', gapX.value);
        obj.style.width = obj.offsetWidth - this.gapX + 'px';
        console.log('setGapOneX = ', Gap.prototype.getCoords(this.objB).coords.left - Gap.prototype.getCoords(this.objA).coords.right);
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

