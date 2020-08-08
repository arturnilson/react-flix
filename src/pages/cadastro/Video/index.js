import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

function CadastroVideo() {

    const history = useHistory();
    const [categorias, setCategorias] = useState([]);

    const { handleChange, values } = useForm({
        titulo: 'video padrao',
        url: 'https://www.youtube.com/watch?v=zzHouyi6t4g',
        categoria: 'Música'
    })

    useEffect(() => {
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) => {
                setCategorias(categoriasFromServer);
            })
    }, [])

    return (
        <PageDefault>
            <h1>Cadastro Video</h1>


            <form onSubmit={(event) => {
                event.preventDefault();
                // alert('Video Cadastrado com sucesso!!!1!');

                // const categoriaEscolhida = categorias.find((categoria) => {
                //     return categoria.titulo === values.categoria;
                // });

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: 1,
                    // categoriaId: categoriaEscolhida.id,
                })
                    .then(() => {
                        console.log('Cadastrou com sucesso!');
                        history.push('/');
                    });
            }}>

                <FormField
                    label='Título do Vídeo'
                    name='titulo'
                    value={values.titulo}
                    onChange={handleChange}
                />

                <FormField
                    label='URL'
                    name='url'
                    value={values.url}
                    onChange={handleChange}
                />

                <FormField
                    label='Categoria'
                    name='titulo'
                    value={values.categoria}
                    onChange={handleChange}
                />



                <Button type="Submit">
                    Cadastrar
                </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault >
    );
}

export default CadastroVideo;
