var inputElement1 = document.querySelector('#peso');
var inputElement2 = document.querySelector('#altura');
var button = document.querySelector('#botao');
var resultado = document.querySelector('#resultado');
var peso1 = document.querySelector('#peso1');
var altura1 = document.querySelector('#altura1');
var imc1 = document.querySelector('#imc');



var escondeDivDados = document.querySelector('.dados');
escondeDivDados.style.visibility = "hidden";

var sugestao = document.querySelector('.sugestoes');
sugestao.style.display = "none";


button.addEventListener('click', clicou);


function clicou(){

    escondeDivDados.style.visibility = "visible";
    sugestao.style.display = "flex";

    peso = inputElement1.value;
    altura = inputElement2.value;
        
    peso1.innerHTML = peso;
    altura1.innerHTML = altura;

imc = peso/(altura * altura);

if (imc <= 18.5){
    resultado.innerHTML ='Você está abaixo do peso.';
    resultado.style.backgroundColor = "red";
    resultado.style.color = "white";
}else if(imc >= 18.5 && imc <= 24.99){
    resultado.innerHTML ='Seu peso está normal.';
    resultado.style.backgroundColor = "green";
}else if(imc >= 25 && imc <= 29.99){
    resultado.innerHTML ='Você está com sobrepeso.';
    resultado.style.backgroundColor = "yellow";
    resultado.style.color="black";
}else if(imc >= 30 && imc <= 34.99){
    resultado.innerHTML ='Você está com obesidade grau 1.';
    resultado.style.backgroundColor = "orange";
    resultado.style.color = "white";
}else if(imc >= 35 && imc <= 39.99){
    resultado.innerHTML ='Você está com obesidade grau 2.';
    resultado.style.backgroundColor = "orange";
    resultado.style.color = "white";
}else if(imc >= 40){
    resultado.innerHTML ='Você está com obesidade grau 3.';
    resultado.style.backgroundColor = "red";
    resultado.style.color = "white";
}else{
    resultado.innerHTML ='Digite seu peso e sua altura.';
    resultado.style.backgroundColor = "red";
    resultado.style.color = "white";
}
imc1.innerHTML = imc.toFixed(1);
}

