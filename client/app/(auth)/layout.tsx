import "../globals.css";
import { Roboto } from "next/font/google";
import { ReduxProvider } from "@/redux/store";
export const metadata = {
  title: "Auth Chupi",
  description: "Generated by Next.js",
};
const inter = Roboto({ weight: "500", style: "normal", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
