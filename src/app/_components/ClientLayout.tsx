// components/ClientLayout.tsx
'use client';

import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const isSanityStudio = pathname.startsWith('/studio');

    return (
        <>
            {!isSanityStudio && <Header />}

            {children}

            {!isSanityStudio && <Footer />}
        </>
    );
}