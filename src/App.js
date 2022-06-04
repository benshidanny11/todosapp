import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import TodosContainer from './components/TodosContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import SinglePage from './pages/SinglePage';

const App = () => (
  <div className="d-flex">
    <Navbar />
    <Routes>
      <Route exact="true" path="/" element={<TodosContainer />} />
      <Route exact="true" path="/about" element={<About />} />
      <Route exact="true" path="/aboutauthor" element={<SinglePage />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </div>

);

export default App;
