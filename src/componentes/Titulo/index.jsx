import './estilo.css';

function Titulo({ children, cor = '#fff', tamanho, alinhamento = 'center', className = '' }) {
  return (
    <h2
      className={`titulo ${className}`.trim()}
      style={{ '--titulo-cor': cor, '--titulo-tamanho': tamanho, textAlign: alinhamento }}
    >
      {children}
    </h2>
  );
}

export default Titulo;
