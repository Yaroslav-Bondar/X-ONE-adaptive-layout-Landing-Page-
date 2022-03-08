// the class solves the block intersection problem
// for example when the content of the html template changes 
class Gap {
    constructor(objA, objB, gapX, gapY) {
        this.objA = objA;
        this.objB = objB;
        this.gapX = gapX;
        this.gapY = gapY;
        this.gapDifferenceX = this.getCoords(this.objB).coords.left - this.getCoords(this.objA).coords.right;
        this.gapDifferenceY = this.getCoords(this.objB).coords.top - this.getCoords(this.objA).coords.bottom;
    }
    resetGap = function(obj1, obj2) {
        if(obj1) {
            obj1.style.width = '';
        }
        if(obj2) {
            obj2.style.width = '';
        }
    }
    getCoords = function(obj) {
        return {
            coords: obj.getBoundingClientRect(),
        }
    }
    checkGap = function(axis) {
        let gap, gapDifference;
        if(axis === 'x') {
            gap = this.gapX;
            gapDifference = this.getCoords(this.objB).coords.left - this.getCoords(this.objA).coords.right; 
        }
        else if(axis === 'y') {
            gap = this.gapY;
            gapDifference = (this.getCoords(this.objB).coords.top) - (this.getCoords(this.objA).coords.bottom);
        }
        else {
            console.log("checkGap: wrong function parameter !!! should be a string 'x' or 'y'");
            return false;
        }
        if(gapDifference == gap) return false;
        if(gapDifference >= 0) {
            if(gapDifference < gap) {
                return { type: SMALL, value: gapDifference, axis: axis };
            }
            if(gapDifference > gap) {
                return { type: BIG, value: gapDifference , axis: axis};
            }
            if(gapDifference == 0) {
                return { type: ZERO, value: gapDifference , axis: axis};
            }
        }
        if(gapDifference < 0 ) {
            return { type: INTERSECTION, value: gapDifference , axis: axis};
        }
        return false;
    }
    setGapBothX = function(gapX) {
        if(!gapX) return
        if(gapX.axis !== 'x') {
            console.log("setGapBothX: wrong function parameter when calling the checkGap function !!! should be a string 'x'");
            return;
        }
        if(gapX.type === INTERSECTION) {
            let difference = Math.abs(gapX.value)/2 + this.gapX/2;
            this.objA.style.width = this.objA.offsetWidth - difference + 'px';
            this.objB.style.width = this.objB.offsetWidth - difference + 'px';
        }
        if(gapX.type === SMALL) {
            let difference = (this.gapX - gapX.value) / 2; 
            this.objA.style.width = this.objA.offsetWidth - difference + 'px';
            this.objB.style.width = this.objB.offsetWidth - difference + 'px';
        }
        if(gapX.type === BIG) {
            let difference = (gapX.value - this.gapX) / 2;
            this.objA.style.width = this.objA.offsetWidth + difference + 'px';
            this.objB.style.width = this.objB.offsetWidth + difference + 'px';
        }
        if(gapX.type === ZERO) {
            this.objA.style.width = this.objA.offsetWidth - this.gapX / 2 + 'px';
            this.objB.style.width = this.objB.offsetWidth - this.gapX / 2 + 'px';
        }
    }
    setGapOneX = function(gapX, obj) {
        if(!gapX) return
        if(gapX.axis !== 'x') {
            console.log("setGapBothX: wrong function parameter when calling the checkGap function !!! should be a string 'x'");
            return;
        }
        if(gapX.type === INTERSECTION) {
            let difference = Math.abs(gapX.value) + this.gapX;
            obj.style.width = obj.offsetWidth - difference + 'px';
        }
        if(gapX.type === SMALL) {
            let difference = this.gapX - gapX.value;
            obj.style.width = obj.offsetWidth - difference + 'px';
        }
        if(gapX.type === BIG) {
            let difference = gapX.value - this.gapX;
            obj.style.width = obj.offsetWidth + difference + 'px';
        }
        if(gapX.type === ZERO) {
            obj.style.width = obj.offsetWidth - this.gapX + 'px';
        }
    } 
}

class PrizeGap extends Gap {
    constructor(objA, objB, gapX, gapY) {
        super(objA, objB, gapX, gapY);
    }
} 