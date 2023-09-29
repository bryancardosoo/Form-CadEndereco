'use strict'; //Strict mode

//Função para limpar formulário
//Arrow function =>
const limparFormulario = () => {
    document.getElementsById('rua').value ='';
    document.getElementsById('bairro').value ='';
    document.getElementsById('cidade').value ='';
    document.getElementsById('estado').value ='';
}

