import type { FC } from 'react';

import { FormTextField } from '@components/Form/FormText';
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

export type LoginFormProps = {
  onLogin: (data: FieldValues) => void;
};

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { onLogin } = props;
  const methods = useForm();
  const { control } = methods;
  const { t: translate } = useTranslation();

  const onSubmitForm = () => {
    onLogin(methods.getValues());
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={5}>
            <FormTextField
              control={control}
              fieldName="email"
              label={translate("header.email")}
              rules={{ required: true }}
              parttern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </Grid>
          <Grid item xs={5}>
            <FormTextField
              control={control}
              fieldName="password"
              label={translate("header.password")}
              type="password"
              rules={{ required: true }}
            />
          </Grid>

          <Grid item xs={2}>
            <Button variant="contained" color="primary" onClick={onSubmitForm}>
              {translate("header.login")}
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};
