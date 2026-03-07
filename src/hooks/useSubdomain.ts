import { useState, useEffect } from 'react';

export function useSubdomain() {
  const [subdomain, setSubdomain] = useState<string | null>(null);

  useEffect(() => {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length >= 3 && parts[2] === 'foundation') {
      setSubdomain(parts[0]);
    } else {
      setSubdomain(null);
    }
  }, []);

  return { subdomain, isSubdomain: subdomain !== null };
}
