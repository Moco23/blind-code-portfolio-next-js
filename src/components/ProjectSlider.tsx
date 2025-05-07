// src/components/ProjectSlider.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { sampleProjects } from '@/data/projects';

const ProjectSlider = () => {
    return (
        <section className="h-[800px] w-full overflow-hidden relative group">
            <Swiper
                modules={[EffectCreative, Autoplay, Pagination]}
                effect={'creative'}
                creativeEffect={{
                    prev: { translate: [0, '-120%', 0], rotate: [0, 0, -10], opacity: 0, },
                    next: { translate: [0, '120%', 0], rotate: [0, 0, 10], opacity: 0, },
                    limitProgress: 2,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                grabCursor={true}
                speed={800}
                navigation={false}
                pagination={{ clickable: true }}
                className="h-full w-full"
            >
                {sampleProjects.map((project, index) => (
                    <SwiperSlide key={project.id} className="relative overflow-hidden">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority={index === 0}
                            loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 md:p-10">
                            <div className="text-white">
                                <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                                <div className="mt-2 flex flex-wrap gap-1 md:gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs md:text-sm font-medium text-white">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center gap-4">
                                    {project.projectUrl && (
                                        <Link
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden text-sm font-medium text-primary-foreground rounded-md bg-gray-600 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background"
                                        >
                                            <span className="absolute left-0 top-0 h-full w-0 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                            <span className="relative z-10">View Live</span>
                                        </Link>
                                    )}
                                    {project.repoUrl && (
                                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white hover:underline">
                                            GitHub
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <style jsx global>{`
                    .swiper-pagination-bullet { background-color: rgba(255, 255, 255, 0.5); opacity: 1; transition: background-color 0.3s ease; }
                    .swiper-pagination-bullet-active { background-color: rgba(255, 255, 255, 1); }
                    .swiper-pagination { bottom: 20px !important; }
                `}</style>
            </Swiper>
        </section>
    );
};

export default ProjectSlider;
