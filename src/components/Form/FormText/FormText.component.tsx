import type { FilledTextFieldProps } from '@mui/material';
import type {
  FC,
  KeyboardEventHandler,
  ReactElement,
} from 'react';
import type {
  ControllerFieldState,
  FieldValues,
  RegisterOptions,
  UseControllerProps,
} from 'react-hook-form';

import {
  TextField,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Controller } from 'react-hook-form';

export type FormTextProps = FieldValues &
  Pick<UseControllerProps, "control"> & {
    fieldName: string;
    autoComplete?: string;
    children?: ReactElement[];
    inputProps?: FilledTextFieldProps["inputProps"];
    inputStyle?: object;
    label?: string;
    onKeyDown?: KeyboardEventHandler;
    symbol?: ReactElement | string;
    testID?: string;
    validation?: RegisterOptions;
    hiddenLabel?: boolean;
  };

type ControllerFieldType = Partial<FieldValues> & {
  value: string;
};

export const FormTextField: FC<FormTextProps> = (props: FormTextProps) => {
  const {
    fieldName,
    control,
    label,
    symbol,
    autoComplete = "new-password",
    validation,
    testID,
    inputStyle,
    inputProps = {},
    onKeyDown,
    hiddenLabel = false,
    ...rest
  } = props;

  const theme = useTheme();

  return (
    <Controller
      rules={validation}
      render={({
        field: { value, ...field },
        fieldState: { error },
      }: {
        field: ControllerFieldType;
        fieldState: ControllerFieldState;
      }): ReactElement => (
        <TextField
          {...field}
          {...rest}
          value={value || ""}
          required={Boolean(validation?.required)}
          inputProps={{
            "data-testid": testID || fieldName,
            style: inputStyle || {},
            ...inputProps,
          }}
          onKeyDown={onKeyDown}
          hiddenLabel={hiddenLabel}
          InputLabelProps={{
            sx: {
              color: theme.palette.common.black,
              "&.Mui-error": {
                color: theme.palette.error.main,
              },
              "&.Mui-focused": {
                color: theme.palette.common.black,
              },
              "& .MuiFormLabel-asterisk": {
                color: theme.palette.error.main,
              },
            },
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: symbol,
            sx: {
              "input::-ms-reveal,input::-ms-clear": {
                display: "none",
              },
              // your root styles
              "&.MuiInputBase-root": {
                background: theme.palette.common.white,
                "&.MuiFilledInput-root:hover": {
                  // your root styles but with even higher CSS specificity
                  backgroundColor: theme.palette.common.white,
                },
              },
            },
          }}
          sx={{
            boxShadow: theme.shadows[10],
            "&.MuiTextField-root": {
              width: "100%",
              backgroundColor: theme.palette.grey[50],
            },
          }}
          id={fieldName}
          label={label}
          variant="filled"
          autoComplete={autoComplete}
          error={Boolean(error)}
          FormHelperTextProps={{ sx: { marginLeft: 0 } }}
          helperText={
            error?.message && (
              <Typography
                color="red"
                variant="body2"
                fontWeight="font-weight-bold"
              >
                {error.message}
              </Typography>
            )
          }
        />
      )}
      name={fieldName}
      control={control}
    />
  );
};
