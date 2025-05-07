"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { Send } from 'lucide-react';

interface IFormInput {
    name: string;
    email: string;
    message: string;
}

type FormspreeError = { message: string; code?: string };

const sectionScrollVariants = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 1.0, ease: "easeInOut" },
    viewport: { once: true, amount: 0.2 }
};

export default function ContactPageContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<string | null>(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInput>();

    const FORMSPREE_FORM_ID = 'xzzrbnre';
    const githubUrl = "https://github.com/Moco23";
    const linkedinUrl = "https://www.linkedin.com/in/mom%C4%8Dilo-nikoli%C4%87-7828b4244/";
    const emailAddress = "momcilo.pos@gmail.com";
    const upworkUrl = "https://www.upwork.com/freelancers/~01108014dd3dc456ff";

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);
        try {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus("success");
                reset();
            } else {
                const responseData = await response.json();
                if (responseData && Array.isArray(responseData.errors) && responseData.errors.length > 0) {
                    const errorMessages = responseData.errors.map((e: FormspreeError) => e.message || 'Unknown Formspree error').join(', ');
                    setSubmitStatus(`Error: ${errorMessages}`);
                    console.error("Formspree submission error details:", responseData.errors);
                } else {
                    setSubmitStatus(`Form submission failed with status ${response.status}`);
                    console.error("Form submission failed:", response.status, responseData);
                }
            }
        } catch (error) {
            console.error("Network or other submission error:", error);
            setSubmitStatus("An unexpected error occurred. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <motion.h1
                className="mb-12 text-center text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Contact Me
            </motion.h1>

            <motion.div
                className="mx-auto max-w-xl"
                initial={sectionScrollVariants.initial}
                whileInView={sectionScrollVariants.whileInView}
                transition={sectionScrollVariants.transition}
                viewport={sectionScrollVariants.viewport}
            >
                <p className="mb-8 text-center text-muted-foreground">
                    Have a question or want to work together? Fill out the form below.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className={`block w-full rounded-md border-transparent bg-muted px-3 py-2 text-foreground shadow-sm transition-all placeholder:text-muted-foreground/60 focus:bg-background focus:outline-none focus:shadow-[0_2px_0_0_theme(colors.sky.400)] dark:focus:shadow-[0_2px_0_0_theme(colors.sky.400)] ${errors.name ? 'shadow-[0_2px_0_0_theme(colors.red.500)]' : ''}`}
                            placeholder="Your Name"
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className={`block w-full rounded-md border-transparent bg-muted px-3 py-2 text-foreground shadow-sm transition-all placeholder:text-muted-foreground/60 focus:bg-background focus:outline-none focus:shadow-[0_2px_0_0_theme(colors.sky.400)] dark:focus:shadow-[0_2px_0_0_theme(colors.sky.400)] ${errors.email ? 'shadow-[0_2px_0_0_theme(colors.red.500)]' : ''}`}
                            placeholder="your.email@example.com"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                            })}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            className={`block w-full rounded-md border-transparent bg-muted px-3 py-2 text-foreground shadow-sm transition-all placeholder:text-muted-foreground/60 focus:bg-background focus:outline-none focus:shadow-[0_2px_0_0_theme(colors.sky.400)] dark:focus:shadow-[0_2px_0_0_theme(colors.sky.400)] ${errors.message ? 'shadow-[0_2px_0_0_theme(colors.red.500)]' : ''}`}
                            placeholder="Your message..."
                            {...register('message', { required: 'Message is required' })}
                        />
                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                    </div>

                    <div className="pt-2">
                        {submitStatus === 'success' && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-center text-green-600">
                                Message sent successfully! Thank you.
                            </motion.p>
                        )}
                        {submitStatus && submitStatus !== 'success' && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-center text-red-600">
                                {submitStatus}
                            </motion.p>
                        )}

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="relative w-full inline-flex items-center justify-center gap-2 rounded-md border border-transparent
                                       bg-gradient-to-r from-gray-900 to-black
                                       text-white
                                       dark:bg-gradient-to-r dark:from-sky-500 dark:to-primary
                                       dark:text-primary-foreground
                                       px-6 py-3 text-base font-medium shadow-lg
                                       transition-shadow hover:shadow-sky-500/40
                                       focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background
                                       disabled:opacity-50 disabled:cursor-not-allowed
                                       overflow-hidden group"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="absolute inset-0 w-full h-full
                                             bg-gradient-to-r from-black via-gray-800 to-gray-700
                                             dark:bg-gradient-to-r dark:from-primary dark:via-sky-400 dark:to-sky-600
                                             opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            </span>
                            <span className="relative z-10 flex items-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <motion.div
                                            className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        <span>Send Message</span>
                                    </>
                                )}
                            </span>
                        </motion.button>
                    </div>
                </form>
            </motion.div>

            <motion.div
                className="mt-20 pt-10 text-center"
                initial={sectionScrollVariants.initial}
                whileInView={sectionScrollVariants.whileInView}
                transition={{ ...sectionScrollVariants.transition, delay: 0.3 }}
                viewport={sectionScrollVariants.viewport}
            >
                <h2 className="mb-6 text-lg font-medium text-foreground">Or Connect Through</h2>
                <div className="flex justify-center space-x-6">
                    {[
                        { href: `mailto:${emailAddress}`, label: "Email Me", Icon: FaEnvelope },
                        { href: githubUrl, label: "GitHub Profile", Icon: FaGithub },
                        { href: linkedinUrl, label: "LinkedIn Profile", Icon: FaLinkedin },
                        { href: upworkUrl, label: "Upwork Profile", Icon: SiUpwork },
                    ].map(({ href, label, Icon }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target={href.startsWith('mailto:') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-muted-foreground transition-colors hover:text-primary"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon size={28} />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
