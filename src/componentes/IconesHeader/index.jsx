import './estilo.css';
import perfil from '../../assets/perfil.svg';
import sacola from '../../assets/sacola.svg';
import { Link } from 'react-router-dom';

const icones = [
  { src: perfil, alt: 'perfil' },
  { src: sacola, alt: 'sacola' }
];

function IconesHeader() {
  return (
    <ul className='icones'>
      {icones.map((icone) => (
        <li key={icone.alt} className='icone'>
          <Link to={icone.alt === 'sacola' ? '/sacola' : '/perfil'}>
            <img src={icone.src} alt={icone.alt} className='icone-img' />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
