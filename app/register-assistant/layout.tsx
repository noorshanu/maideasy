import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register as an Assistant",
  description: "Join MaidEazy's trusted community of household professionals. Register today and find better job opportunities for housekeeping, cooking, babysitting, and more.",
  openGraph: {
    title: "Register as an Assistant | MaidEazy",
    description: "Join MaidEazy's trusted community of household professionals. Register today and find better job opportunities for housekeeping, cooking, babysitting, and more.",
    url: "https://www.maideazy.in/register-assistant",
  },
};

export default function RegisterAssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
