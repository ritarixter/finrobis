import { useEffect, useRef } from "react";
import styles from "./CursorSpeckles.module.scss";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, label, [role="button"], [contenteditable="true"]';
const MAX_PARTICLES = 280;

interface Speckle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  age: number;
  lifetime: number;
  size: number;
  opacity: number;
  drag: number;
  turbulence: number;
  phase: number;
}

export function CursorSpeckles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || !context || !finePointer.matches || reducedMotion.matches) return;

    const color =
      getComputedStyle(document.documentElement).getPropertyValue("--cl-main").trim() || "#caff33";
    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      previousX: 0,
      previousY: 0,
      directionX: 0,
      directionY: -1,
      opacity: 0,
      targetOpacity: 0,
    };
    const particles: Speckle[] = [];

    let animationFrame = 0;
    let emissionCarry = 0;
    let isRunning = false;
    let hasPointer = false;
    let lastMovementAt = 0;
    let previousTime = performance.now();

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const createParticle = (originX: number, originY: number, movementSpeed: number) => {
      if (particles.length >= MAX_PARTICLES) particles.shift();

      const perpendicularX = -pointer.directionY;
      const perpendicularY = pointer.directionX;
      const spread = (Math.random() - 0.5) * 1.35;
      const speed = 24 + Math.random() * 68 + Math.min(movementSpeed * 5, 85);
      const backwardX = -pointer.directionX;
      const backwardY = -pointer.directionY;
      const lateralJitter = (Math.random() - 0.5) * 13;
      const spawnDistance = 3 + Math.random() * 12;

      particles.push({
        x: originX - pointer.directionX * spawnDistance + perpendicularX * lateralJitter,
        y: originY - pointer.directionY * spawnDistance + perpendicularY * lateralJitter,
        velocityX: backwardX * speed + perpendicularX * spread * speed + (Math.random() - 0.5) * 12,
        velocityY: backwardY * speed + perpendicularY * spread * speed + (Math.random() - 0.5) * 12,
        age: 0,
        lifetime: 480 + Math.random() * 620,
        size: 0.75 + Math.random() * 1.5,
        opacity: (0.38 + Math.random() * 0.46) * pointer.opacity,
        drag: 0.955 + Math.random() * 0.025,
        turbulence: 10 + Math.random() * 24,
        phase: Math.random() * Math.PI * 2,
      });
    };

    const startAnimation = () => {
      if (isRunning) return;
      isRunning = true;
      previousTime = performance.now();
      animationFrame = window.requestAnimationFrame(draw);
    };

    const draw = (time: number) => {
      const delta = Math.min(time - previousTime, 32);
      const deltaSeconds = delta / 1000;
      previousTime = time;
      const timeSinceMovement = time - lastMovementAt;
      const isMoving = hasPointer && timeSinceMovement < 90;

      if (!isMoving) pointer.targetOpacity = 0;

      const oldX = pointer.x;
      const oldY = pointer.y;
      const followAmount = 1 - Math.exp(-delta * 0.018);
      const fadeAmount = 1 - Math.exp(-delta * 0.01);
      pointer.x += (pointer.targetX - pointer.x) * followAmount;
      pointer.y += (pointer.targetY - pointer.y) * followAmount;
      pointer.opacity += (pointer.targetOpacity - pointer.opacity) * fadeAmount;

      const movementX = pointer.x - oldX;
      const movementY = pointer.y - oldY;
      const movementDistance = Math.hypot(movementX, movementY);

      if (movementDistance > 0.05) {
        const nextDirectionX = movementX / movementDistance;
        const nextDirectionY = movementY / movementDistance;
        pointer.directionX += (nextDirectionX - pointer.directionX) * 0.28;
        pointer.directionY += (nextDirectionY - pointer.directionY) * 0.28;

        const directionLength = Math.hypot(pointer.directionX, pointer.directionY) || 1;
        pointer.directionX /= directionLength;
        pointer.directionY /= directionLength;
      }

      if (isMoving && pointer.opacity > 0.02) {
        const activity = pointer.targetOpacity < 0.5 ? 0.2 : 1;
        emissionCarry += (delta * 0.045 + movementDistance * 0.65) * activity;
        const emissionCount = Math.min(Math.floor(emissionCarry), 14);
        emissionCarry -= emissionCount;

        for (let index = 0; index < emissionCount; index += 1) {
          const progress = emissionCount > 1 ? index / (emissionCount - 1) : 1;
          createParticle(
            pointer.previousX + (pointer.x - pointer.previousX) * progress,
            pointer.previousY + (pointer.y - pointer.previousY) * progress,
            movementDistance
          );
        }
      }

      pointer.previousX = pointer.x;
      pointer.previousY = pointer.y;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = color;
      context.globalCompositeOperation = "lighter";

      if (!isMoving && timeSinceMovement > 300) particles.length = 0;

      const idleFade = isMoving ? 1 : Math.max(0, 1 - (timeSinceMovement - 90) / 180);

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.age += delta;

        if (particle.age >= particle.lifetime) {
          particles.splice(index, 1);
          continue;
        }

        const lifeProgress = particle.age / particle.lifetime;
        const drag = Math.pow(particle.drag, delta / 16.67);
        const turbulence = Math.sin(time * 0.004 + particle.phase) * particle.turbulence;
        particle.velocityX = particle.velocityX * drag + turbulence * deltaSeconds;
        particle.velocityY =
          particle.velocityY * drag +
          Math.cos(time * 0.0035 + particle.phase) * particle.turbulence * deltaSeconds -
          4 * deltaSeconds;
        particle.x += particle.velocityX * deltaSeconds;
        particle.y += particle.velocityY * deltaSeconds;

        const fade = Math.pow(1 - lifeProgress, 1.65);
        const ignition = Math.min(particle.age / 90, 1);
        const pulse = 0.88 + Math.sin(time * 0.006 + particle.phase) * 0.12;
        const currentSize = particle.size * (0.8 + Math.sin(lifeProgress * Math.PI) * 0.35);
        const squareSize = Math.max(currentSize * 1.75, 1);

        context.globalAlpha = particle.opacity * fade * ignition * pulse * idleFade;
        context.fillRect(
          Math.round(particle.x - squareSize / 2),
          Math.round(particle.y - squareSize / 2),
          squareSize,
          squareSize
        );
      }

      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";

      if (isMoving || particles.length > 0 || pointer.opacity > 0.003) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        isRunning = false;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") return;

      const target = event.target instanceof Element ? event.target : null;
      const isInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR));

      if (!hasPointer) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
        pointer.previousX = event.clientX;
        pointer.previousY = event.clientY;
        lastMovementAt = performance.now();
        pointer.targetOpacity = isInteractive ? 0.12 : 1;
      } else {
        const inputX = event.clientX - pointer.targetX;
        const inputY = event.clientY - pointer.targetY;
        const inputDistance = Math.hypot(inputX, inputY);

        if (inputDistance > 0.5) {
          pointer.directionX = inputX / inputDistance;
          pointer.directionY = inputY / inputDistance;
          lastMovementAt = performance.now();
          pointer.targetOpacity = isInteractive ? 0.12 : 1;
        }
      }

      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
      hasPointer = true;
      startAnimation();
    };

    const hidePattern = () => {
      hasPointer = false;
      pointer.targetOpacity = 0;
      emissionCarry = 0;
      startAnimation();
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (event.relatedTarget === null) hidePattern();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) hidePattern();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("blur", hidePattern);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", hidePattern);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
