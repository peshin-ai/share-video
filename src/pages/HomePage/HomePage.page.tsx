import type { ContentProps } from '@components/Content';

import { Content } from '@components/Content';
import {
  Box,
  Container,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  type ReactElement,
  useEffect,
  useState,
} from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../hooks/store.hook';
import {
  handleDislikesMovie,
  handleGetMovies,
  handleLikesMovie,
} from '../../redux/appStore/app.operation';
import {
  selectGetMovies,
  selectGetUserEmail,
} from '../../redux/appStore/app.selectors';

export const HomePage = (): ReactElement => {
  const theme = useTheme();
  const appDispatch = useAppDispatch();

  const userEmail = useSelector(selectGetUserEmail);

  const [fistTime, setFirstTime] = useState<boolean>(true);

  const handleLikeItem = (movieId: string) => {
    const data = {
      userEmail,
      movieId,
    };

    appDispatch(handleLikesMovie(data));
  };

  const handleDislikeItem = (movieId: string) => {
    const data = {
      userEmail,
      movieId,
    };
    appDispatch(handleDislikesMovie(data));
  };

  const movies = useSelector(selectGetMovies);
  console.log(movies);

  // This will render only once at the first time
  useEffect(() => {
    if (fistTime) {
      appDispatch(handleGetMovies());
      setFirstTime(false);
    }
  }, [fistTime, appDispatch]);

  // This will render every 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      appDispatch(handleGetMovies());
    }, 30000);

    return () => clearTimeout(timer);
  });

  return (
    <Container maxWidth="lg" sx={{ pt: theme.spacing(3) }}>
      <Box>
        <Helmet>
          <title>Funny Movies</title>
          <meta name="description" content="Funny Movies" />
        </Helmet>

        <Box width="100%" sx={{ boxShadow: 5, borderRadius: theme.spacing(1) }}>
          <Box p={theme.spacing(2)}>
            {movies &&
              movies.map(
                (post: ContentProps): ReactElement => (
                  <>
                    <Content
                      key={post.movieId}
                      {...post}
                      onLikesMovie={handleLikeItem}
                      onDislikesMovie={handleDislikeItem}
                    />
                    <Divider sx={{ my: theme.spacing(2) }} />
                  </>
                )
              )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
