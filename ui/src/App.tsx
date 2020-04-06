import React, { useEffect, useState } from "react";
import ky from "ky";
import { API_URL } from "./constants";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [apiStatus, setApiStatus] = useState("unknown");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const getApiStatus = async () => {
      try {
        const response = await ky.get(`${API_URL}/status`, {
          signal,
        });
        setApiStatus(response.statusText);
      } catch (err) {
        setApiStatus("bad");
      }
    };
    getApiStatus();
    return () => controller.abort();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>The status of the API server is {apiStatus}.</p>
      </header>
    </div>
  );
};

export default App;
