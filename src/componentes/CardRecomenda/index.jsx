import './estilo.css';

function CardRecomenda({
    titulo,
    subtitulo,
    src,
    textoEtiqueta = 'Recomendação da semana',
    textoBotao = 'Saiba mais',
    onSaibaMais,
}) {
    return (
        <article className='card-recomenda'>
            <div className='card-recomenda-conteudo'>
                <span>{textoEtiqueta}</span>
                <h2>{titulo}</h2>
                <p>{subtitulo}</p>
                <button type='button' onClick={onSaibaMais}>{textoBotao}</button>
            </div>
            <img src={src} alt={`Capa do livro ${titulo}`} />
        </article>
    );
}

export default CardRecomenda;