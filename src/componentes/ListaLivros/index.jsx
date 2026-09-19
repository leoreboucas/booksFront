import CardLivro from '../CardLivro';

function ListaLivros({ livros, modo = 'resultado', mostrarPreco = false, mostrarQuantidade = false, linkCapa = false, mostrarFavorito = true, mostrarSacola = true, favoritos = [], itensSacola = [], onAlternarFavorito = () => {}, onAdicionarSacola = () => {} }) {
  return (
    <>
      {livros.map((livro) => (
        <CardLivro
          key={livro.id}
          livro={livro}
          modo={modo}
          mostrarPreco={mostrarPreco}
          mostrarQuantidade={mostrarQuantidade}
          linkCapa={linkCapa}
          mostrarFavorito={mostrarFavorito}
          mostrarSacola={mostrarSacola}
          adicionadoSacola={itensSacola.some(({ id }) => id === livro.id)}
          favoritado={favoritos.some(({ id }) => id === livro.id)}
          onAlternarFavorito={onAlternarFavorito}
          onAdicionarSacola={onAdicionarSacola}
        />
      ))}
    </>
  );
}

export default ListaLivros;