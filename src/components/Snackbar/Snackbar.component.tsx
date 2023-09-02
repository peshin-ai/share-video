import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export type CustomizedSnackbarProps = {
  open: boolean;
  handleClose: () => void;
  severity: AlertProps["severity"];
  message: string;
};

export const CustomizedSnackbar = (props: CustomizedSnackbarProps) => {
  const { open, handleClose, severity, message } = props;

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
