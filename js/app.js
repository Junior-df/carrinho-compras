
//variáveis declarável antes do function
let valorTotal = 0;
let carrinho = document.getElementById("lista-produtos");  
let carrinhoTotal = document.getElementById("valor-total");  

limpar();

function adicionar(){
   // recuperar valores nome e produto, quantidade e valor
   let produto = document.getElementById('produto').value;
   let nomeProduto = produto.split('-')[0];
   let valorUnitario = produto.split('R$')[1];
   let quantidade = document.getElementById('quantidade').value;
   let preco = quantidade * valorUnitario;
   valorTotal = valorTotal + preco;

   carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`
   carrinhoTotal.textContent = 'R$ ' + valorTotal;
     
   //calcular o preço, o nosso subtotal
   //adicionar o carrinho
   //atualizar o valor total 
}

function limpar (){
   carrinhoTotal.textContent = 0;
   carrinho.innerHTML = '';
   valorTotal = 0;
   quantidade.value = 0;
}

