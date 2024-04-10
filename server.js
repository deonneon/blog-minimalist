// Import express and cors
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { sendEmail } = require("./src/utils/email");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.post("/subscribe", async (req, res) => {
  const { email, type } = req.body;
  // Email sent to the subscriber
  const subscriberEmailOptions = {
    to: email,
    subject: `Subscription to ${type}`,
    html: `<p>Thank you for subscribing to our ${type} updates!</p>`,
  };

  // Email sent to you notifying about the new subscription
  const notificationEmailOptions = {
    to: process.env.EMAIL_SERVER_USER,
    subject: `New ${type} Subscription`,
    html: `<p>A new user with email ${email} has subscribed to ${type} updates.</p>`,
  };

  try {
    // Send confirmation email to subscriber
    await sendEmail(subscriberEmailOptions);
    // Send notification email to yourself
    await sendEmail(notificationEmailOptions);

    res.send({ status: "success", message: `Subscribed to ${type}` });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).send({ status: "error", message: "Internal Server Error" });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
