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

  useEffect(() => {
    localStorage.setItem(CHAVE_FAVORITOS, JSON.stringify(favoritos));
  }, [favoritos]);

  function alternarFavorito(livro) {
    setFavoritos((favoritosAtuais) => {
      const livroFavoritado = favoritosAtuais.some(({ id }) => id === livro.id);

      return livroFavoritado
        ? favoritosAtuais.filter(({ id }) => id !== livro.id)
        : [...favoritosAtuais, livro];
    });
  }

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home favoritos={favoritos} alternarFavorito={alternarFavorito} />} />
        <Route path='/categorias' element={<Categoria categorias={categorias} livros={catalogoLivros} favoritos={favoritos} alternarFavorito={alternarFavorito} />} />
        <Route path='/favoritos' element={<Favoritos favoritos={favoritos} alternarFavorito={alternarFavorito} />} />
        <Route path='/minha-estante' element={<Estante favoritos={favoritos} alternarFavorito={alternarFavorito} />} />
        <Route path='/perfil' element={<Perfil />} />
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
        <Route path='/sacola' element={<Sacola />} />
      </Routes>
    </div>
  );
}

export default App;
