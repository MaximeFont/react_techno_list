import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useLocalStorage } from './hooks/useLocalStorage';

import Menu from './components/Menu';
import './css/app.css';
import Home from './pages/Home';
import TechnoAdd from './pages/TechnoAdd';
import TechnoList from './pages/TechnoList';
import PopUp from './components/PopUp';

function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    setTechnos(storedTechnos);
  }, []);

  useEffect(() => {
    setStoredTechnos(technos);
  }, [technos]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);
    return (() => clearTimeout(timer));
  }, [showPopUp])

  function handleShowPopUp() {
    setShowPopUp(true);
  }

  function handleAddTechno(techno) {
    if (showPopUp) {
      return;
    }

    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(technoid) {
    setTechnos(technos.filter((tech) => tech.technoid !== technoid));
  }

  let popup = null;
  if (showPopUp) {
    popup = <PopUp />;
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} handleShowPopUp={handleShowPopUp} popup={popup} />} />
        <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
      </Routes>
    </>
  );
}

export default App;
