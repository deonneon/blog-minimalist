import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <span className="post-item">
        <img src="/blog_post.png" alt={post.title} className="thumbnail" />
        <div className="post-content">
          <div className="dateText">
            <Date date={parseISO(post.date)} />
          </div>
          <div className="blog-title">{post.title}</div>
          <p className="blog-excerpt">This is just a test</p>
        </div>
        <style jsx>
          {`
            .post-item {
              cursor: pointer;
              display: flex;
              flex-direction: column;
              align-items: start;
              width: 300px;
              border-bottom: 1px solid #eee;
            }
            .thumbnail {
              width: 100%;
              object-fit: cover;
              // border-radius: 8px;
            }
            .post-content {
              margin-top: 0.5em;
            }
            .dateText {
              color: #999;
              font-size: 0.8rem;
              margin-bottom: 5px;
            }
            .blog-title {
              color: #333;
              font-size: 1rem;
              font-weight: bold;
              text-decoration: none;
              margin-bottom: 40px;
            }
            a:hover .blog-title {
              color: #000;
            }
            .blog-excerpt {
              color: #666;
              font-size: 0.7rem;
              line-height: 1.5;
            }
          `}
        </style>
      </span>
    </Link>
  );
}
