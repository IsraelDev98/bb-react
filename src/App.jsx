import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

import Home from './components/content/Home';
import Contribuicao from './components/content/Contribuicao'
import Previdencia from './components/content/Previdencia'
import Utilidades from './components/content/Utilidades'


import Sidebar from './components/header/Sidebar'

function App() {
  return (
    //Router engloba todos os componentes por isso foi colocado aqui e as rotas são chamadas aqui também para não gerar conflitos ou serem limitas por outros contextos 
    <Router>
      <div className="App">
        <Sidebar />
      </div>
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path="/contribuicao" element={<Contribuicao />}/>
        <Route path="/previdencia" element={<Previdencia />}/>
        <Route path="/utilidades" element={<Utilidades />}/>
      </Routes>
    </Router>
  );
}

export default App;
