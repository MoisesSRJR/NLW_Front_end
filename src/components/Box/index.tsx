import { CgSearchLoading } from 'react-icons/cg';
import { Container } from './styles'

// Função que exporta o componente Box
export function BoxAnnouncement() {

  return (
    <div data-testid="home-page">
      <Container>
        <div className='titleContainer'>
          <span id='title'>Não encontrou seu duo?</span>
          <span id='subTitle'>Publique um anúncio para encontrar novos players!</span>
        </div>
        <div className='buttonContainer'>
          <button id='button' type='submit'><CgSearchLoading size={25}/> <p>Publicar anúncio</p></button>
        </div>
      </Container>
    </div>
  );
}