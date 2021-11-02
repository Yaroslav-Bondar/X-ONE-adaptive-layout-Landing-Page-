let presentPresentDescr = document.querySelector('.present__present-descr');
let presentFormtDescr = document.querySelector('.present__form-descr');
let presentFormtBtn = document.querySelector('.present__form-btn');


let presentGapA = new Gap(presentFormtDescr, presentPresentDescr, 30, 20);
let presentGapB = new Gap(presentFormtBtn, presentPresentDescr, 90, 20);
const presentTrackPoint1 = 1024; 

function presentCheckGapSmallY(obj) {
    let gapType;
    try {
      gapType = obj.checkGap('y').type;
    //   || gapType === INTERSECTION
      return gapType === SMALL || gapType === INTERSECTION ? true : false;
    }
    catch(e){
      console.log(e);
    }
}
// >= presentTrackPoint1
// if(window.innerWidth) {
  if(presentCheckGapSmallY(presentGapA)) {
      presentGapA.setGapBothX(presentGapA.checkGap('x'));
      // if(window.innerWidth <= 1200) {
      if(+presentFormtDescr.style.width.match(/\d+/g)[0] < 90) {
      // if(presentFormtDescr.style.width <= 1200) {
        presentFormtDescr.style.width = 90 + 'px';
        presentGapA.setGapOneX(presentGapA.checkGap('x'), presentPresentDescr);
      }
  }
  else if(presentGapB.checkGap('x').type === SMALL || presentGapB.checkGap('x').type === INTERSECTION) {
      presentGapB.setGapOneX(presentGapB.checkGap('x'), presentPresentDescr);
  }
// }

window.addEventListener('resize', ()=> {
  // if(window.innerWidth > presentTrackPoint1) {
  // }
  // > presentTrackPoint1
  // if(window.innerWidth ) {
    presentGapA.resetGap(presentFormtDescr, presentPresentDescr);
    presentGapB.resetGap(presentPresentDescr);
    if(presentCheckGapSmallY(presentGapA)) {
        presentGapA.setGapBothX(presentGapA.checkGap('x'));
        if(+presentFormtDescr.style.width.match(/\d+/g)[0] < 90) {
          console.log('+presentFormtDescr.style.width', presentFormtDescr.style.width.match(/\d+/g)[0]);
          // if(presentFormtDescr.style.width <= 1200) {
          presentFormtDescr.style.width = 90 + 'px';
          presentGapA.setGapOneX(presentGapA.checkGap('x'), presentPresentDescr);
        }
    }
    else if(presentGapB.checkGap('x').type === SMALL || presentGapB.checkGap('x').type === INTERSECTION) {
        presentGapB.setGapOneX(presentGapB.checkGap('x'), presentPresentDescr);
    }
  // }
});
