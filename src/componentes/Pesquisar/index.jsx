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
  titulo = 'Já sabe por onde começar?',
  subtitulo = 'Encontre seu produto.',
  mostrarResultadosIniciais = false,
  mostrarResultados = true,
  onResultadosChange,
}) {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  function filtrarLivros(texto) {
    const termo = texto.trim().toLocaleLowerCase();
    return termo
      ? livros.filter(({ titulo: tituloLivro }) => (
          tituloLivro.toLocaleLowerCase().includes(termo)
        ))
      : mostrarResultadosIniciais ? livros : [];
  }

  const livrosEncontrados = filtrarLivros(termoPesquisa);

  function atualizarPesquisa(evento) {
    const texto = evento.target.value;
    setTermoPesquisa(texto);
    onResultadosChange?.(filtrarLivros(texto));
  }

  return (
    <ContainerPesquisar>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <Input
        placeholder={placeholder}
        value={termoPesquisa}
        onChange={atualizarPesquisa}
      />
      {mostrarResultados && (
        <div>
          {termoPesquisa.trim() && livrosEncontrados.length === 0 ? (
            <p className='pesquisa-sem-resultados'>{mensagemSemResultados}</p>
          ) : (
            <ListaLivros livros={livrosEncontrados} favoritos={favoritos} onAlternarFavorito={alternarFavorito} />
          )}
        </div>
      )}
    </ContainerPesquisar>
  );
}

export default Pesquisar;

