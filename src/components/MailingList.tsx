import React, { useState } from "react";

export default function MailingList() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscription, setSubscription] = useState({
    projects: false,
    blog: false,
  });
  const [feedbackMessage, setFeedbackMessage] = useState(
    "Consider keeping up with new projects. I won't spam."
  );
  const isSubscribed = subscription.projects || subscription.blog;

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // const handleSubscribe = (type) => {
  //   if (!validateEmail(email)) {
  //     setEmailError("Please enter a valid email address.");
  //     return;
  //   }
  //   setEmailError("");

  //   console.log(`Subscribed to ${type} with email:`, email);
  //   setSubscription({ ...subscription, [type]: true });

  //   // Update feedback message upon successful subscription
  //   setFeedbackMessage(
  //     `You've successfully subscribed to ${
  //       type === "projects" ? "project" : "blog"
  //     } updates!`
  //   );
  // };

  const handleSubscribe = async (type) => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");

    try {
      const response = await fetch("http://localhost:4000/subscribe", {
        // Adjust this URL as necessary
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, type }),
      });
      const data = await response.json();
      if (data.status === "success") {
        console.log(`Subscribed to ${type} with email:`, email);
        setSubscription({ ...subscription, [type]: true });
        setFeedbackMessage(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setEmailError("Failed to subscribe. Please try again later.");
    }
  };

  const SubscriptionFeedback = () => {
    let message = "";
    if (subscription.projects && !subscription.blog) {
      message =
        "You are subscribed to project news. Want to subscribe to blog news as well?";
    } else if (!subscription.projects && subscription.blog) {
      message =
        "You are subscribed to blog news. Want to subscribe to project news as well?";
    } else if (subscription.projects && subscription.blog) {
      message = "You are subscribed to both project and blog news.";
    }
    return message ? <p>{message}</p> : null;
  };

  return (
    <div className="mailing-list-container">
      <p>{feedbackMessage || <SubscriptionFeedback />}</p>
      <form onSubmit={(e) => e.preventDefault()}>
        {!isSubscribed && (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
          />
        )}
        <div className="button-container">
          {!subscription.projects && (
            <button type="button" onClick={() => handleSubscribe("projects")}>
              Subscribe to Projects
            </button>
          )}
          {!subscription.blog && (
            <button type="button" onClick={() => handleSubscribe("blog")}>
              Subscribe to Blog
            </button>
          )}
        </div>
      </form>
      <div className="email-input-container">
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <style jsx>{`
        .mailing-list-container {
          text-align: center;
          padding: 1rem;
          border-radius: 8px;
          margin: 0.5rem auto;
          max-width: 500px;
          min-height: 80px;
        }
        form {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
        }
        input,
        button {
          padding: 0.1rem;
          margin: 0.2rem 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 80%;
          box-sizing: border-box;
          height: 40px;
        }
        input {
          padding-left: 0.5rem;
          color: rgb(0, 0, 0, 0.6);
        }
        button {
          background-color: rgba(0, 0, 0, 0.6);
          color: #fff;
          border: none;
          cursor: pointer;
          font-size: 0.8rem;
          width: 140px;
        }
        button:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        .button-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          margin-left: 0.5rem;
        }
        .button-container button:not(:last-child) {
          margin-right: 0.5rem;
        }
        .email-input-container {
          position: relative;
          width: 80%;
          max-width: 380px;
          margin: auto;
        }
        .error {
          position: absolute;
          color: #ff0000;
          width: 100%;
          top: -10px;
          left: 0;
          text-align: center;
        }
        @media (max-width: 769px) {
          .mailing-list-container {
            margin: 0;
          }
          .mailing-list-container p {
            font-size: 0.85rem;
          }
          button {
            font-size: 0.7em;
            width: 90px;
          }
        }
      `}</style>
    </div>
  );
}
