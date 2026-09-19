import { catalogoLivros } from '../Pesquisar/dadosPesquisa';
import ListaLivros from '../ListaLivros';
import './estilo.css';
import Titulo from '../Titulo';

function UltimasAtualizacoes({ favoritos, alternarFavorito, itensSacola, onAdicionarSacola }) {
    const livrosAtualizados = [...catalogoLivros].reverse().slice(0, 3);

    return (
        <section className='ultimas-atualizacoes'>
            <Titulo>Últimas atualizações</Titulo>
            <div className='livros-atualizados'>
                <ListaLivros livros={livrosAtualizados} modo='atualizacao' favoritos={favoritos} itensSacola={itensSacola} onAlternarFavorito={alternarFavorito} onAdicionarSacola={onAdicionarSacola} />
            </div>
        </section>
    );
}

export default UltimasAtualizacoes;
