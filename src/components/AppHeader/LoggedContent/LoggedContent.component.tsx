import type { FC } from 'react';

import {
  Button,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export type LoggedContentProps = {
  userEmail?: string;
  onLogout: () => void;
};

export const LoggedContent: FC<LoggedContentProps> = (props) => {
  const { userEmail, onLogout } = props;
  const { t: translate } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6" pr={theme.spacing(10)}>
        Welcome {userEmail}
      </Typography>
      <Button
        component={Link}
        to="/share"
        color="inherit"
        sx={{
          textDecoration: "none",
        }}
      >
        {translate("header.share")}
      </Button>
      <Button
        component={Link}
        to="/home"
        color="inherit"
        sx={{
          textDecoration: "none",
        }}
        onClick={onLogout}
      >
        {translate("header.logout")}
      </Button>
    </>
  );
};
