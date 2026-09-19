import { Link } from 'react-router-dom';
import { catalogoLivros } from '../Pesquisar/dadosPesquisa';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

function Sacola({ itensSacola, onAdicionarSacola, onAtualizarQuantidade, onRemoverDaSacola, onFinalizarCompra }) {

  function finalizarCompra() {
    onFinalizarCompra(itensSacola);
  }

  function converterPreco(preco) {
    return Number(preco.replace('R$ ', '').replace('.', '').replace(',', '.'));
  }

  function formatarPreco(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const subtotal = itensSacola.reduce(
    (total, item) => total + converterPreco(item.preco) * item.quantidade,
    0
  );
  const livrosDisponiveis = catalogoLivros.filter(
    (livro) => !itensSacola.some((item) => item.id === livro.id)
  );

  return (
    <main className='sacola'>
      <Titulo>Minha sacola</Titulo>
      <Subtitulo cor='#dceaf1'>Revise seus livros antes de finalizar.</Subtitulo>

      <div className='sacola-layout'>
        <section className='sacola-itens' aria-label='Itens da sacola'>
          {itensSacola.length === 0 ? (
            <div className='sacola-vazia'>
              <h2>Sua sacola está vazia</h2>
              <p>Adicione um livro para começar sua seleção.</p>
              <Link to='/minha-estante'>Explorar livros</Link>
            </div>
          ) : (
            itensSacola.map((item) => (
              <article className='item-sacola' key={item.id}>
                <img src={item.capa} alt={`Capa do livro ${item.titulo}`} />
                <div className='item-sacola-detalhes'>
                  <h2>{item.titulo}</h2>
                  <span>{item.preco}</span>
                  <label>
                    Quantidade
                    <input
                      type='number'
                      min='1'
                      value={item.quantidade}
                      onChange={(evento) => onAtualizarQuantidade(item.id, Number(evento.target.value))}
                    />
                  </label>
                </div>
                <button type='button' className='remover-item' onClick={() => onRemoverDaSacola(item.id)}>
                  Remover
                </button>
              </article>
            ))
          )}
        </section>

        <aside className='resumo-sacola'>
          <h2>Resumo do pedido</h2>
          <div><span>Itens</span><strong>{itensSacola.length}</strong></div>
          <div><span>Subtotal</span><strong>{formatarPreco(subtotal)}</strong></div>
          <div className='resumo-total'><span>Total</span><strong>{formatarPreco(subtotal)}</strong></div>
          <button
            type='button'
            className='finalizar-compra'
            disabled={!itensSacola.length}
            onClick={finalizarCompra}
          >
            Finalizar compra
          </button>
        </aside>
      </div>

      {livrosDisponiveis.length > 0 && (
        <section className='adicionar-livros'>
          <h2>Adicionar mais livros</h2>
          <div className='opcoes-livros'>
            {livrosDisponiveis.slice(0, 6).map((livro) => (
              <button type='button' key={livro.id} onClick={() => onAdicionarSacola(livro)}>
                + {livro.titulo}
              </button>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Sacola;