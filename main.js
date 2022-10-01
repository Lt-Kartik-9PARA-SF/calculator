var sum = document.querySelector('#sum');
var minus = document.querySelector('#minus');
var divide = document.querySelector('#divide');
var multiply = document.querySelector('#multiply');

var output = document.querySelector('#output');

sum.addEventListener('click',function(){
    output.value = Number(document.querySelector('#firstNumber').value) + Number(document.querySelector('#secondNumber').value);
});

minus.addEventListener('click',function(){
    output.value = Number(document.querySelector('#firstNumber').value) - Number(document.querySelector('#secondNumber').value);
});

divide.addEventListener('click',function(){
    output.value = Number(document.querySelector('#firstNumber').value) / Number(document.querySelector('#secondNumber').value);
});

multiply.addEventListener('click',function(){
    output.value = Number(document.querySelector('#firstNumber').value) * Number(document.querySelector('#secondNumber').value);
});