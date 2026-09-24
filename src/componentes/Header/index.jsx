import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

function Header({ modoEscuro, onAlternarTema }) {
  return (
    <header className='App-header'>
      <Logo />
      <OpcoesHeader />
      <IconesHeader modoEscuro={modoEscuro} onAlternarTema={onAlternarTema} />
    </header>
  );
}

export default Header;
