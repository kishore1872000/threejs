import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import CanvasModul from "./canvas";
import React from 'react';
function App() {

  return (
    <main className="app transition-all ease-in">
      <Home />
      <Customizer />
      <CanvasModul/>
    </main>

  )
}

export default App
