import { DUMMY_POSTS } from "@/DUMMY_DATA";
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
                        <div className="sticky top-20">Share</div>
                    </div>
                <div className="h-[1000px] bg-slate-200 w-full">Post Body</div>
            </div>
        </PaddingContainer>
    )
}

export default Page;