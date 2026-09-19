import ListaLivros from '../ListaLivros';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

function Favoritos({ favoritos, alternarFavorito }) {
    return (
        <main className='pagina pagina-favoritos'>
            <Titulo>Favoritos</Titulo>
            <Subtitulo>Livros que você guardou para ler depois.</Subtitulo>
            {favoritos.length === 0 ? (
                <p>Você ainda não favoritou nenhum livro.</p>
            ) : (
                <ListaLivros livros={favoritos} favoritos={favoritos} onAlternarFavorito={alternarFavorito} />
            )}
        </main>
    );
}

export default Favoritos;