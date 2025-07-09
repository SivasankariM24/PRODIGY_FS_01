import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMsg(res.data.message);
      } catch (err) {
        setMsg('Unauthorized');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard (Protected)</h2>
      <div>{msg}</div>
      <button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}>Logout</button>
    </div>
  );
}
