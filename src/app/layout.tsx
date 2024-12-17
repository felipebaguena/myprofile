import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bangers } from "next/font/google";
import StyledComponentsRegistry from '../lib/registry';
import { Providers } from './providers'

const geist = Geist({
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bangers',
});

export const metadata: Metadata = {
  title: "Mi Portfolio",
  description: "Portfolio personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning data-loading="true">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
          [data-loading="true"] body {
            visibility: hidden !important;
            opacity: 0 !important;
          }
        `}} />
      </head>
      <body className={`${geist.className}`} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              requestAnimationFrame(function() {
                document.documentElement.removeAttribute('data-loading');
              });
            });
          `
        }} />
      </body>
    </html>
  );
}