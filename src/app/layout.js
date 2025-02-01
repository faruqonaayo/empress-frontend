import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./ui/cartcontext";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "empress",
  description: "e-Commerce website",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={`${openSans.className}`}>
          <header className=" sticky top-0 left-0 z-50">
            <NavBar />
          </header>
          {children}
          <Footer />
          <Toaster />
        </body>
      </html>
    </CartProvider>
  );
}
