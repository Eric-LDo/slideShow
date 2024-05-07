let currentSlide=0
let totalSlides=document.querySelectorAll('.slider--item').length;
document.querySelector('.slider--controls').style.height =`${document.querySelector('.slider').clientHeight}px`
function goPrev(){
    currentSlide--
    if (currentSlide<0) {
        currentSlide = totalSlides - 1
    }
    updateMergin();
}
function goNext(){
    currentSlide++
    if (currentSlide>(totalSlides - 1)){
        currentSlide = 0
    }
    updateMergin()

}
function updateMergin(){
    let sliderItemWidth =document.querySelector('.slider--item').clientWidth
    let newMargin = (currentSlide* sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft  =  `-${newMargin}px`
}
setInterval(goNext, 4000);