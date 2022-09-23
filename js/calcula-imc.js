
// subitem 2.1 do curso

var titulo=document.querySelector('.titulo');
titulo.textContent='Aparecida Nutricionista';

//para calcular o IMC de uma linha (pessoa) da tabela
var paciente=document.querySelector('#primeiro-paciente');
var tdPeso=paciente.querySelector('.info-peso');
var peso=tdPeso.textContent;

console.log(paciente);
console.log(tdPeso);
console.log(peso);

var tdAltura=paciente.querySelector('.info-altura');
var altura=tdAltura.textContent;

console.log(paciente);
console.log(tdAltura);
console.log(altura);
console.log(imc);

var tdImc=paciente.querySelector('.info-imc');

var pesoEValido=true;
var alturaEValida=true;

if (peso<=0 || peso>=1000){
    console.log('Peso inválido');
    pesoEValido=false;
    tdImc.textContent='Peso inválido';
}

if (altura<=0 || altura>=3){
    console.log('altura inválida');
    alturaEValida=false;
    tdImc.textContent='Altura inválida';
}

if (pesoEValido && alturaEValida){
    var imc=peso/(altura*altura);
    tdImc.textContent=imc;
}

//para clacular o IMC para todos da tabela

var pacientes=document.querySelectorAll('.paciente');

console.log(pacientes);

for (var i=0; i<pacientes.length;i++){
    
    var paciente2=pacientes[i];
    
    var tdPeso2=paciente2.querySelector('.info-peso');
    var tdAltura2=paciente2.querySelector('.info-altura');
    var tdImc2=paciente2.querySelector('.info-imc');

    var peso2=tdPeso2.textContent;
    var altura2=tdAltura2.textContent;
    
    var pesoValido2=validaPeso(peso2);
    var alturaValida2=validaAltura(altura2);

    if (!pesoValido2){
        pesoValido2=false;
        tdImc2.textContent = "Peso inválido!";
        //paciente2.style.backgroundColor='red';
        //a linha cima comentada é uma
        //maneira de alterar CSS background-color via JavaScript
        //isso não é uma boa prática
        //outra maneira de fazer isso
        //é criar uma classe no CSS
        //e inserí-la com o comando a segui
        paciente2.classList.add("paciente-invalido");
    }

    if (!alturaValida2){
        alturaValida2=false;
        tdImc2.textContent = "Altura inválida!";
        paciente2.classList.add("paciente-invalido")
    }

    if (pesoValido2 && alturaValida2){
        var imc = calculaImc(peso2,altura2);
        tdImc2.textContent=imc;
    }
    

    
}

//addEventListener() - escutador de eventos - 
//escutará as interações dos usuários
titulo.addEventListener('click', mostraMensagem);

function mostraMensagem(){
    console.log('Olá eu fui clicado!');
}


function calculaImc(peso, altura){
    var imc=0;

    imc=peso/(altura*altura);

    return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso>=0 && peso<1000){
        return true
    }else{
        return false
    }

}

function validaAltura(altura){
    
    if (altura>=0 && altura<=3.00){
        return true;
    }else{
        return false;
    }

}







