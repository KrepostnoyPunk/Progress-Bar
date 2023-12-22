const nextBtn=document.getElementById('next')
const prevBtn=document.getElementById('prev')
const stepsEl=document.querySelectorAll('.step')
const progressFrontEl=document.querySelector('.progress-bar-front')
//console.log(stepsEl);

let currentChecked=1

nextBtn.addEventListener('click',()=>{
    currentChecked++
    //console.log(currentChecked);
    if(currentChecked>stepsEl.length) {
        currentChecked=stepsEl.length
    }
    //console.log(currentChecked);
    updateProgress()
})

prevBtn.addEventListener('click',()=>{
    currentChecked--
    //console.log(currentChecked);
    if(currentChecked<1) {
        currentChecked=1
    }
    //console.log(currentChecked);
    updateProgress()
})

function updateProgress(){
    stepsEl.forEach((stepEl, idx)=>{
        if(idx<currentChecked) {
            stepEl.classList.add('checked')
            stepEl.innerHTML=`
            <i class="fa-solid fa-check"></i>
            <small>${idx===0?'Start': idx===stepsEl.length-1?'Final':'Step' +idx}</small>
            `
        } else {
            stepEl.classList.remove('checked')
            stepEl.innerHTML=`
            <i class="fa-solid fa-xmark"></i>
            `
        }
    })

    const checkedNum=document.querySelectorAll('.checked')
    progressFrontEl.style.width=((checkedNum.length-1)/(stepsEl.length-1))*100+ '%'

    if(currentChecked===1){
        prevBtn.disabled=true
    } else if(currentChecked===stepsEl.length){
        nextBtn.disabled=true
    } else{
        prevBtn.disabled=false
        nextBtn.disabled=false
    }
}