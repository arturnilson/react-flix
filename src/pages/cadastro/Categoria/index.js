import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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

    useEffect(() => {
        const URL = 'http://localhost:8080/categorias'

        fetch(URL)
            .then(async (resp) => {
                const retorno = await resp.json()
                setCategorias([
                    ...retorno,
                ])
            })
    }, [])

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
                    type='textarea'
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

                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

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
