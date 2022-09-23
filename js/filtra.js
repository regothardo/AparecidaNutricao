var campoFiltro=document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function(){
    console.log(this.value);

    var pacientes=document.querySelectorAll('.paciente');
    
    if (this.value.length>0){
        for (var i=0; i<pacientes.length; i++){
            var paciente=pacientes[i];
            var tdnome=paciente.querySelector('.info-nome');
            var nome=tdnome.textContent;
    
            var expressao = new RegExp(this.value, 'i');
//primeiro parâmetro - o que vc quer buscar
//segundo se é case sensitive ou não - neste caso está como não
            if (!expressao.test(nome)){
                paciente.classList.add('invisivel');
            }else{
                paciente.classList.remove('invisivel');
            }
        }
    } else{
        for (var i=0;i<pacientes.length;i++){
            var paciente=pacientes[i];
            paciente.classList.remove('invisivel');
        }
    }
    
    

    
})



