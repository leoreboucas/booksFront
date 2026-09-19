import CardLivro from '../CardLivro';

function ListaLivros({ livros, modo = 'resultado', mostrarPreco = false, linkCapa = false, favoritos = [], onAlternarFavorito = () => {} }) {
  return (
    <>
      {livros.map((livro) => (
        <CardLivro
          key={livro.id}
          livro={livro}
          modo={modo}
          mostrarPreco={mostrarPreco}
          linkCapa={linkCapa}
          favoritado={favoritos.some(({ id }) => id === livro.id)}
          onAlternarFavorito={onAlternarFavorito}
        />
      ))}
    </>
  );
}

export default ListaLivros;