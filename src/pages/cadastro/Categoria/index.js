import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const URL = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : ''//url do heroku

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

                clearForm(valoresIniciais)
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
                {categorias.map((categoria) => {
                    return (
                        <li key={`${categoria.titulo}`}>
                            {categoria.titulo}
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
