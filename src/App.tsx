import React from 'react';
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './components/routes';
import { ApolloProvider } from '@apollo/client';
import client from './constants/apollo-client';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

const  App = () => {
  return (
    <ApolloProvider client={client} >
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
    
  );
}

export default App;
