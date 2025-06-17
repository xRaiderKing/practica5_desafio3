import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

import './App.css';

function Home() {
  return <h1>Bienvenidos a la Página de Inicio</h1>;
}

function About() {
  return <h2>Acerca de Nosotros, Jesus Yael Padrón Grimaldo</h2>;
}

function App() {
  return (
    <BrowserRouter basename="/practica5_desafio3">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
