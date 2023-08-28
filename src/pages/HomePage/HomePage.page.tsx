import type { ContentProps } from '@components/Content';
import type { ReactElement } from 'react';

import { Content } from '@components/Content';
import {
  Box,
  Container,
  Divider,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

import { mockMovieData } from './mockdata';

export const HomePage = (): ReactElement => {
  const theme = useTheme();

  const handleLikeItem = (itemId: string) => {
    console.log(`Like item ${itemId}`);
  };

  const handleDislikeItem = (itemId: string) => {
    console.log(`Dislike item ${itemId}`);
  };
  return (
    <Box>
      <Helmet>
        <title>Funny Movies</title>
        <meta name="description" content="Funny Movies" />
      </Helmet>
      <Container maxWidth="lg" sx={{ pt: theme.spacing(3) }}>
        {mockMovieData.map(
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
      </Container>
    </Box>
  );
};

export default HomePage;
