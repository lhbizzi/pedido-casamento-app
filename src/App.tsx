import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import InicioPage from "./pages/InicioPage";
import ComoNosConhecemosPage from "./pages/ComoNosConhecemosPage";
import PrimeiraVistaPage from "./pages/PrimeiraVistaPage";
import PrimeiroBeijoPage from "./pages/PrimeiroBeijoPage";
import PrimeiroAniversarioPage from "./pages/PrimeiroAniversarioPage";
import CasaDoSenhorPage from "./pages/CasaDoSenhorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<InicioPage />} />
        <Route
          path="/como-nos-conhecemos"
          element={<ComoNosConhecemosPage />}
        />
        <Route path="/primeira-vista" element={<PrimeiraVistaPage />} />
        <Route path="/primeiro-beijo" element={<PrimeiroBeijoPage />} />
        <Route
          path="/primeiro-aniversario"
          element={<PrimeiroAniversarioPage />}
        />
        <Route path="/casa-do-senhor" element={<CasaDoSenhorPage />} />
        <Route path="*" element={<Navigate to="/inicio" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
