import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
    post: Post
}
const PostContent = ({ post }: PostContentProps) => {
    return (
        <section className="space-y-2">
            <div className="text-sm flex gap-2 items-center text-neutral-400">
                <div className={`
                    font-medium ${post.category.title === 'Javascript' ? "text-emerald-600": "text-blue-600"}
                `}>{post.category.title}</div>
                <div className="w-2 h-2 rounded-full bg-neutral-200"/>
                <div>{post.author.first_name} {post.author.last_name}</div>
                <div className="w-2 h-2 rounded-full bg-neutral-200"/>
                <div>{getReadingTime(post.body)}</div>
                <div className="w-2 h-2 rounded-full bg-neutral-200"/>
                <div>{getRelativeDate(post.date_created)}</div>
            </div>
            <h2 className="@lg:text-3xl text-xl @md:text-2xl font-medium">{post.title}</h2>
            <p className="text-base @lg:text-lg leading-snug text-neutral-600">{post.description}</p>
            <div className="flex items-center gap-2 pt-3">
                Read More 
                <ArrowRight size="14"/> 
            </div>
        </section>
    )
}

export default PostContent;