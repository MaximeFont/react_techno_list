import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useLocalStorage } from './hooks/useLocalStorage';

import Menu from './components/Menu';
import './css/app.css';
import Home from './pages/Home';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';

function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, [])

  useEffect(() => {
    console.log("use effect with []");
    setTechnos(storedTechnos);
  }, []);

  useEffect(() => {
    console.log("use effect [technos]");
    setStoredTechnos(technos);
  }, [technos]);

  function handleAddTechno(techno) {
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(technoid) {
    setTechnos(technos.filter((tech) => tech.technoid !== technoid));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>
    </>
  );
}

export default App;
