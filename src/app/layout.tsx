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
    <html lang="es" suppressHydrationWarning>
      <body className={geist.className} suppressHydrationWarning>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}