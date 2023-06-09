import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Router } from './routes/Routes';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
