'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

export const Background = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const numStars = 100;
        const connectionDistance = 150;
        const mouseDistance = 200;

        let mouseX = -1000;
        let mouseY = -1000;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 1.5 + 0.5,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            // Background is transparent so CSS handles the dark color
            // But we can add a very subtle fill if needed, lets stick to clear for now

            // Update and draw stars
            stars.forEach((star) => {
                // Move star
                star.x += star.vx;
                star.y += star.vy;

                // Bounce off edges
                if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
                if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

                // Draw Star
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // White stars
                ctx.fill();
            });

            // Draw Connections
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);

                        // Opacity based on distance
                        const opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.2})`; // Blue tint
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw Mouse Connections
            for (let i = 0; i < stars.length; i++) {
                const dx = stars[i].x - mouseX;
                const dy = stars[i].y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    ctx.beginPath();
                    ctx.moveTo(stars[i].x, stars[i].y);
                    ctx.lineTo(mouseX, mouseY);
                    const opacity = 1 - distance / mouseDistance;
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.4})`; // Purple tint for mouse
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }


            animationFrameId = requestAnimationFrame(draw);
        };

        // Initialize
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
            style={{ background: 'radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)' }}
        />
    );
};
