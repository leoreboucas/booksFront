import './estilo.css';
import { Link } from "react-router-dom"
import { SvgIcon } from '@mui/material';

function MenuIcon() {
  return (
    <SvgIcon>
      <path d='M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z' />
    </SvgIcon>
  );
}

const opcoes = [
  { texto: 'CATEGORIAS', caminho: '/categorias' },
  { texto: 'FAVORITOS', caminho: '/favoritos' },
  { texto: 'ESTANTE', caminho: '/minha-estante' },
];

const opcoesConta = [
  { texto: 'PERFIL', caminho: '/perfil' },
  { texto: 'SACOLA', caminho: '/sacola' },
];

function OpcoesHeader (){
    return (

        <>
          <ul className='opcoes'>
            {opcoes.map(({ texto, caminho }) => (
              <li key={texto} className='opcao'>
                <Link to={caminho}>
                  <p>{texto}</p>
                </Link>
              </li>
            ))}
          </ul>
          <details className='menu-header'>
            <summary className='menu-header-botao' aria-label='Abrir menu'>
              <MenuIcon />
            </summary>
            <nav className='dropdown-header' aria-label='Menu principal'>
              {[...opcoes].reverse().map(({ texto, caminho }) => (
                <Link key={texto} to={caminho}>{texto}</Link>
              ))}
              <span className='dropdown-header-divisor' aria-hidden='true' />
              {[...opcoesConta].reverse().map(({ texto, caminho }) => (
                <Link key={texto} to={caminho}>{texto}</Link>
              ))}
            </nav>
          </details>
        </>

    )
}

export default OpcoesHeader