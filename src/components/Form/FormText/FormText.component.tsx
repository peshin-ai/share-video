import React from "react";
import { TextField } from "@mui/material";
import { useController } from "react-hook-form";
import type { UseControllerProps } from "react-hook-form";

interface FormTextFieldProps extends UseControllerProps {
  label: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  control,
  name,
  label,
  defaultValue,
  rules,
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
  });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      label={label}
      variant="outlined"
      error={invalid}
      helperText={error?.message}
      fullWidth
      margin="normal"
    />
  );
};

export default FormTextField;
