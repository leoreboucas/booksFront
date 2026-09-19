import BotaoFavorito from '../BotaoFavorito';
import capaFallback from '../../assets/livro3.png';
import './estilo.css';

function CardLivro({ livro, modo = 'resultado', mostrarPreco = false, mostrarQuantidade = false, linkCapa = false, mostrarFavorito = true, mostrarSacola = true, adicionadoSacola = false, favoritado = false, onAlternarFavorito = () => {}, onAdicionarSacola = () => {} }) {
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
      {mostrarQuantidade && (
        <span className='quantidade-livro'>Quantidade: {livro.quantidade || 1}</span>
      )}
      {(mostrarFavorito || mostrarSacola) && (
        <div className='card-livro-acoes'>
          {mostrarFavorito && (
            <BotaoFavorito livro={livro} favoritado={favoritado} onAlternar={onAlternarFavorito} />
          )}
          {mostrarSacola && (
            <button className={`botao-sacola ${adicionadoSacola ? 'adicionado' : ''}`} type='button' onClick={() => onAdicionarSacola(livro)}>
              {adicionadoSacola ? 'Adicionado à sacola' : 'Adicionar à sacola'}
            </button>
          )}
        </div>
      )}
    </article>
  );
}

export default CardLivro;