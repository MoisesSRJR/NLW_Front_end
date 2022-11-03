import * as Dialog from '@radix-ui/react-dialog';
import { BoxAnnouncement, GridGames, Logo } from '../../components';

// Função que exporta a screen Home
export function Home() {
  return (
    <div data-testid="home-page">
      <Logo/>
      <h1>Seu <span className='gradient'>duo</span> está aqui.</h1>
      <GridGames/>
      <BoxAnnouncement/>
    </div>
  );
}