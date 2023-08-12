import HomeIcon from "@mui/icons-material/Home";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  user?: string;
  handleLogout?: () => void;
  handleLogin?: () => void;
};

export const Header: FC<HeaderProps> = (props) => {
  const { user } = props;
  const theme = useTheme();

  const { t } = useTranslation();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton component={Link} to="/home">
          <HomeIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t("header.appName")}
        </Typography>
        <Button component={Link} to="/share" color="inherit">
          Share
        </Button>
      </Toolbar>
    </AppBar>
  );
};
