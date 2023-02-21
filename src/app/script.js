const botaoPedirLanches = document.querySelectorAll('.cardapio__botao-pedir')
const pedido = JSON.parse(localStorage.getItem("pedido")) || [] 

botaoPedirLanches.forEach((Element)=> {
  Element.addEventListener('click',(event)=> {
    const lancheEscolhido = Element
    const dadosDoLanche = lancheEscolhido.parentNode
    
    
    const tiutloDoLanche = dadosDoLanche.children[0].textContent
    const imagemDoLanche = dadosDoLanche.children[1].getAttribute("src")
    const descricaoDoLanche = dadosDoLanche.children[2].textContent
    const valorDoLanche = dadosDoLanche.children[4].children[0].textContent
    
    const caracteristicasDoPedido = {
      "tiutloDoLanche": tiutloDoLanche,
      "imagemDoLanche": imagemDoLanche,
      "descricaoDoLanche":descricaoDoLanche,
      "valorDoLanche":valorDoLanche
    }
    
    pedido.push(caracteristicasDoPedido)
    localStorage.setItem("pedido", JSON.stringify(pedido))
  })
})


