import './estilo.css';
import { Link } from "react-router-dom"

const textoOpcoes = ['CATEGORIAS','FAVORITOS','ESTANTE'];

function OpcoesHeader (){
    return (

        <ul className='opcoes'>
          {textoOpcoes.map((texto) => (
            <li key={texto} className='opcao'>
              <Link to={`/${texto.toLowerCase().replace(/\s+/g, '-')}`}>
              <p>{texto}</p>
             </Link>
            </li>
          ) ) }
        </ul>

    )
}

export default OpcoesHeader