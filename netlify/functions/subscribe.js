const { sendEmail } = require("../../src/utils/email");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { email, type } = JSON.parse(event.body);

  const subscriberEmailOptions = {
    to: email,
    subject: `Subscription to ${type}`,
    html: `<p>Thank you for subscribing to our ${type} updates!</p>`,
  };

  const notificationEmailOptions = {
    to: process.env.EMAIL_SERVER_USER,
    subject: `New ${type} Subscription`,
    html: `<p>A new user with email ${email} has subscribed to ${type} updates.</p>`,
  };

  try {
    await sendEmail(subscriberEmailOptions);
    await sendEmail(notificationEmailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        message: `Subscribed to ${type}`,
      }),
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "error",
        message: "Internal Server Error",
      }),
    };
  }
};
