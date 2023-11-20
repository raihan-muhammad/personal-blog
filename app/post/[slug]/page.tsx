import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CtaCard from "@/components/elements/cta-card";
import SocialLinks from "@/components/elements/social-links";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import { notFound } from 'next/navigation'

export const generateStaticParams = async () => {
    return DUMMY_POSTS.map(data => {
        return {
            slug: data.slug
        }
    })
}

const Page = ({ params }: { params: { slug: string }}) => {
    const posts = DUMMY_POSTS.find(data => data.slug === params.slug)
    if(!posts) notFound();
    return (
        <PaddingContainer>
            <div className="space-y-10">
                <PostHero post={posts}/>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="relative">
                        <div className="sticky flex items-center gap-5 md:flex-col top-20">
                            <div className="font-medium md:hidden">Share this content:</div>
                            <SocialLinks 
                                isShareURL
                                platform="instagram" 
                                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${posts.slug}`}`} />
                            <SocialLinks 
                                isShareURL
                                platform="youtube" 
                                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${posts.slug}`}`} 
                            />
                            <SocialLinks 
                                isShareURL
                                platform="linkedin" 
                                link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${posts.slug}`}`} 
                            />
                            <SocialLinks 
                                isShareURL
                                platform="github" 
                                link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${posts.slug}`}`} 
                            />
                        </div>
                    </div>
                    <PostBody body={posts.body} />
                </div>
                <CtaCard/>
            </div>
        </PaddingContainer>
    )
}

export default Page;