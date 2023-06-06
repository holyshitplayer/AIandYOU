import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';

import { AlertProvider, ThemeProvider } from './contexts';
import { Spinner } from './components';
import './utils/i18n';

import './index.sass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <ThemeProvider>
            <AlertProvider>
                <React.StrictMode>
                    <React.Suspense fallback={<Spinner />}>
                        <App />
                    </React.Suspense>
                </React.StrictMode>
            </AlertProvider>
        </ThemeProvider>
    </HelmetProvider>
);