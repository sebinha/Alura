import { Aside } from "@/components/Aside";
import "./globals.css";
import { Prompt } from "next/font/google";

export const metadata = {
  title: "Code Connect",
  description: "Devs social network",
};

const prompt = Prompt({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
