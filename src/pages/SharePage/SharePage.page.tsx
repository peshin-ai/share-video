import type { ReactElement } from 'react';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';

import { ShareForm } from './components/ShareForm';

export const SharePage = (): ReactElement => {
  const theme = useTheme();
  const methods = useForm();
  const { getValues } = methods;

  const handleShare = () => {
    console.log(getValues());
  };

  return (
    <Box>
      <Helmet>
        <title>Share Movies</title>
        <meta name="description" content="Share Movies" />
      </Helmet>
      <Box
        sx={{ pt: theme.spacing(3) }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormProvider {...methods}>
          <form>
            <ShareForm onShare={handleShare} />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default SharePage;
