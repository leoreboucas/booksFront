import './estilo.css';
import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import { Link } from 'react-router-dom';

function IconesHeader() {
  return (
    <ul className='icones'>
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
