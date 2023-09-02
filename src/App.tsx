import { Header } from '@components/AppHeader';
import { GuardsRouter } from '@components/GuardsRouter';
import { CustomizedSnackbar } from '@components/Snackbar';
import { AlertColor } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { useSelector } from 'react-redux';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { userLoginType } from 'types';

import { useAppDispatch } from './hooks/store.hook';
import { HomePage } from './pages/HomePage';
import { SharePage } from './pages/SharePage';
import { handleLogin } from './redux/appStore/app.operation';
import {
  selectGetSnackbarMessage,
  selectGetSnackbarOpen,
  selectGetSnackbarStatus,
  selectGetUserEmail,
  selectGetUserToken,
} from './redux/appStore/app.selectors';
import { appActions } from './redux/appStore/app.slice';
import { checkEmpty } from './utils';

function App() {
  const appDispatch = useAppDispatch();
  const handleUserLogin = (data: FieldValues) => {
    if (checkEmpty(data.email) || checkEmpty(data.password)) {
      appDispatch(appActions.setSnackbarOpen());
      appDispatch(appActions.setSnackbarStatus("error"));
      appDispatch(
        appActions.setSnackbarMessage("Please input email and password")
      );
    } else {
      appDispatch(handleLogin(data as userLoginType));
    }
  };

  const userEmail = useSelector(selectGetUserEmail);
  const accessToken = useSelector(selectGetUserToken);
  const openSnackbar = useSelector(selectGetSnackbarOpen);
  const snackbarStatus = useSelector(selectGetSnackbarStatus);
  const snackbarMessage = useSelector(selectGetSnackbarMessage);

  const handleLogout = () => {
    appDispatch(appActions.resetAccessToken());
  };

  const handleCloseSnackbar = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    appDispatch(appActions.resetSnackbar());
  };

  return (
    <>
      <Header
        handleLogin={handleUserLogin}
        handleLogout={handleLogout}
        userEmail={userEmail}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/share"
          element={
            <GuardsRouter accessToken={accessToken}>
              <SharePage />
            </GuardsRouter>
          }
        />
      </Routes>
      <CustomizedSnackbar
        open={openSnackbar}
        handleClose={handleCloseSnackbar}
        severity={snackbarStatus}
        message={snackbarMessage as AlertColor}
      />
    </>
  );
}

export default App;
