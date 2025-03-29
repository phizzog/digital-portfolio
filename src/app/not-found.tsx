'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to home page after 3 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-dark text-white p-4">
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Page Not Found</h1>
      <p className="text-lg md:text-xl mb-8 text-center">
        Oops! The page you&apos;re looking for doesn&apos;t seem to exist.
      </p>
      <p className="text-neutral-medium mb-8">
        Redirecting to home page in 3 seconds...
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-primary-blue text-white rounded-lg font-heading font-bold hover:bg-primary-blue/80 transition-colors"
      >
        Go to Home Page
      </Link>
    </div>
  );
} 