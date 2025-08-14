import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Go Michoacán - Respira Michoacán",
  description: "Plataforma turística enfocada en hacerte sentir y vivir la esencia de Michoacán.",
  icons: {
    icon: "/favicon.svg"
  },
  robots: 'index, follow',
  images: [
    {
      url: 'https://gomichoacan.com/og.jpg',
      width: 1280,
      height: 720,
    },
  ],
  canonical: 'https://gomichoacan.com/',
}

export default function AccommodationLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}>
      <Header />
      <main className="flex-grow">{children}</main>
      
    </div>
  )
}
