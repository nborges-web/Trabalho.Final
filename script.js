const valorPastel =  document.querySelectorAll('.card');
valorPastel.forEach(card => {
    card.addEventListener('click', () => {

         const nomePastel = card.getAttribute('data-nome');
        const precoPastel = card.getAttribute('data-preco');

     
        console.log(`Pastel selecionado: ${nomePastel} - Preço: R$ ${precoPastel}`);

       
        Pedido(nomePastel, precoPastel);
     });
 });

 function Pedido(nome, preco) {
     alert(`Você adicionou 1 ${nome} por R$ ${preco} ao seu pedido!`);
 }


//Daqui pra baixo foram tentativas do Nicolas 

// const cards = document.querySelectorAll('.card');
// const cartContainer = document.getElementById('cart');
// const totalContainer = document.getElementById('total');

// // carrinho em memória
// let carrinho = [];

// cards.forEach(card => {
//     card.addEventListener('click', () => {
//         const nome = card.getAttribute('data-nome');
//         const preco = parseFloat(card.getAttribute('data-preco'));

//         adicionarAoCarrinho(nome, preco);
//         renderCarrinho();
//     });
// });

// function adicionarAoCarrinho(nome, preco) {
//     // verifica se o item já existe
//     const itemExistente = carrinho.find(item => item.nome === nome);

//     if (itemExistente) {
//         itemExistente.quantidade++;
//     } else {
//         carrinho.push({
//             nome,
//             preco,
//             quantidade: 1
//         });
//     }
// }

// function removerItem(nome) {
//     carrinho = carrinho.filter(item => item.nome !== nome);
//     renderCarrinho();
// }

// function renderCarrinho() {
//     cartContainer.innerHTML = '';

//     let total = 0;

//     carrinho.forEach(item => {
//         const subtotal = item.preco * item.quantidade;
//         total += subtotal;

//         const div = document.createElement('div');
//         div.innerHTML = `
//             <p>
//                 ${item.nome} - R$ ${item.preco} x ${item.quantidade} = R$ ${subtotal.toFixed(2)}
//                 <button onclick="removerItem('${item.nome}')">Remover</button>
//             </p>
//         `;

//         cartContainer.appendChild(div);
//     });

//     totalContainer.textContent = `Total: R$ ${total.toFixed(2)}`;
// }
