import gameImg from '../../assets/image-1.png';
import { Card } from '../Card';
import { Container } from './styles';

// Função que exporta o Grid
export function GridGames() {
  return (
    <div data-testid="home-page">
      <Container>
          <Card />
      </Container>
    </div>
  );
}
