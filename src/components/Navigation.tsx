import Link from "next/link";
import { useRouter } from "next/router";
import Burger from "./Burger";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <span className={router.pathname === "/" ? "active" : null}>
                about
              </span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span
                className={
                  router.pathname.startsWith("/projects") ? "active" : null
                }
              >
                projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <span
                className={
                  router.pathname.startsWith("/resume") ? "active" : null
                }
              >
                resume
              </span>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <span
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                blog
              </span>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: right;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              left: 0; // Add this line
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: center;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                width: 7rem;
                display: block;
              }
              ul {
                opacity: 1;
                width: 7rem;
                top: auto;
                left: auto; // Reset the left position for desktop
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
            @media (max-width: 769px) {
              .active ul {
                z-index: 9999;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
