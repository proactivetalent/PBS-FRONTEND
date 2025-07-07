"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

const UserContext = createContext();

export function UserProvider({ children }) {
  // hydrate from localStorage cache for immediate UI sync
  const [user, setUser] = useState(() => {
    try {
      const s = localStorage.getItem('pbsPortalUser');
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  });
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('pbsPortalToken');
      if (!token) {
        setLoadingUser(false); // no token: hydration complete
        return;
      }
      // decode and check expiry
      let exp = 0;
      try {
        const decoded = jwtDecode(token);
        exp = decoded.exp;
      } catch {
        exp = 0;
      }
      // token.exp is in seconds
      if (Date.now() / 1000 > exp) {
        // token expired
        localStorage.removeItem('pbsPortalToken');
        localStorage.removeItem('pbsPortalUser');
        setUser(null);
        setLoadingUser(false);
        return;
      }
      // token valid: show cached user immediately
      setLoadingUser(false);
      // skipping server fetch; using cached user from localStorage
      return;
    }
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
