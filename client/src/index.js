import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import { AlertProvider, ThemeProvider } from "./contexts";
import { Spinner } from "./components";
import "./utils/i18n";

import "./index.sass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HelmetProvider>
        <ThemeProvider>
            <AlertProvider>
                <StrictMode>
                    <Suspense fallback={<Spinner />}>
                        <App />
                    </Suspense>
                </StrictMode>
            </AlertProvider>
        </ThemeProvider>
    </HelmetProvider>
);