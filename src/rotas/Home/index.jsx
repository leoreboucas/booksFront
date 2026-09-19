import Pesquisar from '../../componentes/Pesquisar';
import UltimasAtualizacoes from '../../componentes/UltimasAtualizacoes';
import CardRecomenda from '../../componentes/CardRecomenda';
import { catalogoLivros } from '../../componentes/Pesquisar/dadosPesquisa';

function Home({ favoritos, alternarFavorito, itensSacola, onAdicionarSacola }) {
  return (
    <>
      <Pesquisar
        livros={catalogoLivros}
        favoritos={favoritos}
        alternarFavorito={alternarFavorito}
        itensSacola={itensSacola}
        onAdicionarSacola={onAdicionarSacola}
      />
      <CardRecomenda
        titulo={catalogoLivros[0].titulo}
        subtitulo='Aprenda novas ideias e evolua seus projetos com esta leitura.'
        src={catalogoLivros[0].capa}
      />
      <UltimasAtualizacoes favoritos={favoritos} alternarFavorito={alternarFavorito} itensSacola={itensSacola} onAdicionarSacola={onAdicionarSacola} />
    </>
  );
}

export default Home;