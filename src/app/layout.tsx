import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import GoogleOneTap from "@/components/auth/GoogleOneTap";
import { constructMetadata, PAGE_SEO } from "@/lib/seo.config";
import JsonLd from "@/components/elements/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  ...constructMetadata({
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    url: PAGE_SEO.home.url,
  }),
  title: {
    default: PAGE_SEO.home.title,
    template: "%s | Kiiako",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <JsonLd data={getOrganizationSchema()} />
        <JsonLd data={getWebSiteSchema()} />
      </head>
      <body
          className={`${poppins.variable} font-sans antialiased`}
          style={{ fontFamily: "var(--font-poppins)" }}
      >
      <GoogleOneTap />
      <ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
      </html>
  );
}
