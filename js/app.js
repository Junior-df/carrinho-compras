
//*SelecionarCompra();

/*
function SelecionarCompra (){

    let selecao = document.getElementById('produto');
    let botao = selecao.querySelector('.botao-form botao-adicionar');
    let variavel = '';
    
    selecao.onchange = function (){
        variavel = this.value;
        alert (variavel);
    }

    //let valor = selecao.options[selecao.selectedIndex].value;
    //alert(valor);
    
}
*/ 

function adicionar(){
   // recuperar valores nome e produto, quantidade e valor
   let produto = document.getElementById('produto').value;
   let nomeProduto = produto.split('-')[0];
   let valorUnitario = produto.split('R$')[1];
   let quantidade = document.getElementById('quantidade');
   let preco = quantidade.value * valorUnitario;
   alert(produto);
   alert(nomeProduto);
   alert(valorUnitario);
   alert(preco);
   //calcular o preço, o nosso subtotal
   //adicionar o carrinho
   //atualizar o valor total 
}


/*
function alterarStatus(id){
   
   let gameClicado = document.getElementById(`game-${id}`);
   let imagem = gameClicado.querySelector('.dashboard__item__img');
   let botao = gameClicado.querySelector('.dashboard__item__button');
   let Nomejogo = gameClicado.querySelector('.dashboard__item__name');
   let resultado = confirm('Confirmar devolução?');
   
   if (imagem.classList.contains('dashboard__item__img--rented')){
      imagem.classList.remove('dashboard__item__img--rented');
      botao.classList.remove('dashboard__item__button--return');
      botao.textContent = 'Alugar';
   } else {
      imagem.classList.add('dashboard__item__img--rented');
      botao.classList.add('dashboard__item__button--return');
      botao.textContent = 'Devolver';
   }
   
   
   
} 
*/