"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

/**
 * Client component for newsletter subscription form
 */
export default function NewsletterForm() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  /**
   * Handle newsletter subscription
   */
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    
    setNewsletterSubmitting(true);
    
    try {
      // Simulate API call - replace with actual newsletter subscription logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2">
      <div className="bg-[#2E3734] rounded-xl p-6 border border-[#8AD5B7]/20 h-[400px] flex flex-col">
        <h3 className="text-lg font-bold text-[#DCE2E2] font-conthrax mb-4 flex items-center gap-2">
          <Mail className="w-5 h-5 text-[#8AD5B7]" />
          Subscribe to Newsletter
        </h3>
        <div className="flex-1 flex flex-col">
          <p className="text-[#89A096] text-sm mb-4">
            Stay updated with our latest insights, industry news, and compliance updates.
          </p>
          {!newsletterSubmitted ? (
            <form onSubmit={handleNewsletterSubmit} className="space-y-4 flex-1 flex flex-col">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#37403D] border border-[#8AD5B7]/30 rounded-lg text-[#DCE2E2] placeholder-[#89A096] focus:outline-none focus:border-[#8AD5B7] focus:ring-1 focus:ring-[#8AD5B7] transition-all font-poppins text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={newsletterSubmitting}
                className="w-full bg-[#8AD5B7] text-[#1E2322] px-4 py-3 rounded-lg hover:bg-[#8AD5B7]/80 transition-all font-poppins font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
              <div className="flex-1"></div>
              <p className="text-[#89A096] text-xs">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center py-4 flex-1 flex flex-col">
              <div className="w-12 h-12 bg-[#8AD5B7] rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-[#1E2322]" />
              </div>
              <p className="text-[#8AD5B7] font-semibold mb-2">Successfully Subscribed!</p>
              <p className="text-[#89A096] text-sm">Thank you for subscribing to our newsletter.</p>
              <div className="flex-1"></div>
              <button
                onClick={() => setNewsletterSubmitted(false)}
                className="mt-3 text-[#8AD5B7] hover:text-[#8AD5B7]/80 text-sm font-poppins"
              >
                Subscribe Another Email
              </button>
              <p className="text-[#89A096] text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
