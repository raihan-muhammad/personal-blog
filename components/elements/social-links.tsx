import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const SocialLinks = ({ platform, link}: {platform: string; link: string}) => {
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
        <Link href={link} target="blank">{getIcons(platform)}</Link>
    )
}

export default SocialLinks;