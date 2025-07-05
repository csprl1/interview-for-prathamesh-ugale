import { useEffect, useState } from 'react';
import { Launch } from '../types/Launch';

export default function useLaunches() {
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches")
      .then(res => res.json())
      .then(data => {
        setLaunches(data);
        setLoading(false);
      });
  }, []);

  return { launches, loading };
}
 