import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div className={"post-container"}>
      <div className={"posts"}>
        <div className={"post-scroll-container"}>
          {posts.map((it, i) => (
            <div key={i} className={"post-wrapper"}>
              <PostItem post={it} />
            </div>
          ))}
        </div>
      </div>
      <div className={"footer"}>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
        <ul className={"categories"}>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .post-container {
          max-width: 100vw;
          margin: 0 auto;
          padding: 1.5rem;
          overflow: hidden;
          bottom: 40px;
          min-width: 100vw;
          z-index: 1;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          align-items: flex-start;
        }
        .post-scroll-container {
          display: flex;
          overflow-x: auto;
          -ms-overflow-style: none; /* for Internet Explorer, Edge */
          scrollbar-width: none; /* for Firefox */
        }
        .post-scroll-container::-webkit-scrollbar {
          display: none; /* for Chrome, Safari, and Opera */
        }
        .post-wrapper {
          flex: none;
          margin-right: 1.5rem;
        }
        .posts li {
          margin-bottom: 0;
        }
        .post-list {
          flex: 1 0 auto;
        }
        .categories {
          display: none;
        }
        .categories li {
          margin-right: 1.5rem;
          margin-top: 1rem;
        }
        @media (min-width: 769px) {
          .categories {
            display: block;
            display: flex;
            flex-direction: row;
            margin-right: 1.5rem;
          }
        }
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          items-align: center;
        }
      `}</style>
    </div>
  );
}
