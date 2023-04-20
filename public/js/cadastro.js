window.addEventListener('load', () => {
    let estados = document.getElementById('estado');
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
        .then(estadoRetorno => {
            return estadoRetorno.json();
        })
        .then(estadoFormatado => {
            for (i = 0; i < estadoFormatado.length; i++) {
                estados.innerHTML += '<option>' + estadoFormatado[i].sigla + '</option>';
            }
        })
        .catch(error => console.log(error));
})


const inputDoCep = document.querySelector("#cep");


inputDoCep.addEventListener('blur', (event) => {
    const valorDoCep = inputDoCep.value;
    fetch('https://viacep.com.br/ws/' + valorDoCep + '/json')
        .then(response => response.json())
        .then(data => atualizaCampos(data))
})

const atualizaCampos = (conteudo) => {
    console.log('CONTEÚDO', conteudo)
    document.getElementById('logradouro').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
}
