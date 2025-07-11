import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    if (dark) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [dark]);

  return (
    <nav style={{ padding: "15px 25px" }}>
      <Link to="/" style={{ marginRight: "20px", fontWeight: "bold" }}>Home</Link>
      <button onClick={toggleDark} style={{
        padding: "6px 12px",
        background: "transparent",
        border: "1px solid gray",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Links;
