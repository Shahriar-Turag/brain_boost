import NavbarBottom from "../components/navbar/NavbarBottom";
import NavbarTop from "../components/navbar/NavbarTop";
// import "../";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brain Boost",
  description: "Boost your academic performance with Brain Boost",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarTop />
        <NavbarBottom />
        {children}
      </body>
    </html>
  );
}
