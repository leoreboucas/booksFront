import { useState } from 'react';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import './estilo.css';

const valoresIniciais = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
};

function Perfil() {
    const [dadosCadastro, setDadosCadastro] = useState(valoresIniciais);
    const [mensagem, setMensagem] = useState('');

    function atualizarCampo(evento) {
        const { name, value } = evento.target;
        setDadosCadastro((dadosAtuais) => ({ ...dadosAtuais, [name]: value }));
        setMensagem('');
    }

    function cadastrarUsuario(evento) {
        evento.preventDefault();

        if (dadosCadastro.senha !== dadosCadastro.confirmarSenha) {
            setMensagem('As senhas precisam ser iguais.');
            return;
        }

        setMensagem('Cadastro realizado com sucesso.');
        setDadosCadastro(valoresIniciais);
    }

    return (
        <main className='pagina pagina-perfil'>
            <Titulo>Perfil</Titulo>
            <Subtitulo>Gerencie suas preferências e sua conta.</Subtitulo>
            <form className='formulario-cadastro' onSubmit={cadastrarUsuario}>
                <div className='campo-formulario'>
                    <label htmlFor='nome'>Nome completo</label>
                    <input
                        id='nome'
                        name='nome'
                        type='text'
                        value={dadosCadastro.nome}
                        onChange={atualizarCampo}
                        autoComplete='name'
                        required
                    />
                </div>
                <div className='campo-formulario'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        value={dadosCadastro.email}
                        onChange={atualizarCampo}
                        autoComplete='email'
                        required
                    />
                </div>
                <div className='campos-senha'>
                    <div className='campo-formulario'>
                        <label htmlFor='senha'>Senha</label>
                        <input
                            id='senha'
                            name='senha'
                            type='password'
                            value={dadosCadastro.senha}
                            onChange={atualizarCampo}
                            autoComplete='new-password'
                            minLength='6'
                            required
                        />
                    </div>
                    <div className='campo-formulario'>
                        <label htmlFor='confirmarSenha'>Confirmar senha</label>
                        <input
                            id='confirmarSenha'
                            name='confirmarSenha'
                            type='password'
                            value={dadosCadastro.confirmarSenha}
                            onChange={atualizarCampo}
                            autoComplete='new-password'
                            minLength='6'
                            required
                        />
                    </div>
                </div>
                <button className='botao-cadastro' type='submit'>Criar cadastro</button>
                <p className='mensagem-cadastro' aria-live='polite'>{mensagem}</p>
            </form>
        </main>
    );
}

export default Perfil