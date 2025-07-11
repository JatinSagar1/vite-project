import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./Links";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rdata) => rdata.json())
      .then((data) => setdata(data))
      .catch((err) => console.log("Error: ", err));
  }, []);

  console.log("User Data: ", data);

  return (
    <>
      <BrowserRouter basename="/vite-project"> 
        <Links />
        <Routes>
          <Route path="/" element={<Home data={data} />}>
            <Route path="user/profile/:id" element={<Profiles data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
