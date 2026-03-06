import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import Manifesto from './components/Manifesto';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
