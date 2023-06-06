import { pagesContent } from "./pagesContent";

import {
    GetStartedPageIcon,
    ModernAIPageIcon,
    HowItWorksPageIcon,
    AIToolsPageIcon,
    ExamplesPageIcon,
    AboutUsPageIcon,
    AIChatPageIcon,
    AIImagesPageIcon,
    HomePageIcon
} from "../assets";

export const docsLinks = [
    {
        titleKey: pagesContent.getStarted.titleKey,
        href: "/docs/get-started",
        icon: GetStartedPageIcon,
        innerLinks: pagesContent.getStarted.chapters.map((chapter) => ({
            titleKey: chapter.titleKey,
            href: `/docs/get-started#${chapter.id}`
        }))
    },
    {
        titleKey: pagesContent.modernAI.titleKey,
        href: "/docs/modern-ai",
        icon: ModernAIPageIcon,
        innerLinks: pagesContent.modernAI.chapters.map((chapter) => ({
            titleKey: chapter.titleKey,
            href: `/docs/modern-ai#${chapter.id}`
        }))
    },
    {
        titleKey: pagesContent.howItWorks.titleKey,
        href: "/docs/how-it-works",
        icon: HowItWorksPageIcon,
        innerLinks: pagesContent.howItWorks.chapters.map((chapter) => ({
            titleKey: chapter.titleKey,
            href: `/docs/how-it-works#${chapter.id}`
        }))
    },
    {
        titleKey: pagesContent.aiTools.titleKey,
        href: "/docs/ai-tools",
        icon: AIToolsPageIcon,
        innerLinks: pagesContent.aiTools.chapters.map((chapter) => ({
            titleKey: chapter.titleKey,
            href: `/docs/ai-tools#${chapter.id}`
        }))
    },
    {
        titleKey: pagesContent.examples.titleKey,
        href: "/docs/examples",
        icon: ExamplesPageIcon,
        innerLinks: pagesContent.examples.chapters.map((chapter) => ({
            titleKey: chapter.titleKey,
            href: `/docs/examples#${chapter.id}`
        }))
    },
    {
        titleKey: pagesContent.aboutUs.titleKey,
        href: "/docs/about-us",
        icon: AboutUsPageIcon,
        innerLinks: pagesContent.aboutUs.chapters.map((chapter) => ({
            titleKey: chapter.titleKey,
            href: `/docs/about-us#${chapter.id}`
        }))
    },
];

export const chatLinks = [
    {
        titleKey: pagesContent.aiChat.titleKey,
        href: "/ai-chat",
        icon: AIChatPageIcon
    },
    {
        titleKey: pagesContent.aiImages.titleKey,
        href: "/ai-images",
        icon: AIImagesPageIcon
    },
];

export const headerLinks = [
    {
        titleKey: pagesContent.home.titleKey,
        href: "/",
        icon: HomePageIcon
    },
    ...docsLinks,
    ...chatLinks
];

export const footerLinks = [
    {
        titleKey: pagesContent.home.titleKey,
        href: "/"
    },
    docsLinks[0],
    ...chatLinks
];