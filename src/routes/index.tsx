import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
  Link,
} from 'react-router-dom';
import Exemplo from '../App';
import ExemploSWR from '../App2';
import Home from '../Home';

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exemplo" element={<Exemplo />} />
          <Route path="/exemplo-swr" element={<ExemploSWR />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
