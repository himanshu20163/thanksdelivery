import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ImportBsJS from "@/components/importBsJS";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "thanks delivery",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImportBsJS />
        {children}
      </body>
    </html>
  );
}
