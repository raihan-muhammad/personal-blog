import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const SocialLinks = ({ platform, link, isShareURL = false}: {platform: string; link: string; isShareURL: boolean}) => {
    const getIcons = (platform:string) => {
        switch (platform){
            case "instagram":
                return <Instagram size="18"/>
            case "youtube":
                return <Youtube size="18"/>
            case "linkedin":
                return <Linkedin size="18"/>
            case "github": 
                return <Github size="18"/>
        }
    }
    return  (
        <Link href={link} target="blank">
            <div className={`${isShareURL ? "py-2 px-3 bg-neutral-200 text-neutral-600 hover:bg-neutral-600 hover:text-neutral-100 duration-100 ease-in-out transition-colors rounded-md": ""}`}>
                {getIcons(platform)}
            </div>
        </Link>
    )
}

export default SocialLinks;