import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`

function getAll() {

    return fetch(`${URL_CATEGORIES}`)
        .then(async (resp) => {

            if (resp.ok) {
                const resposta = await resp.json();
                return resposta;
            }

            throw new Error('Não foi possível pegar os dados');
        })


    return config.URL_BACKEND;
}

function getAllWithVideos() {

    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (resp) => {

            if (resp.ok) {
                const resposta = await resp.json();
                return resposta;
            }

            throw new Error('Não foi possível pegar os dados');
        })


    return config.URL_BACKEND;
}

export default {
    getAllWithVideos,
    getAll,
}