# Shoutbox Email Sender

Welcome to the Shoutbox Email Sender repository! This project is designed to help developers easily send transactional emails using the Shoutbox API, leveraging the power of Node.js, TypeScript, and React.

## What is Shoutbox?

Shoutbox is a developer-first email transactional API that allows you to send and manage emails programmatically. With Shoutbox, you can easily integrate email functionality into your applications.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/shoutboxnet/react-email-demo.git
   cd react-email-demo
   ```

2. **Install dependencies:**

   Using npm:
   ```sh
   npm install
   ```

   Using yarn:
   ```sh
   yarn install
   ```

   Using pnpm:
   ```sh
   pnpm install
   ```

### Sending an Email

To send an email using Shoutbox, run the following command with your Shoutbox API key:

```sh
SHOUTBOX_API_KEY=MY_API_KEY npx tsx src/SendEmail.tsx
```

Replace `MY_API_KEY` with your actual Shoutbox API key.

## How It Works

This repository contains a simple example of how to send an email using Shoutbox and React components.

### Directory Structure

```
src/
│
├── Email.tsx
└── SendEmail.tsx
```

### Code Explanation

#### src/SendEmail.tsx

This file contains the main logic for sending an email.

```typescript
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
```

This script initializes the Shoutbox client and sends an email with the specified parameters. The email content is defined using a React component (`Email`).

#### src/Email.tsx

This file defines the React component for the email content.

```typescript
import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

interface EmailProps {
  url: string;
}

const Email: React.FC<EmailProps> = ({ url }) => {
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
};

export default Email;
```

This component uses the `@react-email/html` and `@react-email/button` packages to create a simple email with a button.

## Integrating Into Your Own Project

To integrate this functionality into your own project, follow these steps:

1. **Install Shoutbox and React Email packages:**

   Using npm:
   ```sh
   npm install shoutboxnet @react-email/html @react-email/button
   ```

   Using yarn:
   ```sh
   yarn add shoutboxnet @react-email/html @react-email/button
   ```

   Using pnpm:
   ```sh
   pnpm add shoutboxnet @react-email/html @react-email/button
   ```

2. **Create a React component for your email content:**

   ```typescript
   // src/MyEmail.tsx
   import * as React from "react";
   import { Html } from "@react-email/html";
   import { Button } from "@react-email/button";

   interface MyEmailProps {
     url: string;
   }

   const MyEmail: React.FC<MyEmailProps> = ({ url }) => {
     return (
       <Html lang="en">
         <Button href={url}>Click me</Button>
       </Html>
     );
   };

   export default MyEmail;
   ```

3. **Create a script to send the email:**

   ```typescript
   // src/SendMyEmail.tsx
   import * as React from "react";
   import MyEmail from "./MyEmail";
   import Shoutbox from "shoutboxnet";

   const sendMyEmail = async () => {
     const shoutbox = new Shoutbox();

     await shoutbox.sendEmail({
       from: "no-reply@yourdomain.com",
       to: "recipient@example.com",
       subject: "Your Subject Here",
       react: <MyEmail url="https://example.com" />,
     });
   };

   export default sendMyEmail;

   (async()=> {
     await sendMyEmail();  
   })();
   ```

4. **Run your email script:**

   ```sh
   SHOUTBOX_API_KEY=MY_API_KEY npx tsx src/SendMyEmail.tsx
   ```

   or integrate it in your React project. Note that this cannot work on the client side, only SSR / server. 

Replace the placeholder values with your actual data, and you're ready to send emails using Shoutbox in your project!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for using Shoutbox Email Sender! If you have any questions or need further assistance, feel free to reach out.