const botaoPedirLanches = document.querySelectorAll('.cardapio__botao-pedir')
const itens = JSON.parse(localStorage.getItem("itens")) || [] 

botaoPedirLanches.forEach((Element)=> {
  Element.addEventListener('click',(event)=> {
    const lancheEscolhido = Element
    const dadosDoLanche = lancheEscolhido.parentNode
    
    
    const tiutloDoLanche = dadosDoLanche.children[0].textContent
    const imagemDoLanche = dadosDoLanche.children[1].getAttribute("src")
    const descricaoDoLanche = dadosDoLanche.children[2].textContent
    const valorDoLanche = dadosDoLanche.children[4].children[0].textContent
    
    let lanchePedido = [tiutloDoLanche,imagemDoLanche,descricaoDoLanche,valorDoLanche]
    
    const itemAtual = {
      "tiutloDoLanche": tiutloDoLanche,
      "imagemDoLanche": imagemDoLanche,
      "descricaoDoLanche":descricaoDoLanche,
      "valorDoLanche":valorDoLanche
    }
    
    itens.push(itemAtual)
   
    
    
    localStorage.setItem("itens", JSON.stringify(itens))
    let lanche = 'lanchePedido'
    localStorage.setItem(lanche, JSON.stringify(lanchePedido))

   
  
  })
})


