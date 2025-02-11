import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Nokora } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontNokora = Nokora({ subsets: ["khmer"], variable: "--font-khmer", weight: ["100", "300", "400", "700", "900"] });
export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
  openGraph: {
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [
      signOgImageUrl({
        title: config.blog.name,
      }),
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-neutral-100 font-sans antialiased m-auto",
          fontSans.variable,
          fontNokora.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        >
          <main>
              <Header />

            {children}
            <Footer />
            </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
