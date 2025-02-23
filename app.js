let listaDeAmigos =[];

//Função para cadastrar amigos na lista
function adicionarAmigo(){
    document.querySelector(".result-list").innerHTML ='';
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
}

//Função para sortear amigo
function sortearAmigo(){
    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let exibirSorteado = document.querySelector(".result-list"); 

    //Condição para verificar se a lista não esta vazia
    if(listaDeAmigos.length >= 1){
        //Loop para não repetir o nome removendo-o da lista
        for(i=0; i <= listaDeAmigos.length; i++){
            if(listaDeAmigos.includes(sorteado)){
                listaDeAmigos.splice(listaDeAmigos.indexOf(sorteado), 1);
                exibirSorteado.innerHTML = `O nome do seu amigo secreto é ${sorteado}`;
            }else{
                exibirSorteado.innerHTML = 'TODOS OS NOMES FORAM SORTEADOS';
                limparLista();
            }
            break;
        }
    }else{
        alert("Você precisa inserir amigos");

    }
}


// Função para Limpar listar e poder realizar novo sorteio
function limparLista(){
    listaDeAmigos = [];
    document.querySelector('.name-list').innerHTML = '';
}