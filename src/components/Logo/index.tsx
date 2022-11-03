import logoImg from '../../assets/Logo.png'
import { Container } from './styles'

// Função que exporta o componente Logo
export function Logo() {
  return (
    <div data-testid="home-page">
      <Container>
        <img src={logoImg} alt="logo"/>
      </Container>
      
    </div>
  );
}