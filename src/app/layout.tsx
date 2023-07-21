import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Notification from "./components/Notification/Notification";
import "./globals.css";
import { Providers } from "./redux/Provider";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400", "700", "500", "300"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "NextJs Strapi",
  description: "An eccormerce site for all nursing equipments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-gray-300`}
      >
        <div className="flex flex-col justify-between min-h-screen container mx-auto overflow-hidden ">
          <Providers>
            <Notification />
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </div>
      </body>
    </html>
  );
}
