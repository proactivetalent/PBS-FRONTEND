"use client";
import Footer2 from "@/components/Footer2";
import { motion } from "framer-motion";
import { MenuProvider } from "@/context/MenuContext";
import { conthrax, gnuolane, poppins } from "@/lib/fonts";
import { Suspense } from "react";
import PageLoader from "@/components/PageLoader";
import CustomErrorBoundary from "@/components/ErrorBoundary";
import Header from "@/components/navbar2/Header";

export default function DashboardLayout({ children }) {

  return (
    <MenuProvider>
      <Suspense fallback={<PageLoader />}>
        <CustomErrorBoundary>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${gnuolane.variable} ${conthrax.variable} ${poppins.variable} antialiased overflow-x-hidden bg-[#37403D] min-h-screen w-screen relative`}
          >
             <Header />
            {children}
            <Footer2 />
          </motion.div>
        </CustomErrorBoundary>
      </Suspense>
    </MenuProvider>
  );
}