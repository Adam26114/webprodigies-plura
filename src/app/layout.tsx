import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

const font = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Plura",
    description: "All in one Agency Solution",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // <ClerkProvider appearance={{ baseTheme: dark }}>
        <html lang="en">
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
        // </ClerkProvider>
    );
}
