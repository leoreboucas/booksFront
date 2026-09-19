import { useState } from 'react';
import Input from '../Input';
import ContainerPesquisar from '../ContainerPesquisar';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import ListaLivros from '../ListaLivros';
import './estilo.css';

function Pesquisar({
  livros,
  favoritos,
  alternarFavorito,
  placeholder = 'Digite aqui o nome do livro',
  mensagemSemResultados = 'Nenhum livro encontrado.',
}) {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const livrosEncontrados = termoPesquisa.trim()
    ? livros.filter(({ titulo }) => (
        titulo.toLocaleLowerCase().includes(termoPesquisa.trim().toLocaleLowerCase())
      ))
    : [];

  return (
    <ContainerPesquisar>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu produto.</Subtitulo>
      <Input
        placeholder={placeholder}
        value={termoPesquisa}
        onChange={(evento) => setTermoPesquisa(evento.target.value)}
      />
      <div>
        {termoPesquisa.trim() && livrosEncontrados.length === 0 ? (
          <p className='pesquisa-sem-resultados'>{mensagemSemResultados}</p>
        ) : (
          <ListaLivros livros={livrosEncontrados} favoritos={favoritos} onAlternarFavorito={alternarFavorito} />
        )}
      </div>
    </ContainerPesquisar>
  );
}

export default Pesquisar;

