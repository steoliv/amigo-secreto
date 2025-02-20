let listaDeAmigos =[];


//Função para cadastrar amigos na lista
function adicionarAmigo(){
    let nomeAmigo = document.querySelector('.input-name').value;
    listaDeAmigos.push(nomeAmigo);

    console.log(listaDeAmigos);

    limparInput();
}

//Função para limpar input após cada inserção de nome
function limparInput(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}