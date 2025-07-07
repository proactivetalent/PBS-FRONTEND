'use client';
// import axios from "axios";

// /**
//  * CSRF Handler Utility
//  *
//  * This module provides utilities for handling Cross-Site Request Forgery (CSRF) protection
//  * when making API requests to a Laravel backend with Sanctum authentication.
//  */

// /**
//  * Base URL for the Laravel backend API
//  */
// const LARAVEL_API_URL = "http://localhost:8000";

// /**
//  * Maximum number of retries for rate-limited requests
//  */
// const MAX_RETRIES = 3;

// /**
//  * Delay between retries (in milliseconds)
//  */
// const RETRY_DELAY = 1000;

// /**
//  * Sleep function for delay
//  */
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// /**
//  * Preconfigured axios instance with default settings for Laravel API communication
//  */
// const api = axios.create({
//   baseURL: LARAVEL_API_URL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//     "X-Requested-With": "XMLHttpRequest"
//   },
// });

// /**
//  * Fetches a CSRF token from Laravel Sanctum
//  */
// export const getCsrfToken = async () => {
//   try {
//     // Get the CSRF token
//     const response = await api.get("/api/csrf-token");
//     const token = response.data.token;

//     if (!token) {
//       throw new Error("Failed to retrieve CSRF token");
//     }

//     // Set the token in axios default headers
//     api.defaults.headers.common["X-CSRF-TOKEN"] = token;

//     return token;
//   } catch (error) {
//     console.error("CSRF Token Error:", error);
//     throw error;
//   }
// };

// /**
//  * Helper function to get a cookie value by name
//  */
// export const getCookie = (name) => {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) {
//     return parts.pop().split(";").shift();
//   }
//   return null;
// };

// /**
//  * Makes an API request with automatic CSRF protection
//  */
// export const apiRequest = async (method, endpoint, data = null) => {
//   try {
//     // Get the CSRF token
//     const token = await getCsrfToken();

//     // Ensure endpoint starts with /api/
//     const normalizedEndpoint = endpoint.startsWith('/api/') ? endpoint : `/api${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

//     // Make the API request
//     const response = await fetch(`${LARAVEL_API_URL}${normalizedEndpoint}`, {
//       method: method.toUpperCase(),
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'X-Requested-With': 'XMLHttpRequest',
//         'Authorization': `Bearer ${localStorage.getItem("pbsPortalToken")}`,
//         'X-CSRF-TOKEN': token
//       },
//       body: data ? JSON.stringify(data) : null,
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error('Server Error Response:', errorText);
//       throw new Error('Server error. Please try again later.');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error(`${method} Request Error:`, error);
//     throw error;
//   }
// };

// export default api; 

/**
 * Session-guard login: gets CSRF cookie then posts to /portal/login
 */

import axios from "axios";

const LARAVEL = process.env.NEXT_PUBLIC_API_URL || "https://pbsnyc-production.up.railway.app";

// 1) Global Axios defaults
axios.defaults.baseURL        = LARAVEL;
axios.defaults.withCredentials = true; 
axios.defaults.xsrfCookieName  = "XSRF-TOKEN";
axios.defaults.xsrfHeaderName  = "X-XSRF-TOKEN";

// 2) Get Sanctum’s CSRF & session cookies
export function getCsrfCookie() {
  return axios.get("/sanctum/csrf-cookie");
}

export async function login(email, password) {
  await getCsrfCookie();
  let res = await axios.post("/portal/login", { email, password });
  return res
}

/**
 * Calls a portal-guarded endpoint under /portal/**
 */
export function portalRequest(method, url, data) {
  return axios({ method, url: `/portal${url}`, data });
}

/**
 * Calls a JWT-guarded endpoint under /api/**
 */
export function apiRequest(method, url, data) {
  return axios({
    method,
    url: `/api${url}`,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('pbsPortalToken')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
        },
        credentials: 'include',
    });
}