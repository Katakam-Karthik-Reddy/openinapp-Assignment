import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Montserrat } from "next/font/google";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Sessionprovider from "./Sessionprovider";
import Loginpage from "./Login";
import Homepage from "./page";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Openinapp",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sessionprovider session={session}>
          {!session ? <Loginpage /> : <Homepage />}
        </Sessionprovider>
      </body>
    </html>
  );
}
