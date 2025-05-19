import React from 'react';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import { BrowserRouter, Routes, Route } from "react-router";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
