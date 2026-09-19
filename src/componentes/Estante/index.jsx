import { catalogoLivros } from '../Pesquisar/dadosPesquisa';
import ListaLivros from '../ListaLivros';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

function Estante({ favoritos, alternarFavorito }) {
  return (
    <main className='estante'>
      <Titulo>Livros disponíveis</Titulo>
      <Subtitulo>Encontre sua próxima leitura.</Subtitulo>
      <div className='estante-livros'>
        <ListaLivros livros={catalogoLivros} modo='venda' mostrarPreco linkCapa favoritos={favoritos} onAlternarFavorito={alternarFavorito} />
      </div>
    </main>
  );
}

export default Estante;