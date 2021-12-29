import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Home } from '../pages/Home';
import { Error } from '../pages/Error';
import { Cases } from '../pages/Cases';
import { Vaccines } from '../pages/Vaccines';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* I'll be back
        <Route exact path='/' element={<Home/>} /> */}
        <Route exact path='/' element={<Cases/>} />
        <Route exact path='/vaccines' element={<Vaccines/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
