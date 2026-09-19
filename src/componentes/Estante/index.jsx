import ListaLivros from '../ListaLivros';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

function Estante({ livrosComprados }) {
  const quantidadeTotal = livrosComprados.reduce(
    (total, livro) => total + (livro.quantidade || 1),
    0
  );

  return (
    <main className='estante'>
      <Titulo>Minha estante</Titulo>
      <Subtitulo>Livros comprados para continuar sua leitura.</Subtitulo>
      <p className='estante-contagem'>{quantidadeTotal} livros comprados</p>
      <div className='estante-livros'>
        <ListaLivros livros={livrosComprados} modo='venda' mostrarQuantidade linkCapa mostrarFavorito={false} mostrarSacola={false} />
      </div>
    </main>
  );
}

export default Estante;