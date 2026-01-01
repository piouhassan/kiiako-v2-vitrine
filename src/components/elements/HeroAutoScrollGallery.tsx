'use client';

import { useEffect, useRef, useState } from 'react';

// Images dynamiques depuis Unsplash - Personnes noires vendant dans des boutiques
const images = [
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop&q=85', // Black woman in retail store
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=85', // Shop display
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop&q=85', // Fashion retail
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop&q=85', // Black entrepreneur
    'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop&q=85', // Retail business
    'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&h=600&fit=crop&q=85', // Shop owner
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=600&fit=crop&q=85', // Business owner
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&q=85', // Store shelves
];

interface HeroAutoGalleryProps {
    speed?: number; // Vitesse du scroll (pixels par frame, défaut: 0.5)
    direction?: 'left' | 'right'; // Direction du scroll
}

export default function HeroAutoGallery({
    speed = 0.5,
    direction = 'left'
}: HeroAutoGalleryProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const offset = useRef(0);
    const [paused, setPaused] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(() => {
        const scrollSpeed = direction === 'left' ? -speed : speed;

        const animate = () => {
            if (!paused && trackRef.current) {
                offset.current += scrollSpeed;

                // Boucle infinie
                const trackWidth = trackRef.current.scrollWidth / 2;
                if (direction === 'left' && Math.abs(offset.current) >= trackWidth) {
                    offset.current = 0;
                } else if (direction === 'right' && offset.current >= trackWidth) {
                    offset.current = 0;
                }

                trackRef.current.style.transform = `translateX(${offset.current}px)`;
            }

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [paused, speed, direction]);

    return (
        <div className="hero-gallery">
            <div ref={trackRef} className="hero-track">
                {Array.from({ length: 8 }).map((src, i) => (
                    <div
                        key={i}
                        className={`hero-item ${hoveredIndex === i ? 'hovered' : ''}`}
                        onMouseEnter={() => {
                            setPaused(true);
                            setHoveredIndex(i);
                        }}
                        onMouseLeave={() => {
                            setPaused(false);
                            setHoveredIndex(null);
                        }}
                    >
                        <div className="hero-media">
                            <img
                                src={`/hero/${i + 1}.jpg`}
                                alt={`Boutique ${i + 1}`}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
