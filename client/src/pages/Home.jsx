import { Helmet } from "react-helmet-async";

import { FirstScreen } from "../components";

const Home = () => (
    <>
        <Helmet>
            <title>AI & YOU</title>
        </Helmet>
        
        <div className="container">
            <FirstScreen />
        </div>
    </>
);

export default Home