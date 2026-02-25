"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 190;

function getFramePath(index: number): string {
    const num = String(index).padStart(3, "0");
    return `/frames/ezgif-frame-${num}.jpg`;
}

export default function LogoScrollAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const loadedCountRef = useRef(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

    // Preload all frames
    useEffect(() => {
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCountRef.current++;
                // Draw first frame when loaded
                if (i === 1 && canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        drawImageCover(ctx, img, canvasRef.current.width, canvasRef.current.height);
                    }
                }
            };
            images.push(img);
        }

        imagesRef.current = images;
    }, []);

    // Handle canvas resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const dpr = window.devicePixelRatio || 1;
                const rect = canvasRef.current.getBoundingClientRect();
                canvasRef.current.width = rect.width * dpr;
                canvasRef.current.height = rect.height * dpr;
                const ctx = canvasRef.current.getContext("2d");
                if (ctx) {
                    ctx.scale(dpr, dpr);
                }
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Render frames on scroll
    useEffect(() => {
        let rafId: number;

        const unsubscribe = frameIndex.on("change", (latest) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const index = Math.min(
                    Math.max(Math.round(latest), 1),
                    TOTAL_FRAMES
                );
                const img = imagesRef.current[index - 1];
                if (img && img.complete && canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        const rect = canvasRef.current.getBoundingClientRect();
                        ctx.clearRect(0, 0, rect.width, rect.height);
                        drawImageCover(ctx, img, rect.width, rect.height);
                    }
                }
            });
        });

        return () => {
            unsubscribe();
            cancelAnimationFrame(rafId);
        };
    }, [frameIndex]);

    return (
        <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-dark-900">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900 z-10 pointer-events-none" />

                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                    style={{ display: "block" }}
                />

                {/* Bottom gradient for transition */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent z-10 pointer-events-none" />
            </div>
        </div>
    );
}

function drawImageCover(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    cw: number,
    ch: number
) {
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let sw: number, sh: number, sx: number, sy: number;

    if (canvasRatio > imgRatio) {
        sw = img.naturalWidth;
        sh = img.naturalWidth / canvasRatio;
        sx = 0;
        sy = (img.naturalHeight - sh) / 2;
    } else {
        sh = img.naturalHeight;
        sw = img.naturalHeight * canvasRatio;
        sx = (img.naturalWidth - sw) / 2;
        sy = 0;
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}
