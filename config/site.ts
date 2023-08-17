export interface SiteConfig {
    siteName: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
        youtube: string;
        github: string;
        linkedin: string;
        instagram: string;
    }
}

const siteConfig: SiteConfig = {
    siteName: "Raihan Blog",
    description: "As good as humans are those that benefit others",
    currentlyAt: 'Indonesia',
    socialLinks: {
        youtube: 'https://www.youtube.com/c/raihanMuhammad',
        github: 'https://github.com/raihan-muhammad/',
        linkedin: 'https://www.linkedin.com/in/raihan-muhammad/',
        instagram: 'https://instagram.com/raihannmuhammad_'
    }
}

export default siteConfig