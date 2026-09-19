import { useEffect, useState } from 'react';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import Pesquisar from '../Pesquisar';
import ListaLivros from '../ListaLivros';
import './estilo.css';

function Favoritos({ favoritos, alternarFavorito }) {
    const [livrosExibidos, setLivrosExibidos] = useState(favoritos);
    const [buscaKey, setBuscaKey] = useState(0);

    useEffect(() => {
        setLivrosExibidos(favoritos);
    }, [favoritos]);

    return (
        <main className='pagina pagina-favoritos'>
            <Titulo>Favoritos</Titulo>
            <Subtitulo>Livros que você guardou para ler depois.</Subtitulo>
            <Pesquisar
                key={buscaKey}
                livros={favoritos}
                favoritos={favoritos}
                alternarFavorito={alternarFavorito}
                placeholder='Buscar nos favoritos'
                titulo='Buscar livros'
                subtitulo='Encontre um livro entre seus favoritos.'
                mostrarResultados={false}
                onResultadosChange={setLivrosExibidos}
            />
            <button
                className='botao-listar-todos'
                type='button'
                onClick={() => {
                    setLivrosExibidos(favoritos);
                    setBuscaKey((chaveAtual) => chaveAtual + 1);
                }}
            >
                Listar todos
            </button>
            <section className='lista-favoritos' aria-label='Livros favoritados'>
                {livrosExibidos.length === 0 ? (
                    <p>Nenhum favorito corresponde à busca.</p>
                ) : (
                    <ListaLivros
                        livros={livrosExibidos}
                        favoritos={favoritos}
                        onAlternarFavorito={alternarFavorito}
                    />
                )}
            </section>
        </main>
    );
}

export default Favoritos;