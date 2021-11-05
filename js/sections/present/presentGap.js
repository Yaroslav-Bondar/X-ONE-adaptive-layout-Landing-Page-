// let presentPresentDescr = document.querySelector('.present__present-descr');
let presentFormtDescr = document.querySelector('.present__form-descr');
let presentFormtBtn = document.querySelector('.present__form-btn');
let presentConteiner = document.querySelector('.present__conteiner');
let presentPresentDescrs = document.getElementsByClassName('present__present-descr');
let presentGapA = new Gap(presentFormtDescr, presentPresentDescrs[0], 30, 20);
let presentGapB = new Gap(presentFormtBtn, presentPresentDescrs[0], 90, 20);
// let presentPresentDescrClone;
const presentBlock2 = document.querySelector('.present__block2');
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
  }
  catch(err) {
    console.log(err);
  }
}

presentGapPack();

window.addEventListener('resize', ()=> {
  presentGapA.resetGap(presentFormtDescr, presentPresentDescrs[0]);
  presentGapB.resetGap(presentPresentDescrs[0]);
  presentGapPack();
});
