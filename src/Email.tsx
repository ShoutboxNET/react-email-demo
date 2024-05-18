// src/Email.tsx
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
