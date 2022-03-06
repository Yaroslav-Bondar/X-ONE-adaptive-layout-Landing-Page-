const presentFormMark = document.querySelector('.present__form-mark');
const presentFormBtn = document.querySelector('.present__form-btn');
const presentConteiner = document.querySelector('.present__conteiner');
const presentPresentDescrs = document.getElementsByClassName('present__present-descr');
const presentPresent = document.querySelector('.present__present');
const presentBlock2 = document.querySelector('.present__block2');

const presentGapA = new Gap(presentFormMark, presentPresentDescrs[0], 30, 25);
const presentGapB = new Gap(presentFormBtn, presentPresentDescrs[0], 90, 20);
const presentGapC = new Gap(presentFormMark, presentPresent, 10);

function presentGapPack() {
  try {
    if(window.innerWidth <= 1024) {
      presentConteiner.append(presentPresentDescrs[0]);
    }
    else if(window.innerWidth >= 1024) {
      presentBlock2.append(presentPresentDescrs[0]);
    }
    if(presentGapA.checkGap('y').type === SMALL || presentGapA.checkGap('y').type === INTERSECTION) {
        presentGapA.setGapBothX(presentGapA.checkGap('x'));
        if(+presentFormMark.style.width.match(/\d+/)[0] < 90) {
        presentFormMark.style.width = '90px';
        presentGapA.setGapOneX(presentGapA.checkGap('x'), presentPresentDescrs[0]);
      }
    }
    else if(window.innerWidth > 1024 && (presentGapB.checkGap('x').type === SMALL || presentGapB.checkGap('x').type === INTERSECTION)) {
      presentGapB.setGapOneX(presentGapB.checkGap('x'), presentPresentDescrs[0]);
    }
  }
  catch(err) {
    console.log(err);
  }
}

presentGapPack();

window.addEventListener('resize', ()=> {
  presentGapA.resetGap(presentFormMark, presentPresentDescrs[0]);
  presentGapB.resetGap(presentPresentDescrs[0]);
  presentGapC.resetGap(presentFormMark);
  presentGapPack();
});
