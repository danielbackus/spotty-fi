import React, { useEffect, useState } from "react";
import ky from "ky";
import { API_URL } from "./constants";
import SpotifyLogin from "./components/SpotifyLogin";

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
    <div>
      <SpotifyLogin />
      <p>The status of the API server is {apiStatus}.</p>
    </div>
  );
};

export default App;
