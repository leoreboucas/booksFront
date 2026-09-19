import { useState } from 'react';
import ListaLivros from '../ListaLivros';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

function embaralharLivros(livros) {
    return [...livros].sort(() => Math.random() - 0.5);
}

function Categoria({ categorias, livros, favoritos, alternarFavorito, itensSacola, onAdicionarSacola, titulo = 'Explore por categoria', subtitulo = 'Encontre livros organizados por assunto.' }) {
    const [livrosEmbaralhados] = useState(() => embaralharLivros(livros));

    return (
        <main className='pagina pagina-categorias'>
            <Titulo>{titulo}</Titulo>
            <Subtitulo>{subtitulo}</Subtitulo>
            <div className='categorias-livros'>
                {categorias.map((categoria) => {
                    const livrosDaCategoria = livrosEmbaralhados.filter(
                        (livro) => livro.categoria === categoria.nome
                    );

                    return (
                        <section className='grupo-categoria' key={categoria.id}>
                            <div className='cabecalho-categoria'>
                                <h2>{categoria.nome}</h2>
                                <span>{livrosDaCategoria.length} livros</span>
                            </div>
                            <ListaLivros livros={livrosDaCategoria} modo='categoria' favoritos={favoritos} itensSacola={itensSacola} onAlternarFavorito={alternarFavorito} onAdicionarSacola={onAdicionarSacola} />
                        </section>
                    );
                })}
            </div>
        </main>
    );
}
export default Categoria;