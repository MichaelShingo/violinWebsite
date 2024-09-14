const tailwindTheme = require('@/app/utils/tailwindTheme');

import React, { FC, useEffect, useRef } from 'react';
interface WavyCircleProps {
    waves1: number;
    waves2: number;
}

const WavyCircle: FC<WavyCircleProps> = ({ waves1, waves2 }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const time = useRef<number>(0);
    const animationFrameId = useRef<number | null>(null);

    const drawWavyCircle = (
        ctx: CanvasRenderingContext2D,
        centerX: number,
        centerY: number,
        radius: number,
        waves: number,
        waves2: number,
        waveHeight: number
    ) => {
        ctx.beginPath();

        const points = 360;
        const angleStep = (2 * Math.PI) / points;

        for (let i = 0; i <= points; i++) {
            const angle = i * angleStep;

            const offset = Math.sin(waves * angle + time.current * 0.02) * waveHeight;
            const offset2 = Math.sin(waves2 * angle) * waveHeight;
            const x = centerX + (radius + offset + offset2) * Math.cos(angle);
            const y = centerY + (radius + offset + offset2) * Math.sin(angle);

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.closePath();
        ctx.fillStyle = tailwindTheme.secondary;
        ctx.fill();
        ctx.lineWidth = 2;
    };

    const animate = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const radius = 150 + 10 * Math.sin(time.current * 0.003);
        const waveHeight = 15 + 5 * Math.sin(time.current * 0.02);

        const radius2 = 1 + 5 * Math.sin(time.current * 0.03);
        const waveHeight2 = 15 + 5 * Math.sin(time.current * 0.08);

        drawWavyCircle(ctx, 200, 200, radius, waves1, waves2, waveHeight);

        time.current += 1;
        animationFrameId.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        animate();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return <canvas ref={canvasRef} width={400} height={400} id="wavyCircleCanvas" />;
};

export default WavyCircle;
