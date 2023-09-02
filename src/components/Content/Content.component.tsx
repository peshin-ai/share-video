import VotedDislikesIcon from '@mui/icons-material/ThumbDown';
import UnVotedDislikesIcon from '@mui/icons-material/ThumbDownOffAlt';
import VotedLikesIcon from '@mui/icons-material/ThumbUp';
import UnVotedLikesIcon from '@mui/icons-material/ThumbUpOffAlt';
import {
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import { Movie } from '../../models/app.model';

export interface ContentProps extends Movie {
  onLikesMovie?: (itemId: string) => void;
  onDislikesMovie?: (itemId: string) => void;
  isUserVoted?: boolean;
}

export const Content = (props: ContentProps) => {
  const {
    _id: movieDbId,
    movieId,
    movieTitle,
    movieAuthor,
    movieLikes,
    movieDislikes,
    movieDescription,
    onLikesMovie,
    onDislikesMovie,
    isUserVoted = undefined,
  } = props;

  const theme = useTheme();
  const { t: translate } = useTranslation();

  return (
    <Grid container spacing={{ sx: theme.spacing(1), md: theme.spacing(2) }}>
      <Grid item xs={12} md={6}>
        <iframe
          width="100%"
          height="300"
          src={`https://www.youtube.com/embed/${movieId}`}
          title="YouTube movie player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignItems="flex-start"
        direction="column"
      >
        <Grid item>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ color: theme.palette.primary.light }}
          >
            {movieTitle}
          </Typography>
        </Grid>
        <Grid item container alignItems="center">
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Shared by:
              <Typography
                variant="body1"
                gutterBottom
                fontWeight={600}
                component="span"
              >
                {` ${movieAuthor}`}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              aria-label="like"
              sx={{
                ":hover": {
                  background: theme.palette.success.main,
                  color: theme.palette.common.white,
                },
                color: "green",
              }}
              onClick={() => onLikesMovie?.(movieDbId)}
            >
              {typeof isUserVoted !== "undefined" && isUserVoted ? (
                <VotedLikesIcon />
              ) : (
                <UnVotedLikesIcon />
              )}
            </IconButton>
            <IconButton
              aria-label="like"
              sx={{
                ":hover": {
                  background: theme.palette.error.main,
                  color: theme.palette.common.white,
                },
                color: "red",
              }}
              onClick={() => onDislikesMovie?.(movieDbId)}
            >
              {typeof isUserVoted !== "undefined" && !isUserVoted ? (
                <VotedDislikesIcon />
              ) : (
                <UnVotedDislikesIcon />
              )}
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom>
              {typeof isUserVoted !== "undefined"
                ? isUserVoted
                  ? translate("content.votedUp")
                  : translate("content.votedDown")
                : translate("content.unVoted")}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container alignContent="center" columnSpacing={0.5}>
          <Grid item>
            <UnVotedLikesIcon sx={{ color: "green" }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom>
              {movieLikes}
            </Typography>
          </Grid>
          <Grid item sx={{ ml: theme.spacing(2) }}>
            <UnVotedDislikesIcon sx={{ color: "red" }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom>
              {movieDislikes}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            {translate("content.description")}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {movieDescription}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
