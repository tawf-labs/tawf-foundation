import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/pages/Landing';
import Manifesto from './components/pages/Manifesto';
import Zakat from './components/pages/Zakat';
import Qurban from './components/pages/Qurban';
import Research from './components/pages/Research';
import Glossary from './components/pages/Glossary';

// Subdomain to route mapping
const SUBDOMAIN_ROUTES: Record<string, string> = {
  'zakat': '/zakat',
  'qurban': '/qurban',
  'research': '/research',
};

// Get subdomain from hostname
function getSubdomain(): string | null {
  const hostname = window.location.hostname;
  const parts = hostname.split('.');

  // Check if we're on a subdomain
  // e.g., zakat.tawf.foundation -> ['zakat', 'tawf', 'foundation']
  // localhost:3000 -> ['localhost']
  if (parts.length >= 3 && parts[2] === 'foundation') {
    return parts[0];
  }

  return null;
}

function SubdomainRouter({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const subdomain = getSubdomain();

    // Only redirect if we're on a subdomain but not on the correct route
    if (subdomain && SUBDOMAIN_ROUTES[subdomain]) {
      const targetRoute = SUBDOMAIN_ROUTES[subdomain];
      if (location.pathname === '/' || location.pathname !== targetRoute) {
        navigate(targetRoute, { replace: true });
      }
    }
  }, [location, navigate]);

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/manifesto" element={<Manifesto />} />
      <Route path="/zakat" element={<Zakat />} />
      <Route path="/qurban" element={<Qurban />} />
      <Route path="/research" element={<Research />} />
      <Route path="/glossary" element={<Glossary />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SubdomainRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </SubdomainRouter>
    </BrowserRouter>
  );
}
