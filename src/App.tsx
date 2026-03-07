import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/pages/Landing';
import Manifesto from './components/pages/Manifesto';
import Zakat from './components/pages/Zakat';
import Qurban from './components/pages/Qurban';
import Research from './components/pages/Research';
import Glossary from './components/pages/Glossary';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/zakat" element={<Zakat />} />
          <Route path="/qurban" element={<Qurban />} />
          <Route path="/research" element={<Research />} />
          <Route path="/glossary" element={<Glossary />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
