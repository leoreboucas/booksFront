import { catalogoLivros } from '../Pesquisar/dadosPesquisa';
import ListaLivros from '../ListaLivros';
import './estilo.css';
import Titulo from '../Titulo';

function UltimasAtualizacoes({ favoritos, alternarFavorito }) {
    const livrosAtualizados = [...catalogoLivros].reverse();

    return (
        <section className='ultimas-atualizacoes'>
            <Titulo>Últimas atualizações</Titulo>
            <div className='livros-atualizados'>
                <ListaLivros livros={livrosAtualizados} modo='atualizacao' favoritos={favoritos} onAlternarFavorito={alternarFavorito} />
            </div>
        </section>
    );
}

export default UltimasAtualizacoes;
