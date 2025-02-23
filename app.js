let listaDeAmigos =[];
let exibirListaAmigos = document.querySelector('.name-list');
let exibirSorteado = document.querySelector(".result-list"); 

//Função para cadastrar amigos na lista
function adicionarAmigo(){
    document.querySelector(".result-list").innerHTML ='';
    let nomeAmigo = document.querySelector('.input-name');

    if(nomeAmigo.value == ""){
        alert("Por favor, insira um nome.");
    }else{
        listaDeAmigos.push(nomeAmigo.value);
    }

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
    let itensDaListaDeAmigos = listaDeAmigos.map((element) => { return   '<ol>' +  element + '</ol>'});
    exibirListaAmigos.innerHTML = itensDaListaDeAmigos.join("");
}

//Função para sortear amigo
function sortearAmigo(){
    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];

    //Condição para verificar se a lista não esta vazia
    if(listaDeAmigos.length >= 1){
        exibirListaAmigos.innerHTML = "";

        //Loop para não repetir o nome removendo-o da lista
        for(i=0; i <= listaDeAmigos.length; i++){
            if(listaDeAmigos.includes(sorteado)){
                listaDeAmigos.splice(listaDeAmigos.indexOf(sorteado), 1);
                exibirSorteado.innerHTML = `O nome do seu amigo secreto é ${sorteado}`;
            }
            break;
        }
    }else{
        alert("Você precisa inserir amigos");
        limparLista();
    }
}


// Função para Limpar listar e poder realizar novo sorteio
function limparLista(){
    listaDeAmigos = [];
    document.querySelector('.name-list').innerHTML = '';
    exibirSorteado.innerHTML = '';
}