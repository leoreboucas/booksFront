import './estilo.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Logo() {
    return (
        <div className='logo'>
            <Link to='/'>
                <img
                    src={logo}
                    alt='logomarca'
                    className='logo-img'
                ></img>
                <p><strong>Djan</strong>Store</p>
            </Link>
        </div>
    )
}

export default Logo