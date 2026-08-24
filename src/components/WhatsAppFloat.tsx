'use client';

import { useEffect, useState } from 'react';

const WA_URL =
  'https://wa.me/212613727362?text=Hello%20Bombay%20Restaurant!%20I%20would%20like%20to%20make%20an%20inquiry.';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after slight scroll so it never covers the hero CTA on load
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-float ${visible ? 'whatsapp-float-visible' : ''}`}
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.4 2 7.7L.5 31.5l8-2c2.2 1.2 4.7 1.9 7.5 1.9 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.1c-2.5 0-4.8-.7-6.8-1.9l-.5-.3-4.8 1.2 1.3-4.6-.3-.5A12.4 12.4 0 013.6 16C3.6 9.1 9.1 3.6 16 3.6S28.4 9.1 28.4 16 22.9 28.6 16 28.6zm6.9-9.3c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9a11.6 11.6 0 01-2.1-2.7c-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.4s1.5 3.9 1.7 4.2c.2.3 2.9 4.4 7 6.2 1 .4 1.7.7 2.3.9 1 .3 1.9.3 2.6.2.8-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </a>
  );
}
