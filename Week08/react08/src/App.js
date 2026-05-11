import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import History from "./history";
import Detail from "./detail";
import { Context } from "./context";

function App() {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("Data");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(data));
  }, [data]);

  return (
    <div style={{ margin: "20px" }}>
      <Context.Provider value={{ data, setData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  )
}

export default App;