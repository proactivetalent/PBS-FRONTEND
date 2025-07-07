"use client";
import React from 'react';
import AuthWrapper from '@/components/AuthWrapper';
import { Toaster } from 'react-hot-toast';

export default function PortalLayout({ children }) {
  return (
    <>
      <AuthWrapper >
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </AuthWrapper>
      
    </>
  );
}
