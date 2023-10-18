import { Metadata } from "next";
import { Footer, Header } from "../components";
import "../styles/globals.scss";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Vinicius Gouveia",
};

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
