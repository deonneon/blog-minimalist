import { generatePagination } from "../lib/pagination";
import Link from "next/link";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};
export default function Pagination({ current, pages, link }: Props) {
  const pagination = generatePagination(current, pages);
  return (
    <ul>
      {pagination.map((it, i) => (
        <li key={i}>
          {it.excerpt ? (
            "..."
          ) : (
            <Link href={link.href(it.page)} as={link.as(it.page)}>
              <span className={it.page === current ? "active" : null}>
                {it.page}
              </span>
            </Link>
          )}
        </li>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
          margin: 1rem 0 0 0;
          padding: 0;
        }
        li {
          display: inline-block;
          margin-right: 1em;
          color: #9b9b9b;
          font-size: 1.25rem;
        }
        a.active {
          color: #222;
          font-weight: bold;
        }
        @media (max-width: 769px) {
          ul {
            margin: 0.3rem 0 0 0;
          }
        }
      `}</style>
    </ul>
  );
}
