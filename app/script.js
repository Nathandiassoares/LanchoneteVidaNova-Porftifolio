const botaoPedirLanches = document.querySelectorAll('.cardapio__botao-pedir')
const conteudoPaginaInicial = document.querySelector('.conteudo')

let array1 = []

botaoPedirLanches.forEach((Element)=> {
  Element.addEventListener('click',(event)=>{

    if(true){
      array1.push(Element)
    }
  })
})



















// let lanchesPedidos = []
// let number = 0


// botaoPedirLanches.forEach((Element) => {
  
  //     Element.addEventListener('click', (event) => {
    
    //         const itemClicado = Element
    //         const lancheEscolhido = itemClicado.parentNode
    //         const TiutloDoLanche = lancheEscolhido.children[0].textContent
    //         let quantidade = lanchesPedidos.length + 1
    //         const valorDoLanche = lancheEscolhido.children[4].children[0].textContent
//         const imagemDolanche = lancheEscolhido.children[1].getAttribute("src")
//         lanchesPedidos.push(lancheEscolhido)
//         number++
//         //Botões para adicionar/tira quatidade
//         // const adicionarQuantidade = document.querySelector('.corpo').children[3].children[1].children[0].children[4]
//         const pegar = document.querySelector('.corpo')
        
//       // console.log(adicionarQuantidade)
//       console.log(pegar.children[1].children)
        
//         mudarPagina()
        
        
        
//         // conteudoPaginaInicial.innerHTML = `
//         // <main class="conteudo">
//         // <h2 class="conteudo__titulo">Compre já ou adicione mais opções</h2>
//         // <section class="cardapio__itens">
//         // <h3 class="cardapio__titulo">${TiutloDoLanche}</h1>
//         // <img class="cardapio__imagens" src="${imagemDolanche}" alt="">
//         // <label class="cardapio__descricao" for="iquantidade">Quantidade</label>
//         // <input class="conteudo__quantiade-Pedida" type="number" name="quantidade" id="iquantidade" value="${quantidade}"> 
//         // <span data-adicionar>+</span>
//         // <p class="cardapio__descricao">Valor total:${valorDoLanche}</p>
        
//         // </section>
//         // </main>
//         // `
        
        
       
        
        
//     })
// })
        

// botaoPedirLanches.forEach((Element) => {

//     Element.addEventListener('click', (event) => {
//         const pegar = document.querySelector('.titulo__teste')
//         console.log('ola')
        
//     })
// })
// function mudarPagina() {
//     conteudoPaginaInicial.innerHTML = `
//     <main class="conteudo">
//     <h2 class="titulo__Teste">Pedidos</h2>
//     <form action="">
//       <section>
//         <h3>lanche exemplo</h3>
//         <img src="" alt="">
//         <label class="" for="iquantidade">Quantidade</label>
//         <input class="" type="number" name="quantidade" id="iquantidade" value="">
//         <span data-adicionar>+</span>
//         <p class="">Valor total:</p>
//       </section>
//     </form>
//   </main>
//   `
// }
