# Plano de Implementação

## Objetivo

Refatorar os componentes para serem reutilizáveis por meio de `props` e organizar o gerenciamento de estado com `useState`, mantendo a aplicação BooksIA funcionando.

## Fase 1: Mapear componentes reutilizáveis

Identificar os componentes que devem receber `props`:

- `Titulo`: texto, cor, tamanho e alinhamento.
- `Subtitulo`: texto e estilo.
- `Input`: valor, placeholder, evento `onChange` e tipo.
- `CardRecomenda`: `titulo`, `subtitulo`, `src` e ação do botão.
- Cards de livros: `livro`, `onFavoritar` e `favoritado`.
- `BotaoFavorito`: estado e callback externo.
- `ContainerPesquisar`: conteúdo e estilos opcionais.

Objetivo: remover textos e comportamentos fixos de dentro dos componentes.

### Teste da Fase 1

1. Executar `npm run build`.
2. Abrir a Home e confirmar que pesquisa, títulos e subtítulos continuam visíveis.
3. Confirmar que o `CardRecomenda` renderiza com textos, imagem e botão recebidos por props.
4. Alterar uma prop visual e verificar que somente o componente correspondente é afetado.

## Fase 2: Padronizar os dados dos livros

Manter uma estrutura única para os livros no catálogo:

```js
{
  id: 1,
  titulo: 'React com JavaScript',
  capa: capaLivroReact,
  preco: 'R$ 49,90',
  descricao: 'Aprenda React usando JavaScript.'
}
```

Criar componentes reutilizáveis para livros:

- `CardLivro`
- `ListaLivros`
- `CardRecomenda`

Pesquisa, estante, favoritos e últimas atualizações devem reutilizar a mesma estrutura.

### Teste da Fase 2

1. Executar `npm run build`.
2. Conferir se todos os livros possuem `id`, `titulo`, `capa`, `preco` e `descricao`.
3. Pesquisar um livro e confirmar que o resultado usa o `CardLivro`.
4. Abrir a estante e confirmar que os cards usam a mesma estrutura visual.
5. Abrir favoritos e últimas atualizações e verificar que os livros continuam sendo exibidos.

## Fase 3: Centralizar o estado de favoritos

Mover o controle de favoritos para um componente superior, como `App` ou um hook dedicado:

```js
const [favoritos, setFavoritos] = useState([]);
```

Criar funções para:

- Adicionar favorito.
- Remover favorito.
- Alternar favorito.
- Verificar se um livro está favoritado.

Passar essas funções por `props` para os componentes necessários.

### Teste da Fase 3

1. Favoritar um livro na pesquisa.
2. Abrir a página de favoritos e confirmar que o livro aparece.
3. Remover o mesmo livro pela página de favoritos.
4. Confirmar que o livro desaparece da lista sem atualizar manualmente a página.
5. Favoritar um livro em últimas atualizações e verificar o mesmo estado em outras telas.

## Fase 4: Criar um hook de favoritos

> Esta fase não será implementada neste projeto, conforme decisão do escopo. A lógica permanecerá baseada em `useState` e props.

Extrair a lógica de favoritos para um hook:

```js
useFavoritos()
```

Responsabilidades:

- Ler favoritos do `localStorage`.
- Salvar alterações.
- Adicionar e remover livros.
- Verificar o estado de um livro.

Exemplo de uso:

```js
const {
  favoritos,
  alternarFavorito,
  estaFavoritado
} = useFavoritos();
```

### Teste da Fase 4

1. Confirmar que nenhum arquivo de hook de favoritos foi criado.
2. Executar `npm run build` para garantir que a aplicação continua sem dependência dessa etapa.
3. Validar que o estado de favoritos segue funcionando pela implementação da Fase 3.

## Fase 5: Refatorar a pesquisa

O componente `Pesquisar` deverá receber o catálogo por `props`:

```jsx
<Pesquisar livros={catalogoLivros} />
```

O estado interno deverá controlar apenas o termo digitado:

```js
const [termo, setTermo] = useState('');
```

Props previstas:

- `placeholder`
- `mensagemSemResultados`
- `onFavoritar`
- `favoritos`

### Teste da Fase 5

1. Abrir a Home.
2. Digitar parte do título de um livro.
3. Confirmar que os resultados são filtrados enquanto o usuário digita.
4. Apagar o texto e verificar que os resultados desaparecem.
5. Pesquisar um termo inexistente e confirmar a mensagem de nenhum resultado.

## Fase 6: Refatorar os componentes visuais

Transformar os componentes em componentes genéricos:

```jsx
<Titulo cor="#002f52">
  Últimas atualizações
</Titulo>
```

```jsx
<CardRecomenda
  titulo={livro.titulo}
  subtitulo={livro.descricao}
  src={livro.capa}
  onSaibaMais={() => abrirLivro(livro)}
/>
```

O botão `Saiba mais` deverá receber sua ação por `props`.

### Teste da Fase 6

1. Renderizar o `CardRecomenda` com dados diferentes.
2. Confirmar que título, subtítulo e imagem são atualizados.
3. Clicar em `Saiba mais` e verificar se o callback correto é executado.
4. Conferir a aparência do card em desktop e mobile.

## Fase 7: Integrar as páginas

Atualizar as páginas e componentes:

- `Home`
- `Estante`
- `Favoritos`
- `UltimasAtualizacoes`
- `Pesquisar`

A Home ficará responsável pela composição. Os componentes cuidarão da apresentação e das interações recebidas por `props`.

### Teste da Fase 7

1. Navegar entre Home, categorias, favoritos, estante, perfil e sacola.
2. Confirmar que cada rota renderiza sua tela correta.
3. Verificar que o cabeçalho permanece disponível em todas as rotas.
4. Testar as ações específicas de cada tela sem recarregar a aplicação.

## Fase 8: Validar a aplicação

Validar progressivamente:

1. Build da aplicação.
2. Pesquisa com resultados e sem resultados.
3. Favoritar e desfavoritar livros.
4. Persistência dos favoritos após recarregar a página.
5. Renderização das últimas atualizações.
6. Responsividade da estante e dos cards.
7. Tratamento de props obrigatórias ausentes.

### Teste da Fase 8

1. Executar `npm run build`.
2. Executar `npm run lint`, se disponível e configurado no ambiente.
3. Repetir o roteiro de testes de cada tela abaixo.
4. Corrigir regressões antes de considerar a fase concluída.

A implementação deve ser feita em pequenas etapas, validando cada fase antes de avançar para a próxima.

## Rotina de testes por tela

### Home

1. Confirmar a presença do cabeçalho, pesquisa, card recomendado e últimas atualizações.
2. Pesquisar por `React` e verificar os resultados.
3. Favoritar um resultado e confirmar o estado visual do botão.
4. Clicar no logo e confirmar o retorno para `/`.

### Categorias

1. Acessar `/categorias` pelo menu.
2. Confirmar que a tela é carregada sem erro.
3. Verificar se o cabeçalho e os links continuam disponíveis.

### Favoritos

1. Favoritar um livro na Home.
2. Acessar `/favoritos`.
3. Confirmar a presença do livro favoritado.
4. Remover o favorito e confirmar a atualização da lista.
5. Recarregar a página e verificar o estado persistido.

### Minha Estante

1. Acessar `/minha-estante`.
2. Confirmar a exibição dos livros disponíveis, preços e capas.
3. Clicar em uma capa e verificar a abertura do link da imagem.
4. Favoritar um livro e conferir a alteração visual.
5. Testar a grade em uma janela desktop e em uma janela mobile.

### Perfil

1. Clicar no ícone de perfil do cabeçalho.
2. Confirmar a navegação para `/perfil`.
3. Verificar se a tela é exibida sem erro de importação ou rota.

### Sacola

1. Acessar `/sacola` pelo ícone do cabeçalho.
2. Confirmar que os livros iniciais e o resumo são exibidos.
3. Adicionar outro livro.
4. Alterar a quantidade de um item.
5. Remover um item e conferir o recálculo do total.
6. Remover todos os itens e confirmar o estado de sacola vazia.

### Teste final integrado

1. Executar `npm run build`.
2. Navegar por todas as telas sem atualizar o navegador.
3. Testar favoritos, pesquisa e sacola na mesma sessão.
4. Recarregar a página de favoritos e confirmar a persistência dos dados.
