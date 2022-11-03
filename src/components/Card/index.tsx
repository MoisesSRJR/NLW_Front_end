
import { useEffect, useState } from 'react';
import { Cards, Container } from './styles'

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

// Função que exporta o componente Card
export function Card() {

const [games, setGames] = useState <Game[]> ([]) 

useEffect (()=> {
  fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
        setGames(data)
    })
})

  return (
    <div data-testid="home-page">
      <Container>
        {games.map((cards) => (
          <Cards key={cards.id}>
              <img src={cards.bannerUrl} alt='' />
              <div className='infos'>
                <div className='containerTitle'>
                  <span id='title'>{cards.title}</span>
                  <span id='subTitle'>{cards._count.ads} anúncio(s)</span>
                </div>
              </div>
          </Cards>
        ))}
      </Container>
    </div>
  );
}