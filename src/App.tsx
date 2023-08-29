import "../app/globals.css";
import "polkadot-theme/global.css";
import "polkadot-theme/light.css";
import "polkadot-theme/dark.css";

import { Header } from "./components/ui/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import InContextMenu from "./components/pages/InContextMenu";
import WithButton from "./components/pages/WithButton";

function App() {
  return (
    <div className="h-screen flex flex-col items-center bg-background-default text-foreground-contrast">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<InContextMenu />} />
          <Route path="button" element={<WithButton />} />
          <Route path="*" element={<h1>Route does not exist</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
