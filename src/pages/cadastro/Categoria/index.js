import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [nomeCategoria, setNomeCategoria] = useState('Filmes');

    return (
        <PageDefault>
            <h1>Cadastro Categoria: {nomeCategoria}</h1>

            <form>
                <label>Nome da Categoria</label>

                <input
                    type="text"
                    value={nomeCategoria}
                    onChange={function funcaoOnChange(info) {
                        console.log('[nomeCategoria]', nomeCategoria);
                        console.log('[info]', info);
                    }}
                />
                <button>Cadastrar</button>
            </form>


            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
