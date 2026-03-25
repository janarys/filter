import type { Metadata } from "next";
import { FormClient } from "./form-client";

export const metadata: Metadata = {
  title: "Filter | Suppport Center",
  description: "Submit a request to our support team and tell us how we can help you.",
};

export default function FormPage() {
  return <FormClient />;
}
