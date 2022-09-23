//o código logo abaixo comentado remove itens já existentes na lista
//sem levar em conta os recém-adicionados

/*
var pacientes=document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente){
    paciente.addEventListener('dblclick', function(){
        this.remove();
    });
})
*/

//delegação de eventos - o elemento pai identifica quem foi clicado
//o código logo abaixo comentado, remove a linha por meio
//da delegação de eventos

/*var tabela = document.querySelector('table');


tabela.addEventListener('dblclick', function(e){
    var alvoEvento=e.target;
    //dirá exatamente quem foi clicado com a propriedade target
    var paiDoAlvo=alvoEvento.parentNode;
    //parentNode - para remover a linha inteira (elemento pai)
    //em vez de somente a célula (encontrada pela propriedade target)
    paiDoAlvo.remove();

    //para economizar, pode usar o código abaixo comentado
    //e.target.parentNode.remove();
})

*/

var tabela=document.querySelector('#tabela-pacientes');
 
tabela.addEventListener('dblclick', function(event){
    
    console.log('fui clicado')
    event.target.parentNode.classList.add('fadeOut');

    setTimeout(function(){
        event.target.parentNode.remove();
        },500);
});

