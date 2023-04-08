window.addEventListener('load', () => {
    

    let estados = document.getElementById('estado');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
    .then(estadoRetorno => {
        return estadoRetorno.json();
    })

    .then(estadoFormatado=> {
        for(i = 0; i < estadoFormatado.length; i++) {
            estados.innerHTML += '<option>' + estadoFormatado[i].nome + '</option>';
        }
    })
    .catch(error => console.log(error));

})