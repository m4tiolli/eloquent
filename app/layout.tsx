import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eloquent",
  description: "Get full control of your bills",
  icons: {
    shortcut: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
