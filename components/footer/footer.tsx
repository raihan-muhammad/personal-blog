import siteConfig from "@/config/site";
import PaddingContainer from "../layout/padding-container";
import Link from "next/link";
import SocialLinks from "../elements/social-links";

const Footer = () => {
    return(
        <section className="py-6 mt-10 border-t">    
            <PaddingContainer>
                <section>
                    <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                    <p className="max-w-md mt-2 text-lg text-neutral-700">{siteConfig.description}</p>
                </section>

                <section className="flex flex-wrap justify-between gap-4 mt-6">
                    <div>
                        <p className="text-lg font-medium">Let&apos;s Connect!</p>
                        <div className="flex items-center gap-3 text-neutral-600 mt-2">
                            <SocialLinks platform="instagram" link={siteConfig.socialLinks.instagram}/>
                            <SocialLinks platform="linkedin" link={siteConfig.socialLinks.linkedin}/>
                            <SocialLinks platform="youtube" link={siteConfig.socialLinks.youtube}/>
                            <SocialLinks platform="github" link={siteConfig.socialLinks.github}/>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-neutral-400 text-right">Currently At</p>
                        <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-md shadow-md">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            {siteConfig.currentlyAt}
                        </div>
                    </div>
                </section>

                <section className="flex flex-wrap items-center justify-between gap-4 py-3 border-t mt-16">
                    <div className="text-sm text-neutral-400">
                        All rights are reserved | Copyright {new Date().getFullYear()}
                    </div>
                    <div className="text-sm">
                        Made with love by <Link href={siteConfig.socialLinks.github} className="underline underline-offset-4">@raihan-muhammad</Link>
                    </div>
                </section>
            </PaddingContainer>
        </section>
    ) 
}

export default Footer;