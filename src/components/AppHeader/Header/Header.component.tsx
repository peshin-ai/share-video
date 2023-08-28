import type { FC } from 'react';

import HomeIcon from '@mui/icons-material/Home';
import {
  AppBar,
  Container,
  IconButton,
  Link as MuiLink,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { LoggedContent } from '../LoggedContent';
import { LoginForm } from '../LoginForm';

type HeaderProps = {
  user?: string;
  handleLogout: () => void;
  handleLogin: (data: FieldValues) => void;
};

export const Header: FC<HeaderProps> = (props) => {
  const { user, handleLogin, handleLogout } = props;
  const theme = useTheme();

  const { t: translate } = useTranslation();
  const onSubmitData = (data: FieldValues) => {
    handleLogin(data);
  };

  const onLogout = () => {
    handleLogout();
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            component={Link}
            to="/home"
            sx={{
              ":hover": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <HomeIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <MuiLink
              component={Link}
              to="/home"
              color="inherit"
              sx={{
                textDecoration: "none",
              }}
            >
              {translate("header.appName")}
            </MuiLink>
          </Typography>
          {!user ? (
            <LoggedContent onLogout={onLogout} userEmail={user} />
          ) : (
            <LoginForm onLogin={onSubmitData} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
