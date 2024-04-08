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
        <img src={post.image} alt={post.title} className="thumbnail" />
        <div className="post-content">
          <div className="blog-date">
            <Date date={parseISO(post.date)} />
          </div>
          <div className="blog-title">{post.title}</div>
          <p className="blog-excerpt">
            A reflective look of the projects and works from the past 12 months.
          </p>
        </div>
        <style jsx>
          {`
            .post-item {
              cursor: pointer;
              display: flex;
              flex-direction: column;
              align-items: start;
              width: 300px;
              min-height: 400px;
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
            .blog-date {
              color: #a5a5a5;
              font-size: 0.8rem;
              margin-bottom: 5px;
            }
            .blog-title {
              color: #333;
              font-size: 1.2rem;
              font-weight: 400;
              text-decoration: none;
              margin-bottom: 40px;
            }
            a:hover .blog-title {
              color: #000;
            }
            .blog-excerpt {
              color: #a5a5a5;
              font-size: 0.7rem;
              line-height: 1.5;
            }
          `}
        </style>
      </span>
    </Link>
  );
}
