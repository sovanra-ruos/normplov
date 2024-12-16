import type { Metadata } from "next";
import "./globals.css";
import SessionWrapper from "./SessionProvider";
import StoreProvider from "./StoreProvider";


export const metadata: Metadata = {
  title: "NormPlov.edu.kh",
  description: "NormPlov: Find your perfect major and confindence career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body >
        <SessionWrapper>
          <StoreProvider>
            {children}
          </StoreProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}



