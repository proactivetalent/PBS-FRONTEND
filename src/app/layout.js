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
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{__html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-563Q5G8V');
        `}} />
        {/* End Google Tag Manager */}
        
        <title>PBS | Proactive Building Solutions</title>
        <meta name="description" content="Proactive Building Solutions" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body
        className={`${gnuolane.variable} ${conthrax.variable} ${poppins.variable} antialiased overflow-x-hidden bg-[#6C837D]`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-563Q5G8V"
            height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
