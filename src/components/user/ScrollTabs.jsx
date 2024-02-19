import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d1d1d', 
    },
  },
});

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        maxWidth: { xs: 320, sm: 480, md: '100%' },
        bgcolor: 'background.paper',
        display:'flex',
        justifyContent:'center',
        backgroundColor: 'white',
        mb:"30px",
        zIndex: "inherit",
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor="primary" // Change the color of the indicator
        >
          <Tab label="Item One" sx={{ '&.Mui-selected': { color: 'primary' } }} />
          <Tab label="Item Two" sx={{ '&.Mui-selected': { color: 'primary' } }} />
          <Tab label="Item Three" sx={{ '&.Mui-selected': { color: 'primary' } }} />
          <Tab label="Item Four" sx={{ '&.Mui-selected': { color: 'primary' } }} />
          <Tab label="Item Five" sx={{ '&.Mui-selected': { color: 'primary' } }} />
          <Tab label="Item Six" sx={{ '&.Mui-selected': { color: 'primary' } }} />
          <Tab label="Item Seven" sx={{ '&.Mui-selected': { color: 'primary' } }} />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}
