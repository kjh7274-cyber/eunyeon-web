import { Hono } from 'hono'

const app = new Hono()

const LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA21BMVEVMaXEVEQtEPDMcGBIlIh0WEgwKCQcrJR8bGRWdmZMiHhceGhQeGhNnX1WTi4F8dGpcU0lRST+ro5oIERkMGSMPHSgKFBwOGyUHDxQMFx8ECg8DBAYaLTsZKjcWJjM7OTQRICw3NTBVUUpfWlJbVk9LSEFQTEYWIy5GQj1jXlZAPThpYlqLgnhtZ1+QiH5ybGSEfHOdlIl+d26Xj4R5cWilm4+soZUMExgyLyohHxorKSQODQoVExC4rqO9tKizqJzCuq8oOETIwLbSzMSppJ7r5t5ATVff2tNRX2oCR85BAAAAPXRSTlMAUkzV+y8WA/7+knGsdb+fv9zc///////////////////////////////////////////////////////+XYtPDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAGkdJREFUeNrtnWd34sgShj02tsGenbDKEqAAEpJQQiIIkQzG4f//oltVLYJt9hvM2PdQ47Cz955ZPfNW6K6uli8uzna2s53tbGc729nOdrazne1sZzvb2b643Z5RPhfCzeXNxe3t11finyy5+nb7pVHw0a9/PD7VUu/79cWXRSGMnw9PqyANk8C6+6IoDGP29BgFg2EPUBLn7uZrohBGlgyGgyzKojCOUvuLodCjXv5clBi9XhZFQRQgCqnyRZIxPuXt5Y8HxKgthr0eAwmCKAn7UUKx8vlloee7/uffx6eHKBkshgPSIyBLEoj6fhR1v3+7+dws9GQ3lz/mTy/rIBoMCaOXZRkwbC2Ogyz9fXd5+1lZ6JluL3/++/K06gXZcDFA62VAEjt9QkmTNE0RJYHY/313zVhuP1t0gxY/waUe11E0XKBTkR69XuJr2tjqIwRav58m/bgfEMvl7cWnEaZ8CkbxMsuiwWI2HKJbIccgsCeaPFIRBSCIo9/vJ8CSBr0o/n1H8fK3hSn/4zeX//yYvzw9LrKotpjNFsMFgfQGg8CZEoYsytrYiQGBOPogSZrGoEsv6v/+fn99e/F3aG63/8lbhJg9Pj2t1lk2YBQMAyxxpxonqhraSJG1qh2mBAGfcQgcffgaZCTM/fXN7s8+LdD7Px4Zfv77ABCPs1rUG87mgLFADIQY9mJzonEKYKijkQzfZIXTqrpH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"

app.get('/', (c) => {
  return c.html(getHTML(LOGO_DATA_URI))
})

function getHTML(logoSrc: string): string {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Eunyeon | 종합 건물 관리 및 보안 서비스</title>
<link rel="icon" type="image/x-icon" href="data:image/x-icon;,">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"><\/script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin=""><\/script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin=""><\/script>
<script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js"><\/script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior: smooth; }
body {
  font-family: "Inter", "Noto Sans KR", sans-serif;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
}
::-webkit-scrollbar { width: 0px; background: transparent; }
.image-container {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  will-change: transform, opacity;
}
.vignette-overlay {
  background: radial-gradient(circle at center, transparent 40%, #000000 90%);
  pointer-events: none;
}
.service-card {
  position: relative;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.service-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%);
  opacity: 0;
  transition: opacity 0.4s;
}
.service-card:hover::before { opacity: 1; }
.service-card:hover { transform: translateY(-4px); }
.stat-counter { font-variant-numeric: tabular-nums; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes lineExpand {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes pulse-gold {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.3); }
  50% { box-shadow: 0 0 0 8px rgba(212,175,55,0); }
}
.pulse-gold { animation: pulse-gold 2s infinite; }
.text-gold { color: #D4AF37; }
.border-gold { border-color: #D4AF37; }
.bg-gold { background-color: #D4AF37; }
.from-gold { --tw-gradient-from: #D4AF37; }
.to-gold { --tw-gradient-to: #D4AF37; }
.gradient-text {
  background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-gold {
  background: linear-gradient(135deg, #D4AF37 0%, #F5D76E 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.marquee-track {
  display: flex;
  gap: 3rem;
  animation: marquee 25s linear infinite;
  white-space: nowrap;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.noise-bg {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
}
.split-char {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), color 0.3s;
}
.split-char:hover { transform: translateY(-4px); color: #D4AF37; }
</style>
</head>
<body class="bg-black text-white antialiased selection:bg-white/20">
<div id="root"></div>

<script type="text/babel">
const { useRef, useState, useEffect, useCallback } = React;
const { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } = window.Motion;

// =================== LOGO ===================
const LogoSrc = "${logoSrc}";

// =================== HEADER ===================
const Header = ({ heroProgress }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const bgOpacity = useTransform(heroProgress, [0, 0.15], [0, 1]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "회사소개", href: "#about" },
    { label: "경호·경비", href: "#security" },
    { label: "건물관리", href: "#facility" },
    { label: "고객문의", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-[100] px-6 py-5 md:px-12 md:py-6 flex justify-between items-center"
        style={{ backdropFilter: scrolled ? "blur(20px)" : "none" }}
      >
        <motion.div style={{ backgroundColor: \`rgba(0,0,0,\${scrolled ? 0.8 : 0})\` }}
          className="absolute inset-0 border-b transition-colors duration-500"
          style={{ borderColor: scrolled ? "rgba(255,255,255,0.06)" : "transparent", backgroundColor: scrolled ? "rgba(0,0,0,0.8)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none" }}
        />
        <a href="#" className="relative flex items-center gap-3 group">
          <img src={LogoSrc} alt="Eunyeon" className="w-8 h-8 object-contain" />
          <div className="flex flex-col leading-none">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-white uppercase">Eunyeon</span>
            <span className="text-[9px] tracking-[0.15em] text-zinc-500 uppercase">Security & Facility</span>
          </div>
        </a>
        <nav className="relative hidden md:flex gap-8 text-[11px] font-normal tracking-[0.15em] text-zinc-400">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="relative hover:text-white transition-colors duration-300 group py-1">
              {l.label}
              <span className="absolute bottom-0 left-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>
        <div className="relative flex items-center gap-4">
          <a href="#contact" className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.2em] font-medium border border-white/20 px-4 py-2 hover:border-white/60 hover:bg-white/5 transition-all duration-300">
            무료 상담
            <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
            <iconify-icon icon={mobileOpen ? "solar:close-linear" : "solar:hamburger-menu-linear"} width="22"></iconify-icon>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-light tracking-widest text-zinc-300 hover:text-white transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// =================== HERO ===================
const Hero = ({ containerRef, scrollYProgress }) => {
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const facadeScale = useTransform(smoothProgress, [0, 0.6], [1, 20]);
  const facadeOpacity = useTransform(smoothProgress, [0.5, 0.62], [1, 0]);
  const officeScale = useTransform(smoothProgress, [0, 1], [0.95, 1]);
  const textOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.18], [0, -30]);
  const scrollPromptOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);
  const finalUiOpacity = useTransform(smoothProgress, [0.68, 1], [0, 1]);
  const finalUiY = useTransform(smoothProgress, [0.68, 1], [50, 0]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: "260vh" }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-50 vignette-overlay" />

        {/* Office layer */}
        <motion.div className="absolute inset-0 z-10 image-container" style={{ scale: officeScale }}>
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover object-center"
            style={{ filter: "brightness(0.55) saturate(0.8)" }}
            alt="Office Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-50 px-4"
            style={{ opacity: finalUiOpacity, y: finalUiY }}
          >
            <motion.div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-white/40" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">종합 건물 관리 서비스</span>
              <div className="w-8 h-px bg-white/40" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-center mb-10 leading-[1.1]">
              <span className="gradient-text block">안전을 지키고,</span>
              <span className="gradient-text block">공간을 빛냅니다.</span>
            </h2>
            <p className="text-zinc-400 text-sm tracking-widest text-center mb-10 max-w-md">
              경호·경비부터 청소·환경관리까지<br/>신뢰할 수 있는 하나의 파트너
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a href="#services"
                className="flex items-center gap-2 bg-white text-black px-8 py-3.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-zinc-100 transition-colors duration-300"
              >
                서비스 안내
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
              </a>
              <a href="#contact"
                className="flex items-center gap-2 border border-white/30 px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase hover:border-white/70 hover:bg-white/5 transition-all duration-300"
              >
                무료 상담
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Facade layer */}
        <motion.div
          className="absolute inset-0 z-30 image-container pointer-events-none"
          style={{ scale: facadeScale, opacity: facadeOpacity }}
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover object-center"
            alt="Modern Facade"
          />
          <div className="absolute inset-0 bg-black/15" />
        </motion.div>

        {/* Title overlay */}
        <motion.div
          className="absolute z-40 inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: textOpacity, y: textY }}
        >
          <motion.div className="flex items-center gap-4 mb-6">
            <img src={LogoSrc} alt="Eunyeon" className="w-12 h-12 object-contain opacity-90" />
          </motion.div>
          <h1 className="text-[14vw] md:text-[130px] font-light tracking-[0.15em] text-white leading-none mix-blend-overlay opacity-80">
            EUNYEON
          </h1>
          <p className="mt-4 text-[11px] tracking-[0.4em] text-white/40 uppercase font-light">Security · Facility · Care</p>
        </motion.div>

        {/* Scroll prompt */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3"
          style={{ opacity: scrollPromptOpacity }}
        >
          <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase">Scroll</p>
          <div className="w-px h-14 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

// =================== MARQUEE ===================
const Marquee = () => {
  const items = ["경호 서비스", "시설 경비", "건물 청소", "환경미화", "주차 관리", "소독·방역", "VIP 경호", "상주 경비", "정기 청소", "긴급 대응"];
  const doubled = [...items, ...items];
  return (
    <div className="w-full overflow-hidden py-6 border-y border-white/[0.06] bg-zinc-950/80">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 text-[11px] tracking-[0.25em] uppercase text-zinc-500 shrink-0">
            {item}
            <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

// =================== ABOUT ===================
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { num: "10+", label: "년 업력", desc: "Years of Excellence" },
    { num: "500+", label: "계약 고객사", desc: "Trusted Partners" },
    { num: "99%", label: "고객 만족도", desc: "Client Satisfaction" },
    { num: "24/7", label: "대응 체계", desc: "Always Ready" },
  ];

  return (
    <section id="about" className="relative py-32 md:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/[0.05] to-transparent" style={{ left: "8%" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-zinc-600" />
              <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">About Eunyeon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.15] mb-8 text-white">
              신뢰와 전문성으로<br />
              <span className="gradient-text-gold">당신 곁에 있습니다.</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-[2] mb-8 font-light max-w-lg">
              은연은 경기도 성남시를 기반으로 경호·경비·환경미화 분야에서 
              10년 이상의 전문 서비스를 제공해온 기업입니다. 엄격한 인력 
              관리와 지속적인 교육 훈련을 통해 최고 수준의 서비스를 
              유지하며, 고객의 안전과 만족을 최우선으로 생각합니다.
            </p>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-zinc-500 mb-3">
              <iconify-icon icon="solar:map-point-linear" width="14" style={{ color: "#D4AF37" }}></iconify-icon>
              <span>경기도 성남시 중원구 산성대로 136, 202호</span>
            </div>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] text-zinc-500">
              <iconify-icon icon="solar:clock-circle-linear" width="14" style={{ color: "#D4AF37" }}></iconify-icon>
              <span>평일 09:00–18:00 · 긴급 24시간 대응</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
                className="bg-black p-8 flex flex-col gap-2 group hover:bg-zinc-950 transition-colors duration-300"
              >
                <span className="text-3xl md:text-4xl font-light tracking-tight gradient-text-gold stat-counter">{s.num}</span>
                <span className="text-white text-sm font-light">{s.label}</span>
                <span className="text-zinc-600 text-[10px] tracking-widest uppercase">{s.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// =================== SERVICES ===================
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const services = [
    {
      icon: "solar:shield-user-bold",
      tag: "01",
      title: "경호 서비스",
      subtitle: "Personal Protection",
      desc: "VIP 신변 경호부터 행사·집회 경호까지, 전문 훈련된 경호원이 24시간 완벽한 보호를 제공합니다.",
      features: ["VIP 신변 경호", "행사·집회 경호", "이동 차량 경호", "위협 상황 대응"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
    },
    {
      icon: "solar:shield-check-bold",
      tag: "02",
      title: "경비 서비스",
      subtitle: "Security Guard",
      desc: "건물, 시설, 공사현장까지 다양한 환경에서 체계적인 경비 시스템으로 재산과 인명을 보호합니다.",
      features: ["시설 상주 경비", "아파트 단지 경비", "공사현장 경비", "CCTV 통합 관제"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
    },
    {
      icon: "solar:broom-bold",
      tag: "03",
      title: "환경미화 서비스",
      subtitle: "Facility Cleaning",
      desc: "전문 장비와 인력으로 건물 내외부의 청결한 환경을 체계적으로 관리합니다.",
      features: ["건물 내·외부 청소", "정기 위생 관리", "소독·방역 서비스", "특수 청소"],
      image: "https://images.unsplash.com/photo-1527515637462-cff94aca55f5?q=80&w=2074&auto=format&fit=crop",
    },
  ];

  return (
    <section id="services" className="relative bg-black pb-32 md:pb-44">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="flex items-end justify-between mb-16 md:mb-20 border-b border-white/[0.06] pb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-zinc-600" />
              <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">전문 서비스</h2>
          </div>
          <a href="#contact" className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.2em] text-zinc-500 hover:text-white transition-colors group">
            전체 서비스 보기
            <iconify-icon icon="solar:arrow-right-linear" width="14" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16,1,0.3,1] }}
              className="service-card bg-black group cursor-default"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover object-center brightness-50 saturate-50 transition-all duration-700 group-hover:brightness-70 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] text-zinc-500 font-light">{svc.tag}</span>
                <iconify-icon
                  icon={svc.icon}
                  width="28"
                  className="absolute bottom-4 left-5"
                  style={{ color: "#D4AF37" }}
                ></iconify-icon>
              </div>
              <div className="p-7">
                <p className="text-[10px] tracking-[0.25em] text-zinc-600 uppercase mb-3">{svc.subtitle}</p>
                <h3 className="text-xl font-light text-white mb-4 tracking-tight">{svc.title}</h3>
                <p className="text-zinc-500 text-[13px] leading-[1.9] font-light mb-6">{svc.desc}</p>
                <div className="flex flex-col gap-2.5">
                  {svc.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-3 text-[12px] text-zinc-400 font-light">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#D4AF37" }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =================== SECURITY SECTION ===================
const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="security" className="relative py-32 md:py-44 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.12) saturate(0.3)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-zinc-600" />
              <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">경호·경비</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
              <span className="text-white">보이지 않는 곳에서</span><br />
              <span className="gradient-text-gold">당신을 지킵니다.</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-[2] mb-10 font-light">
              은연의 경호·경비팀은 엄선된 전문 인력과 첨단 시스템으로 
              365일 24시간 완벽한 보안 서비스를 제공합니다.
              VIP 개인 경호에서부터 대규모 시설 경비까지, 
              모든 상황에 즉각적으로 대응합니다.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {["VIP 신변 경호", "시설 상주 경비", "행사·집회 경호", "24/7 긴급 대응"].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 text-[12px] text-zinc-300"
                >
                  <div className="w-px h-4 bg-yellow-500/60" />
                  {item}
                </motion.div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] text-white/80 hover:text-white transition-colors group border-b border-white/20 pb-1 hover:border-white/60">
              경호·경비 상담 문의
              <iconify-icon icon="solar:arrow-right-linear" width="14" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =================== FACILITY SECTION ===================
const FacilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facility" className="relative py-32 md:py-44 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Facility Management"
                className="w-full h-full object-cover brightness-75 saturate-75"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-white/[0.04] pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16,1,0.3,1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-zinc-600" />
              <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">건물관리</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.15] mb-8">
              <span className="text-white">깨끗한 공간이</span><br />
              <span className="gradient-text-gold">신뢰를 만듭니다.</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-[2] mb-10 font-light">
              전문 교육을 이수한 미화 인력과 업무용 고성능 장비를 갖추고, 
              건물의 내·외부를 청결하게 유지합니다. 정기 점검과 
              맞춤형 스케줄 관리로 항상 쾌적한 환경을 제공합니다.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: "solar:buildings-2-linear", label: "건물 내·외부 청소" },
                { icon: "solar:calendar-date-linear", label: "정기 위생 관리" },
                { icon: "solar:shield-minimalistic-linear", label: "소독·방역 서비스" },
                { icon: "solar:star-linear", label: "특수 청소" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[12px] text-zinc-400 font-light">
                  <iconify-icon icon={item.icon} width="16" style={{ color: "#D4AF37", flexShrink: 0 }}></iconify-icon>
                  {item.label}
                </div>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] text-white/80 hover:text-white transition-colors group border-b border-white/20 pb-1 hover:border-white/60">
              건물관리 상담 문의
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =================== WHY US ===================
const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const reasons = [
    { icon: "solar:diploma-linear", title: "공인 자격 보유", desc: "관련 법령에 따른 모든 인허가 및 전문 자격을 완비한 합법적 기업입니다." },
    { icon: "solar:users-group-rounded-linear", title: "정예 전문 인력", desc: "엄선된 채용 절차와 체계적인 교육 프로그램으로 양성된 전문 인력을 운용합니다." },
    { icon: "solar:clock-circle-linear", title: "24시간 대응 체계", desc: "365일 24시간 긴급 대응 시스템을 갖추고 언제든지 신속하게 대처합니다." },
    { icon: "solar:hand-shake-linear", title: "고객 맞춤 서비스", desc: "고객의 상황과 요구에 최적화된 맞춤형 서비스 방안을 제안합니다." },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-black overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" style={{ right: "8%" }} />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-zinc-700" />
            <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Why Eunyeon</span>
            <div className="w-8 h-px bg-zinc-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">은연을 선택하는 이유</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              className="bg-black p-8 flex flex-col gap-5 group hover:bg-zinc-950 transition-colors duration-300 service-card"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-zinc-800 group-hover:border-yellow-500/30 transition-colors duration-300">
                <iconify-icon icon={r.icon} width="20" style={{ color: "#D4AF37" }}></iconify-icon>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-3 tracking-wide">{r.title}</h3>
                <p className="text-zinc-500 text-[13px] leading-[1.9] font-light">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =================== PROCESS ===================
const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const steps = [
    { num: "01", title: "초기 상담", desc: "고객의 요구사항과 환경을 면밀히 파악합니다." },
    { num: "02", title: "현장 조사", desc: "전문가가 직접 현장을 방문하여 분석합니다." },
    { num: "03", title: "서비스 설계", desc: "최적화된 맞춤형 서비스 방안을 수립합니다." },
    { num: "04", title: "운영 및 관리", desc: "서비스 시작 후 지속적으로 품질을 관리합니다." },
  ];

  return (
    <section className="relative py-32 md:py-44 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-zinc-600" />
            <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">업무 진행 절차</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.04]">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              className="bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors duration-300 service-card"
            >
              <span className="text-[10px] tracking-[0.3em] text-zinc-700 font-light block mb-6">{step.num}</span>
              <div className="w-8 h-px mb-6 transition-all duration-500 group-hover:w-12" style={{ backgroundColor: "#D4AF37" }} />
              <h3 className="text-base font-medium text-white mb-4 tracking-wide">{step.title}</h3>
              <p className="text-zinc-500 text-[13px] leading-[1.9] font-light">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// =================== CONTACT ===================
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 bg-black overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-zinc-600" />
              <span className="text-[10px] tracking-[0.3em] text-zinc-500 uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-8 leading-[1.15]">
              지금 바로<br />
              <span className="gradient-text-gold">문의하세요.</span>
            </h2>
            <p className="text-zinc-500 text-sm leading-[2] mb-12 font-light">
              경호·경비·환경미화 서비스에 관한 모든 궁금증을 해결해 드립니다.
              전문 상담원이 신속하게 답변드리겠습니다.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { icon: "solar:map-point-linear", label: "주소", addr1: "경기도 성남시 중원구 산성대로 136, 202호", addr2: "(성남동, 지앤느모란)" },
                { icon: "solar:clock-circle-linear", label: "운영 시간", addr1: "평일 09:00 – 18:00", addr2: "긴급 상황 24시간 대응" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-zinc-800 flex-shrink-0 mt-1">
                    <iconify-icon icon={item.icon} width="16" style={{ color: "#D4AF37" }}></iconify-icon>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase mb-1">{item.label}</p>
                    <p className="text-zinc-300 text-sm font-light leading-[1.9]">{item.addr1}<br/>{item.addr2}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16,1,0.3,1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {[
                { key: "name", label: "성함 / 회사명", placeholder: "이름 또는 회사명", type: "text" },
                { key: "phone", label: "연락처", placeholder: "010-0000-0000", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-[10px] tracking-[0.2em] text-zinc-600 uppercase mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    value={formState[field.key]}
                    onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border border-zinc-800 focus:border-zinc-500 outline-none px-4 py-3.5 text-sm text-white placeholder-zinc-700 transition-colors duration-300 font-light"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] tracking-[0.2em] text-zinc-600 uppercase mb-2">서비스 종류</label>
                <select
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full bg-black border border-zinc-800 focus:border-zinc-500 outline-none px-4 py-3.5 text-sm text-zinc-400 transition-colors duration-300 font-light appearance-none cursor-pointer"
                >
                  <option value="">선택하세요</option>
                  <option value="경호">경호 서비스</option>
                  <option value="경비">경비 서비스</option>
                  <option value="환경미화">환경미화 서비스</option>
                  <option value="복합">복합 서비스</option>
                  <option value="기타">기타 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] text-zinc-600 uppercase mb-2">문의 내용</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  placeholder="서비스 규모, 위치, 기간 등 상세 내용"
                  className="w-full bg-transparent border border-zinc-800 focus:border-zinc-500 outline-none px-4 py-3.5 text-sm text-white placeholder-zinc-700 resize-none transition-colors duration-300 font-light"
                />
              </div>

              <button
                type="submit"
                className="relative w-full bg-white text-black py-4 text-[11px] font-semibold tracking-[0.25em] uppercase hover:bg-zinc-100 transition-colors duration-300 flex items-center justify-center gap-2 overflow-hidden group"
              >
                <span>{submitted ? "접수 완료!" : "문의 접수하기"}</span>
                {!submitted && <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>}
                {submitted && <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] tracking-wider text-green-500/80 text-center font-light"
                >
                  문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// =================== FOOTER ===================
const Footer = () => (
  <footer className="relative bg-black border-t border-white/[0.06] py-16">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={LogoSrc} alt="Eunyeon" className="w-8 h-8 object-contain" />
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-white uppercase">Eunyeon</p>
              <p className="text-[9px] tracking-[0.15em] text-zinc-600 uppercase">Security & Facility</p>
            </div>
          </div>
          <p className="text-zinc-600 text-[12px] leading-[2] font-light">
            경호·경비·환경미화 전문기업<br />
            신뢰와 전문성으로 함께합니다.
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-5">서비스</p>
          <ul className="flex flex-col gap-3">
            {["경호 서비스", "경비 서비스", "환경미화 서비스", "복합 서비스"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-zinc-500 text-[12px] font-light hover:text-white transition-colors tracking-wide">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-5">연락처</p>
          <div className="flex flex-col gap-3 text-zinc-500 text-[12px] font-light">
            <p>경기도 성남시 중원구 산성대로 136, 202호</p>
            <p>(성남동, 지앤느모란)</p>
            <p className="mt-2">평일 09:00 – 18:00</p>
            <p>긴급 24시간 대응</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-700 text-[10px] tracking-[0.2em] uppercase">© 2024 Eunyeon. All rights reserved.</p>
        <div className="flex gap-6 text-[10px] tracking-[0.15em] text-zinc-700 uppercase">
          <a href="#" className="hover:text-zinc-400 transition-colors">회사소개</a>
          <a href="#services" className="hover:text-zinc-400 transition-colors">서비스</a>
          <a href="#contact" className="hover:text-zinc-400 transition-colors">문의</a>
        </div>
      </div>
    </div>
  </footer>
);

// =================== APP ===================
const App = () => {
  const heroContainerRef = useRef(null);
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroContainerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="bg-black">
      <Header heroProgress={heroScrollY} />
      <Hero containerRef={heroContainerRef} scrollYProgress={heroScrollY} />
      <Marquee />
      <About />
      <Services />
      <SecuritySection />
      <FacilitySection />
      <WhyUs />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
<\/script>
</body>
</html>`
}

export default app
