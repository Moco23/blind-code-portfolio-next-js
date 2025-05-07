// src/app/about/page.tsx
import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent'; // Importiraj client komponentu

export const metadata: Metadata = {
    title: 'About Momčilo Nikolić (Blind Code)',
    description: 'Learn more about Momčilo Nikolić, a frontend developer based in Zagreb, Croatia, his experience at Ingemark, and the technologies he uses, including React, Next.js, and Tailwind CSS.',
};

export default function AboutPage() {
    return <AboutPageContent />;
}
