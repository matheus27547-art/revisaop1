import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import NewPage from './new/NewPage';
import AllPage from './all/AllPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/new">Novo Produto</Link>
          <Link to="/all">Todos os Produtos</Link>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/new" replace />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/all" element={<AllPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;