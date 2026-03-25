import type { Metadata } from "next";
import { LoginClient } from "./login-client";

export const metadata: Metadata = {
  title: "Filter | Administrator Login",
  description: "Secure login for Filter administrators.",
};

export default function LoginPage() {
  return <LoginClient />;
}
