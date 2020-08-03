import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        })
    }

    function handleChange(info) {

        const { getAttribute, value } = info.target;
        setValue(
            info.target.getAttribute('name'),
            value
        )
    }

    return (
        <PageDefault>
            <h1>Cadastro Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault()

                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)
            }}>

                <FormField
                    label='Nome da Categoria'
                    type='text'
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />


                <FormField
                    label='Descrição'
                    type='text'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label='Cor'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>Descrição
                    <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
                {/* <div>
                    <label>Cor
                    <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault >
    );
}

export default CadastroCategoria;
