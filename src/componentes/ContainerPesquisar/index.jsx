import './estilo.css';

function ContainerPesquisar({ children, className = '', ...props }) {
  return (
    <section className={`container-pesquisar ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}

export default ContainerPesquisar;
