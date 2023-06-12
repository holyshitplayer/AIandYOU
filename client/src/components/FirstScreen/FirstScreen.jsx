import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { BigImage, FollowLinkIcon, HeadingGif, SmallImage } from "../../assets";

import "./firstScreen.sass";

const FirstScreen = () => {
    const { t } = useTranslation();

    return (
        <section className="first-screen">
            <h1 className="big-title">
                <span>{t("bigTitle")}</span>
                <video src={HeadingGif} autoPlay muted loop></video>
            </h1>
            <div className="image-div big-poster">
                <link rel="preload" href={BigImage} as="image" />
                <img src={BigImage} alt="big poster" />
            </div>
            <div className="get-started-block">
                <div className="image-div small-poster">
                    <img src={SmallImage} alt="small poster" />
                </div>
                <div className="get-started-info">
                    <p className="get-started-text">{t("getStartedText")}</p>
                    <Link to="/docs/get-started" className="get-started-link">
                        <span>{t("getStartedPageTitle")}</span>
                        <FollowLinkIcon />
                    </Link>
                </div>
            </div>
            <div className="decoration-block">
                <div className="decoration-text-block">
                    <p>{t("decorationBlockText")}</p>
                    <Link to="/docs/about-us" className="decoration-block-link">
                        <FollowLinkIcon />
                    </Link>
                </div>
                <div className="decoration-console-block">
                    <code>
                        <p>&gt; diskpart</p>
                        <p>&gt; list disk</p>
                        <p>&gt; select disk 0</p>
                        <p>&gt; clean</p>
                        <p>&gt; convert gpt</p>
                        <p>&gt; exit</p>
                    </code>
                </div>
            </div>
        </section>
    );
}

export default FirstScreen