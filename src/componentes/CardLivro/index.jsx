import BotaoFavorito from '../BotaoFavorito';
import capaFallback from '../../assets/livro3.png';
import './estilo.css';

function CardLivro({ livro, modo = 'resultado', mostrarPreco = false, linkCapa = false, mostrarFavorito = true, favoritado = false, onAlternarFavorito = () => {} }) {
  function usarCapaFallback(evento) {
    evento.currentTarget.onerror = null;
    evento.currentTarget.src = capaFallback;
  }

  const imagem = (
    <img
      src={livro.capa}
      alt={`Capa do livro ${livro.titulo}`}
      onError={usarCapaFallback}
    />
  );

  return (
    <article className={`card-livro card-livro--${modo}`}>
      {linkCapa ? (
        <a href={livro.capa} target='_blank' rel='noreferrer' aria-label={`Abrir capa de ${livro.titulo}`}>
          {imagem}
        </a>
      ) : imagem}
      <h3>{livro.titulo}</h3>
      {mostrarPreco && <strong>{livro.preco || 'R$ 49,90'}</strong>}
      {mostrarFavorito && (
        <BotaoFavorito livro={livro} favoritado={favoritado} onAlternar={onAlternarFavorito} />
      )}
    </article>
  );
}

export default CardLivro;