'use client'
import AuthProvider from "@/contexts/auth.context";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/ui/theme-provider";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { setTheme } = useTheme()

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
