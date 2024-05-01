import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { dbConnect } from "@/services/mongo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/context-providers/AuthProvider";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./error";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description:
    "Appropriately integrate technically sound value with scalable infomediaries negotiate sustainable strategic theme areas",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <ErrorBoundary fallback={<Error />}>
            <main>{children}</main>
          </ErrorBoundary>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
