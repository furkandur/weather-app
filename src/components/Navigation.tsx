import { Clear, Search } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  setSelectedLocation: React.Dispatch<React.SetStateAction<string | null>>;
}

const Navigation = ({ setSelectedLocation }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSelectedLocation(searchQuery);
    setSearchQuery('');
  };

  const handleClear = () => {
    setSearchQuery('');
  };

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
          <Box component="form" onSubmit={handleSearch}>
            <TextField
              placeholder="Search location..."
              value={searchQuery}
              onChange={({ target }) => {
                setSearchQuery(target.value);
              }}
              size="small"
              sx={{ width: { xs: '100%', sm: '350px' } }}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <Box
                        sx={{
                          width: '24px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        {searchQuery && (
                          <IconButton onClick={handleClear} size="small">
                            <Clear />
                          </IconButton>
                        )}
                      </Box>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

export default Navigation;
