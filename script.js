'use strict'
const sliderContent=document.querySelectorAll('.sliderContent')
const secondSliderContent=document.querySelectorAll('.secondSliderContent')
const dataContainer=document.querySelector('.dataContainer')
const rightArrow=document.querySelectorAll('.rightArrow')
const leftArrow=document.querySelectorAll('.leftArrow')
const secondLeftArrow=document.querySelectorAll('.secondLeftArrow')
const secondRightArrow=document.querySelectorAll('.secondRightArrow')
let sliderPlacement=0
for(let i=0;i<rightArrow.length;i++){
        rightArrow[i].addEventListener('click', ()=>{
        sliderContent[sliderPlacement].classList.remove('activeSlider')
        sliderPlacement++
        if(sliderPlacement===sliderContent.length){
            sliderPlacement=0
        }
        sliderContent[sliderPlacement].classList.add('activeSlider')
    })
}
setInterval(()=>{
    sliderContent[sliderPlacement].classList.remove('activeSlider')
    sliderPlacement++
    if(sliderPlacement===sliderContent.length){
        sliderPlacement=0
    }
    sliderContent[sliderPlacement].classList.add('activeSlider')
},3000)
setInterval(()=>{
    secondSliderContent[secondSliderPlacement].classList.remove('secondActiveSlider')
    secondSliderPlacement++
    if(secondSliderPlacement===secondSliderContent.length){
        secondSliderPlacement=0
    }
    secondSliderContent[secondSliderPlacement].classList.add('secondActiveSlider')
},3000)
for(let i=0;i<leftArrow.length;i++){
    leftArrow[i].addEventListener('click', ()=>{
        sliderContent[sliderPlacement].classList.remove('activeSlider')
        sliderPlacement--
        if(sliderPlacement<0){
            sliderPlacement=sliderContent.length-1
        }
        sliderContent[sliderPlacement].classList.add('activeSlider')
    })
}
let secondSliderPlacement=0
for(let i=0;i<secondSliderContent.length;i++){
    secondRightArrow[i].addEventListener('click', ()=>{
    secondSliderContent[secondSliderPlacement].classList.remove('secondActiveSlider')
    secondSliderPlacement++
    if(secondSliderPlacement===secondSliderContent.length){
        secondSliderPlacement=0
    }
    secondSliderContent[secondSliderPlacement].classList.add('secondActiveSlider')
})
}
for(let i=0;i<secondSliderContent.length;i++){
    secondLeftArrow[i].addEventListener('click', ()=>{
    secondSliderContent[secondSliderPlacement].classList.remove('secondActiveSlider')
    secondSliderPlacement--
    if(secondSliderPlacement<0){
        secondSliderPlacement=secondSliderContent.length-1
    }
    secondSliderContent[secondSliderPlacement].classList.add('secondActiveSlider')
})

}
fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(data=>{
        dataContainer.innerHTML=`
        <div class="pageProduct">
        <img src="${data[17].image}">
        <h6>Steve Madden</h6>
        <p><span>$${data[17].price} (62% Off)</span></p>
        <p><del>$99.67</del></p>
        <p>(20)</p>
        </div>
        <div class="pageProduct">
        <img src="${data[18].image}">
        <h6>Steve Madden</h6>
        <p><span>$${data[18].price} (62% Off)</span></p>
        <p><del>$99.67</del></p>
        <p>(20)</p>
        </div>
        <div class="pageProduct">
        <img src="${data[19].image}">
        <h6>Steve Madden</h6>
        <p><span>$${data[19].price} (62% Off)</span></p>
        <p><del>$99.67</del></p>
        <p>(20)</p>
        </div>
        <div class="pageProduct">
        <img src="${data[1].image}">
        <h6>Steve Madden</h6>
        <p><span>$${data[1].price} (62% Off)</span></p>
        <p><del>$99.67</del></p>
        <p>(20)</p>
        </div>
        `
    })


const menuBurger=document.querySelector('.menuBurger')
const menuFullSection=document.querySelector('.menuFullSection')
const closeButton=document.querySelector('.closeButton i')
const hoverMenu=document.querySelector('.hoverMenu i')
const hoverContent=document.querySelector('.hoverContent')
menuBurger.addEventListener('click', ()=>{
    menuFullSection.classList.remove('unActiveMenu')
    document.body.classList.remove('overFlow')
})
closeButton.addEventListener('click', ()=>{
    menuFullSection.classList.add('unActiveMenu')
    document.body.classList.add('overFlow')
    hoverContent.classList.add('unActiveHover')
})
let showItem=true
hoverMenu.addEventListener('click', ()=>{
    if(showItem){
        showItem=false
        hoverContent.classList.remove('unActiveHover')
    }else{
        hoverContent.classList.add('unActiveHover')
        showItem=true

    }
})
const thirdRightArrow=document.querySelectorAll('.thirdRightArrow')
const thirdLeftArrow=document.querySelectorAll('.thirdLeftArrow')
const thirdSliderContent=document.querySelectorAll('.thirdSliderContent')
let thirdSliderPlacement=0
for(let i=0;i<thirdRightArrow.length;i++){
    thirdRightArrow[i].addEventListener('click', ()=>{
        thirdSliderContent[thirdSliderPlacement].classList.remove('thirdActiveSlider')
        thirdSliderPlacement++
        if(thirdSliderPlacement===thirdSliderContent.length){
            thirdSliderPlacement=0
        }
        thirdSliderContent[thirdSliderPlacement].classList.add('thirdActiveSlider')
    })
}
for(let i=0;i<thirdLeftArrow.length;i++){
    thirdLeftArrow[i].addEventListener('click', ()=>{
        thirdSliderContent[thirdSliderPlacement].classList.remove('thirdActiveSlider')
        thirdSliderPlacement--
        if(thirdSliderPlacement<0){
            thirdSliderPlacement=thirdSliderContent.length-1
        }
        thirdSliderContent[thirdSliderPlacement].classList.add('thirdActiveSlider')        
    })
}
setInterval(()=>{
    thirdSliderContent[thirdSliderPlacement].classList.remove('thirdActiveSlider')
    thirdSliderPlacement++
    if(thirdSliderPlacement===thirdSliderContent.length){
        thirdSliderPlacement=0
    }
    thirdSliderContent[thirdSliderPlacement].classList.add('thirdActiveSlider')
},3000)
const navSearch=document.querySelector('.navSearch')
const popularSearches=document.querySelector('.popularSearches')
const closeSearch=document.querySelector('.closeSearch')
let searchIsOpen=false
navSearch.addEventListener('click', ()=>{
    if(searchIsOpen){
        popularSearches.classList.add('unActiveSuggest') 
        searchIsOpen=false
    }
    else{
        popularSearches.classList.remove('unActiveSuggest')
        searchIsOpen=true
    }
})
closeSearch.addEventListener('click', ()=>{
    popularSearches.classList.add('unActiveSuggest')
    searchIsOpen=false
})
