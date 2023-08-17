import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
    post: Post;
    layout?: "vertical" | "horizontal";
}
const PostCard = ({ post, layout = "horizontal" }: PostProps) => {
    return (
        <Link 
            href={`/post/${post.slug}`} 
            className={`${layout === "horizontal" ? "grid grid-cols-2 gap-10 items-center": "space-y-10"}`}>    
                <Image src={post.image} width={600} height={300} alt={post.title} className="rounded-md w-full object-cover object-center max-h-[300px]"/>
                <PostContent post={post} />
        </Link>
    )
}

export default PostCard;