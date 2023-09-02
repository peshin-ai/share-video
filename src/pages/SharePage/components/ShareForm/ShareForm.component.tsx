import { FormTextField } from '@components/Form/FormText/FormText.component';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  useEffect,
  useState,
} from 'react';
import { useFormContext } from 'react-hook-form';

export type ShareFormProps = {
  onShareMovie: () => void;
};

export const ShareForm = (props: ShareFormProps) => {
  const { onShareMovie } = props;
  const theme = useTheme();

  const { control, watch } = useFormContext();

  const [isCanShare, setIsCanShare] = useState<boolean>(false);

  const [movieId, movieTitle] = watch(["movieId", "movieTitle"]);

  useEffect(() => {
    if (movieId && movieTitle) {
      setIsCanShare(true);
    } else {
      setIsCanShare(false);
    }
  }, [movieId, movieTitle]);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={theme.spacing(20)}
        border={1}
        p={theme.spacing(5)}
        position="relative"
      >
        <Box
          position="absolute"
          bgcolor={theme.palette.common.white}
          top={0}
          left={theme.spacing(1)}
          mt={`-${theme.spacing(2)}`}
          px={theme.spacing(1)}
        >
          <Typography
            variant="h6"
            gutterBottom
            color={theme.palette.primary.light}
          >
            Share a Youtube Movie
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item container xs={12} justifyContent="center" spacing={3}>
            <Grid item xs={3} container alignItems="flex-start">
              <Typography variant="body1" gutterBottom>
                Youtube URL
                <Typography
                  variant="body2"
                  component="span"
                  color={theme.palette.primary.light}
                >
                  *
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <FormTextField
                control={control}
                fieldName="movieId"
                rules={{ required: true }}
                hiddenLabel
              />
            </Grid>

            <Grid item xs={3} container alignItems="flex-start">
              <Typography variant="body1" gutterBottom>
                Title
                <Typography
                  variant="body2"
                  component="span"
                  color={theme.palette.primary.light}
                >
                  *
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <FormTextField
                control={control}
                fieldName="movieTitle"
                rules={{ required: true }}
                hiddenLabel
              />
            </Grid>

            <Grid item xs={3} container alignItems="flex-start">
              <Typography variant="body1" gutterBottom>
                Description:
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <FormTextField
                control={control}
                fieldName="movieDescription"
                rules={{ required: true }}
                maxRow={4}
                hiddenLabel
              />
            </Grid>
          </Grid>
          <Grid item xs={3} />
          <Grid item container xs={9}>
            <Button
              variant="contained"
              color="primary"
              onClick={onShareMovie}
              fullWidth
              disabled={!isCanShare}
            >
              Share
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
