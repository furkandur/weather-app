import { Search } from '@mui/icons-material';
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import locatorService from '../services/locator';

interface Props {
  setSelectedLocation: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchBar = ({ setSelectedLocation }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [locationOpts, setLocationOpts] = useState<string[]>([]);

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSelectedLocation(searchQuery);
    setSearchValue('');
    setSearchQuery('');
  };

  const replaceTurkishChars = (text: string): string => {
    const turkishMap: Record<string, string> = {
      ç: 'c',
      Ç: 'C',
      ğ: 'g',
      Ğ: 'G',
      ı: 'i',
      İ: 'I',
      ö: 'o',
      Ö: 'O',
      ş: 's',
      Ş: 'S',
      ü: 'u',
      Ü: 'U',
    };

    return text
      .split('')
      .map(char => turkishMap[char] || char)
      .join('');
  };

  const searchInputListener = async (targetValue: string | null) => {
    if (targetValue) {
      setSearchValue(targetValue);
      const value = replaceTurkishChars(targetValue);
      setSearchQuery(value);
      if (value.length > 1) {
        const locations = await locatorService.getLocators(value);
        const uniqueLocations = [
          ...new Set(locations.map(loc => loc.longName)),
        ];
        setLocationOpts(uniqueLocations);
      } else setLocationOpts([]);
    }
  };

  return (
    <Box component="form" onSubmit={handleSearch}>
      <Autocomplete
        id="search-bar"
        value={searchValue}
        onInputChange={(_e, value) => {
          void searchInputListener(value);
        }}
        freeSolo
        options={locationOpts}
        renderInput={params => (
          <TextField
            {...params}
            size="small"
            sx={{
              width: '350px',
            }}
            placeholder="Search location..."
            slotProps={{
              input: {
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start" sx={{ m: '5px' }}>
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchBar;
