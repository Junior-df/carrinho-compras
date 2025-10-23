

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

