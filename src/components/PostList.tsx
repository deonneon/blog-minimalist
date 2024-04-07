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
    <div className={"container"}>
      <div className={"posts"}>
        <div className={"post-scroll-container"}>
          {posts.map((it, i) => (
            <div key={i} className={"post-wrapper"}>
              <PostItem post={it} />
            </div>
          ))}
        </div>
        {/* <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        /> */}
      </div>
      {/* <ul className={"categories"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul> */}
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
          overflow: hidden;
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
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
