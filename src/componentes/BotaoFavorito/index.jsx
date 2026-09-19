import './estilo.css';

const CHAVE_FAVORITOS = 'booksia-favoritos';

function lerFavoritos() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_FAVORITOS)) || [];
  } catch {
    return [];
  }
}

function BotaoFavorito({ livro, favoritado, onAlternar }) {

  return (
    <button
      className={`botao-favorito ${favoritado ? 'favoritado' : ''}`}
      type='button'
      onClick={() => onAlternar(livro)}
      aria-pressed={favoritado}
      title={favoritado ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      {favoritado ? 'Favoritado' : 'Favoritar'}
    </button>
  );
}

export { CHAVE_FAVORITOS, lerFavoritos };
export default BotaoFavorito;