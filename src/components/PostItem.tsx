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
      <span>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
              font-size: 1.1em;
            }
            @media (max-width: 769px) {
              h2 {
                font-size: 1em;
              }
            }
          `}
        </style>
      </span>
    </Link>
  );
}
