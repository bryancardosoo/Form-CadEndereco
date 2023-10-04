'use strict'; //Strict mode

//Função para limpar formulário
//Arrow function =>
const limparFormulario = () => {
    document.getElementsById('rua').value ='';
    document.getElementsById('bairro').value ='';
    document.getElementsById('cidade').value ='';
    document.getElementsById('estado').value ='';
}

// Verifica se CEP é válido
const eNumero =(numero) => /^[0-9]+$/.test(numero);
const cepValido =(cep) => cep.length == 8 && eNumero(cep);

//Responsavel pelo preenchimento de formulário
const preencherForumulario = (endereco) => {
    document.getElementsById('rua').value = enedereco.logradouro;
    document.getElementsById('bairro').value = endereco.bairro;
    document.getElementsById('cidade').value = endereco.localidade;
    document.getElementsById('estado').value = endereco.uf;
}

//Função para consumo de API da Via CEP
const pesquisarCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    
if (cepValido(cep.value)){
    const dados = await fetch(url); // Esperar
    const address = await dados.json(); // Retorna dados no formato JSON

    if(address.hasOwnProperty('erro')){
        alert('CEP não encontrado')
    }else{
        preencherFormulario(address);
        }
    }else{
        alert('CEP incorreto');
    }
}

//Adiciona um evento DOM no input do CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep)
