"use client";

import CustomErrorBoundary from "@/components/ErrorBoundary";
import Footer from "@/components/Footer";
import Header from "@/components/navbar/Header";
import PageLoader from "@/components/PageLoader";
import SplashScreen from "@/components/SplashScreen";
import { motion } from "framer-motion";
import { MenuProvider } from "@/context/MenuContext";
import { conthrax, gnuolane, poppins } from "@/lib/fonts";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { usePathname } from "next/navigation";
import Script from "next/script";

// export const metadata = {
//   title: "PBS | Proactive Building Solutions",
//   description: "Proactive Building Solutions",
//   icons: {
//     icon: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the favicon in the public folder
//     apple: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the apple icon in the public folder
//     ms: "/PBS Assets/Brand Language/Steel Mockup.png", // Path to the windows icon in the public folder
//   },
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-54XWJQ7ZSL"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-54XWJQ7ZSL');
  `}
        </Script>
        <title>PBS | Proactive Building Solutions</title>
        <meta name="description" content="Proactive Building Solutions" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body
        className={`${gnuolane.variable} ${conthrax.variable} ${poppins.variable} antialiased overflow-x-hidden bg-[#6C837D]`}
      >
        <UserProvider>
          <MenuProvider>
            <CustomErrorBoundary>
              <PageLoader />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                 <Header />
                {/* </motion.div> */}
                <Suspense fallback={<SplashScreen />}>{children}</Suspense>
                <Toaster position="top-right" />
                 <Footer />
              </motion.div>
            </CustomErrorBoundary>
          </MenuProvider>
        </UserProvider>
      </body>
    </html>
  );
}
