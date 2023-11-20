import { DUMMY_POSTS } from "@/DUMMY_DATA";
import SocialLinks from "@/components/elements/social-links";
import PaddingContainer from "@/components/layout/padding-container";
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
            <PostHero post={posts}/>
                <div className="mt-10 flex gap-10">
                    <div className="relative">
                        <div className="sticky flex flex-col gap-5 top-20">
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
                <div className="h-[1000px] bg-slate-200 w-full">Post Body</div>
            </div>
        </PaddingContainer>
    )
}

export default Page;