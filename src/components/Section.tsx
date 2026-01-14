'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export const Section = ({ children, className = '', id, delay = 0 }: SectionProps) => {
    const { elementRef, isVisible } = useIntersectionObserver();

    return (
        <section
            ref={elementRef}
            id={id}
            className={`transition-all duration-1000 ease-out transform section-transition ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} ${className}`}
            style={{ '--section-delay': `${delay}ms` } as React.CSSProperties}
        >
            {children}
        </section>
    );
};
