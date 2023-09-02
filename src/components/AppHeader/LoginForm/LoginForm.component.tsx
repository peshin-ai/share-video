import type { FC } from 'react';

import {
  Button,
  Grid,
} from '@mui/material';
import {
  FieldValues,
  FormProvider,
  useForm,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { REGEX_EMAIL } from '../../../constants';
import { FormTextField } from '../../Form/FormText';

export type LoginFormProps = {
  onLogin: (data: FieldValues) => void;
};

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { onLogin } = props;
  const methods = useForm();
  const { control, getValues, handleSubmit } = methods;
  const { t: translate } = useTranslation();

  const onSubmitForm = () => {
    handleSubmit(() => onLogin(getValues()))();
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <FormTextField
              control={control}
              fieldName="email"
              label={translate("header.email")}
              validation={{
                required: "Email is required",
                pattern: {
                  value: REGEX_EMAIL,
                  message: "Invalid email address",
                },
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <FormTextField
              control={control}
              fieldName="password"
              label={translate("header.password")}
              type="password"
              validation={{
                required: "Password is required",
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={onSubmitForm}
              fullWidth
              data-testid="loginButton"
            >
              {translate("header.login.register")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};
