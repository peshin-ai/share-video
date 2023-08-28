import { FormTextField } from '@components/Form/FormText/FormText.component';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFormContext } from 'react-hook-form';

export type ShareFormProps = {
  onShare: () => void;
};

export const ShareForm = (props: ShareFormProps) => {
  const { onShare } = props;
  const { control } = useFormContext();
  const theme = useTheme();

  return (
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
        <Typography variant="h6" gutterBottom>
          Share a Youtube Movie
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid
          item
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Typography variant="body1" gutterBottom>
              Youtube URL:
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <FormTextField
              control={control}
              fieldName="youtubeUrl"
              rules={{ required: true }}
              hiddenLabel
            />
          </Grid>
        </Grid>
        <Grid item xs={3} />
        <Grid item container xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={onShare}
            fullWidth
          >
            Share
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
