function testaCandidato(){

    let nome; 
    let genMas;
    let genFem; 
    let idade;
    let condSaBom;
    let condSaRuim;
    let mensagem; 


    nome         = document.getElementById("idNome").value;
    genFem       = document.getElementById("idFem").checked; 
    genMas       = document.getElementById("idMas").checked;
    idade        = Number(document.getElementById("idIdade").value); 
    condSaBom    = document.getElementById("idSaBom").checked; 
    condSaRuim   = document.getElementById("idSaRuim").checked; 


    if (genMas) {
        if (idade >= 18) {
            if (condSaBom) {
                mensagem = nome + " está apto para o SMO!"; 
            }else{
                mensagem = nome + " está dispensado do SMO por motivo de saúde";
            }
        } else { 
            mensagem = nome + " está dispensado do SMO por motivo de idade";
        }   
    } else { 
        mensagem = nome + " está dispensada do SMO por ser do sexo feminino";
    }

    document.getElementById("idOut").value = mensagem; 
    

}