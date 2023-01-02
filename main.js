let color = document.querySelector('input');
let show = document.querySelector('.show')
console.log(color)
console.log(show)
if(localStorage.getItem('color')){
    document.body.style.backgroundColor=`${localStorage.getItem('color')}`
    show.innerText = `${localStorage.getItem('color')}`
    color.value= localStorage.getItem('color')
}
color.oninput=()=>{
    document.body.style.backgroundColor=`${color.value}`
    show.innerText = `${color.value}`
    show.style.backgroundColor= `white`
    localStorage.setItem('color',color.value)
}