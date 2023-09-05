const value = document.querySelector("#value");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const res = document.querySelector("#res");

let count = 0;

value.textContent = count;

function changeColor(){
    if (count<=5) {
        value.setAttribute('class', 'softblue')
    }else if(count>5 && count <= 10){
        value.setAttribute('class', 'cyan')
    }
    else{
        value.setAttribute('class', 'green')
    }
}

inc.addEventListener("click", function(){
    count ++;
    value.textContent = count;
    changeColor();
});

dec.addEventListener("click", function(){
    if (count > 0) {
        count--;
        value.textContent = count;
    } 
    changeColor();
});

res.addEventListener("click", function(){
    count = 0;
    value.textContent = count;
    changeColor();
});