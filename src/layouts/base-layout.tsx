import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css"; // Перемести globals.css в src/app/styles/

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
        </div>
    );
}