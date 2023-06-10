import {
    AIChatBackground,
    AIImagesBackground,
    AIToolsBackground,
    AboutUsBackground,
    ChatGPTBackground,
    DALLE2Background,
    DeepLTranslatorBackground,
    ExamplesBackground,
    GetStartedBackground,
    GitHubCopilotBackground,
    HowItWorksBackground,
    MidjourneyBackground,
    ModernAIBackground,
    NumberOfLostJobsDiagram,
    PopulatiryDiagram,
    StableDiffusionBackground
} from "../assets";

export const pagesContent = {
    "getStarted": {
        titleKey: "getStartedPageTitle",
        descriptionKey: "getStartedPageDescription",
        background: GetStartedBackground,
        chapters: [
            {
                titleKey: "getStartedChapter1Title",
                id: "overview",
                content: [
                    {
                        type: "p",
                        valueKey: "getStartedChapter1Value1"
                    },
                    {
                        type: "p",
                        valueKey: "getStartedChapter1Value2"
                    },
                    {
                        type: "p",
                        valueKey: "getStartedChapter1Value3"
                    },
                    {
                        type: "p",
                        valueKey: "getStartedChapter1Value4"
                    }
                ]
            },
            {
                titleKey: "getStartedChapter2Title",
                id: "introduction",
                content: [
                    {
                        type: "p",
                        valueKey: "getStartedChapter2Value1"
                    },
                    {
                        type: "p",
                        valueKey: "getStartedChapter2Value2"
                    },
                ]
            },
            {
                titleKey: "getStartedChapter3Title",
                id: "how-to-use",
                content: [
                    {
                        type: "p",
                        valueKey: "getStartedChapter3Value1"
                    },
                    {
                        type: "p",
                        valueKey: "getStartedChapter3Value2"
                    },
                ]
            },
            {
                titleKey: "getStartedChapter4Title",
                id: "how-to-start-learning",
                content: [
                    {
                        type: "p",
                        valueKey: "getStartedChapter4Value1"
                    },
                    {
                        type: "p",
                        valueKey: "getStartedChapter4Value2"
                    },
                ]
            },
            {
                titleKey: "getStartedChapter5Title",
                id: "try-in-practice",
                content: [
                    {
                        type: "p",
                        valueKey: "getStartedChapter5Value1"
                    },
                    {
                        type: "p",
                        valueKey: "getStartedChapter5Value2"
                    },
                ]
            }
        ]
    },
    "modernAI": {
        titleKey: "modernAIPageTitle",
        descriptionKey: "modernAIPageDescription",
        background: ModernAIBackground,
        chapters: [
            {
                titleKey: "modernAIChapter1Title",
                id: "why-so-popular",
                content: [
                    {
                        type: "p",
                        valueKey: "modernAIChapter1Value1"
                    },
                    {
                        type: "imgWithCaption",
                        src: PopulatiryDiagram,
                        alt: "ai popularity diagram",
                        valueKey: "modernAIChapter1Diagram1"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter1Value2"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter1Value3"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter1Value4"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter1Value5"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter1Value6"
                    }
                ]
            },
            {
                titleKey: "modernAIChapter2Title",
                id: "why-so-smart",
                content: [
                    {
                        type: "p",
                        valueKey: "modernAIChapter2Value1"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter2Value2"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter2Value3"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter2Value4"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter2Value5"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter2Value6"
                    }
                ]
            },
            {
                titleKey: "modernAIChapter3Title",
                id: "scopes-of-use",
                content: [
                    {
                        type: "p",
                        valueKey: "modernAIChapter3Value1"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter3Value2"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter3Value3"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter3Value4"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter3Value5"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter3Value6"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter3Value7"
                    }
                ]
            },
            {
                titleKey: "modernAIChapter4Title",
                id: "threats-of-use",
                content: [
                    {
                        type: "p",
                        valueKey: "modernAIChapter4Value1"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter4Value2"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter4Value3"
                    },
                    {
                        type: "imgWithCaption",
                        src: NumberOfLostJobsDiagram,
                        alt: "number of lost jobs diagram",
                        valueKey: "modernAIChapter4Diagram1"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter4Value4"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter4Value5"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter4Value6"
                    }
                ]
            },
            {
                titleKey: "modernAIChapter5Title",
                id: "why-and-how-to-use",
                content: [
                    {
                        type: "p",
                        valueKey: "modernAIChapter5Value1"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter5Value2"
                    },
                    {
                        type: "ol",
                        valueKey: "modernAIChapter5Value3"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter5Value4"
                    },
                    {
                        type: "ol",
                        valueKey: "modernAIChapter5Value5"
                    },
                    {
                        type: "p",
                        valueKey: "modernAIChapter5Value6"
                    }
                ]
            }
        ]
    },
    "howItWorks": {
        titleKey: "howItWorksPageTitle",
        descriptionKey: "howItWorksPageDescription",
        background: HowItWorksBackground,
        chapters: [
            {
                titleKey: "howItWorksChapter1Title",
                id: "ai-and-ml",
                content: [
                    {
                        type: "p",
                        valueKey: "howItWorksChapter1Value1"
                    },
                    {
                        type: "p",
                        valueKey: "howItWorksChapter1Value2"
                    },
                ]
            },
            {
                titleKey: "howItWorksChapter2Title",
                id: "dl-and-nn",
                content: [
                    {
                        type: "p",
                        valueKey: "howItWorksChapter2Value1"
                    },
                    {
                        type: "p",
                        valueKey: "howItWorksChapter2Value2"
                    }
                ]
            },
            {
                titleKey: "howItWorksChapter3Title",
                id: "algorithms",
                content: [
                    {
                        type: "p",
                        valueKey: "howItWorksChapter3Value1"
                    }
                ]
            },
            {
                titleKey: "howItWorksChapter4Title",
                id: "ai-in-real-life",
                content: [
                    {
                        type: "p",
                        valueKey: "howItWorksChapter4Value1"
                    },
                    {
                        type: "p",
                        valueKey: "howItWorksChapter4Value2"
                    },
                    {
                        type: "p",
                        valueKey: "howItWorksChapter4Value3"
                    },
                    {
                        type: "p",
                        valueKey: "howItWorksChapter4Value4"
                    },
                    {
                        type: "p",
                        valueKey: "howItWorksChapter4Value5"
                    },
                    {
                        type: "p",
                        valueKey: "howItWorksChapter4Value6"
                    }
                ]
            },
        ]
    },
    "aiTools": {
        titleKey: "aiToolsPageTitle",
        descriptionKey: "aiToolsPageDescription",
        background: AIToolsBackground,
        chapters: [
            {
                titleKey: "aiToolsChapter1Title",
                id: "chat-gpt",
                content: [
                    {
                        type: "img",
                        src: ChatGPTBackground,
                        alt: "chatgpt bg"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value1"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value2"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value3"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter1Value4"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value5"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value6"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter1Value7"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value8"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter1Value9"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value10"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter1Value11"
                    },
                    {
                        type: "a",
                        href: "https://chat.openai.com/",
                        valueKey: "aiToolsChapter1Value12"
                    }
                ]
            },
            {
                titleKey: "aiToolsChapter2Title",
                id: "dall-e-2",
                content: [
                    {
                        type: "img",
                        src: DALLE2Background,
                        alt: "dall-e-2 bg"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value1"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value2"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value3"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value4"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value5"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter2Value6"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value7"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value8"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter2Value9"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter2Value10"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter2Value11"
                    },
                    {
                        type: "a",
                        href: "https://labs.openai.com/",
                        valueKey: "aiToolsChapter2Value12"
                    }
                ]
            },
            {
                titleKey: "aiToolsChapter3Title",
                id: "deepltranslator",
                content: [
                    {
                        type: "img",
                        src: DeepLTranslatorBackground,
                        alt: "deepl translator bg"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value1"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value2"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value3"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value4"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value5"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value6"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter3Value7"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value8"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter3Value9"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter3Value10"
                    },
                    {
                        type: "a",
                        href: "https://www.deepl.com/translator",
                        valueKey: "aiToolsChapter3Value11"
                    }
                ]
            },
            {
                titleKey: "aiToolsChapter4Title",
                id: "stablediffusion",
                content: [
                    {
                        type: "img",
                        src: StableDiffusionBackground,
                        alt: "stable diffusion bg"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter4Value1"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter4Value2"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter4Value3"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter4Value4"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter4Value5"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter4Value6"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter4Value7"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter4Value8"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter4Value9"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter4Value10"
                    },
                    {
                        type: "a",
                        href: "https://stablediffusionweb.com/",
                        valueKey: "aiToolsChapter4Value11"
                    }
                ]
            },
            {
                titleKey: "aiToolsChapter5Title",
                id: "githubcopilot",
                content: [
                    {
                        type: "img",
                        src: GitHubCopilotBackground,
                        alt: "github copilot bg"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value1"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value2"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value3"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value4"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value5"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value6"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value7"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter5Value8"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value9"
                    },
                    {
                        type: "ol",
                        valueKey: "aiToolsChapter5Value10"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value11"
                    },
                    {
                        type: "a",
                        href: "https://github.com/features/copilot",
                        valueKey: "aiToolsChapter5Value12"
                    }
                ]
            },
            {
                titleKey: "aiToolsChapter6Title",
                id: "midjourney",
                content: [
                    {
                        type: "img",
                        src: MidjourneyBackground,
                        alt: "midjourney bg"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value1"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value2"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value3"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value4"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value5"
                    },
                    {
                        type: "p",
                        valueKey: "aiToolsChapter5Value6"
                    },
                    {
                        type: "a",
                        href: "https://www.midjourney.com/",
                        valueKey: "aiToolsChapter6Value7"
                    }
                ]
            }
        ]
    },
    "examples": {
        titleKey: "examplesPageTitle",
        descriptionKey: "examplesPageDescription",
        background: ExamplesBackground,
        chapters: [
            {
                titleKey: "examplesChapter1Title",
                id: "ai-interfaces",
                content: [
                    {
                        type: "p",
                        valueKey: "examplesChapter1Value1"
                    }
                ]
            },
            {
                titleKey: "examplesChapter2Title",
                id: "ai-chat",
                content: [
                    {
                        type: "img",
                        src: AIChatBackground,
                        alt: "ai chat bg"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value1"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value2"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value3"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value4"
                    },
                    {
                        type: "ol",
                        valueKey: "examplesChapter2Value5"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value6"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value7"
                    },
                    {
                        type: "ol",
                        valueKey: "examplesChapter2Value8"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value9"
                    },
                    {
                        type: "ol",
                        valueKey: "examplesChapter2Value10"
                    },
                    {
                        type: "link",
                        href: "/ai-chat",
                        valueKey: "examplesChapter2Value11"
                    }
                ]
            },
            {
                titleKey: "examplesChapter3Title",
                id: "ai-images",
                content: [
                    {
                        type: "img",
                        src: AIImagesBackground,
                        alt: "ai images bg"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter3Value1"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter3Value2"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter3Value3"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter2Value4"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter3Value5"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter3Value6"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter3Value7"
                    },
                    {
                        type: "ol",
                        valueKey: "examplesChapter3Value8"
                    },
                    {
                        type: "p",
                        valueKey: "examplesChapter3Value9"
                    },
                    {
                        type: "ol",
                        valueKey: "examplesChapter3Value10"
                    },
                    {
                        type: "link",
                        href: "/ai-images",
                        valueKey: "examplesChapter3Value11"
                    }
                ]
            },
        ]
    },
    "aboutUs": {
        titleKey: "aboutUsPageTitle",
        descriptionKey: "aboutUsPageDescription",
        background: AboutUsBackground,
        chapters: [
            {
                titleKey: "aboutUsChapter1Title",
                id: "about-ai-and-you",
                content: [
                    {
                        type: "p",
                        valueKey: "aboutUsChapter1Value1"
                    },
                    {
                        type: "p",
                        valueKey: "aboutUsChapter1Value2"
                    },
                    {
                        type: "p",
                        valueKey: "aboutUsChapter1Value3"
                    },
                    {
                        type: "p",
                        valueKey: "aboutUsChapter1Value4"
                    },
                    {
                        type: "p",
                        valueKey: "aboutUsChapter1Value5"
                    }
                ]
            }
        ]
    },
    "home": {
        titleKey: "homePageTitle",
    },
    "aiChat": {
        titleKey: "aiChatPageTitle",
        descriptionKey: "aiChatPageDescription",
        docsLink: {
            href: "/docs/examples#ai-chat",
            valueKey: "aiChatDocsLink"
        }
    },
    "aiImages": {
        titleKey: "aiImagesPageTitle",
        descriptionKey: "aiImagesPageDescription",
        docsLink: {
            href: "/docs/examples#ai-images",
            valueKey: "aiImagesDocsLink"
        }
    }
}