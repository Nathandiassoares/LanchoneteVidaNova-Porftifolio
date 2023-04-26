# Lanchonete Vida Nova <img src="https://lanchonete-vida-nova-porftifolio.vercel.app/src/assets/icon/icone.png" alt="Logo da lanchonete" width="50" height="50">


Projeto criado para testar meus conhecimentos e utilizar em meu portfólio. Foi um desafio, pois foi meu primeiro projeto utilizando JavaScript, onde tive que criar toda a estrutura do UI e do código.

## Destaques do Projeto

- Página de lanches: O cliente pode pesquisar seu lanche favorito em um campo de pesquisa simples, baseado no título como valor, onde é transformado para padrão e comparado com o que o usuário está digitando no campo de pesquisa. É então habilitado um `display = none` para esconder o que não corresponde com a pesquisa. (Arquivo `main.js`)

- Armazenamento de pedidos: O arquivo `script.js` também corresponde à página inicial, mas sua funcionalidade é gravar os dados coletados quando o cliente faz um pedido em um objeto. Antes de ser armazenado no Local Storage, é feita uma validação para evitar itens duplicados.

- Página de pedido: No arquivo `pedido.js`, são coletados os dados do Local Storage e passados para o método `map`, que com base nas características mostra o que o cliente escolheu. Para uma experiência completa do cliente, ele pode aumentar a quantidade, remover itens, fazer soma automática de valores, entre outras modificações. Todas as modificações são gravadas, então não há perda de dados ao recarregar a página.

- Design Responsivo: Todas as páginas estão com design responsivo, o que facilita para o usuário em diversas telas, especialmente em dispositivos móveis.

- Página de Redes Sociais:


<img src="https://lanchonete-vida-nova-porftifolio.vercel.app/src/assets/fundo/redes.svg" alt="SVG da logo rede sociais" width="200" height="200">

Design simples, mas com autoria própria do SVG das redes sociais, onde pego o ícone do Git e faço a interligação das redes. (Arquivo `redes-sociais.svg`)

## Futuro do Projeto

Com o cumprimento inicial do objetivo, o projeto ficará sem muitas alterações no momento, mas tem grande potencial para implementação de uma página de administração, onde seja possível remover ou adicionar novos lanches e outros itens sem precisar alterar o código por um programador. Também pode ser vinculada a funcionalidade de fechamento de pedido ao WhatsApp da lanchonete ou outro aplicativo, para que já possa ir com todas as especificações e alterações do cliente. Além disso, pode ser implementada uma API para calcular o valor da taxa de entrega, entre outras possíveis melhorias.

Muito obrigado!
