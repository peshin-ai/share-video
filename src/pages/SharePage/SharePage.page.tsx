import type { ReactElement } from 'react';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { sliceMovieURL } from '@utils/sliceMovieURL/sliceMovieURL';
import { Helmet } from 'react-helmet-async';
import {
  FormProvider,
  useForm,
} from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/store.hook';
import { handleShareMovie } from '../../redux/appStore/app.operation';
import { selectGetUserEmail } from '../../redux/appStore/app.selectors';
import { shareMovieType } from '../../types';
import { ShareForm } from './components/ShareForm';

export const SharePage = (): ReactElement => {
  const theme = useTheme();
  const shareFormMethods = useForm();
  const appDispatch = useAppDispatch();
  const userEmail = useSelector(selectGetUserEmail);
  const { getValues } = shareFormMethods;
  const navigate = useNavigate();

  const handleShare = () => {
    const movieInitialData = {
      movieAuthor: userEmail,
      movieId: sliceMovieURL(getValues("movieId")),
      movieTitle: getValues("movieTitle"),
      movieDescription: getValues("movieDescription"),
    };
    appDispatch(handleShareMovie(movieInitialData as shareMovieType));
    navigate("/home");
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
        <FormProvider {...shareFormMethods}>
          <form>
            <ShareForm onShareMovie={handleShare} />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default SharePage;
