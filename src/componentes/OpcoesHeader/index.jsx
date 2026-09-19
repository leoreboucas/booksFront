import './estilo.css';
import { Link } from "react-router-dom"

const opcoes = [
  { texto: 'CATEGORIAS', caminho: '/categorias' },
  { texto: 'FAVORITOS', caminho: '/favoritos' },
  { texto: 'ESTANTE', caminho: '/minha-estante' },
];

function OpcoesHeader (){
    return (

        <ul className='opcoes'>
          {opcoes.map(({ texto, caminho }) => (
            <li key={texto} className='opcao'>
              <Link to={caminho}>
              <p>{texto}</p>
             </Link>
            </li>
          ) ) }
        </ul>

    )
}

export default OpcoesHeader