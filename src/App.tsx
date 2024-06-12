import "./App.css";
import styled from "styled-components";

import "@twa-dev/sdk";
import WebApp from "@twa-dev/sdk";
import { useEffect, useState } from "react";


function App() {
  useEffect(()=>{
    if(WebApp.isExpanded){
    console.log(WebApp.CloudStorage);
    }
  },[WebApp.isExpanded])
  return (
    <div onLoad={() => {
      WebApp.ready()
      WebApp.expand();
    }}>
     
      TEST UPDATE WORKING ? 
    </div>
  );
}

export default App;
