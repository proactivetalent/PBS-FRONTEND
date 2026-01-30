import { conthrax, gnuolane, poppins } from "@/lib/fonts";
import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "PBS NYC | Proactive Property Compliance & Alert System for NYC Buildings",
  description: "NYC property compliance from a liability into an asset. PBS offers monitoring, certified inspections, expediting, and owner rep services to protect your invstment along with PBS Alert System delivering real-time alerts from 45+ NYC agencies",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "PBS NYC | Proactive Property Compliance & Alert System for NYC Buildings",
    description: "NYC property compliance from a liability into an asset. PBS offers monitoring, certified inspections, expediting, and owner rep services to protect your invstment along with PBS Alert System delivering real-time alerts from 45+ NYC agencies",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PBS NYC | Proactive Property Compliance & Alert System for NYC Buildings",
    description: "NYC property compliance from a liability into an asset. PBS offers monitoring, certified inspections, expediting, and owner rep services to protect your invstment along with PBS Alert System delivering real-time alerts from 45+ NYC agencies",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gnuolane.variable} ${conthrax.variable} ${poppins.variable}`}>
      <body className="antialiased overflow-x-hidden bg-[#6C837D]">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
