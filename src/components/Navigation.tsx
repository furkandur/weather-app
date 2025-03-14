import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

interface Props {
  setSelectedLocation: React.Dispatch<React.SetStateAction<string | null>>;
}

const Navigation = ({ setSelectedLocation }: Props) => {
  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            p: 1,
          }}
        >
          <Typography
            component={Link}
            to="/"
            variant="h5"
            color="primary"
            sx={{
              flexShrink: 0,
              fontWeight: 700,
              letterSpacing: '-0.5px',
              textDecoration: 'none',
            }}
          >
            WEATHER-GATHER
          </Typography>
          <SearchBar setSelectedLocation={setSelectedLocation} />
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

export default Navigation;
