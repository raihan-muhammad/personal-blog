import { Post } from "@/types/collection";
import PostCard from "./post-card";

interface PostListProps {
    posts: Post[];
    layout?: "vertical" | "horizontal";
}
const PostList = ({posts, layout = "vertical"}: PostListProps)=> {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr gap-10">
            {posts.map(post => <PostCard post={post} key={post.id} layout={layout}/>)}
        </section>
    )
}
export default PostList;