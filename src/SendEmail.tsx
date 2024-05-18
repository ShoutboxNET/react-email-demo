// src/sendEmail.tsx
import * as React from "react";
import Email from "./Email";
import Shoutbox from "shoutboxnet";

const sendEmail = async () => {
  const shoutbox = new Shoutbox();

  await shoutbox.sendEmail({
    from: "no-reply@shoutbox.net",
    to: "test@example.com",
    subject: "A question about the meetup",
    react: <Email url="https://example.com" />,
  });
};

export default sendEmail;

(async()=> {
  await sendEmail();  
})();
