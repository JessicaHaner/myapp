import './App.css';
import { Header } from './components/Header.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Header brand="Geração Tech" description="Sede Bezerra de Menezes">
        <a href="#equipe">Equipe</a>
        <a href="#aprendizado">Aprendizado</a>
      </Header>

      <main className="container">
        <Home />
      </main>
    </>
  );
}

export default App;

