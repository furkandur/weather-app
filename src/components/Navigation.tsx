import { Clear, Search } from '@mui/icons-material';
import {
  alpha,
  AppBar,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
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
    console.log(handleSearch);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(10px)',
        backgroundColor: alpha('#ffffff', 0.8),
        borderBottom: '1px solid rgba(0,0,0,0.12)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 'lg',
          mx: 'auto',
          width: '100%',
          py: 1,
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="text"
          color="primary"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            letterSpacing: 1,
            '&:hover': {
              backgroundColor: alpha('#primary.main', 0.1),
            },
          }}
        >
          WEATHER-GATHER
        </Button>
        <form
          onSubmit={handleSearch}
          style={{ width: '50%', maxWidth: 400, marginRight: 50 }}
        >
          <TextField
            variant="outlined"
            fullWidth
            placeholder="Search..."
            value={searchQuery}
            onChange={({ target }) => {
              setSearchQuery(target.value);
            }}
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                endAdornment: searchQuery && (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClear}>
                      <Clear />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
