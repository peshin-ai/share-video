import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SharePage } from "./pages/SharePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/share" element={<SharePage />} />
    </Routes>
  );
}

export default App;
