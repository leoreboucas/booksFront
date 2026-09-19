import Pesquisar from '../../componentes/Pesquisar';
import UltimasAtualizacoes from '../../componentes/UltimasAtualizacoes';
import CardRecomenda from '../../componentes/CardRecomenda';
import { catalogoLivros } from '../../componentes/Pesquisar/dadosPesquisa';

function Home({ favoritos, alternarFavorito }) {
  return (
    <>
      <Pesquisar
        livros={catalogoLivros}
        favoritos={favoritos}
        alternarFavorito={alternarFavorito}
      />
      <CardRecomenda
        titulo={catalogoLivros[0].titulo}
        subtitulo='Aprenda novas ideias e evolua seus projetos com esta leitura.'
        src={catalogoLivros[0].capa}
      />
      <UltimasAtualizacoes favoritos={favoritos} alternarFavorito={alternarFavorito} />
    </>
  );
}

export default Home;