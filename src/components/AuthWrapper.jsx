"use client";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "@/context/UserContext";
import PageLoader from "@/components/PageLoader";
import { useEffect } from "react";

export default function AuthWrapper({ children }) {
  const { user, loadingUser } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loadingUser) return;
    if (!user) {
      // not authenticated
      // clear any stale data
      localStorage.removeItem('pbsPortalToken');
      if (pathname !== "/portal/login") {
        router.replace("/portal/login");
      }
    } else {
      // authenticated but not a member
        if(!user?.memberuser && pathname.startsWith("/portal")) {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/portal/subscribe`;
        return;
      }
      else if (pathname === "/portal/login") {
        router.replace("/portal/dashboard");
      }
      //}
    }
  }, [user, loadingUser, router, pathname]);

  // show loader until auth status known
  if (loadingUser) {
    return <PageLoader />;
  }
  // render login page for unauthenticated users
  if (!user && pathname === "/portal/login") {
    return <>{children}</>;
  }
  // render children for authenticated users on non-login pages
  if (user && pathname !== "/portal/login") {
    return <>{children}</>;
  }

  // in all other cases (redirecting), show loader
  return <PageLoader />;
}
