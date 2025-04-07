import React, { useRef, useEffect, ReactNode, useState } from "react";
import { useSpring, animated, SpringValue, to } from "@react-spring/web";

interface AnimationConfig {
  mass?: number;
  tension?: number;
  friction?: number;
  precision?: number;
  velocity?: number;
  clamp?: boolean;
  duration?: number;
  easing?: (t: number) => number;
}

interface FollowCursorProps {
  children: ReactNode;
  className?: string;
  animationConfig?: AnimationConfig;
  hoverScale?: number;
  offsetX?: number;
  rotationFactor?: number;
  perspective?: string;
  zoomSensitivity?: number;
  wheelConfig?: AnimationConfig;
  enableTilt?: boolean;
  enableZoom?: boolean;
  enableDrag?: boolean;
}

const calcX = (
  y: number,
  ly: number,
  containerCenterY: number,
  rotationFactor: number
): number => -(y - ly - containerCenterY) / rotationFactor;

const calcY = (
  x: number,
  lx: number,
  containerCenterX: number,
  rotationFactor: number
): number => (x - lx - containerCenterX) / rotationFactor;

const FollowCursor: React.FC<FollowCursorProps> = ({
  children,
  className = "",
  animationConfig = { mass: 5, tension: 350, friction: 40 },
  hoverScale = 1.1,
  offsetX = 20,
  rotationFactor = 20,
  perspective = "300px",
  zoomSensitivity = 200,
  wheelConfig = { mass: 1, tension: 200, friction: 30 },
  enableTilt = true,
  enableZoom = true,
  enableDrag = true,
}) => {
  const [isClient, setIsClient] = useState(false);
  const domTarget = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchState = useRef({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = (): boolean => {
    if (!isClient) return false;
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  const [{ x, y, rotateX, rotateY, rotateZ, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    x: 0,
    y: 0,
    config: animationConfig,
  }));

  const [{ wheelY }, wheelApi] = useSpring(() => ({
    wheelY: 0,
    config: wheelConfig,
  }));

  // Mouse movement logic
  useEffect(() => {
    if (!isClient || isMobile() || !enableTilt) return;

    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerCenterX = rect.width / 2;
      const containerCenterY = rect.top + rect.height / 2;

      const px = event.clientX;
      const py = event.clientY;

      const xPos = px - containerCenterX;
      const yPos = py - containerCenterY;

      let extraOffset = 0;
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        extraOffset = rect.width * 0.01; // 1% for larger screens (reduce gap)
      } else if (screenWidth >= 1024) {
        extraOffset = rect.width * 0.02; // 2% for medium screens
      } else if (screenWidth >= 768) {
        extraOffset = rect.width * 0.04; // 4% for smaller screens
      } else {
        extraOffset = rect.width * 0.06; // 6% for mobile (reduce gap further)
      }

      api.start({
        x: xPos + offsetX + extraOffset,
        y: yPos,
        rotateX: enableTilt
          ? calcX(py, y.get(), containerCenterY, rotationFactor)
          : 0,
        rotateY: enableTilt
          ? calcY(px, x.get(), containerCenterX, rotationFactor)
          : 0,
        scale: hoverScale,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [api, y, x, offsetX, hoverScale, enableTilt, rotationFactor, isClient]);

  const wheelTransform = (yValue: number): string => {
    if (!isClient || !containerRef.current) return "translateY(0)";

    const imgHeight = containerRef.current.offsetHeight;
    return `translateY(${
      -imgHeight * (yValue < 0 ? 6 : 1) - (yValue % (imgHeight * 5))
    }px)`;
  };

  if (!isClient) {
    return (
      <div className={`container ${className}`} ref={containerRef}>
        <div
          className="relative w-[200px] h-[50px] rounded-full bg-cover bg-center"
          style={{ backgroundImage: "url('/ViewPortfoliyoImg.png')" }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${className}`} ref={containerRef}>
      <animated.div
        ref={domTarget}
        className="absolute w-[200px] h-[50px] rounded-full shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)] transition-opacity duration-500 [will-change:transform] touch-none bg-cover bg-center px-4"
        style={{
          backgroundImage: "url('/ViewPortfoliyoImg.png')",
          transform: `perspective(${perspective})`,
          x: x as SpringValue<number>,
          y: y as SpringValue<number>,
          scale,
          rotateX: enableTilt ? (rotateX as SpringValue<number>) : 0,
          rotateY: enableTilt ? (rotateY as SpringValue<number>) : 0,
          rotateZ: enableZoom ? (rotateZ as SpringValue<number>) : 0,
        }}
      >
        <animated.div style={{ transform: wheelY.to(wheelTransform) }}>
          {children}
        </animated.div>
      </animated.div>
    </div>
  );
};

export default FollowCursor;
