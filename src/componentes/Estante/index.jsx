import ListaLivros from '../ListaLivros';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

function Estante({ livrosComprados }) {
  return (
    <main className='estante'>
      <Titulo>Minha estante</Titulo>
      <Subtitulo>Livros comprados para continuar sua leitura.</Subtitulo>
      <div className='estante-livros'>
        <ListaLivros livros={livrosComprados} modo='venda' linkCapa mostrarFavorito={false} />
      </div>
    </main>
  );
}

export default Estante;