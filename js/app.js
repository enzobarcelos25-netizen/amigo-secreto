let amigos = [];


    function adicionar() {
        let amigo = document.getElementById('nome-amigo');
        amigos.push(amigo.value);
        let lista = document.getElementById('lista-amigos');
        let li = document.createElement('li')
        li.textContent = amigo.value;
        lista.appendChild(li);
        li.addEventListener('click', function(evento) {
            evento.target.remove();
            let posicao = amigos.indexOf(evento.target.textContent);
            amigos.splice(posicao , 1)
    })
        

    if(lista.textContent === '') {
         lista.textContent = amigo.value;
    }else{
        lista.textContent = lista.textContent + ',' + amigo.value;
    }
    amigo.value = '';
    
}


function sortear () {
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++ ) {
        
        if(i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        }  else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'
        }
    }
}



function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    amigos = [];
    lista = document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}