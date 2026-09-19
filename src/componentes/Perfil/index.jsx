import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

function Perfil({
    usuario = {
        nome: 'Visitante BooksIA',
        email: 'Não informado',
        status: 'Perfil em configuração',
    },
    quantidadeFavoritos = 0,
}) {
    return (
        <main className='pagina pagina-perfil'>
            <Titulo>Perfil</Titulo>
            <Subtitulo>Gerencie suas preferências e sua conta.</Subtitulo>
            <section className='resumo-perfil' aria-labelledby='titulo-resumo-perfil'>
                <div className='resumo-perfil-cabecalho'>
                    <div className='avatar-perfil' aria-hidden='true'>
                        {usuario.nome.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h2 id='titulo-resumo-perfil'>Resumo da conta</h2>
                        <p>Confira seus dados principais.</p>
                    </div>
                </div>
                <dl className='dados-perfil'>
                    <div>
                        <dt>Nome</dt>
                        <dd>{usuario.nome}</dd>
                    </div>
                    <div>
                        <dt>E-mail</dt>
                        <dd>{usuario.email}</dd>
                    </div>
                    <div>
                        <dt>Status</dt>
                        <dd>{usuario.status}</dd>
                    </div>
                    <div>
                        <dt>Favoritos</dt>
                        <dd>{quantidadeFavoritos} livros</dd>
                    </div>
                </dl>
            </section>
        </main>
    );
}

export default Perfil