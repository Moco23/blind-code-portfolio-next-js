import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
    title: 'Contact Me | Blind Code Portfolio',
    description: 'Get in touch with Momčilo Nikolić (Blind Code). Send a message via the contact form or connect through LinkedIn, GitHub, or Upwork.',
};

export default function ContactPage() {
    return <ContactPageContent />;
}
