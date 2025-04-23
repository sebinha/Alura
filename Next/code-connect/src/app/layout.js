import { Aside } from "@/components/Aside";
import "./globals.css";
import { Prompt } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";

export const metadata = {
  title: "Code Connect",
  description: "Devs social network",
};

const prompt = Prompt({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <div>
            <Aside />
          </div>

          <div className="main-content">
            <SearchBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
