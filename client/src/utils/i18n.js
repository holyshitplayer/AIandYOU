import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import Cache from "i18next-localstorage-cache";

i18n
    .use(initReactI18next)
    .use(Backend)
    .use(Cache)
    .init({
        lng: "uk",
        fallbackLng: "uk",
        interpolation: {
            escapeValue: false
        },
        supportedLngs: ["uk", "en"]
    });

export default i18n;