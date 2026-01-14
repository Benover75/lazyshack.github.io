import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverArgs {
    threshold?: number;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
    threshold = 0.1,
    rootMargin = '0px',
    freezeOnceVisible = true,
}: UseIntersectionObserverArgs = {}) {
    const elementRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = elementRef.current;
        if (!node) return;

        if (freezeOnceVisible && isVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                if (freezeOnceVisible && isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                } else {
                    setIsVisible(isIntersecting);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, freezeOnceVisible, isVisible]);

    return { elementRef, isVisible };
}
