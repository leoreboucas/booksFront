import './estilo.css';

function Subtitulo({ children, cor = '#dceaf1', tamanho, className = '', alinhamento = 'center' }) {
  return (
    <h3
      className={`subtitulo ${className}`.trim()}
      style={{ '--subtitulo-cor': cor, '--subtitulo-tamanho': tamanho, textAlign: alinhamento }}
    >
      {children}
    </h3>
  );
}

export default Subtitulo;
