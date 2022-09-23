var botaoAdicionar=document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    
    //preventDefault() - para não atulizar a página e perder os dados preenchidos
    event.preventDefault();

    //teste para ver 
   // console.log('Oi seu sou o botão e fui clicado');

    var form= document.querySelector('#form-adiciona');
    var paciente=obtemPacienteDoFormulario(form);

    

    var erros= ValidaPaciente(paciente);
    console.log(erros);

    if (erros.length>0){// maior que 0 é que teve erro

        exibeMensagensDeErro(erros);
        return;
    }

 /*  if(!ValidaPaciente(paciente)){
        console.log('Paciente inválido!');
        return; //sairá imediatamente da função
    }
 */
    
    adicionarPacienteNaTabela(paciente);

    //para limpar os dados do formulário após o clique do botão
    form.reset();

    //para limpar as informações de erro
    var mensagensErro=document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML=''; //inner.HTML usada para definir ou retornar o conteúdo HTML de um elemento

});


//para ter acesso aos inputs tem que formar a propriedade name (ver no HTML)
//para acessar o valor, utilizar a propriedade value
//conforme código abaixo
function obtemPacienteDoFormulario(form){

    var paciente={
        nome: form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc:calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
    
}

function montarTr(paciente){
    //para criar a linha no HTML
    //createElement() - cria elementos no HTML
    var pacienteTr=document.createElement('tr');
    pacienteTr.classList.add('paciente');

    //maneira mais complexa
    //para criar as células no HTML
    //criará elementos separados com a classe
    // e inserirá no HTML o valor da variável
    /*  
    var nomeTd= montaTd(paciente.nome, "info-nome");
    var pesoTd=montaTd(paciente.peso, "info-peso");
    var alturaTd=montaTd(paciente.altura, "info-altura");
    var gorduraTd=montaTd(paciente.gordura, "info-gordura");
    var imcTd=montaTd(paciente.imc, 'info-imc'); 


    // appendChild() - para atrelar as td's(células) criadas na tr(linha)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    */

    //maneira mais simples de 
    //criar as células no HTML,
    //com elementos separados com a classe,
    //inserir no HTML o valor da variável
    //e atrelar as td's(células) criadas na tr(linha)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td=document.createElement('td'); // cria célula
    td.textContent=dado;//inserir no HTML o valor da variável
    td.classList.add(classe);//adiciona a classe

    return td;
}

function ValidaPaciente(paciente){

    var erros=[];

    if (paciente.nome.length===0){
        erros.push('O nome do paciente deve ser preenchido!');
    }

    if (paciente.peso.length===0){
        erros.push('O valor do peso deve ser preenchido!');
    }

    if (paciente.altura.length===0){
        erros.push('O valor da altura deve ser preenchida!');
    }

    if (paciente.gordura.length===0){
        erros.push('O valor da gordura deve ser preenchido!');
    }
    
    if (!validaPeso(paciente.peso)){
        
        erros.push('O peso é inválido!');
    }

    if (!validaAltura(paciente.altura)) erros.push('A altura é inválida!');

    
    return erros;
    
}

function exibeMensagensDeErro(erros){
    var ul=document.querySelector('#mensagens-erro');
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li=document.createElement('li');
        li.textContent=erro;
        ul.appendChild(li);
    });
   
}

function adicionarPacienteNaTabela(paciente){
    //cria a td e a tr do paciente
    var pacienteTr=montarTr(paciente);

    var tabela=document.querySelector('#tabela-pacientes');

    //para atrelar a linha (tr) na tabela(tdody)
    tabela.appendChild(pacienteTr);

}

    
