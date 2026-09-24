import './estilo.css';
import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import { Link } from 'react-router-dom';
import { IconButton, SvgIcon, Tooltip } from '@mui/material';

function TemaIcon({ modoEscuro }) {
  return (
    <SvgIcon>
      <path d={modoEscuro
        ? 'M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36A7.2 7.2 0 0 1 12.36 16 7.2 7.2 0 0 1 5.2 8.84 7.2 7.2 0 0 1 12 3Z'
        : 'M12 4V2h-1v2h1Zm0 18v-2h-1v2h1ZM4 11H2v1h2v-1Zm18 0h-2v1h2v-1ZM5.64 5.64 4.22 4.22l-.71.71 1.42 1.42.71-.71Zm14.14 14.14-1.42-1.42-.71.71 1.42 1.42.71-.71ZM18.36 5.64l-.71-.71-1.42 1.42.71.71 1.42-1.42ZM4.93 19.07l.71.71 1.42-1.42-.71-.71-1.42 1.42ZM11 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z'} />
    </SvgIcon>
  );
}

function IconesHeader({ modoEscuro, onAlternarTema }) {
  return (
    <ul className='icones'>
      <li className='icone icone-tema'>
        <Tooltip title={modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}>
          <IconButton
            onClick={onAlternarTema}
            aria-label={modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className='botao-tema'
            size='small'
          >
            <TemaIcon modoEscuro={modoEscuro} />
          </IconButton>
        </Tooltip>
      </li>
      <li className='icone icone-perfil'>
        <details className='menu-perfil'>
          <summary className='icone-botao' title='Abrir opções de perfil'>
            <img src={perfil} alt='perfil' className='icone-img' />
          </summary>
          <nav className='dropdown-perfil' aria-label='Opções de perfil'>
            <Link to='/perfil'>Perfil</Link>
            <Link to='/cadastro'>Cadastro</Link>
          </nav>
        </details>
      </li>
      <li className='icone'>
        <Link to='/sacola' title='Abrir sacola'>
          <img src={sacola} alt='sacola' className='icone-img' />
        </Link>
      </li>
    </ul>
  );
}

export default IconesHeader;
