import "./App.css";
import "@twa-dev/sdk";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";
import Welcome from "./components/crypto/Welcome";


function App() {
  useEffect(() => {
    if (WebApp.isExpanded) {
      console.log(WebApp.CloudStorage);
    }
  }, [WebApp.isExpanded])
  return (
    <div onLoad={() => {
      WebApp.ready()
      WebApp.expand();
    }}>

      <Welcome language="fa" />
      <p> d
        {WebApp.initData.toString()}
        <hr/>
        {WebApp.initDataUnsafe.toString()}
      </p>
    </div>
  );
}

export default App;
