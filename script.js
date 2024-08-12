const tabs = document.querySelectorAll('.b')
const all_content = document.querySelectorAll('.content_box')
const imagebtn = document.querySelector('.hover')
const itim = document.querySelector('.last-box')
const search = document.querySelector('.arrov')
const input = document.querySelector('.text')
const imagbtn = document.querySelector('.yana-last')
const magbtn = document.querySelector('.fana-last')
const imgbtn = document.querySelector('.lana-last')
const imabtn = document.querySelector('.rana-last')
const image = document.querySelector('.mp')
const imge = document.querySelector('.mr')
const imag = document.querySelector('.mt')
const mage = document.querySelector('.my')
const activPage = document.querySelector('.content')
const rim = document.querySelector('.youtube')
const alrt = document.querySelector('.nor')
const reg = document.querySelector('.btn')
const regPage = document.querySelector('.mode')
const fers = document.querySelector('.hor')
const ior = document.querySelector('.yal')
const iop = document.querySelector('.uy')
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('active') })
        tab.classList.add('active')
        all_content.forEach(itom => { itom.classList.remove('sactive') })
        activPage.style.display = 'none'
        itim.classList.remove('ke')
        imagbtn.classList.remove('ke')
        magbtn.classList.remove('ke')
        imgbtn.classList.remove('ke')
        imabtn.classList.remove('ke')
        all_content[index].classList.add('sactive')
    })
})
search.addEventListener('click', () => {
    let u = input.classList.toggle('text2')
    u.value.innerHTML = ''

    
})
imagebtn.addEventListener('click', () => {
    itim.classList.add('ke')
    imagbtn.classList.remove('ke')
    magbtn.classList.remove('ke')
    imgbtn.classList.remove('ke')
    imabtn.classList.remove('ke')
    all_content.forEach((item) => {item.classList.remove('sactive')})
})
image.addEventListener('click', () => {
    imagbtn.classList.add('ke')
    itim.classList.remove('ke')
    magbtn.classList.remove('ke')
    imgbtn.classList.remove('ke')
    imabtn.classList.remove('ke')
    all_content.forEach((item) => {item.classList.remove('sactive')})
})
imge.addEventListener('click', () => {
    imagbtn.classList.remove('ke')
    magbtn.classList.add('ke')
    imabtn.classList.remove('ke')
    imgbtn.classList.remove('ke')
    itim.classList.remove('ke')
    all_content.forEach((item) => {item.classList.remove('sactive')})
})
imag.addEventListener('click', () => {
    imagbtn.classList.remove('ke')
    magbtn.classList.remove('ke')
    itim.classList.remove('ke')
    imgbtn.classList.add('ke')
    imabtn.classList.remove('ke') 
    all_content.forEach((item) => {item.classList.remove('sactive')})
})
mage.addEventListener('click', () => {
    itim.classList.remove('ke')
    imagbtn.classList.remove('ke')
    magbtn.classList.remove('ke')
    imgbtn.classList.remove('ke')
    imabtn.classList.add('ke')
    all_content.forEach((item) => {item.classList.remove('sactive')})

})   
    
let ero = prompt('ism kiriting')
ero.addEventListener('input' ,()=> {
    
    alrt.innerHTML = `${ero.value}`
})
reg.addEventListener('click', () => {
    const reg1 = document.querySelector('.in1').value
    const reg2 = document.querySelector('.in2').value
    const reg3 = document.querySelector('.in3').value
    let i = /^[A-Z][a-z]*[AUEOIaueoi]/
    let o = /^ +998 [0-9]$/
    let t = /^[A-Z][a-z]*[AUEOI][0-9]/
    let regex = i.test(reg1)
    let regex1 = o.test(reg2)
    let regex2 = t.test(reg3)
    if (regex && regex1 && regex2) {
        fers.classList.add('ke')
        ior.style.display = 'none'
    }else{
        fers.classList.add('yl')
    }
})
