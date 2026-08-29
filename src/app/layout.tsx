import type { Metadata } from "next";
import { Chivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const chivo = Chivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Tyre Assist 24/7 - Mobile Tyre Fitting",
  description:
    "24/7 mobile tyre fitting that comes to you. Emergency call-outs, home & work fitting, puncture repair and battery jumpstarts across the UK.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${chivo.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-surface text-text-main font-sans antialiased overflow-x-hidden selection:bg-secondary selection:text-primary">
        {children}
      </body>
    </html>
  );
}
