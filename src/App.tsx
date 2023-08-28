import { Header } from '@components/AppHeader';
import { FieldValues } from 'react-hook-form';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { SharePage } from './pages/SharePage';

function App() {
  const handleLogin = (data: FieldValues) => {
    console.log(data);
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  const user = "guest@gmail.com";

  return (
    <>
      <Header
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        user={user}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/share" element={<SharePage />} />
      </Routes>
    </>
  );
}

export default App;
