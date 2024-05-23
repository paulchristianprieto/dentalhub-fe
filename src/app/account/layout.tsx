import LoggedInLayout from "@/components/loggedin-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LoggedInLayout>{children}</LoggedInLayout>;
}
