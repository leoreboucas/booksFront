import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './rotas/Home';
import Categoria from './componentes/Categoria';
import Favoritos from './componentes/Favoritos';
import Estante from './componentes/Estante';
import Perfil from './componentes/Perfil';
import Sacola from './componentes/Sacola';
import Cadastro from './componentes/Cadastro';
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';
import { CHAVE_FAVORITOS, lerFavoritos } from './componentes/BotaoFavorito';
import { catalogoLivros } from './componentes/Pesquisar/dadosPesquisa';

const categorias = [
  { id: 1, nome: 'Front-end' },
  { id: 2, nome: 'Back-end' },
  { id: 3, nome: 'Dados e IA' },
  { id: 4, nome: 'UX/UI' },
  { id: 5, nome: 'Arquitetura' },
];

function App() {
  const [favoritos, setFavoritos] = useState(lerFavoritos);
  const [modoEscuro, setModoEscuro] = useState(() => (
    localStorage.getItem('booksia-modo-escuro') === 'true'
  ));
  const [itensSacola, setItensSacola] = useState([]);
  const [livrosComprados, setLivrosComprados] = useState(() => (
    catalogoLivros.slice(0, 3).map((livro) => ({ ...livro, quantidade: 1 }))
  ));
  const quantidadeLivrosComprados = livrosComprados.reduce(
    (total, livro) => total + (livro.quantidade || 1),
    0
  );

  useEffect(() => {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
  }, [favoritos]);

  useEffect(() => {
    localStorage.setItem('booksia-modo-escuro', String(modoEscuro));
  }, [modoEscuro]);

  function alternarFavorito(livro) {
    setFavoritos((favoritosAtuais) => {
      const livroFavoritado = favoritosAtuais.some(({ id }) => id === livro.id);

      return livroFavoritado
        ? favoritosAtuais.filter(({ id }) => id !== livro.id)
        : [...favoritosAtuais, livro];
    });
  }

  function finalizarCompra(itens) {
    setLivrosComprados((livrosAtuais) => {
      return itens.reduce((lista, item) => {
        const itemExistente = lista.find((livro) => livro.id === item.id);

        if (itemExistente) {
          return lista.map((livro) => (
            livro.id === item.id
              ? { ...livro, quantidade: (livro.quantidade || 0) + item.quantidade }
              : livro
          ));
        }

        return [...lista, { ...item, quantidade: item.quantidade || 1 }];
      }, livrosAtuais);
    });
  }

  function alternarSacola(livro) {
    setItensSacola((itensAtuais) => {
      const itemExistente = itensAtuais.find((item) => item.id === livro.id);

      return itemExistente
        ? itensAtuais.filter((item) => item.id !== livro.id)
        : [...itensAtuais, { ...livro, quantidade: 1 }];
    });
  }

  function atualizarQuantidadeSacola(id, quantidade) {
    setItensSacola((itensAtuais) => itensAtuais.map((item) => (
      item.id === id ? { ...item, quantidade: Math.max(1, quantidade) } : item
    )));
  }

  function removerDaSacola(id) {
    setItensSacola((itensAtuais) => itensAtuais.filter((item) => item.id !== id));
  }

  function concluirCompra() {
    finalizarCompra(itensSacola);
    setItensSacola([]);
  }

  return (
    <div className={`App${modoEscuro ? ' tema-escuro' : ''}`}>
      <Header modoEscuro={modoEscuro} onAlternarTema={() => setModoEscuro((temaAtual) => !temaAtual)} />
      <Routes>
        <Route path='/' element={<Home favoritos={favoritos} alternarFavorito={alternarFavorito} itensSacola={itensSacola} onAdicionarSacola={alternarSacola} />} />
        <Route path='/categorias' element={<Categoria categorias={categorias} livros={catalogoLivros} favoritos={favoritos} alternarFavorito={alternarFavorito} itensSacola={itensSacola} onAdicionarSacola={alternarSacola} />} />
        <Route path='/favoritos' element={<Favoritos favoritos={favoritos} alternarFavorito={alternarFavorito} itensSacola={itensSacola} onAdicionarSacola={alternarSacola} />} />
        <Route path='/minha-estante' element={<Estante livrosComprados={livrosComprados} />} />
        <Route path='/perfil' element={<Perfil quantidadeFavoritos={favoritos.length} quantidadeLivrosComprados={quantidadeLivrosComprados} />} />
        <Route
          path='/cadastro'
          element={(
            <main className='pagina pagina-cadastro'>
              <Titulo>Cadastro</Titulo>
              <Subtitulo>Crie sua conta para continuar.</Subtitulo>
              <Cadastro />
            </main>
          )}
        />
        <Route path='/sacola' element={<Sacola itensSacola={itensSacola} onAdicionarSacola={alternarSacola} onAtualizarQuantidade={atualizarQuantidadeSacola} onRemoverDaSacola={removerDaSacola} onFinalizarCompra={concluirCompra} />} />
      </Routes>
    </div>
  );
}

export default App;
