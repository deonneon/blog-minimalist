import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../lib/config";
import { countPosts, listPostContent, PostContent } from "../../lib/posts";
import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";
import MailingList from "../../components/MailingList";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="iframe-container">
        <iframe
          src="https://dynamic-cv-web.vercel.app/projects"
          title="Resume"
          allowFullScreen
        ></iframe>
      </div>
      <MailingList />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .iframe-container {
          overflow: hidden;
          position: relative;
          margin: 0 2rem;
          width: 85vw;
          height: 90vh;
        }
        .iframe-container iframe {
          border: 0;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
