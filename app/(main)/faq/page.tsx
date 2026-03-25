import type { Metadata } from "next";
import { FaqClient } from "./faq-client";

export const metadata: Metadata = {
  title: "Filter | FAQ",
  description: "Frequently Asked Questions about Filter - How can we help?",
};

export default function FaqPage() {
  return <FaqClient />;
}
