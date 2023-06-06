import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { HomePage, DocsPage, DocsArticlePage, AIUsagePage } from "./pages";
import { Header, Footer, ScrollToHash, Alert } from "./components";
import { pagesContent } from "./constants";

const App = () => (
    <BrowserRouter>
        <Helmet>
            <title>AI & YOU</title>
        </Helmet>

        <ScrollToHash />
        <Alert />
        <Header />

        <main>
            <Routes>
                <Route path="/" element={<HomePage />} exact />
                <Route path="docs" element={<DocsPage />}>
                    <Route path="get-started" element={<DocsArticlePage pageContent={pagesContent.getStarted} />} />
                    <Route path="modern-ai" element={<DocsArticlePage pageContent={pagesContent.modernAI} />} />
                    <Route path="how-it-works" element={<DocsArticlePage pageContent={pagesContent.howItWorks} />} />
                    <Route path="ai-tools" element={<DocsArticlePage pageContent={pagesContent.aiTools} />} />
                    <Route path="examples" element={<DocsArticlePage pageContent={pagesContent.examples} />} />
                    <Route path="about-us" element={<DocsArticlePage pageContent={pagesContent.aboutUs} />} />
                </Route>
                <Route path="ai-chat" element={<AIUsagePage type="chat" pageContent={pagesContent.aiChat} />} />
                <Route path="ai-images" element={<AIUsagePage type="images" pageContent={pagesContent.aiImages} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>

        <Footer />
    </BrowserRouter>
);

export default App