// let presentPresentDescr = document.querySelector('.present__present-descr');
const presentFormtDescr = document.querySelector('.present__form-descr');
const presentFormtBtn = document.querySelector('.present__form-btn');
const presentConteiner = document.querySelector('.present__conteiner');
const presentPresentDescrs = document.getElementsByClassName('present__present-descr');
const presentPresent = document.querySelector('.present__present');
const presentBlock2 = document.querySelector('.present__block2');

const presentGapA = new Gap(presentFormtDescr, presentPresentDescrs[0], 30, 25);
const presentGapB = new Gap(presentFormtBtn, presentPresentDescrs[0], 90, 20);
const presentGapC = new Gap(presentFormtDescr, presentPresent, 10);

// let presentPresentDescrClone;
// const presentTrackPoint1 = 1024; 

function presentGapPack() {
  try {
    // presentGapA.resetGap(presentFormtDescr, presentPresentDescrs[0]);
    // presentGapB.resetGap(presentPresentDescrs[0]);
    // console.log('presentCheckGapSmallY(presentGapA)', presentCheckGapSmallY(presentGapA));
    if(window.innerWidth <= 1024) {
      presentConteiner.append(presentPresentDescrs[0]);
    }
    else if(window.innerWidth >= 1024) {
      presentBlock2.append(presentPresentDescrs[0]);
    }
    
    let presentGapACheckGapY = presentGapA.checkGap('y').type === SMALL || presentGapA.checkGap('y').type === INTERSECTION;  
    console.log('presentGapACheckGapY', presentGapACheckGapY);
    // if(window.innerWidth > 700 && (presentGapC.checkGap('x').type === SMALL || presentGapC.checkGap('x').type === INTERSECTION) && !presentGapACheckGapY) {
    //   presentGapC.setGapOneX(presentGapC.checkGap('x'), presentFormtDescr);
    // }
    // presentGapACheckGapY
    if(presentGapA.checkGap('y').type === SMALL || presentGapA.checkGap('y').type === INTERSECTION) {
      // console.log('A');  
      presentGapA.setGapBothX(presentGapA.checkGap('x'));
        // console.log('CCCC');
      if(+presentFormtDescr.style.width.match(/\d+/)[0] < 90) {
        // console.log('+presentFormtDescr.style.width', presentFormtDescr.style.width.match(/\d+/g)[0]);
        // if(presentFormtDescr.style.width <= 1200) {
        presentFormtDescr.style.width = '90px';
        presentGapA.setGapOneX(presentGapA.checkGap('x'), presentPresentDescrs[0]);
      }
      // if(+presentPresentDescrs[0].style.width.match(/\d+/)[0] < 370) {
      //   presentPresentDescrs[0].style.width = '370px';
      // }
    }
    else if(window.innerWidth > 1024 && (presentGapB.checkGap('x').type === SMALL || presentGapB.checkGap('x').type === INTERSECTION)) {
      presentGapB.setGapOneX(presentGapB.checkGap('x'), presentPresentDescrs[0]);
      // console.log('B');  
    }

    // if(window.innerWidth > 700 && (presentGapC.checkGap('x').type === SMALL || presentGapC.checkGap('x').type === INTERSECTION) && !presentGapACheckGapY) {
    //   presentGapB.setGapOneX(presentGapC.checkGap('x'), presentFormtDescr);
    // }
  }
  catch(err) {
    console.log(err);
  }
}

presentGapPack();

window.addEventListener('resize', ()=> {
  presentGapA.resetGap(presentFormtDescr, presentPresentDescrs[0]);
  presentGapB.resetGap(presentPresentDescrs[0]);
  presentGapC.resetGap(presentFormtDescr);
  presentGapPack();
});
