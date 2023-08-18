import { DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-list";
export const generateStaticParams = async () => {
    return DUMMY_POSTS.map((category) => {
        return {
            category: category.slug
        }
    })
}
const Page = ({params}: { params: { category: string; }}) => {
    const posts = DUMMY_POSTS.filter(post => post.category.title.toLocaleLowerCase() === params.category)
    return <PaddingContainer>
        <PostList posts={posts}/>
        </PaddingContainer>
}

export default Page;