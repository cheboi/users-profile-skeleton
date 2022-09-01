import React from 'react';
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

import { hot } from 'react-hot-loader'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;