var botaoAdicionar=document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function(){

    console.log('Buscando pacientes...')
    var xhr=new XMLHttpRequest();
    //responsável a fazer requisições

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pascientes');

    xhr.addEventListener('load', function(){
        var erroAjax=document.querySelector('#erro-ajax');
        //.sataus - para saber qual código da requisição
        if (xhr.status==200){
            erroAjax.classList.add('invisível');
            var resposta=xhr.responseText;// retorna a resposta do servidor como uma string de texto
            var pacientes=JSON.parse(resposta); //transforma de JSON para JavaScript
            pacientes.forEach(function(paciente) {
                adicionarPacienteNaTabela(paciente);
            });
        } else{
            erroAjax.classList.remove('invisivel');
            console.log(xhr.status);
            console.log(xhr.responseText);
        }          
        
    })

    xhr.send(); // enviar resposta

})

