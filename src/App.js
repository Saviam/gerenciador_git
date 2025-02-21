

import React from "react";
import Routes1 from "./routes";

import GlobalStyle from './styles/global'

function App() {
  return (
    //foi criado um fragment (<>) para não usar div e atrapalhar o estilo
    <>
    <GlobalStyle/>
    <Routes1/>
   </>
  );
}

export default App;
