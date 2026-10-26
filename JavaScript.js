/**
 * Bhawana Bisht — Senior Creative Developer Portfolio Engine
 * Art Direction: Editorial Technical Obsidian & Dimensional 3D Motion
 * Features:
 *  1. Kinetic Physics Lines Mouse Trail Canvas (canvas.tsx)
 *  2. Three.js 3D Interactive Nucleus Hero
 *  3. 21st.dev Works Wheel 3D Drum Stage (works-wheel.tsx)
 *  4. 3D Interactive Tag Cloud Sphere (interactive-icon-cloud.tsx)
 *  5. Verified Projects Laboratory with 3D Tilt & Modals
 *  6. Fail-Proof Messaging System (Web3Forms + Mailto fallback)
 */

(function () {
    'use strict';

    // =========================================================================
    // 0. UTILITY FUNCTIONS
    // =========================================================================
    function escapeHtml(str) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    // =========================================================================
    // 1. VERIFIED PROJECTS REPOSITORY (Source of Truth: Resume 2026)
    // =========================================================================
    const FEATURED_WHEEL_PROJECTS = [
        {
            id: 'cloud-erp',
            title: 'AI-Powered Cloud ERP Suite',
            category: 'enterprise',
            categoryLabel: 'Enterprise & AI Systems',
            image: 'skillsphere.png',
            summary: 'Multi-tenant enterprise resource planning monorepo platform covering finance, HR, supply chain, and AI-powered demand forecasting.',
            tags: ['Next.js 16', 'React 19', 'NestJS 11', 'Prisma 7', 'PostgreSQL 17', 'Redis 7', 'FastAPI', 'Prophet', 'Docker', 'Turborepo'],
            problem: 'Modern enterprises struggle with fragmented SaaS tools, high licensing overhead, and inaccurate inventory forecasting across multi-tenant departments.',
            architecture: 'Structured Turborepo monorepo with independently developed frontend and backend packages. Tenant isolation and RBAC enforced at API and database layers. JWT authentication with refresh token rotation and Redis-backed token blacklisting. PostgreSQL 17 with indexed Prisma models and soft deletion. Predictive demand forecasting service built with FastAPI and Prophet with forecasts cached in Redis 7. Docker Compose dev environment and GitHub Actions CI/CD with Trivy container vulnerability scanning.',
            contributions: 'Architected the monorepo structure, Prisma data models, JWT token revocation workflow with Redis, and integrated the FastAPI forecasting microservice.',
            liveUrl: '',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Completed (May–July 2026)'
        },
        {
            id: 'skillsphere',
            title: 'SkillSphere: Freelance Ecosystem',
            category: 'fullstack',
            categoryLabel: 'Full-Stack & Real-Time',
            image: 'skillsphere.png',
            summary: 'Full-stack freelance marketplace supporting client, freelancer, and admin roles with AI-assisted skill matching, milestone escrow payments, and live Socket.IO rooms.',
            tags: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Socket.IO', 'Hugging Face', 'Razorpay', 'Stripe'],
            problem: 'Freelance marketplaces suffer from fraudulent payment disputes, high middleman fees, and disjointed communication during project delivery.',
            architecture: 'Role-based access control (Admin, Freelancer, Client) with Google OAuth and 2FA. Hugging Face AI embeddings for semantic skill matching. Real-time project collaboration channels using Socket.IO backed by Redis pub/sub. Milestone-based escrow payment workflows integrated with Razorpay and Stripe webhook listeners.',
            contributions: 'Engineered backend REST APIs, WebSocket messaging rooms, escrow payment state machines, and real-time client UI in React and TypeScript.',
            liveUrl: 'https://skillsphere-phi.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Live Production'
        },
        {
            id: 'naturemind',
            title: 'NatureMind: AI Health Journal',
            category: 'enterprise',
            categoryLabel: 'Applied AI / Healthcare',
            image: 'NatureMind.png',
            summary: 'AI-driven emotional journaling engine transforming raw user reflections into psychological insights, sentiment trends, and ambient sound therapy.',
            tags: ['MERN Stack', 'Llama-3', 'Groq API', 'Redis Cache', 'NLP', 'Docker'],
            problem: 'Mental wellness journals lack contextual emotional analysis and immediate sensory calming feedback loops.',
            architecture: 'Node.js REST API interfacing with Meta Llama-3 hosted on Groq LPUs for sub-250ms sentiment classification. Implemented Redis caching to prevent redundant tokenization and MongoDB indices for temporal emotional graphing.',
            contributions: 'Single-handedly designed the Groq API integration schema, prompt engineering pipelines, sound therapy synchronizer, and dark-mode UI.',
            liveUrl: 'https://github.com/Bhawana0218/journal-ai-system.git',
            githubUrl: 'https://github.com/Bhawana0218/journal-ai-system.git',
            status: 'Open Source / Verified'
        },
        {
            id: 'stacklens',
            title: 'StackLens: SaaS Spend Audit',
            category: 'enterprise',
            categoryLabel: 'AI & Cloud Infrastructure',
            image: 'stacklens.png',
            summary: 'AI spend audit platform helping startups optimize SaaS and API costs with intelligent recommendations, savings analysis, and shareable reports.',
            tags: ['Next.js 14', 'Supabase', 'TailwindCSS', 'Anthropic Claude', 'OpenAI API', 'Rate Limiting'],
            problem: 'High-growth startups overspend 20–35% on underutilized SaaS seats, overlapping tools, and unmonitored cloud APIs.',
            architecture: 'Next.js App Router with Supabase PostgreSQL. Implemented dual-model evaluation comparing Claude and GPT-4 cost recommendations. Endpoint security protected by Upstash sliding-window rate limiters.',
            contributions: 'Developed the AI audit evaluation engine, secure tokenized public report generator, and dashboard metrics.',
            liveUrl: 'https://stacklens-sooty.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Live Platform'
        },
        {
            id: 'monex',
            title: 'Monex: Financial Platform',
            category: 'fullstack',
            categoryLabel: 'Fintech / Full-Stack',
            image: 'Monex.png',
            summary: 'Financial services dashboard with Supabase backend, interactive Recharts analytics, and secure data workflows.',
            tags: ['React', 'Supabase', 'TailwindCSS', 'Recharts', 'Framer Motion', 'Sonner'],
            problem: 'Providing clear, responsive personal ledger metrics and transaction records without complex banking navigation.',
            architecture: 'React frontend connected to Supabase PostgreSQL database with Row-Level Security (RLS) policies ensuring users access strictly their own ledger data.',
            contributions: 'Built dynamic portfolio value charts, transaction form validations, and responsive dark-mode UI.',
            liveUrl: 'https://monex-website-psi.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Live Application'
        },
        {
            id: 'quay',
            title: 'QUAY: Restaurant Platform',
            category: 'web',
            categoryLabel: 'Modern Web / Systems',
            image: 'Quay.png',
            summary: 'Culinary marketplace and reservation platform featuring interactive dining menus, image galleries, and table scheduling workflows.',
            tags: ['MERN Stack', 'TailwindCSS', 'JavaScript', 'Lucide React', 'UI/UX Design'],
            problem: 'Hospitality brands require seamless visual storytelling combined with frictionless digital booking systems.',
            architecture: 'Modular component architecture with responsive image preloading, animated dish selection states, and client-side reservation validation.',
            contributions: 'Full frontend development, menu navigation logic, responsive styling, and brand identity design.',
            liveUrl: 'https://quay-restaurant-csgj.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Live Web App'
        }
    ];

    const ALL_PROJECTS = [
        ...FEATURED_WHEEL_PROJECTS,
        {
            id: 'technova',
            title: 'TechNova: Freelancer Marketplace',
            category: 'fullstack',
            categoryLabel: 'Full-Stack (Vislona Internship)',
            image: 'photo16.png',
            summary: 'Freelancer marketplace developed during Vislona internship with user profiles, project bids, and scalable Node.js REST APIs.',
            tags: ['React', 'TailwindCSS', 'Node.js', 'REST APIs', 'Vercel'],
            problem: 'Creating an intuitive marketplace for freelancers to pitch directly to tech recruiters with verified skill badges.',
            architecture: 'Componentized React architecture coupled with Node.js REST endpoints that achieved 98% uptime during intern evaluations.',
            contributions: 'Engineered user profile state management, project listing feeds, and responsive layout across devices.',
            liveUrl: 'https://tech-nova-mocha.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Internship Production'
        },
        {
            id: 'ecosage',
            title: 'EcoSage AI (Eco-Cart)',
            category: 'enterprise',
            categoryLabel: 'AI / E-Commerce',
            image: 'Eco-Cart.png',
            summary: 'AI-assisted sustainable product cataloging and impact reporting platform offering verified carbon footprint insights and real-time vendor support.',
            tags: ['Full Stack', 'TailwindCSS', 'Socket.io', 'Render', 'Vercel'],
            problem: 'Eco-conscious consumers and enterprises struggle to calculate accurate environmental footprint savings.',
            architecture: 'Full-stack application deployed on Vercel and Render with Socket.io real-time chat for buyer-vendor inquiries.',
            contributions: 'Designed the interactive catalog interface, carbon metric calculator logic, and deployed the multi-tier architecture.',
            liveUrl: 'https://eco-cart-zeta.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Live Platform'
        },
        {
            id: 'electroverse',
            title: 'ElectroVerse: Tech Storefront',
            category: 'web',
            categoryLabel: 'E-Commerce / Frontend',
            image: 'ElectroVerse.png',
            summary: 'Consumer electronics e-commerce storefront with dynamic product filtering, cart drawer state management, and streamlined checkout experience.',
            tags: ['React', 'TailwindCSS', 'JavaScript', 'State Management', 'Vercel'],
            problem: 'Delivering fast, non-blocking product filtering and category transitions for tech gear with minimal layout shifts.',
            architecture: 'Optimized client-side state handling with local storage persistence for cart items and responsive grid systems.',
            contributions: 'Architected product catalog layouts, category filtering hooks, and mobile checkout drawer.',
            liveUrl: 'https://electro-verse-2g75.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Live Web App'
        },
        {
            id: 'chatbot-portfolio',
            title: 'Chatbot-AI Interactive Portfolio',
            category: 'web',
            categoryLabel: 'AI / NLP Interface',
            image: 'ai-portfolio.png',
            summary: 'Interactive AI-guided developer portfolio featuring a conversational NLP agent that answers recruiter questions about my background and code.',
            tags: ['React', 'TailwindCSS', 'Python', 'NLP Engine'],
            problem: 'Recruiters often want instant answers to specific tech stack and project questions without searching through text.',
            architecture: 'Conversational agent architecture mapping user queries into structured knowledge graph lookups about candidate experience.',
            contributions: 'Created the conversational UI layout, token streaming simulation, and intent handling.',
            liveUrl: 'https://resume-chatbot-portfolio-f174.vercel.app',
            githubUrl: 'https://github.com/Bhawana0218',
            status: 'Live Application'
        }
    ];

    // =========================================================================
    // 2. KINETIC PHYSICS LINES MOUSE TRAIL (from canvas.tsx)
    // =========================================================================
    function initKineticCanvasTrail() {
        const canvas = document.getElementById('canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Check reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            canvas.style.display = 'none';
            return;
        }

        let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        let lines = [];
        let phase = 0;
        const trailsCount = window.innerWidth < 768 ? 30 : 60;

        class KineticLine {
            constructor(spring) {
                this.spring = spring + 0.1 * Math.random() - 0.05;
                this.friction = 0.5 + 0.01 * Math.random() - 0.005;
                this.nodes = [];
                for (let i = 0; i < 35; i++) {
                    this.nodes.push({ x: pos.x, y: pos.y, vx: 0, vy: 0 });
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
                        current.vx += prev.vx * 0.025;
                        current.vy += prev.vy * 0.025;
                    }
                    current.vx *= this.friction;
                    current.vy *= this.friction;
                    current.x += current.vx;
                    current.y += current.vy;
                    springFactor *= 0.99;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.moveTo(this.nodes[0].x, this.nodes[0].y);
                for (let a = 1; a < this.nodes.length - 2; a++) {
                    const c = this.nodes[a];
                    const next = this.nodes[a + 1];
                    const mx = 0.5 * (c.x + next.x);
                    const my = 0.5 * (c.y + next.y);
                    ctx.quadraticCurveTo(c.x, c.y, mx, my);
                }
                ctx.stroke();
            }
        }

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resize();
        window.addEventListener('resize', resize, { passive: true });

        for (let i = 0; i < trailsCount; i++) {
            lines.push(new KineticLine(0.45 + (i / trailsCount) * 0.025));
        }

        function onPointer(e) {
            if (e.touches && e.touches.length > 0) {
                pos.x = e.touches[0].pageX;
                pos.y = e.touches[0].pageY;
            } else {
                pos.x = e.clientX;
                pos.y = e.clientY;
            }
        }

        window.addEventListener('mousemove', onPointer, { passive: true });
        window.addEventListener('touchmove', onPointer, { passive: true });

        function animateCanvas() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = 'lighter';

            phase += 0.0018;
            const hue = Math.round(285 + Math.sin(phase) * 85);
            ctx.strokeStyle = `hsla(${hue}, 100%, 55%, 0.032)`;
            ctx.lineWidth = 8;

            for (let i = 0; i < lines.length; i++) {
                lines[i].update();
                lines[i].draw();
            }

            requestAnimationFrame(animateCanvas);
        }

        animateCanvas();
    }

    // =========================================================================
    // 3. THREE.JS 3D HERO NUCLEUS ENGINE
    // =========================================================================
    function initHero3DScene() {
        const canvas = document.getElementById('heroCanvas');
        const container = document.getElementById('heroCanvasContainer');
        if (!canvas || !window.THREE) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            canvas.style.display = 'none';
            return;
        }

        let scene, camera, renderer, group, icosahedron, nucleus, ring, particles;
        let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
        let isVisible = true;

        try {
            scene = new THREE.Scene();
            const w = container.clientWidth || window.innerWidth;
            const h = container.clientHeight || window.innerHeight;

            camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
            camera.position.z = 7.5;

            renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                alpha: true,
                antialias: true,
                powerPreference: 'high-performance'
            });
            renderer.setSize(w, h);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            group = new THREE.Group();
            group.position.set(2.4, 0, 0);
            if (window.innerWidth < 768) group.position.set(0, 0, -1);
            scene.add(group);

            // Outer Icosahedron
            const icoGeo = new THREE.IcosahedronGeometry(2.1, 1);
            const icoMat = new THREE.MeshBasicMaterial({
                color: 0x00d0ff,
                wireframe: true,
                transparent: true,
                opacity: 0.35
            });
            icosahedron = new THREE.Mesh(icoGeo, icoMat);
            group.add(icosahedron);

            // Glowing Nucleus
            const nucGeo = new THREE.SphereGeometry(1.0, 20, 20);
            const nucMat = new THREE.MeshBasicMaterial({
                color: 0x8c54ff,
                wireframe: true,
                transparent: true,
                opacity: 0.6
            });
            nucleus = new THREE.Mesh(nucGeo, nucMat);
            group.add(nucleus);

            // Orbital Ring
            const ringGeo = new THREE.TorusGeometry(3.0, 0.025, 8, 80);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0x00d0ff,
                transparent: true,
                opacity: 0.25
            });
            ring = new THREE.Mesh(ringGeo, ringMat);
            ring.rotation.x = Math.PI / 3;
            group.add(ring);

            // Floating Cyber Particles
            const count = window.innerWidth < 768 ? 50 : 120;
            const pGeo = new THREE.BufferGeometry();
            const posArr = new Float32Array(count * 3);
            for (let i = 0; i < count * 3; i += 3) {
                posArr[i] = (Math.random() - 0.5) * 12;
                posArr[i + 1] = (Math.random() - 0.5) * 10;
                posArr[i + 2] = (Math.random() - 0.5) * 8;
            }
            pGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
            particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
                color: 0x00d0ff,
                size: 0.045,
                transparent: true,
                opacity: 0.7
            }));
            scene.add(particles);

            window.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            }, { passive: true });

            function onResize() {
                if (!container) return;
                const width = container.clientWidth || window.innerWidth;
                const height = container.clientHeight || window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
                if (window.innerWidth < 768) group.position.set(0, 0, -1);
                else group.position.set(2.4, 0, 0);
            }
            window.addEventListener('resize', onResize, { passive: true });

            const heroSec = document.getElementById('home');
            if ('IntersectionObserver' in window && heroSec) {
                new IntersectionObserver((entries) => {
                    isVisible = entries[0].isIntersecting;
                }, { threshold: 0.05 }).observe(heroSec);
            }

            document.addEventListener('visibilitychange', () => {
                isVisible = !document.hidden;
            });

            function render() {
                if (isVisible) {
                    targetX += (mouseX - targetX) * 0.04;
                    targetY += (mouseY - targetY) * 0.04;
                    icosahedron.rotation.x += 0.0035;
                    icosahedron.rotation.y += 0.005;
                    nucleus.rotation.y -= 0.007;
                    ring.rotation.z += 0.002;
                    particles.rotation.y += 0.0006;
                    group.rotation.y = targetX * 0.45;
                    group.rotation.x = -targetY * 0.35;
                    renderer.render(scene, camera);
                }
                requestAnimationFrame(render);
            }
            render();
        } catch (err) {
            console.warn('Three.js hero bypassed:', err);
        }
    }

    // =========================================================================
    // 4. 21ST.DEV 3D WORKS WHEEL DRUM (works-wheel.tsx implementation)
    // =========================================================================
    function initWorksWheelDrum() {
        const stage = document.getElementById('wheelStage');
        const drum = document.getElementById('wheelDrum');
        const activeTitle = document.getElementById('wheelTitleText');
        const activeDesc = document.getElementById('wheelTitleDesc');
        const activeCounter = document.getElementById('wheelCounter');
        const activeTags = document.getElementById('wheelTechTags');
        const inspectBtn = document.getElementById('wheelInspectBtn');
        const liveLink = document.getElementById('wheelLiveLink');
        const prevBtn = document.getElementById('wheelPrevBtn');
        const nextBtn = document.getElementById('wheelNextBtn');
        const progressBar = document.getElementById('wheelProgressBar');

        if (!stage || !drum) return;

        const items = FEATURED_WHEEL_PROJECTS;
        const count = items.length;
        const last = Math.max(count - 1, 0);

        // Mathematical Constants from works-wheel.tsx
        const CARD_H = 0.52;
        const CARD_MAX_W = 0.42;
        const CARD_RATIO = 1.4;
        const STEP = 40;
        const DRUM = 2.22;
        const LENS = 2.7;
        const RING_R = 1.14;
        const BOW = 1.82;
        const CULL = 1.6;
        const WHEEL_UNITS = 850;
        const DRAG_UNITS = 380;
        const EASE = 0.12;

        let turn = 0;
        let target = 0;
        let activeIndex = 0;
        let dragStartY = null;
        let cardElements = [];
        let isUserInteracting = false;
        let lastInteractionTime = Date.now();

        function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }
        function lerp(a, b, t) { return a + (b - a) * t; }
        function rad(deg) { return (deg * Math.PI) / 180; }
        function bowAt(drumDeg, bow) { return -bow * (1 - Math.cos(rad(drumDeg))); }

        function place(ringDeg, drumDeg, ringR, drumR, bow, m) {
            return `translateX(${m * bowAt(drumDeg, bow)}px) rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px) rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`;
        }

        // Render card elements inside drum
        drum.innerHTML = items.map((item, i) => `
            <div class="wheel-card" id="wheelCard-${i}" data-index="${i}">
                <div class="wheel-card-inner">
                    <img src="${item.image}" alt="${item.title}" draggable="false">
                    <div class="wheel-card-badge">
                        <span>${item.categoryLabel}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                </div>
            </div>
        `).join('');

        cardElements = Array.from(drum.querySelectorAll('.wheel-card'));

        function updateActiveDetails(idx) {
            const p = items[idx];
            if (!p) return;
            if (activeCounter) activeCounter.textContent = `0${idx + 1} // 0${count}`;
            if (activeTitle) activeTitle.textContent = p.title;
            if (activeDesc) activeDesc.textContent = p.summary;
            if (activeTags) {
                activeTags.innerHTML = p.tags.slice(0, 6).map(t => `<span>${t}</span>`).join('');
            }
            if (inspectBtn) {
                inspectBtn.onclick = () => openProjectModal(p.id);
            }
            if (liveLink) {
                if (p.liveUrl) {
                    liveLink.href = p.liveUrl;
                    liveLink.style.display = 'inline-flex';
                    liveLink.textContent = 'Live Demo';
                } else {
                    liveLink.href = p.githubUrl;
                    liveLink.style.display = 'inline-flex';
                    liveLink.textContent = 'GitHub Repo';
                }
            }

            if (progressBar) {
                progressBar.style.width = `${((idx + 1) / count) * 100}%`;
            }
        }

        function calculateMetrics() {
            const w = stage.clientWidth || window.innerWidth;
            const h = stage.clientHeight || 600;
            const widthLimit = w <= 600 ? 0.78 : w <= 1024 ? 0.56 : CARD_MAX_W;
            const cardW = Math.min(h * CARD_H * CARD_RATIO, w * widthLimit);
            const cardH = cardW / CARD_RATIO;
            const drumR = cardH * DRUM;
            const ringR = cardH * RING_R;
            const ringScale = count ? clamp((((2 * Math.PI * ringR) / count) * 0.82) / (cardW || 1), 0.16, 1) : 1;

            return {
                cardW,
                cardH,
                ringR,
                ringScale,
                drumR,
                bow: cardH * BOW,
                depth: cardH * LENS
            };
        }

        // Animation Loop for 3D drum transforms
        function stepAnimation() {
            // Subtle luxury idle auto-drift after 4 seconds of inactivity
            if (!isUserInteracting && Date.now() - lastInteractionTime > 4000) {
                target += 0.0015;
                if (target > last + 1.2) target = 1;
            }

            const metrics = calculateMetrics();
            stage.style.perspective = `${metrics.depth}px`;

            const gap = target - turn;
            if (Math.abs(gap) < 0.0005) turn = target;
            else turn += gap * EASE;

            const t = turn;
            const m = clamp(t, 0, 1);
            const pos = Math.max(0, t - 1);

            drum.style.transform = `translateZ(${-m * metrics.drumR}px)`;

            for (let i = 0; i < count; i++) {
                const d = i - pos;
                const drumDeg = d * STEP;
                const card = cardElements[i];
                if (card) {
                    card.style.width = `${metrics.cardW}px`;
                    card.style.height = `${metrics.cardH}px`;
                    card.style.marginLeft = `${-metrics.cardW / 2}px`;
                    card.style.marginTop = `${-metrics.cardH / 2}px`;
                    card.style.transform = place(d * (360 / count), drumDeg, metrics.ringR, metrics.drumR, metrics.bow, m);
                    card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? '0' : '1';
                    card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));

                    const inner = card.firstElementChild;
                    if (inner) {
                        inner.style.transform = `scale(${lerp(metrics.ringScale, 1, m)})`;
                    }
                }
            }

            const nearIndex = clamp(Math.round(pos), 0, last);
            if (nearIndex !== activeIndex) {
                activeIndex = nearIndex;
                updateActiveDetails(activeIndex);
                playSound('drum');
            }

            requestAnimationFrame(stepAnimation);
        }

        // Scroll wheel event
        stage.addEventListener('wheel', (e) => {
            lastInteractionTime = Date.now();
            const next = target + e.deltaY / WHEEL_UNITS;
            if (next > 0 && next < last + 1) {
                e.preventDefault();
            }
            target = clamp(next, 0, last + 1);
        }, { passive: false });

        // Pointer drag event
        stage.addEventListener('pointerdown', (e) => {
            isUserInteracting = true;
            lastInteractionTime = Date.now();
            dragStartY = e.clientY;
            stage.setPointerCapture(e.pointerId);
        });

        stage.addEventListener('pointermove', (e) => {
            if (dragStartY === null) return;
            lastInteractionTime = Date.now();
            const delta = dragStartY - e.clientY;
            target = clamp(target + delta / DRAG_UNITS, 0, last + 1);
            dragStartY = e.clientY;
        });

        stage.addEventListener('pointerup', () => {
            isUserInteracting = false;
            lastInteractionTime = Date.now();
            dragStartY = null;
            if (target > 1) target = Math.round(target);
        });

        stage.addEventListener('mouseenter', () => { isUserInteracting = true; });
        stage.addEventListener('mouseleave', () => { isUserInteracting = false; lastInteractionTime = Date.now(); });

        // Prev & Next Buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                lastInteractionTime = Date.now();
                target = clamp(Math.round(target) - 1, 1, last + 1);
                playSound('drum');
            });
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                lastInteractionTime = Date.now();
                target = clamp(Math.round(target) + 1, 1, last + 1);
                playSound('drum');
            });
        }

        // Keyboard navigation
        stage.addEventListener('keydown', (e) => {
            lastInteractionTime = Date.now();
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                target = clamp(Math.round(target) + 1, 0, last + 1);
                playSound('drum');
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                target = clamp(Math.round(target) - 1, 0, last + 1);
                playSound('drum');
            }
        });

        // Click card to open modal
        cardElements.forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.getAttribute('data-index'), 10);
                openProjectModal(items[idx].id);
            });
        });

        // Initialize state
        target = 1; // start at front card
        updateActiveDetails(0);
        stepAnimation();
    }

    // =========================================================================
    // 5. 3D INTERACTIVE TAG CLOUD SPHERE (interactive-icon-cloud.tsx engine)
    // =========================================================================
    function init3DTagCloudSphere() {
        const canvas = document.getElementById('sphereCloudCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const tags = [
            'Next.js 16', 'React 19', 'TypeScript', 'NestJS 11', 'FastAPI', 'Python',
            'PostgreSQL 17', 'Prisma 7', 'Redis 7', 'Docker', 'MongoDB', 'Socket.IO',
            'Tailwind CSS', 'Turborepo', 'Llama-3', 'Groq API', 'Prophet', 'OpenAI',
            'Claude', 'Hugging Face', 'Git & GitHub', 'JWT & RBAC', 'System Design'
        ];

        let width, height, radius;
        let points = [];
        let angleX = 0.002;
        let angleY = 0.003;
        let mouseX = 0;
        let mouseY = 0;

        function resize() {
            width = canvas.parentElement.clientWidth || 800;
            height = canvas.parentElement.clientHeight || 420;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            radius = Math.min(width, height) * 0.38;
            initPoints();
        }

        function initPoints() {
            points = [];
            const count = tags.length;
            for (let i = 0; i < count; i++) {
                const theta = Math.acos(-1 + (2 * i) / count);
                const phi = Math.sqrt(count * Math.PI) * theta;

                points.push({
                    text: tags[i],
                    x: radius * Math.sin(theta) * Math.cos(phi),
                    y: radius * Math.sin(theta) * Math.sin(phi),
                    z: radius * Math.cos(theta),
                    scale: 1,
                    alpha: 1
                });
            }
        }

        resize();
        window.addEventListener('resize', resize, { passive: true });

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = (e.clientX - rect.left - width / 2) * 0.0001;
            mouseY = (e.clientY - rect.top - height / 2) * 0.0001;
            angleY = mouseX;
            angleX = -mouseY;
        }, { passive: true });

        canvas.addEventListener('mouseleave', () => {
            angleX = 0.002;
            angleY = 0.003;
        }, { passive: true });

        function rotate3D(p, ax, ay) {
            // Rotate around X
            const cosX = Math.cos(ax);
            const sinX = Math.sin(ax);
            const y1 = p.y * cosX - p.z * sinX;
            const z1 = p.z * cosX + p.y * sinX;

            // Rotate around Y
            const cosY = Math.cos(ay);
            const sinY = Math.sin(ay);
            const x2 = p.x * cosY + z1 * sinY;
            const z2 = z1 * cosY - p.x * sinY;

            p.x = x2;
            p.y = y1;
            p.z = z2;
        }

        function renderSphere() {
            ctx.clearRect(0, 0, width, height);

            points.forEach(p => {
                rotate3D(p, angleX, angleY);

                const perspective = 300 / (300 + p.z);
                const projX = p.x * perspective + width / 2;
                const projY = p.y * perspective + height / 2;
                const alpha = (p.z + radius) / (2 * radius);

                ctx.save();
                ctx.font = `bold ${Math.round(11 + perspective * 3)}px "JetBrains Mono", monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Glowing background capsule
                const textWidth = ctx.measureText(p.text).width;
                ctx.fillStyle = `rgba(16, 22, 44, ${Math.max(alpha * 0.7, 0.2)})`;
                ctx.strokeStyle = `rgba(0, 208, 255, ${Math.max(alpha * 0.5, 0.15)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.roundRect(projX - textWidth / 2 - 8, projY - 11, textWidth + 16, 22, 5);
                ctx.fill();
                ctx.stroke();

                // Text
                ctx.fillStyle = p.z > 0 ? '#00d0ff' : `rgba(200, 215, 255, ${Math.max(alpha, 0.4)})`;
                ctx.fillText(p.text, projX, projY);
                ctx.restore();
            });

            requestAnimationFrame(renderSphere);
        }

        renderSphere();
    }

    // =========================================================================
    // 6. PROJECTS LABORATORY GRID & 3D TILT CARDS WITH INSTANT SEARCH
    // =========================================================================
    function initProjectsLaboratory() {
        const grid = document.getElementById('projectsGrid');
        const filterTabs = document.querySelectorAll('.filter-tab');
        const searchInput = document.getElementById('projectSearchInput');
        const clearBtn = document.getElementById('clearSearchBtn');
        const statsBadge = document.getElementById('searchStatsBadge');

        if (!grid) return;

        let activeCategory = 'all';
        let searchQuery = '';

        function renderGrid() {
            let filtered = ALL_PROJECTS;

            if (activeCategory !== 'all') {
                filtered = filtered.filter(p => p.category === activeCategory);
            }

            if (searchQuery) {
                filtered = filtered.filter(p => {
                    const haystack = `${p.title} ${p.summary} ${p.tags.join(' ')} ${p.categoryLabel}`.toLowerCase();
                    return haystack.includes(searchQuery);
                });
            }

            if (statsBadge) {
                statsBadge.textContent = `${filtered.length} of ${ALL_PROJECTS.length} Projects`;
            }

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: rgba(14, 18, 34, 0.4); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg);">
                        <p style="color: var(--text-muted); font-size: 1.1rem; margin-bottom: 0.5rem;">No projects found matching "${escapeHtml(searchQuery)}".</p>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">Try searching for <strong>Next.js</strong>, <strong>NestJS</strong>, <strong>FastAPI</strong>, <strong>Redis</strong>, or <strong>React</strong>.</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(p => `
                <article class="project-lab-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="Open case study for ${p.title}">
                    <div class="card-media-wrap">
                        <img src="${p.image}" alt="${p.title}" loading="lazy">
                        <span class="card-cat-badge">${p.categoryLabel}</span>
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${p.title}</h3>
                        <p class="card-desc">${p.summary}</p>
                        <div class="card-tags">
                            ${p.tags.slice(0, 5).map(t => `<span class="tag-badge">${t}</span>`).join('')}
                        </div>
                        <div class="card-footer-actions">
                            ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-cta-link" onclick="event.stopPropagation()">Live Demo &rarr;</a>` : `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-cta-link" onclick="event.stopPropagation()">GitHub &rarr;</a>`}
                            <span class="inspect-affordance">Inspect Details &bull;</span>
                        </div>
                    </div>
                </article>
            `).join('');

            attachTiltListeners();
        }

        function attachTiltListeners() {
            const cards = grid.querySelectorAll('.project-lab-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const cx = rect.width / 2;
                    const cy = rect.height / 2;
                    const rx = ((y - cy) / cy) * -6;
                    const ry = ((x - cx) / cx) * 6;
                    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });

                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
                });

                card.addEventListener('click', () => {
                    openProjectModal(card.getAttribute('data-project-id'));
                });

                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openProjectModal(card.getAttribute('data-project-id'));
                    }
                });
            });
        }

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                activeCategory = tab.getAttribute('data-filter') || 'all';
                renderGrid();
                playSound('click');
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchQuery = e.target.value.trim().toLowerCase();
                if (clearBtn) clearBtn.hidden = !searchQuery;
                renderGrid();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                searchQuery = '';
                clearBtn.hidden = true;
                renderGrid();
                searchInput.focus();
                playSound('click');
            });
        }

        renderGrid();
    }

    // =========================================================================
    // 7. ACCESSIBLE CASE STUDY MODAL DIALOG
    // =========================================================================
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContentArea');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBackdrop = document.getElementById('modalBackdrop');

    window.openProjectModal = function (projectId) {
        const project = ALL_PROJECTS.find(p => p.id === projectId);
        if (!project || !modal || !modalContent) return;

        modalContent.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="modal-banner-img">
            <div style="display:flex; gap:0.6rem; align-items:center; margin-bottom:0.85rem; flex-wrap:wrap;">
                <span class="card-cat-badge" style="position:static;">${project.categoryLabel}</span>
                <span class="tag-badge" style="color:#00d0ff; border-color:rgba(0,208,255,0.4);">${project.status}</span>
            </div>
            <h2 class="modal-project-title" id="modalTitle" style="font-size:2rem; margin-bottom:1rem;">${project.title}</h2>

            <h3 class="modal-subheading">Problem Statement</h3>
            <p class="modal-desc-para">${project.problem}</p>

            <h3 class="modal-subheading">System Architecture &amp; Implementation</h3>
            <p class="modal-desc-para">${project.architecture}</p>

            <h3 class="modal-subheading">Verified Engineering Contributions</h3>
            <p class="modal-desc-para">${project.contributions}</p>

            <h3 class="modal-subheading">Full Technology Stack</h3>
            <div class="card-tags" style="margin-top:0.5rem;">
                ${project.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
            </div>

            <div class="modal-action-bar">
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><span>Open Live Application</span> &rarr;</a>` : ''}
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><span>View GitHub Source</span></a>
            </div>
        `;

        modal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        if (modalCloseBtn) modalCloseBtn.focus();
    };

    function closeProjectModal() {
        if (!modal) return;
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
            closeProjectModal();
        }
    });

    // =========================================================================
    // 8. FAIL-PROOF CONTACT FORM HANDLER (NO 412, NO LIVE SERVER WEBSOCKET)
    // =========================================================================
    function initContactForm() {
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const submitBtnText = document.getElementById('submitBtnText');
        const submitBtnSpinner = document.getElementById('submitBtnSpinner');
        const statusBox = document.getElementById('formStatusBox');
        const statusIcon = document.getElementById('statusIcon');
        const statusTitle = document.getElementById('statusTitle');
        const statusDesc = document.getElementById('statusDesc');
        const statusActionRow = document.getElementById('statusActionRow');
        const mailtoFallbackLink = document.getElementById('mailtoFallbackLink');
        const copyMessageTextBtn = document.getElementById('copyMessageTextBtn');

        const nameInput = document.getElementById('contactName');
        const emailInput = document.getElementById('contactEmail');
        const subjectInput = document.getElementById('contactSubject');
        const messageInput = document.getElementById('contactMessage');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const messageError = document.getElementById('messageError');

        if (!form) return;

        function clearErrors() {
            if (nameError) nameError.textContent = '';
            if (emailError) emailError.textContent = '';
            if (messageError) messageError.textContent = '';
            [nameInput, emailInput, messageInput].forEach(inp => {
                if (inp) inp.classList.remove('is-invalid');
            });
        }

        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            clearErrors();

            const name = (nameInput.value || '').trim();
            const email = (emailInput.value || '').trim();
            const subject = (subjectInput ? subjectInput.value || '' : '').trim() || 'Portfolio Inquiry';
            const message = (messageInput.value || '').trim();

            let hasError = false;

            if (!name || name.length < 2) {
                nameError.textContent = 'Please enter your name (minimum 2 characters).';
                nameInput.classList.add('is-invalid');
                hasError = true;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                emailError.textContent = 'Please enter a valid email address.';
                emailInput.classList.add('is-invalid');
                hasError = true;
            }

            if (!message || message.length < 10) {
                messageError.textContent = 'Please enter a message (minimum 10 characters).';
                messageInput.classList.add('is-invalid');
                hasError = true;
            }

            if (hasError) return;

            submitBtn.disabled = true;
            if (submitBtnText) submitBtnText.textContent = 'Sending Message...';
            if (submitBtnSpinner) submitBtnSpinner.removeAttribute('hidden');
            statusBox.setAttribute('hidden', '');
            statusActionRow.setAttribute('hidden', '');

            // Fallback mailto link config
            const fallbackBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoUrl = `mailto:bhawana1205bisht1802@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fallbackBody)}`;
            if (mailtoFallbackLink) {
                mailtoFallbackLink.setAttribute('href', mailtoUrl);
            }

            if (copyMessageTextBtn) {
                copyMessageTextBtn.onclick = function () {
                    navigator.clipboard.writeText(fallbackBody);
                    showToast('Message details copied to clipboard!');
                };
            }

            try {
                const formData = new FormData(form);
                const payload = Object.fromEntries(formData);

                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    statusBox.className = 'form-status-box status-success';
                    statusIcon.textContent = '✓';
                    statusTitle.textContent = 'Message Delivered!';
                    statusDesc.textContent = `Thank you, ${name}. Your message has been sent directly to Bhawana's inbox. She will respond shortly.`;
                    statusBox.removeAttribute('hidden');
                    form.reset();
                    showToast('Message sent successfully!');
                } else {
                    throw new Error(result.message || 'Delivery error');
                }
            } catch (err) {
                console.warn('Form gateway notice:', err);
                statusBox.className = 'form-status-box status-error';
                statusIcon.textContent = '⚠️';
                statusTitle.textContent = 'Gateway Blocked or Network Offline';
                statusDesc.textContent = 'Ad-blockers sometimes block form submission gateways. Your message is safely preserved below — send it with 1 click via your email client:';
                statusActionRow.removeAttribute('hidden');
                statusBox.removeAttribute('hidden');
            } finally {
                submitBtn.disabled = false;
                if (submitBtnText) submitBtnText.textContent = 'Send Message';
                if (submitBtnSpinner) submitBtnSpinner.setAttribute('hidden', '');
            }
        });
    }

    // =========================================================================
    // 9. COPY EMAIL UTILITY & TOAST NOTIFICATIONS
    // =========================================================================
    function showToast(message, duration = 3200) {
        const toast = document.getElementById('toastAlert');
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('is-visible');
        setTimeout(() => {
            toast.classList.remove('is-visible');
        }, duration);
    }

    function initCopyEmail() {
        const copyBtn = document.getElementById('copyEmailBtn');
        const copyLabel = document.getElementById('copyBtnLabel');
        const email = 'bhawana1205bisht1802@gmail.com';

        if (!copyBtn) return;

        copyBtn.addEventListener('click', async () => {
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(email);
                } else {
                    const temp = document.createElement('input');
                    temp.value = email;
                    document.body.appendChild(temp);
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                }

                if (copyLabel) copyLabel.textContent = 'Copied! ✓';
                showToast(`Email copied: ${email}`);
                setTimeout(() => {
                    if (copyLabel) copyLabel.textContent = 'Copy Email';
                }, 2600);
            } catch (err) {
                showToast(`Email: ${email}`);
            }
        });
    }

    // =========================================================================
    // 10. SCROLL PROGRESS & NAVIGATION TRACKER
    // =========================================================================
    function initScrollProgressAndNav() {
        const bar = document.getElementById('scrollIndicator');
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.desktop-nav .nav-item');

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (bar && docHeight > 0) {
                bar.style.width = `${(scrollTop / docHeight) * 100}%`;
            }

            let current = 'home';
            sections.forEach(sec => {
                if (scrollTop >= sec.offsetTop - 160) {
                    current = sec.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }, { passive: true });
    }

    // =========================================================================
    // 11. MOBILE MENU & COPYRIGHT YEAR
    // =========================================================================
    function initMobileMenuAndYear() {
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileNavMenu');
        const yearEl = document.getElementById('currentYear');

        if (yearEl) yearEl.textContent = new Date().getFullYear();

        if (btn && menu) {
            btn.addEventListener('click', () => {
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', !isExpanded);
                if (isExpanded) menu.setAttribute('hidden', '');
                else menu.removeAttribute('hidden');
            });

            menu.querySelectorAll('.mobile-nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    btn.setAttribute('aria-expanded', 'false');
                    menu.setAttribute('hidden', '');
                });
            });
        }
    }

    // =========================================================================
    // 12. ARCHITECTURAL DEEP TELEMETRY SPECIFICATIONS
    // =========================================================================
    const ARCH_TELEMETRY = {
        'client-nextjs': {
            title: 'Next.js 16 + React 19 Client Tier',
            category: 'Client Layer & Edge UI',
            specs: [
                { label: 'Bundle Execution', val: '< 65kb' },
                { label: 'Rendering Mode', val: 'SSR + Streaming' },
                { label: 'State Model', val: 'Zustand + Server Actions' }
            ],
            code: `// Turborepo package boundary
export default async function DashboardPage({ params }: { params: { tenantId: string } }) {
  const session = await getTenantSession(params.tenantId);
  const demandStream = api.forecasting.streamDemand(params.tenantId);
  return (
    <Suspense fallback={<TelemetrySkeleton />}>
      <DemandPredictionChart stream={demandStream} rbacRole={session.role} />
    </Suspense>
  );
}`,
            rationale: 'Next.js 16 App Router provides streaming component hydration and parallel routes, isolating multi-tenant subdomains while executing fast server actions directly to the NestJS Gateway.'
        },
        'gateway-nestjs': {
            title: 'NestJS 11 Modular API Gateway',
            category: 'API Gateway & Distributed Auth',
            specs: [
                { label: 'Response Latency', val: '8.4ms p99' },
                { label: 'Auth Strategy', val: 'JWT Rotation' },
                { label: 'Blacklist Check', val: '< 0.6ms' }
            ],
            code: `@Injectable()
export class JwtBlacklistGuard implements CanActivate {
  constructor(private readonly redis: RedisService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const token = extractBearerToken(context.switchToHttp().getRequest());
    const isRevoked = await this.redis.get(\`bl:\${token.jti}\`);
    if (isRevoked) throw new UnauthorizedException('Token revoked');
    return true;
  }
}`,
            rationale: 'Enforces strict tenant scoping, RBAC guards, and token blacklisting using Redis 7 to guarantee immediate session termination across all active browser tabs upon logout or privilege changes.'
        },
        'db-postgres': {
            title: 'Prisma 7 + PostgreSQL 17 Cluster',
            category: 'Transactional Persistence',
            specs: [
                { label: 'Index Coverage', val: '100% foreign keys' },
                { label: 'Tenant Isolation', val: 'Row-Level + Org ID' },
                { label: 'Soft Deletion', val: 'Audited Timestamps' }
            ],
            code: `model TenantOrganization {
  id          String   @id @default(uuid())
  slug        String   @unique
  name        String
  createdAt   DateTime @default(now())
  deletedAt   DateTime? // Soft-delete auditing
  users       User[]
  inventories InventoryItem[]
  @@index([slug, deletedAt])
}`,
            rationale: 'PostgreSQL 17 handles concurrent enterprise transactions with B-Tree compound indices and soft-deletion middleware to preserve comprehensive fiscal audit trails.'
        },
        'ml-prophet': {
            title: 'FastAPI + Meta Prophet Demand Predictor',
            category: 'Predictive Machine Learning Microservice',
            specs: [
                { label: 'Inference Time', val: '180ms uncached' },
                { label: 'Redis Cache Hit', val: '< 1.2ms' },
                { label: 'Confidence Band', val: '95% Bayesian' }
            ],
            code: `@app.post("/api/v1/forecast")
async def generate_demand_forecast(req: ForecastRequest, redis: Redis = Depends(get_redis)):
    cache_key = f"fc:{req.tenant_id}:{req.sku}"
    if cached := await redis.get(cache_key):
        return json.loads(cached)
    m = Prophet(yearly_seasonality=True, weekly_seasonality=True)
    m.fit(req.historical_dataframe)
    future = m.make_future_dataframe(periods=req.forecast_days)
    forecast = m.predict(future)
    await redis.setex(cache_key, 3600, forecast.to_json())
    return forecast`,
            rationale: 'FastAPI microservice executing Meta Prophet time-series models for stock replenishment, caching inferences in Redis 7 to ensure sub-2ms response times during executive dashboard queries.'
        },
        'devops-docker': {
            title: 'Docker Compose + Trivy Vulnerability CI/CD',
            category: 'Container Security & Orchestration',
            specs: [
                { label: 'Image Scan', val: '0 Critical CVEs' },
                { label: 'Build Cache', val: 'Turborepo Remote' },
                { label: 'Deploy Target', val: 'Containerized Microservices' }
            ],
            code: `name: Production CI/CD
on: [push]
jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Scan Docker Image with Trivy
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'bhawana/erp-backend:latest'
          exit-code: '1'
          severity: 'CRITICAL,HIGH'`,
            rationale: 'Automated GitHub Actions pipeline performing static linting, unit tests, and Trivy container vulnerability scans prior to deployment, enforcing enterprise-grade zero-trust delivery.'
        },
        'auth-rbac': {
            title: 'Multi-Role Authentication & Escrow Security',
            category: 'Identity & Access Management',
            specs: [
                { label: 'OAuth Protocols', val: 'Google + 2FA' },
                { label: 'Roles', val: 'Admin, Client, Freelancer' },
                { label: 'Session Safety', val: 'HttpOnly Secure Cookies' }
            ],
            code: `// Role-based access validation
export const verifyEscrowAuthority = (req, res, next) => {
  if (req.user.role !== 'ADMIN' && req.user.id !== req.escrow.clientId) {
    return res.status(403).json({ error: 'Unauthorized milestone release' });
  }
  next();
};`,
            rationale: 'Guarantees that escrow fund movements and dispute arbitrations can only be initiated by authenticated clients or platform administrators.'
        },
        'ai-embeddings': {
            title: 'Hugging Face Semantic Skill Matching',
            category: 'Vector Embeddings & NLP',
            specs: [
                { label: 'Embedding Model', val: 'all-MiniLM-L6-v2' },
                { label: 'Vector Cosine Sim', val: '> 0.82 threshold' },
                { label: 'Latency', val: '140ms inference' }
            ],
            code: `// Vector semantic similarity matching
const calculateSkillCosine = async (jobRequirement, freelancerBio) => {
  const reqVec = await hf.featureExtraction({ model: 'sentence-transformers/all-MiniLM-L6-v2', inputs: jobRequirement });
  const bioVec = await hf.featureExtraction({ model: 'sentence-transformers/all-MiniLM-L6-v2', inputs: freelancerBio });
  return cosineSimilarity(reqVec, bioVec);
};`,
            rationale: 'Replaces keyword searches with semantic vector embeddings to match freelancers with project specifications according to verified capabilities.'
        },
        'socket-redis': {
            title: 'Socket.IO Duplex Collaboration Engine',
            category: 'Real-Time Messaging & Presence',
            specs: [
                { label: 'Duplex Transport', val: 'WebSocket / WSS' },
                { label: 'Pub/Sub Adapter', val: 'Redis Streams' },
                { label: 'Delivery Uptime', val: '99.98%' }
            ],
            code: `io.adapter(createAdapter(redisClient, redisSubClient));
io.on('connection', (socket) => {
  socket.on('join_milestone_room', ({ milestoneId }) => {
    socket.join(\`milestone:\${milestoneId}\`);
  });
  socket.on('file_revision_push', (data) => {
    io.to(\`milestone:\${data.milestoneId}\`).emit('revision_received', data);
  });
});`,
            rationale: 'Provides instant real-time message exchange and milestone status notifications synchronized across horizontally scaled instances using Redis Pub/Sub.'
        },
        'razorpay-escrow': {
            title: 'Milestone Escrow Payment State Machine',
            category: 'Fintech Transaction Safety',
            specs: [
                { label: 'Gateways', val: 'Razorpay + Stripe' },
                { label: 'Verification', val: 'Cryptographic Webhook HMAC' },
                { label: 'Dispute Handling', val: 'Automated 14-day hold' }
            ],
            code: `// Secure webhook listener verifying HMAC signature
const isWebhookValid = crypto.createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
  .update(JSON.stringify(req.body))
  .digest('hex') === req.headers['x-razorpay-signature'];

if (isWebhookValid && req.body.event === 'payment.captured') {
  await escrowService.holdFundsInEscrow(req.body.payload.payment.entity);
}`,
            rationale: 'Implements an immutable payment escrow state machine that prevents premature funds distribution until client milestone approval.'
        }
    };

    // =========================================================================
    // 13. LUXURY WEB AUDIO SYNTHESIZER (MICRO-SOUND DESIGN)
    // =========================================================================
    let audioCtx = null;
    let isSoundEnabled = false;

    function initWebAudioSynthesizer() {
        const toggleBtn = document.getElementById('soundToggleBtn');
        const hudBtn = document.getElementById('hudSoundBtn');
        const soundLabel = document.getElementById('soundLabel');
        const hudSoundText = document.getElementById('hudSoundText');

        const stored = localStorage.getItem('bhawana_portfolio_sfx');
        if (stored === 'enabled') {
            isSoundEnabled = true;
            updateSoundUI();
        }

        function ensureAudioContext() {
            if (!audioCtx) {
                const AudioContextClass = window.AudioContext || window.webkitAudioContext;
                if (AudioContextClass) {
                    audioCtx = new AudioContextClass();
                }
            }
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
        }

        function updateSoundUI() {
            if (toggleBtn) {
                if (isSoundEnabled) toggleBtn.classList.add('sound-active');
                else toggleBtn.classList.remove('sound-active');
            }
            if (hudBtn) {
                if (isSoundEnabled) hudBtn.classList.add('sound-active');
                else hudBtn.classList.remove('sound-active');
            }
            if (soundLabel) soundLabel.textContent = isSoundEnabled ? 'SFX: ON' : 'SFX: OFF';
            if (hudSoundText) hudSoundText.textContent = isSoundEnabled ? 'SFX: ON' : 'SFX: OFF';
        }

        function toggleSound() {
            ensureAudioContext();
            isSoundEnabled = !isSoundEnabled;
            localStorage.setItem('bhawana_portfolio_sfx', isSoundEnabled ? 'enabled' : 'disabled');
            updateSoundUI();
            if (isSoundEnabled) {
                playSynthTone(587.33, 0.08, 'sine', 0.035);
                setTimeout(() => playSynthTone(880, 0.12, 'sine', 0.04), 80);
            }
        }

        if (toggleBtn) toggleBtn.addEventListener('click', toggleSound);
        if (hudBtn) hudBtn.addEventListener('click', toggleSound);

        const resumeOnInteraction = () => {
            if (audioCtx && audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            window.removeEventListener('click', resumeOnInteraction);
            window.removeEventListener('keydown', resumeOnInteraction);
        };
        window.addEventListener('click', resumeOnInteraction, { once: true });
        window.addEventListener('keydown', resumeOnInteraction, { once: true });
    }

    function playSynthTone(freq, duration = 0.05, type = 'sine', vol = 0.03) {
        if (!isSoundEnabled || !audioCtx) return;
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(vol, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {}
    }

    function playSound(type) {
        if (!isSoundEnabled || !audioCtx) return;
        if (type === 'hover') {
            playSynthTone(740, 0.03, 'sine', 0.015);
        } else if (type === 'click') {
            playSynthTone(320, 0.06, 'triangle', 0.035);
        } else if (type === 'drum') {
            playSynthTone(480, 0.04, 'sine', 0.02);
        } else if (type === 'success') {
            playSynthTone(523.25, 0.1, 'sine', 0.04);
            setTimeout(() => playSynthTone(659.25, 0.12, 'sine', 0.04), 90);
            setTimeout(() => playSynthTone(783.99, 0.22, 'sine', 0.05), 180);
        }
    }

    // =========================================================================
    // 14. CUSTOM INERTIA CURSOR ENGINE WITH CONTEXT BADGES
    // =========================================================================
    function initCustomInertiaCursor() {
        if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

        const cursor = document.getElementById('customCursor');
        const dot = document.getElementById('cursorDot');
        const ring = document.getElementById('cursorRing');
        const badge = document.getElementById('cursorBadge');
        if (!cursor || !dot || !ring) return;

        let mouseX = -100, mouseY = -100;
        let ringX = -100, ringY = -100;
        let isVisible = false;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isVisible) {
                isVisible = true;
                cursor.style.opacity = '1';
                ringX = mouseX;
                ringY = mouseY;
            }
        }, { passive: true });

        document.addEventListener('mouseleave', () => {
            isVisible = false;
            cursor.style.opacity = '0';
        });

        function animateCursor() {
            if (isVisible) {
                dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                ringX += (mouseX - ringX) * 0.18;
                ringY += (mouseY - ringY) * 0.18;
                ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            }
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        function attachCursorAffordances() {
            document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    document.body.classList.add('cursor-hover-interactive');
                    playSound('hover');
                });
                el.addEventListener('mouseleave', () => {
                    document.body.classList.remove('cursor-hover-interactive');
                });
                el.addEventListener('click', () => {
                    playSound('click');
                });
            });

            document.querySelectorAll('.works-wheel-stage').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    document.body.classList.add('cursor-hover-drag');
                    if (badge) badge.textContent = 'DRAG 3D';
                });
                el.addEventListener('mouseleave', () => {
                    document.body.classList.remove('cursor-hover-drag');
                    if (badge) badge.textContent = '';
                });
            });

            document.querySelectorAll('.project-lab-card').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    document.body.classList.add('cursor-hover-view');
                    if (badge) badge.textContent = 'VIEW CASE';
                });
                el.addEventListener('mouseleave', () => {
                    document.body.classList.remove('cursor-hover-view');
                    if (badge) badge.textContent = '';
                });
            });

            document.querySelectorAll('.arch-interactive-node').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    document.body.classList.add('cursor-hover-view');
                    if (badge) badge.textContent = 'INSPECT';
                });
                el.addEventListener('mouseleave', () => {
                    document.body.classList.remove('cursor-hover-view');
                    if (badge) badge.textContent = '';
                });
            });
        }
        attachCursorAffordances();
    }

    // =========================================================================
    // 15. DYNAMIC CARD SPOTLIGHT SHIMMER
    // =========================================================================
    function initCardSpotlight() {
        const cards = document.querySelectorAll('.project-lab-card, .arch-deep-card, .exp-item-card, .skill-category-card, .cert-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    }

    // =========================================================================
    // 16. CERTIFICATION CARD FAN
    // =========================================================================
    function initCertificateFan() {
        const stack = document.getElementById('certAnimatedCardStack');
        const grid = document.querySelector('.certificates-grid');
        if (!stack || !grid) return;

        const sources = Array.from(grid.querySelectorAll('.cert-card'));
        if (sources.length === 0) return;

        const stage = document.createElement('div');
        stage.className = 'cert-fan-stage';
        stage.tabIndex = 0;
        stage.setAttribute('role', 'region');
        stage.setAttribute('aria-roledescription', 'carousel');
        stage.setAttribute('aria-label', 'Certifications');

        const controls = document.createElement('div');
        controls.className = 'cert-fan-controls';

        const counter = document.createElement('span');
        counter.className = 'cert-fan-counter';
        counter.setAttribute('aria-live', 'polite');

        const dots = document.createElement('div');
        dots.className = 'cert-fan-dots';
        dots.setAttribute('role', 'group');
        dots.setAttribute('aria-label', 'Choose a certificate');

        function createControl(className, label, text) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = className;
            button.setAttribute('aria-label', label);
            button.textContent = text;
            return button;
        }

        const previousButton = createControl('cert-fan-arrow', 'Previous certificate', '←');
        const nextButton = createControl('cert-fan-arrow', 'Next certificate', '→');
        const items = sources.map((source, index) => {
            const image = source.querySelector('.cert-img-box img');
            return {
                title: source.querySelector('.cert-name')?.textContent?.trim() || `Certificate ${index + 1}`,
                description: source.querySelector('.cert-detail')?.textContent?.trim() || '',
                organization: source.querySelector('.cert-org')?.textContent?.trim() || '',
                imageSrc: image?.getAttribute('src') || '',
                imageAlt: image?.getAttribute('alt') || '',
            };
        });

        const cards = items.map((item, index) => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'cert-fan-card';
            card.setAttribute('aria-label', `Show certificate: ${item.title}`);
            card.addEventListener('click', () => setActive(index));

            const image = document.createElement('img');
            image.src = item.imageSrc;
            image.alt = item.imageAlt;
            image.draggable = false;
            image.loading = 'lazy';

            const overlay = document.createElement('span');
            overlay.className = 'cert-fan-overlay';
            overlay.setAttribute('aria-hidden', 'true');

            const content = document.createElement('span');
            content.className = 'cert-fan-content';

            const organization = document.createElement('span');
            organization.className = 'cert-fan-organization';
            organization.textContent = item.organization;

            const title = document.createElement('span');
            title.className = 'cert-fan-title';
            title.textContent = item.title;

            const description = document.createElement('span');
            description.className = 'cert-fan-description';
            description.textContent = item.description;

            content.append(organization, title, description);
            card.append(image, overlay, content);
            stage.append(card);
            return card;
        });

        const dotButtons = items.map((item, index) => {
            const dot = createControl('cert-fan-dot', `Show certificate ${index + 1}: ${item.title}`, '');
            dot.addEventListener('click', () => setActive(index));
            dots.append(dot);
            return dot;
        });

        controls.append(previousButton, counter, dots, nextButton);
        stack.replaceChildren(stage, controls);

        const maxVisible = Math.min(5, items.length);
        const maxOffset = Math.floor(maxVisible / 2);
        const spreadDeg = 48;
        const depthPx = 110;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let activeIndex = 0;
        let isPaused = false;

        function getOffset(index) {
            const raw = index - activeIndex;
            if (items.length <= 1) return raw;
            if (raw > items.length / 2) return raw - items.length;
            if (raw < -items.length / 2) return raw + items.length;
            return raw;
        }

        function updateCards() {
            const stageWidth = stage.clientWidth || window.innerWidth;
            const cardWidth = stageWidth < 600
                ? Math.max(260, stageWidth * 0.78)
                : Math.min(470, stageWidth * 0.42);
            const cardHeight = stageWidth < 600 ? 270 : 360;
            const spacing = cardWidth * 0.36;
            const stepDeg = maxOffset ? spreadDeg / maxOffset : 0;

            cards.forEach((card, index) => {
                const offset = getOffset(index);
                const distance = Math.abs(offset);
                const visible = distance <= maxOffset;
                const active = index === activeIndex;
                const x = offset * spacing;
                const y = distance * 10;
                const z = -distance * depthPx;

                card.style.width = `${cardWidth}px`;
                card.style.height = `${cardHeight}px`;
                card.style.zIndex = String(100 - distance);
                card.style.opacity = visible ? '1' : '0';
                card.style.pointerEvents = visible ? 'auto' : 'none';
                card.style.transform = `translate3d(calc(-50% + ${x}px), ${y}px, ${z}px) rotateX(${active ? 0 : 12}deg) rotateZ(${offset * stepDeg}deg) scale(${active ? 1.03 : 0.94})`;
                card.setAttribute('aria-hidden', String(!visible));
                card.setAttribute('aria-pressed', String(active));
                card.tabIndex = active ? 0 : -1;
            });

            dotButtons.forEach((dot, index) => {
                const active = index === activeIndex;
                dot.classList.toggle('active', active);
                dot.setAttribute('aria-current', String(active));
            });
            counter.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`;
        }

        function setActive(index) {
            activeIndex = ((index % items.length) + items.length) % items.length;
            updateCards();
        }

        previousButton.addEventListener('click', () => setActive(activeIndex - 1));
        nextButton.addEventListener('click', () => setActive(activeIndex + 1));
        stage.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                setActive(activeIndex - 1);
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                setActive(activeIndex + 1);
            }
        });

        stack.addEventListener('mouseenter', () => { isPaused = true; });
        stack.addEventListener('mouseleave', () => { isPaused = false; });
        stack.addEventListener('focusin', () => { isPaused = true; });
        stack.addEventListener('focusout', (event) => {
            if (!stack.contains(event.relatedTarget)) isPaused = false;
        });
        window.addEventListener('resize', updateCards);

        if (!reduceMotion) {
            window.setInterval(() => {
                if (!isPaused && !document.hidden) setActive(activeIndex + 1);
            }, 3200);
        }

        updateCards();
        stack.classList.add('is-enhanced');
        grid.hidden = true;
    }

    // =========================================================================
    // 17. LIVE TELEMETRY HUD & NAINITAL (IST) CLOCK
    // =========================================================================
    function initLiveTelemetryHUD() {
        const clockEl = document.getElementById('hudClock');
        const fpsEl = document.getElementById('hudFps');

        function updateClock() {
            if (clockEl) {
                const now = new Date();
                const istTime = now.toLocaleTimeString('en-US', {
                    timeZone: 'Asia/Kolkata',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                });
                clockEl.textContent = `${istTime} IST`;
            }
        }
        updateClock();
        setInterval(updateClock, 1000);

        let frameCount = 0;
        let lastTime = performance.now();
        function measureFps(now) {
            frameCount++;
            if (now - lastTime >= 1000) {
                const fps = Math.round((frameCount * 1000) / (now - lastTime));
                if (fpsEl) fpsEl.textContent = `${fps} FPS`;
                frameCount = 0;
                lastTime = now;
            }
            requestAnimationFrame(measureFps);
        }
        requestAnimationFrame(measureFps);
    }

    // =========================================================================
    // 17. ARCHITECTURE NODE TELEMETRY INSPECTOR MODAL
    // =========================================================================
    function initArchitectureTelemetryModal() {
        const modal = document.getElementById('archModal');
        const modalBody = document.getElementById('archModalBody');
        const closeBtn = document.getElementById('archModalCloseBtn');
        const backdrop = document.getElementById('archModalBackdrop');
        const nodes = document.querySelectorAll('.arch-interactive-node');

        if (!modal || !modalBody) return;

        function openArchNodeModal(nodeKey) {
            const data = ARCH_TELEMETRY[nodeKey];
            if (!data) return;

            modalBody.innerHTML = `
                <div class="arch-telemetry-header">
                    <div>
                        <span class="arch-node-category">${data.category}</span>
                        <h3 class="arch-telemetry-title" id="archModalTitle">${data.title}</h3>
                    </div>
                </div>
                <div class="arch-telemetry-grid">
                    ${data.specs.map(s => `
                        <div class="arch-metric-card">
                            <span class="arch-metric-val">${s.val}</span>
                            <span class="arch-metric-lbl">${s.label}</span>
                        </div>
                    `).join('')}
                </div>
                <h4 style="font-size:0.85rem; color:#8c54ff; font-family:var(--font-mono); margin-bottom:0.5rem; text-transform:uppercase;">Architectural Implementation Specification:</h4>
                <pre class="arch-code-block"><code>${escapeHtml(data.code)}</code></pre>
                <div style="background:rgba(255,255,255,0.02); border-left:3px solid var(--accent-cyan); padding:0.85rem 1rem; border-radius:0 8px 8px 0;">
                    <strong style="color:#ffffff; font-size:0.85rem; display:block; margin-bottom:0.25rem;">Engineering Rationale:</strong>
                    <p style="color:var(--text-secondary); font-size:0.88rem; line-height:1.5;">${data.rationale}</p>
                </div>
            `;

            modal.removeAttribute('hidden');
            document.body.style.overflow = 'hidden';
            if (closeBtn) closeBtn.focus();
            playSound('click');
        }

        function closeArchNodeModal() {
            modal.setAttribute('hidden', '');
            document.body.style.overflow = '';
        }

        nodes.forEach(node => {
            const key = node.getAttribute('data-arch-node');
            node.addEventListener('click', () => openArchNodeModal(key));
            node.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openArchNodeModal(key);
                }
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeArchNodeModal);
        if (backdrop) backdrop.addEventListener('click', closeArchNodeModal);

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.hasAttribute('hidden')) {
                closeArchNodeModal();
            }
        });
    }

    // =========================================================================
    // 18. BOOTSTRAP ALL ENGINES ON DOM READY
    // =========================================================================
    document.addEventListener('DOMContentLoaded', () => {
        initKineticCanvasTrail();
        initHero3DScene();
        initWorksWheelDrum();
        init3DTagCloudSphere();
        initProjectsLaboratory();
        initContactForm();
        initCopyEmail();
        initScrollProgressAndNav();
        initMobileMenuAndYear();
        initWebAudioSynthesizer();
        initCustomInertiaCursor();
        initCertificateFan();
        initCardSpotlight();
        initLiveTelemetryHUD();
        initArchitectureTelemetryModal();
    });

})();