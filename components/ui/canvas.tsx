// @ts-nocheck
/* Kinetic physics lines mouse trail canvas */

interface OscillatorOptions {
  phase?: number;
  offset?: number;
  frequency?: number;
  amplitude?: number;
}

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
  currentValue: number;

  constructor(opts: OscillatorOptions = {}) {
    this.phase = opts.phase || 0;
    this.offset = opts.offset || 0;
    this.frequency = opts.frequency || 0.001;
    this.amplitude = opts.amplitude || 1;
    this.currentValue = 0;
  }

  update(): number {
    this.phase += this.frequency;
    this.currentValue = this.offset + Math.sin(this.phase) * this.amplitude;
    return this.currentValue;
  }

  value(): number {
    return this.currentValue;
  }
}

class NodePoint {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
}

const config = {
  debug: true,
  friction: 0.5,
  trails: 50,
  size: 40,
  dampening: 0.025,
  tension: 0.99,
};

let ctx: CanvasRenderingContext2D | null = null;
let oscillator: Oscillator | null = null;
let pos = { x: 0, y: 0 };
let lines: LineTrail[] = [];

class LineTrail {
  spring: number;
  friction: number;
  nodes: NodePoint[];

  constructor(opts: { spring: number }) {
    this.spring = opts.spring + 0.1 * Math.random() - 0.05;
    this.friction = config.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < config.size; i++) {
      const node = new NodePoint();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update() {
    let springFactor = this.spring;
    const first = this.nodes[0];
    first.vx += (pos.x - first.x) * springFactor;
    first.vy += (pos.y - first.y) * springFactor;

    for (let i = 0; i < this.nodes.length; i++) {
      const current = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        current.vx += (prev.x - current.x) * springFactor;
        current.vy += (prev.y - current.y) * springFactor;
        current.vx += prev.vx * config.dampening;
        current.vy += prev.vy * config.dampening;
      }
      current.vx *= this.friction;
      current.vy *= this.friction;
      current.x += current.vx;
      current.y += current.vy;
      springFactor *= config.tension;
    }
  }

  draw() {
    if (!ctx) return;
    const n = this.nodes[0].x;
    const i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);

    for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
      const current = this.nodes[a];
      const next = this.nodes[a + 1];
      const midX = 0.5 * (current.x + next.x);
      const midY = 0.5 * (current.y + next.y);
      ctx.quadraticCurveTo(current.x, current.y, midX, midY);
    }

    if (this.nodes.length > 2) {
      const secondLast = this.nodes[this.nodes.length - 2];
      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(secondLast.x, secondLast.y, last.x, last.y);
    }
    ctx.stroke();
    ctx.closePath();
  }
}

function initLines() {
  lines = [];
  for (let i = 0; i < config.trails; i++) {
    lines.push(new LineTrail({ spring: 0.45 + (i / config.trails) * 0.025 }));
  }
}

function handlePointer(e: MouseEvent | TouchEvent) {
  if ('touches' in e && e.touches.length > 0) {
    pos.x = e.touches[0].pageX;
    pos.y = e.touches[0].pageY;
  } else if ('clientX' in e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }
}

function render() {
  if (!ctx || !ctx.canvas) return;

  ctx.globalCompositeOperation = 'source-over';
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = 'lighter';

  const hue = oscillator ? Math.round(oscillator.update()) : 200;
  ctx.strokeStyle = `hsla(${hue}, 100%, 55%, 0.035)`;
  ctx.lineWidth = 8;

  for (let i = 0; i < lines.length; i++) {
    lines[i].update();
    lines[i].draw();
  }

  window.requestAnimationFrame(render);
}

function resizeCanvas() {
  if (!ctx || !ctx.canvas) return;
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

export const renderCanvas = function () {
  const el = document.getElementById('canvas') as HTMLCanvasElement | null;
  if (!el) return;
  ctx = el.getContext('2d');
  if (!ctx) return;

  oscillator = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  initLines();

  window.addEventListener('mousemove', handlePointer, { passive: true });
  window.addEventListener('touchmove', handlePointer, { passive: true });
  window.addEventListener('resize', resizeCanvas, { passive: true });

  resizeCanvas();
  render();
};
