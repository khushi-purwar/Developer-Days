const input_val = document.querySelector('#val');
const inc_btn = document.querySelector('#increment');
const dec_btn = document.querySelector('#decrement');
const re_btn = document.querySelector('#reset');

let val = parseInt(input_val.value); 

inc_btn.addEventListener('click', ()=>{
    val = val+1;
    input_val.value = val;
    if(val>0){
        input_val.style.color = "green";
    }
    if(val == 0)
    input_val.style.color = "black";
})


dec_btn.addEventListener('click', ()=>{
    val = val-1;
    input_val.value = val;
    if(val<0){
        input_val.style.color = "red";
    }
    if(val == 0)
    input_val.style.color = "black";
})

re_btn.addEventListener('click', ()=>{
    val = 0;
    input_val.value = val;
})