import './App.scss';
import Header from './components/menu/Header.js'; /* Menu Completo!!! */
import './components/menu/menu-style.scss'; /* Folha de estilo do MENU */

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="card">
          <div className="content">
            <h2>Simples Landing Page</h2>
            <p>Minha primeira Landing Page utilizando ReactJs. Clique em Entrar e visualize! </p>
              <a href="https://landing0page1.netlify.app/">Entrar</a>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h2>Simples Landing Page</h2>
            <p>Minha primeira Landing Page utilizando ReactJs. Clique em Entrar e visualize! </p>
              <a href="https://landing0page1.netlify.app/">Entrar</a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
