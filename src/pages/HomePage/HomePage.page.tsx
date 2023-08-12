import { Typography, Box } from "@mui/material";
import { Header } from "@components/AppHeader";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  return (
    <Box>
      <Helmet>
        <title>Funny Movies</title>
        <meta name="description" content="Funny Movies" />
      </Helmet>
      <form>
        <Header />
      </form>
    </Box>
  );
};

export default HomePage;
