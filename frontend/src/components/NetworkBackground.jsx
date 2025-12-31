import { useEffect, useRef } from "react";

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;
    let particles = [];
    // Particle count scales with viewport area but capped for performance
    function computeParticleCount(w, h, dprVal) {
      const area = w * h;
      // base density: one particle per ~15k px on desktop, fewer on mobile
      const density = w < 768 ? 22000 : 15000;
      // scale with available CPU cores but clamp to a safe upper bound
      const cores = (typeof navigator !== "undefined" && navigator.hardwareConcurrency) || 4;
      const coreFactor = Math.min(2, Math.max(0.6, cores / 4));
      const raw = Math.floor((area / (density * Math.max(1, dprVal))) * coreFactor);
      const minCap = 40;
      const maxCap = 220; // allow more nodes on capable machines
      return Math.max(minCap, Math.min(maxCap, raw));
    }
    let particleCount = computeParticleCount(width, height, dpr);
    const maxDistance = width < 768 ? 150 : 220;
    const mouse = { x: null, y: null };
    let rafId;
    let frameCount = 0;

    // RGB tuples (no alpha) — we'll build rgba(...) strings where needed
    const colors = [
      "0,140,255",
      "80,200,220",
      "0,220,140",
      "255,210,80",
      "255,100,100",
    ];

    function setSize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Particle {
      constructor() {
        this.reset();
        // use smaller radii when particle counts grow to reduce fill cost
        const maxRadius = particleCount > 160 ? 1.6 : 2.6;
        const minRadius = particleCount > 160 ? 0.6 : 0.9;
        this.radius = rand(minRadius, maxRadius);
        this.colorIndex = Math.floor(Math.random() * colors.length);
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = rand(-0.25, 0.25);
        this.vy = rand(-0.25, 0.25);
      }

      draw() {
        const color = `rgba(${colors[this.colorIndex]},0.9)`;
        ctx.beginPath();
        // main dot
        ctx.fillStyle = color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        // subtle outer halo (drawn without shadow to avoid GPU-heavy ops)
        ctx.beginPath();
        ctx.fillStyle = `rgba(${colors[this.colorIndex]},0.06)`;
        const haloMultiplier = particleCount > 160 ? 3.5 : 5;
        ctx.arc(this.x, this.y, this.radius * haloMultiplier, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore && ctx.restore();
      }

      update() {
        // gentle drift
        this.x += this.vx;
        this.y += this.vy;

        // subtle perlin-like wiggle
        this.vx += rand(-0.01, 0.01);
        this.vy += rand(-0.01, 0.01);
        this.vx = Math.max(Math.min(this.vx, 0.6), -0.6);
        this.vy = Math.max(Math.min(this.vy, 0.6), -0.6);

        // Cursor attraction (magnetic effect)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220) {
            const force = (1 - dist / 220) * 0.06; // smooth attraction
            this.vx += dx * force * 0.0015;
            this.vy += dy * force * 0.0015;
          }
        }

        // wrap softly at edges
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        this.draw();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    }

    function mixColor(i, j) {
      // return rgb tuples to build rgba(...) with desired alpha later
      return { c1: colors[i], c2: colors[j] };
    }

    function drawConnections() {
      // Simplified, faster connection drawing - skip expensive calculations on every frame
      // Only draw connections between nearby particles using simple distance check
      ctx.save();
      ctx.lineWidth = 0.7;
      ctx.globalCompositeOperation = "lighter";
      
      const maxDist = maxDistance;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const distSq = dx * dx + dy * dy;
          
          if (distSq > maxDistSq) continue;
          
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDist) * 0.35;

          // Use a single, modest alpha color for connections
          ctx.strokeStyle = `rgba(80,200,220,${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      ctx.restore();
    }

    let paused = false;

    function handleVisibility() {
      paused = document.hidden;
      if (!paused) {
        // resume animation loop
        frameCount = 0;
        rafId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(rafId);
      }
    }

    function animate() {
      if (paused) return;

      // adaptively skip drawing connections more often when there are many particles
      const base = width < 768 ? 60 : 80;
      let connectionSkip = Math.max(1, Math.floor(particles.length / base));
      connectionSkip = Math.min(6, connectionSkip); // cap skipping
      frameCount++;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(5,10,20,0.22)";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => p.update());
      if (frameCount % connectionSkip === 0) drawConnections();
      rafId = requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      // Throttle mouse tracking - only update every 50ms
      const now = Date.now();
      if (!onMouseMove.lastTime || now - onMouseMove.lastTime > 50) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        onMouseMove.lastTime = now;
      }
    }

    function onMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    setSize();
    init();

    // Debounced resize for efficiency
    let resizeTimer;
    const resizeHandler = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        width = window.innerWidth;
        height = window.innerHeight;
        dpr = window.devicePixelRatio || 1;
        setSize();
        particleCount = computeParticleCount(width, height, dpr);
        init();
      }, 150);
    };

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    // start animation
    handleVisibility();

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        background: "#050814",
      }}
    />
  );
}
