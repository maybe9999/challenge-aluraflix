import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme.js';
import GlobalStyles from './Styles/GlobalStyle.jsx';

import AppRoute from './Router/route.jsx';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>   {/* styled-components */}
        <GlobalStyles />                  {/* styled-components */}
          <AppRoute />
      </ThemeProvider>

    </>
  )
}

export default App
