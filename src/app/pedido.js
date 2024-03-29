const pedido = JSON.parse(localStorage.getItem('pedido'))

criaItemDosPedidos()

function criaItemDosPedidos() {

  const criaItemPedido = pedido.map((element, i) => {
    return `
    <seciton class="pedido__item">
    <span class="pedido__remover-item">
      <svg width="50" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M26.3317 23.563L34.7751 15.1392C35.1448 14.7695 35.3526 14.268 35.3526 13.7451C35.3526 13.2222 35.1448 12.7207 34.7751 12.3509C34.4053 11.9812 33.9038 11.7735 33.3809 11.7735C32.858 11.7735 32.3565 11.9812 31.9868 12.3509L23.563 20.7943L15.1393 12.3509C14.7695 11.9812 14.268 11.7735 13.7451 11.7735C13.2222 11.7735 12.7207 11.9812 12.351 12.3509C11.9812 12.7207 11.7735 13.2222 11.7735 13.7451C11.7735 14.268 11.9812 14.7695 12.351 15.1392L20.7944 23.563L12.351 31.9868C12.1669 32.1693 12.0208 32.3865 11.9212 32.6258C11.8215 32.865 11.7701 33.1217 11.7701 33.3809C11.7701 33.6401 11.8215 33.8968 11.9212 34.1361C12.0208 34.3753 12.1669 34.5925 12.351 34.7751C12.5335 34.9591 12.7507 35.1052 12.99 35.2049C13.2292 35.3046 13.4859 35.3559 13.7451 35.3559C14.0043 35.3559 14.261 35.3046 14.5003 35.2049C14.7395 35.1052 14.9567 34.9591 15.1393 34.7751L23.563 26.3317L31.9868 34.7751C32.1693 34.9591 32.3865 35.1052 32.6258 35.2049C32.8651 35.3046 33.1217 35.3559 33.3809 35.3559C33.6402 35.3559 33.8968 35.3046 34.1361 35.2049C34.3754 35.1052 34.5925 34.9591 34.7751 34.7751C34.9591 34.5925 35.1052 34.3753 35.2049 34.1361C35.3046 33.8968 35.3559 33.6401 35.3559 33.3809C35.3559 33.1217 35.3046 32.865 35.2049 32.6258C35.1052 32.3865 34.9591 32.1693 34.7751 31.9868L26.3317 23.563Z"
          fill="white" />
      </svg>
    </span>
    <img class="pedido__imagens" src="../../.${element.imagemDoLanche}" alt="">
  
    <section class="pedido__caracteristicas">
    
      <h3 class="pedido__itens-titulo">${element.tiutloDoLanche}</h3>
      <p class="pedido__descricao">${element.descricaoDoLanche}</p>
    
      <div class="pedido__quantidade">
        <label class="pedido__descricao" for="iquantidade">Qtd:</label>
        <input id="${i}" class="pedido__quantidade-campo" type="number"  name="quantidade" id="iquantidade" value="${element.quatidadeDolanche}" readonly>
        <span data-botao class="diminuir">-</span>
        <span data-botao class="adicionar">+</span>
      </div>

      <p class="pedido__descricao">Valor: R$ <span class="AlterarValor">${element.valorDoLanche}</span>,00</p>
    
    </section>
    
    </seciton>
      
    `
  })

  document.querySelector(".pedido__lista-itens").innerHTML = criaItemPedido

}


const botao = document.querySelectorAll('[data-botao]')
let quantidadeDoLanche = 1



botao.forEach((element) => {

  const elementoDaquantidadeDoLanche = element.parentNode.children[1]
  const elementoDoValorAlteradoDoLanche = element.parentNode.parentNode.children[3].children[0]

  element.addEventListener('click', () => {
  
    function alterarQuantidadeDolanche() {
      elementoDaquantidadeDoLanche.value = quatidadeConvertida
      return
    }

    let quatidadeConvertida = Number(element.parentNode.children[1].value)

    if (element.classList == 'adicionar' && quatidadeConvertida > 0) {

      quatidadeConvertida = quatidadeConvertida + 1
      alterarQuantidadeDolanche()
    } if (element.classList == 'diminuir' && quatidadeConvertida >= 2) {

      quatidadeConvertida = quatidadeConvertida - 1
      alterarQuantidadeDolanche()
    }
    const tituloParaIndentificarIndex = element.parentNode.parentNode.children[0].textContent
    const minhaChave = "pedido"
    const minhaString = localStorage.getItem(minhaChave)
    let meuObjeto = JSON.parse(minhaString)
    const indexDoItemClicado = meuObjeto.findIndex(pedido => pedido.tiutloDoLanche === tituloParaIndentificarIndex)
   
    meuObjeto[indexDoItemClicado].quatidadeDolanche = quatidadeConvertida

    let valorAlteradoDolanche = Number(meuObjeto[indexDoItemClicado].valorUnitarioDoLanche) * quatidadeConvertida
    meuObjeto[indexDoItemClicado].valorDoLanche = valorAlteradoDolanche
    elementoDoValorAlteradoDoLanche.innerHTML = valorAlteradoDolanche

    const minhaNovaString = JSON.stringify(meuObjeto) 
    localStorage.setItem(minhaChave, minhaNovaString)
    
    altera()
    requisitoParaFrete()
  })



})

const removerPedido = document.querySelectorAll('.pedido__remover-item')


removerPedido.forEach((element) => {

  element.addEventListener('click', (event) => {
    
    const quantidadeDolancheRemovido = element.parentNode.children[2].children[2].children[1]
    quantidadeDolancheRemovido.value = quantidadeDolancheRemovido - quantidadeDolancheRemovido

    const valorDoLancheRemovido = element.parentNode.children[2].children[3].children[0]
    const valorDoLancheRemovidoConvertido = Number(valorDoLancheRemovido.textContent) 
    valorDoLancheRemovido.innerHTML = valorDoLancheRemovidoConvertido - valorDoLancheRemovidoConvertido
    
    const elementoClicado = element.parentNode
    const tituloParaIndentificarIndex = element.parentNode.children[2].children[0].textContent
    const minhaChave = "pedido"
    const minhaString = localStorage.getItem(minhaChave)
    let meuObjeto = JSON.parse(minhaString)
    const indexDoItemRemovido = meuObjeto.findIndex(pedido => pedido.tiutloDoLanche === tituloParaIndentificarIndex)

    meuObjeto.splice(indexDoItemRemovido, 1)

    const minhaNovaString = JSON.stringify(meuObjeto)
    localStorage.setItem(minhaChave, minhaNovaString)

    elementoClicado.classList.add("excluirItem")
    altera()
    requisitoParaFrete()
  })
})

altera()

function altera() {
  const valorTotalDosPedidos = document.querySelector('.pedido__itens-titulo')
  const quantidadeTotalDosPedidos = document.querySelectorAll('.pedido__quantidade-campo')
  const valorPagoDosPedidos = document.querySelectorAll('.pedido__item')
  let array = []
  let conjutoDosValores = []

  quantidadeTotalDosPedidos.forEach((element) => {
    let soma = Number(element.value)
    array.push(soma)
  })
  total = array.reduce((acumulado, numero) => acumulado + numero, 0)

valorPagoDosPedidos.forEach((element) => {
  const valoresDosLanches = Number(element.children[2].children[3].children[0].textContent)
  conjutoDosValores.push(valoresDosLanches)
})
totalDosValores = conjutoDosValores.reduce((acumulado,numero)=> acumulado + numero, 0)

  valorTotalDosPedidos.innerHTML =
    `
    <h3 class="pedido__itens-titulo">Subtotal(${total} itens):R$ ${totalDosValores},00</h3>
    `
  return
}

requisitoParaFrete()

function requisitoParaFrete() {
  const alteraFrete = document.querySelector('[data-FreteGratis]')
  const nomeDaClassFrete = alteraFrete.className
  
  if(totalDosValores >= 80 || nomeDaClassFrete == "pedido__descricao Frete"){
   alteraFrete.classList.remove("Frete")
  }if(totalDosValores < 80) {
    alteraFrete.classList.add("Frete")
  }
  return
}