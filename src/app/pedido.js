const lanchePedido = JSON.parse(localStorage.getItem('lanchePedido'))

const tiutloDoLanche = lanchePedido[0]
const imagemDoLanche = '../../.' + lanchePedido[1]
const descricaoDoLanche = lanchePedido[2]
const valorDoLanche = Number(lanchePedido[3])
const quantidadeDoLanche = 01

const pedido = document.querySelector('.pedido')

pedido.innerHTML = `
<div class="pedido__lista-itens">

      <h2 class="pedido__titulo">Seus pedidos</h2>


      <seciton class="pedido__item">

        <img class="pedido__imagens" src="${imagemDoLanche}" alt="">

        <section class="pedido__caracteristicas">

          <h3 class="pedido__itens-titulo">${tiutloDoLanche}</h3>
          <p class="pedido__descricao">${descricaoDoLanche}</p>

          <div class="pedido__quantidade">
            <label class="pedido__descricao" for="iquantidade">Qtd:</label>
            <input class="pedido__quantidade-campo" type="number" name="quantidade" id="iquantidade" value="${quantidadeDoLanche}">
            <span class="diminuir">-</span>
            <span class="adicionar">+</span>
          </div>

          <p class="pedido__descricao">Valor: ${valorDoLanche},00R$</p>

        </section>
        <span class="pedido__remover-item">
          <svg width="50" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M26.3317 23.563L34.7751 15.1392C35.1448 14.7695 35.3526 14.268 35.3526 13.7451C35.3526 13.2222 35.1448 12.7207 34.7751 12.3509C34.4053 11.9812 33.9038 11.7735 33.3809 11.7735C32.858 11.7735 32.3565 11.9812 31.9868 12.3509L23.563 20.7943L15.1393 12.3509C14.7695 11.9812 14.268 11.7735 13.7451 11.7735C13.2222 11.7735 12.7207 11.9812 12.351 12.3509C11.9812 12.7207 11.7735 13.2222 11.7735 13.7451C11.7735 14.268 11.9812 14.7695 12.351 15.1392L20.7944 23.563L12.351 31.9868C12.1669 32.1693 12.0208 32.3865 11.9212 32.6258C11.8215 32.865 11.7701 33.1217 11.7701 33.3809C11.7701 33.6401 11.8215 33.8968 11.9212 34.1361C12.0208 34.3753 12.1669 34.5925 12.351 34.7751C12.5335 34.9591 12.7507 35.1052 12.99 35.2049C13.2292 35.3046 13.4859 35.3559 13.7451 35.3559C14.0043 35.3559 14.261 35.3046 14.5003 35.2049C14.7395 35.1052 14.9567 34.9591 15.1393 34.7751L23.563 26.3317L31.9868 34.7751C32.1693 34.9591 32.3865 35.1052 32.6258 35.2049C32.8651 35.3046 33.1217 35.3559 33.3809 35.3559C33.6402 35.3559 33.8968 35.3046 34.1361 35.2049C34.3754 35.1052 34.5925 34.9591 34.7751 34.7751C34.9591 34.5925 35.1052 34.3753 35.2049 34.1361C35.3046 33.8968 35.3559 33.6401 35.3559 33.3809C35.3559 33.1217 35.3046 32.865 35.2049 32.6258C35.1052 32.3865 34.9591 32.1693 34.7751 31.9868L26.3317 23.563Z"
              fill="white" />
          </svg>
        </span>
      </seciton>

      </div>
      <div class="pedido__fechar-pedido">
        <p class="pedido__descricao">!Frete gratis em compras acima de 80,00R$ reais</p>
        <h3 class="pedido__itens-titulo">Subtotal(2 itens): 40,00R$</h3>
        <input class="pedido__botao-fecharPedido" type="submit" value="Fechar-pedido">
      </div>
      
`