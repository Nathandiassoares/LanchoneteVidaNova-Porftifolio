const filterElemente = document.querySelector('.conteudo input')
const boxList = document.querySelectorAll('.cardapio__lanches .cardapio__itens')

filterElemente.addEventListener('input',filterBox)

function filterBox() {
  if(filterElemente.value != '') {

    for(let box of boxList){

      let title = box.querySelector('h3')
                                        
      title = title.textContent.toLowerCase()

      let filtertext = filterElemente.value.toLowerCase()

      if(!title.includes(filtertext)) {
        box.style.display = "none"
      }else {
        box.style.display = "block"
      }
    }
  }else {
    for(let box of boxList) {
      box.style.display = "block"
    }
  }
}