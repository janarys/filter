import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Filter | Moderation",
  description: "Moderation tools and guidelines for the Filter platform.",
};
const Moderation = dynamic(() => import("@/components/moderation"), {
  ssr: false, // Disables SSR for this component
});
export default function ModerationPage() {
  return <Moderation />;
}
