import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
    post: Post;
}
const PostCard = ({ post}: PostProps) => {
    return (
        <Link href={`/post/${post.slug}`} className="grid grid-cols-2 gap-10 items-center">    
            <Image src={post.image} width={600} height={300} alt={post.title} className="rounded-md w-full object-cover object-center max-h-[300px]"/>
            <PostContent post={post} />
        </Link>
    )
}

export default PostCard;