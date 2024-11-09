"use strict"
let products_arr = document.querySelectorAll('.product')
let right = document.querySelector('.slider-arrow-right')
let left = document.querySelector('.slider-arrow-left')
let cnt = 0
right.addEventListener('click', ()=>{
    for(let i = 0; i < document.querySelectorAll('.product').length; i++) {
        if (cnt == 0) {
            document.querySelectorAll('.product')[i].classList.toggle('none')
            document.querySelectorAll('.product')[i+4].classList.toggle('none')
            cnt ++
            break
        }
        if (cnt == 1) {
            document.querySelectorAll('.product')[i+1].classList.toggle('none')
            document.querySelectorAll('.product')[i+5].classList.toggle('none')
            cnt ++
            break
        }
        if (cnt == 2) {
            document.querySelectorAll('.product')[i+2].classList.toggle('none')
            document.querySelectorAll('.product')[i+6].classList.toggle('none')
            cnt ++
            break
        }
        if (cnt == 3) {
            document.querySelectorAll('.product')[i+3].classList.toggle('none')
            document.querySelectorAll('.product')[i+7].classList.toggle('none')
            cnt ++
            break
        }
        if (cnt == 4) {
            document.querySelectorAll('.product')[i+4].classList.toggle('none')
            document.querySelectorAll('.product')[i+8].classList.toggle('none')
            cnt ++
            break
        }
        if (cnt == 5) {
            document.querySelectorAll('.product')[i+5].classList.toggle('none')
            document.querySelectorAll('.product')[i+9].classList.toggle('none')
            cnt ++
            break
        }
        if (cnt == 6) {
            document.querySelectorAll('.product')[i+6].classList.toggle('none')
            document.querySelectorAll('.product')[i+10].classList.toggle('none')
            cnt ++
            break
        }
    }       
})
left.addEventListener('click', ()=>{
    for(let i = 0; i < document.querySelectorAll('.product').length; i++) {
        if (cnt == 0) {
            break
        }
        if (cnt == 1) {
            document.querySelectorAll('.product')[i].classList.toggle('none')
            document.querySelectorAll('.product')[i+4].classList.toggle('none')
            cnt --
            break
        }
        if (cnt == 2) {
            document.querySelectorAll('.product')[i+1].classList.toggle('none')
            document.querySelectorAll('.product')[i+5].classList.toggle('none')
            cnt --
            break
        }
        if (cnt == 3) {
            document.querySelectorAll('.product')[i+2].classList.toggle('none')
            document.querySelectorAll('.product')[i+6].classList.toggle('none')
            cnt --
            break
        }
        if (cnt == 4) {
            document.querySelectorAll('.product')[i+3].classList.toggle('none')
            document.querySelectorAll('.product')[i+7].classList.toggle('none')
            cnt --
            break
        }
        if (cnt == 5) {
            document.querySelectorAll('.product')[i+4].classList.toggle('none')
            document.querySelectorAll('.product')[i+8].classList.toggle('none')
            cnt --
            break
        }
        if (cnt == 6) {
            document.querySelectorAll('.product')[i+5].classList.toggle('none')
            document.querySelectorAll('.product')[i+9].classList.toggle('none')
            cnt --
            break
        }
        if (cnt == 7) {
            document.querySelectorAll('.product')[i+6].classList.toggle('none')
            document.querySelectorAll('.product')[i+10].classList.toggle('none')
            cnt --
            break
        }
    } 
})

