// File: ./src/components/BlogPreview.tsx
import Link from "next/link";
import { PostContent } from "../lib/posts";

type Props = {
  post: PostContent;
};
export default function BlogPreview({ post }: Props) {
  return (
    <div className="blog-preview">
      <img src="/blog_post.png" alt={post.title} className="blog-image" />
      <div className="blog-content">
        <time className="blog-date">{post.date}</time>
        <Link href={"/posts/" + post.slug} passHref>
          <span className="blog-title">{post.title}</span>
        </Link>
        <p className="blog-excerpt">This is just a test</p>
      </div>
      <style jsx>{`
        .blog-preview {
          display: flex;
          width: 100%;
          gap: 20px;
          margin-bottom: 40px;
          align-items: center;
          flex-direction: column;
        }
        .blog-image {
          width: 100%;
          //   border-radius: 8px;
        }
        .blog-content {
          width: 100px;
          display: flex;
          flex-direction: column;
        }
        .blog-date {
          color: #999;
          font-size: 0.8rem;
          margin-bottom: 5px;
        }
        .blog-title {
          color: #333;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
          margin-bottom: 10px;
        }
        .blog-excerpt {
          color: #666;
          font-size: 1rem;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .blog-preview {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
