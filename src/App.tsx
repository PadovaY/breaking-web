import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import styled, { ThemeProvider } from 'styled-components';
import { FiltersContextProvider } from './FiltersContext';
import { CharacterFeed } from './CharacterFeed';
import { theme } from './theme';

export const BASE_API_URL = 'https://www.breakingbadapi.com/api';
const queryClient = new QueryClient();

function App() {


  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <FiltersContextProvider>
            <CharacterFeed />
          </FiltersContextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div({
  height: '100%',
  width: '100%'
})