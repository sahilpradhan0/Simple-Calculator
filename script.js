const output = document.querySelector('.display');
const displayZero = document.querySelector('.displayZero');
const equal = document.getElementById('equal');
const backSpace = document.getElementById('backSpace');

displayZero.addEventListener('click',() => {
    output.innerHTML = 0;
})
function displayNumber(num){
    if(output.innerHTML == 0){
        output.innerHTML = num;
    }else{
        output.innerHTML += num;
    }
}

equal.addEventListener('click', () => {
    var input = output.innerHTML;
    var result = eval(input);
    output.innerHTML = result;
})
backSpace.addEventListener('click',() => {
    var result = output.innerHTML;
    var finResult = result.substring(0,result.length-1);
    output.innerHTML = finResult;
})