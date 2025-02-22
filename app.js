let listaDeAmigos =[];

//Função para cadastrar amigos na lista
function adicionarAmigo(){
    let nomeAmigo = document.querySelector('.input-name').value;
    listaDeAmigos.push(nomeAmigo);

    limparInput();
    exibirAmigos();
}

//Função para limpar input após cada inserção de nome
function limparInput(){
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

//Função para exibir os nomes no front
function exibirAmigos(){
    let exibirListaAmigos = document.querySelector('.name-list');
    let itensDaListaDeAmigos = listaDeAmigos.map((element) => { return   '<ol>' +  element + '</ol>'});
    exibirListaAmigos.innerHTML = itensDaListaDeAmigos.join("");

    // let html = dados . map((element) => { return '<h2>' + element.title + '</h2><ul>' + element.items.map(item => '<li>' + item + '</li>').join('') + '</ul>'; }) .join('');
}

//Função para sortear amigo
function sortearAmigo(){
    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let exibirSorteado = document.querySelector(".result-list"); 

    //Loop para não repetir o nome removendo-o da lista
    for(i=0; i <= listaDeAmigos.length; i++){
        if(listaDeAmigos.includes(sorteado)){
            listaDeAmigos.splice(listaDeAmigos.indexOf(sorteado), 1);
            exibirSorteado.innerHTML = `O nome do seu amigo secreto é ${sorteado}`;
        }
        break;
    }

}