import React, { useState } from "react";
import { useGesture } from "react-use-gesture";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  const originalText = "A haven for entropic ideas.";
  const [h2Text, setH2Text] = useState(originalText);

  const bind = useGesture({
    onDrag: ({ direction, velocity }) => {
      // Check for an upward swipe
      if (direction[1] < 0 && velocity > 1) {
        setH2Text("A storyline for procrastinators.");
      }
      // Check for a downward swipe
      else if (direction[1] > 0 && velocity > 1) {
        setH2Text(originalText);
      }
    },
  });

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container" {...bind()}>
        <div>
          <h2>{h2Text}</h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
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
