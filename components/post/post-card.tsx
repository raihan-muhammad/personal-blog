import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";

interface PostProps {
    post: Post;
}
const PostCard = ({ post}: PostProps) => {
    return (
        <Link href={`/post/${post.slug}`} className="grid grid-cols-2 gap-10">    
            <Image src={post.image} width={600} height={300} alt={post.title}/>
            <div>{post.title}</div>
        </Link>
    )
}

export default PostCard;