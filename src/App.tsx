import AppRoutes from './routes';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div data-testid="app" style={{maxWidth: '1344px', margin: 'auto'}}>
      <AppRoutes/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
