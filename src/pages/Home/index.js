import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault'
import categoriasRepository from '../../repositories/categorias'

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {

    categoriasRepository.getAllWithVideos().
      then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos)
      }).
      catch((err) => {
        console.log(err.message);
      })

  }, [])

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Martin Daly was born in Australia but has spent his life searching for some of the best undiscovered surf spots in the most remote parts of the world.  He now runs a world renown surf charter business in Indonesia, the Indies Trader fleet. He takes us back to one of his earliest discoveries, the breaks off the coast of the Mentawais, and brings Felicity Palmateer, Mikala Jones, Marlon Gerber, Tatiana Weston-Webb, Anthony Walsh, and Kai Lenny along for the ride."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}

      {/* <Footer /> */}
    </PageDefault>
  );
}

export default Home;
