import { Hono } from 'hono'

const app = new Hono()

// Main page
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>은연 - 경호·경비·환경미화 전문기업</title>
    <link rel="icon" type="image/x-icon" href="data:image/x-icon;,">
    <meta name="description" content="은연은 최고의 경호, 경비, 환경미화 서비스를 제공하는 전문 기업입니다. 신뢰와 전문성으로 고객의 안전과 쾌적한 환경을 책임집니다.">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
      :root {
        --navy: #0a1628;
        --dark-navy: #060e1a;
        --mid-navy: #0d2040;
        --steel: #8a9ab5;
        --silver: #c8d0dc;
        --gold: #b8964e;
        --light-gold: #d4aa6a;
        --white: #f8f9fc;
      }

      * { margin: 0; padding: 0; box-sizing: border-box; }

      html { scroll-behavior: smooth; }

      body {
        font-family: 'Noto Sans KR', sans-serif;
        background-color: var(--dark-navy);
        color: var(--white);
        overflow-x: hidden;
      }

      /* ===== SCROLLBAR ===== */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: var(--dark-navy); }
      ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }

      /* ===== NAVBAR ===== */
      .navbar {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 1000;
        padding: 0 2rem;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 0.4s ease;
        background: transparent;
      }

      .navbar.scrolled {
        background: rgba(6, 14, 26, 0.97);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(184, 150, 78, 0.3);
        box-shadow: 0 4px 30px rgba(0,0,0,0.5);
      }

      .nav-logo {
        display: flex;
        align-items: center;
        gap: 14px;
        text-decoration: none;
      }

      .nav-logo img {
        height: 50px;
        width: auto;
        filter: drop-shadow(0 2px 8px rgba(184,150,78,0.4));
      }

      .nav-logo-text {
        display: flex;
        flex-direction: column;
      }

      .nav-logo-name {
        font-family: 'Noto Serif KR', serif;
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--white);
        letter-spacing: 0.12em;
        line-height: 1;
      }

      .nav-logo-sub {
        font-size: 0.65rem;
        color: var(--gold);
        letter-spacing: 0.2em;
        margin-top: 3px;
        font-weight: 500;
      }

      .nav-links {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        list-style: none;
      }

      .nav-links a {
        color: var(--silver);
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        transition: color 0.3s;
        position: relative;
      }

      .nav-links a::after {
        content: '';
        position: absolute;
        bottom: -4px; left: 0;
        width: 0; height: 1px;
        background: var(--gold);
        transition: width 0.3s;
      }

      .nav-links a:hover { color: var(--gold); }
      .nav-links a:hover::after { width: 100%; }

      .nav-cta {
        background: linear-gradient(135deg, var(--gold), var(--light-gold));
        color: var(--dark-navy) !important;
        padding: 0.6rem 1.4rem;
        border-radius: 2px;
        font-weight: 700 !important;
        letter-spacing: 0.08em;
        transition: all 0.3s !important;
        box-shadow: 0 4px 15px rgba(184,150,78,0.3);
      }

      .nav-cta:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 25px rgba(184,150,78,0.5) !important;
      }

      .nav-cta::after { display: none !important; }

      /* Mobile nav toggle */
      .nav-toggle {
        display: none;
        flex-direction: column;
        gap: 5px;
        cursor: pointer;
        padding: 5px;
      }

      .nav-toggle span {
        display: block;
        width: 25px;
        height: 2px;
        background: var(--silver);
        transition: all 0.3s;
      }

      /* ===== HERO SECTION ===== */
      .hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(135deg, #060e1a 0%, #0a1628 50%, #0d2040 100%);
      }

      .hero-bg-pattern {
        position: absolute;
        inset: 0;
        background-image:
          radial-gradient(ellipse at 20% 50%, rgba(184,150,78,0.07) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(13,32,64,0.8) 0%, transparent 50%);
      }

      .hero-grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(184,150,78,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(184,150,78,0.04) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
      }

      .hero-content {
        position: relative;
        z-index: 10;
        text-align: center;
        max-width: 900px;
        padding: 2rem;
      }

      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: rgba(184,150,78,0.1);
        border: 1px solid rgba(184,150,78,0.3);
        padding: 0.4rem 1.2rem;
        border-radius: 50px;
        font-size: 0.75rem;
        color: var(--gold);
        letter-spacing: 0.15em;
        font-weight: 600;
        margin-bottom: 2rem;
        backdrop-filter: blur(10px);
      }

      .hero-logo {
        width: 120px;
        height: auto;
        margin: 0 auto 2rem;
        display: block;
        filter: drop-shadow(0 0 30px rgba(184,150,78,0.3));
        animation: float 4s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      .hero-title {
        font-family: 'Noto Serif KR', serif;
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        color: var(--white);
      }

      .hero-title .accent {
        background: linear-gradient(135deg, var(--gold), var(--light-gold));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .hero-subtitle {
        font-size: clamp(1rem, 2vw, 1.2rem);
        color: var(--steel);
        line-height: 1.8;
        margin-bottom: 3rem;
        font-weight: 300;
      }

      .hero-divider {
        width: 60px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
        margin: 0 auto 2rem;
      }

      .hero-buttons {
        display: flex;
        gap: 1.2rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: linear-gradient(135deg, var(--gold), var(--light-gold));
        color: var(--dark-navy);
        padding: 0.9rem 2.2rem;
        text-decoration: none;
        font-weight: 700;
        font-size: 0.95rem;
        letter-spacing: 0.05em;
        border-radius: 2px;
        transition: all 0.3s;
        box-shadow: 0 8px 30px rgba(184,150,78,0.3);
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(184,150,78,0.5);
      }

      .btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: transparent;
        color: var(--silver);
        padding: 0.9rem 2.2rem;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        letter-spacing: 0.05em;
        border-radius: 2px;
        border: 1px solid rgba(138,154,181,0.4);
        transition: all 0.3s;
      }

      .btn-secondary:hover {
        border-color: var(--gold);
        color: var(--gold);
        transform: translateY(-2px);
      }

      .hero-stats {
        display: flex;
        justify-content: center;
        gap: 3rem;
        margin-top: 4rem;
        padding-top: 3rem;
        border-top: 1px solid rgba(184,150,78,0.15);
        flex-wrap: wrap;
      }

      .stat-item {
        text-align: center;
      }

      .stat-number {
        font-family: 'Noto Serif KR', serif;
        font-size: 2.2rem;
        font-weight: 700;
        background: linear-gradient(135deg, var(--gold), var(--light-gold));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: block;
        line-height: 1;
      }

      .stat-label {
        font-size: 0.8rem;
        color: var(--steel);
        margin-top: 6px;
        letter-spacing: 0.1em;
        font-weight: 500;
      }

      /* ===== SECTION COMMON ===== */
      .section {
        padding: 100px 0;
      }

      .section-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .section-label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.7rem;
        color: var(--gold);
        letter-spacing: 0.25em;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      .section-label::before, .section-label::after {
        content: '';
        display: block;
        width: 30px;
        height: 1px;
        background: var(--gold);
      }

      .section-title {
        font-family: 'Noto Serif KR', serif;
        font-size: clamp(1.8rem, 4vw, 2.8rem);
        font-weight: 700;
        color: var(--white);
        line-height: 1.3;
        margin-bottom: 1rem;
      }

      .section-desc {
        color: var(--steel);
        font-size: 1rem;
        line-height: 1.8;
        max-width: 600px;
        font-weight: 300;
      }

      /* ===== SERVICES ===== */
      #services {
        background: linear-gradient(180deg, var(--dark-navy) 0%, var(--navy) 100%);
      }

      .services-header {
        text-align: center;
        margin-bottom: 4rem;
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: 2rem;
      }

      .service-card {
        background: linear-gradient(135deg, rgba(13,32,64,0.8), rgba(6,14,26,0.9));
        border: 1px solid rgba(184,150,78,0.15);
        border-radius: 4px;
        padding: 2.5rem;
        transition: all 0.4s ease;
        position: relative;
        overflow: hidden;
        cursor: default;
      }

      .service-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 3px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
        transform: scaleX(0);
        transition: transform 0.4s;
      }

      .service-card:hover {
        transform: translateY(-6px);
        border-color: rgba(184,150,78,0.4);
        box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(184,150,78,0.08);
      }

      .service-card:hover::before {
        transform: scaleX(1);
      }

      .service-icon {
        width: 64px;
        height: 64px;
        background: linear-gradient(135deg, rgba(184,150,78,0.15), rgba(184,150,78,0.05));
        border: 1px solid rgba(184,150,78,0.3);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.8rem;
        font-size: 1.6rem;
        color: var(--gold);
        transition: all 0.4s;
      }

      .service-card:hover .service-icon {
        background: linear-gradient(135deg, rgba(184,150,78,0.25), rgba(184,150,78,0.1));
        box-shadow: 0 0 20px rgba(184,150,78,0.2);
      }

      .service-title {
        font-family: 'Noto Serif KR', serif;
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 0.8rem;
        letter-spacing: 0.05em;
      }

      .service-desc {
        color: var(--steel);
        font-size: 0.9rem;
        line-height: 1.8;
        font-weight: 300;
      }

      .service-features {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .service-feature {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.82rem;
        color: var(--silver);
      }

      .service-feature i {
        color: var(--gold);
        font-size: 0.75rem;
        width: 16px;
      }

      /* ===== ABOUT ===== */
      #about {
        background: var(--dark-navy);
        position: relative;
      }

      .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6rem;
        align-items: center;
      }

      .about-image-side {
        position: relative;
      }

      .about-emblem {
        width: 100%;
        max-width: 420px;
        aspect-ratio: 1;
        background: linear-gradient(135deg, rgba(13,32,64,0.9), rgba(6,14,26,0.95));
        border: 1px solid rgba(184,150,78,0.2);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }

      .about-emblem::before {
        content: '';
        position: absolute;
        inset: 10px;
        border: 1px solid rgba(184,150,78,0.1);
        border-radius: 2px;
      }

      .about-emblem-logo {
        width: 220px;
        height: auto;
        filter: drop-shadow(0 0 40px rgba(184,150,78,0.3));
      }

      .about-corner {
        position: absolute;
        width: 20px;
        height: 20px;
        border-color: var(--gold);
        border-style: solid;
      }

      .about-corner.tl { top: 0; left: 0; border-width: 2px 0 0 2px; }
      .about-corner.tr { top: 0; right: 0; border-width: 2px 2px 0 0; }
      .about-corner.bl { bottom: 0; left: 0; border-width: 0 0 2px 2px; }
      .about-corner.br { bottom: 0; right: 0; border-width: 0 2px 2px 0; }

      .about-content .section-label { display: flex; }

      .values-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-top: 2.5rem;
      }

      .value-item {
        padding: 1.2rem;
        background: rgba(13,32,64,0.5);
        border-left: 2px solid var(--gold);
        border-radius: 0 2px 2px 0;
      }

      .value-title {
        font-weight: 600;
        color: var(--white);
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
        letter-spacing: 0.05em;
      }

      .value-desc {
        font-size: 0.8rem;
        color: var(--steel);
        line-height: 1.6;
      }

      /* ===== WHY US ===== */
      #why-us {
        background: linear-gradient(180deg, var(--navy) 0%, var(--dark-navy) 100%);
      }

      .why-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 4rem;
      }

      .why-item {
        text-align: center;
        padding: 2rem 1.5rem;
        border: 1px solid rgba(184,150,78,0.1);
        border-radius: 4px;
        transition: all 0.3s;
        background: rgba(13,32,64,0.3);
      }

      .why-item:hover {
        border-color: rgba(184,150,78,0.4);
        transform: translateY(-4px);
        background: rgba(13,32,64,0.6);
      }

      .why-icon {
        font-size: 2rem;
        color: var(--gold);
        margin-bottom: 1.2rem;
        display: block;
      }

      .why-title {
        font-family: 'Noto Serif KR', serif;
        font-size: 1rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 0.6rem;
        letter-spacing: 0.05em;
      }

      .why-desc {
        font-size: 0.82rem;
        color: var(--steel);
        line-height: 1.7;
      }

      /* ===== PROCESS ===== */
      #process {
        background: var(--dark-navy);
      }

      .process-header {
        text-align: center;
        margin-bottom: 5rem;
      }

      .process-steps {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0;
        position: relative;
      }

      .process-steps::before {
        content: '';
        position: absolute;
        top: 40px;
        left: 10%;
        right: 10%;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--gold), var(--gold), var(--gold), transparent);
        opacity: 0.3;
      }

      .process-step {
        padding: 0 1.5rem;
        text-align: center;
        position: relative;
      }

      .step-number {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, var(--navy), var(--mid-navy));
        border: 2px solid rgba(184,150,78,0.4);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        position: relative;
        z-index: 1;
        transition: all 0.3s;
      }

      .step-number span {
        font-family: 'Noto Serif KR', serif;
        font-size: 1.4rem;
        font-weight: 700;
        background: linear-gradient(135deg, var(--gold), var(--light-gold));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .process-step:hover .step-number {
        border-color: var(--gold);
        box-shadow: 0 0 25px rgba(184,150,78,0.25);
        transform: scale(1.05);
      }

      .step-title {
        font-family: 'Noto Serif KR', serif;
        font-size: 1rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 0.6rem;
        letter-spacing: 0.05em;
      }

      .step-desc {
        font-size: 0.82rem;
        color: var(--steel);
        line-height: 1.7;
      }

      /* ===== CONTACT ===== */
      #contact {
        background: linear-gradient(135deg, var(--navy) 0%, var(--dark-navy) 100%);
        position: relative;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        align-items: start;
      }

      .contact-info-item {
        display: flex;
        gap: 1.2rem;
        margin-bottom: 2rem;
        align-items: flex-start;
      }

      .contact-icon {
        width: 48px;
        height: 48px;
        flex-shrink: 0;
        background: linear-gradient(135deg, rgba(184,150,78,0.15), rgba(184,150,78,0.05));
        border: 1px solid rgba(184,150,78,0.3);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gold);
        font-size: 1rem;
      }

      .contact-info-title {
        font-size: 0.75rem;
        color: var(--gold);
        letter-spacing: 0.1em;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 0.3rem;
      }

      .contact-info-value {
        color: var(--silver);
        font-size: 0.9rem;
        line-height: 1.6;
      }

      .contact-form {
        background: rgba(13,32,64,0.5);
        border: 1px solid rgba(184,150,78,0.15);
        border-radius: 4px;
        padding: 2.5rem;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-label {
        display: block;
        font-size: 0.8rem;
        color: var(--gold);
        letter-spacing: 0.1em;
        font-weight: 600;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
      }

      .form-input, .form-select, .form-textarea {
        width: 100%;
        padding: 0.9rem 1.1rem;
        background: rgba(6,14,26,0.7);
        border: 1px solid rgba(138,154,181,0.2);
        color: var(--white);
        font-size: 0.9rem;
        border-radius: 2px;
        font-family: 'Noto Sans KR', sans-serif;
        transition: border-color 0.3s;
        outline: none;
      }

      .form-input:focus, .form-select:focus, .form-textarea:focus {
        border-color: rgba(184,150,78,0.5);
        background: rgba(6,14,26,0.9);
      }

      .form-select option {
        background: var(--navy);
        color: var(--white);
      }

      .form-textarea {
        resize: vertical;
        min-height: 120px;
      }

      .form-submit {
        width: 100%;
        padding: 1rem;
        background: linear-gradient(135deg, var(--gold), var(--light-gold));
        color: var(--dark-navy);
        border: none;
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        border-radius: 2px;
        cursor: pointer;
        font-family: 'Noto Sans KR', sans-serif;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      .form-submit:hover {
        box-shadow: 0 8px 30px rgba(184,150,78,0.4);
        transform: translateY(-1px);
      }

      /* ===== FOOTER ===== */
      footer {
        background: var(--dark-navy);
        border-top: 1px solid rgba(184,150,78,0.15);
        padding: 3rem 0 2rem;
      }

      .footer-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 4rem;
        margin-bottom: 3rem;
      }

      .footer-brand-logo {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 1.2rem;
      }

      .footer-brand-logo img {
        height: 45px;
        width: auto;
        filter: drop-shadow(0 2px 8px rgba(184,150,78,0.3));
      }

      .footer-brand-name {
        font-family: 'Noto Serif KR', serif;
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--white);
        letter-spacing: 0.1em;
      }

      .footer-brand-desc {
        font-size: 0.85rem;
        color: var(--steel);
        line-height: 1.8;
        font-weight: 300;
      }

      .footer-title {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--gold);
        letter-spacing: 0.15em;
        text-transform: uppercase;
        margin-bottom: 1.2rem;
      }

      .footer-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }

      .footer-links a {
        text-decoration: none;
        color: var(--steel);
        font-size: 0.85rem;
        transition: color 0.3s;
      }

      .footer-links a:hover {
        color: var(--gold);
      }

      .footer-bottom {
        border-top: 1px solid rgba(255,255,255,0.05);
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .footer-copy {
        font-size: 0.8rem;
        color: var(--steel);
      }

      .footer-copy span {
        color: var(--gold);
      }

      /* ===== SCROLL TO TOP ===== */
      .scroll-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 45px;
        height: 45px;
        background: linear-gradient(135deg, var(--gold), var(--light-gold));
        color: var(--dark-navy);
        border: none;
        border-radius: 2px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.3s;
        z-index: 999;
        font-size: 0.9rem;
        box-shadow: 0 4px 20px rgba(184,150,78,0.4);
      }

      .scroll-top.visible {
        opacity: 1;
        transform: translateY(0);
      }

      .scroll-top:hover {
        box-shadow: 0 8px 30px rgba(184,150,78,0.6);
        transform: translateY(-2px);
      }

      /* ===== MOBILE ===== */
      @media (max-width: 1024px) {
        .why-grid { grid-template-columns: repeat(2, 1fr); }
        .about-grid { grid-template-columns: 1fr; gap: 3rem; }
        .about-image-side { display: flex; justify-content: center; }
        .process-steps { grid-template-columns: repeat(2, 1fr); gap: 3rem; }
        .process-steps::before { display: none; }
        .contact-grid { grid-template-columns: 1fr; }
        .footer-grid { grid-template-columns: 1fr 1fr; }
      }

      @media (max-width: 768px) {
        .nav-links { display: none; }
        .nav-toggle { display: flex; }
        .why-grid { grid-template-columns: 1fr 1fr; }
        .services-grid { grid-template-columns: 1fr; }
        .values-grid { grid-template-columns: 1fr; }
        .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
        .hero-stats { gap: 1.5rem; }
        .process-steps { grid-template-columns: 1fr; }
      }

      /* ===== ANIMATIONS ===== */
      .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.7s ease;
      }
      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* Mobile nav open state */
      .nav-links.open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0; right: 0;
        background: rgba(6,14,26,0.98);
        padding: 2rem;
        gap: 1.5rem;
        border-bottom: 1px solid rgba(184,150,78,0.2);
      }

      /* Form notification */
      .form-notification {
        padding: 0.9rem 1.2rem;
        border-radius: 2px;
        font-size: 0.85rem;
        margin-top: 1rem;
        display: none;
        align-items: center;
        gap: 8px;
      }
      .form-notification.success {
        background: rgba(52,211,153,0.1);
        border: 1px solid rgba(52,211,153,0.3);
        color: #6ee7b7;
        display: flex;
      }
      .form-notification.error {
        background: rgba(239,68,68,0.1);
        border: 1px solid rgba(239,68,68,0.3);
        color: #fca5a5;
        display: flex;
      }
    </style>
</head>
<body>

<!-- ===== NAVBAR ===== -->
<nav class="navbar" id="navbar">
  <a href="#" class="nav-logo">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA21BMVEVMaXEVEQtEPDMcGBIlIh0WEgwKCQcrJR8bGRWdmZMiHhceGhQeGhNnX1WTi4F8dGpcU0lRST+ro5oIERkMGSMPHSgKFBwOGyUHDxQMFx8ECg8DBAYaLTsZKjcWJjM7OTQRICw3NTBVUUpfWlJbVk9LSEFQTEYWIy5GQj1jXlZAPThpYlqLgnhtZ1+QiH5ybGSEfHOdlIl+d26Xj4R5cWilm4+soZUMExgyLyohHxorKSQODQoVExC4rqO9tKizqJzCuq8oOETIwLbSzMSppJ7r5t5ATVff2tNRX2oCR85BAAAAPXRSTlMAUkzV+y8WA/7+knGsdb+fv9zc///////////////////////////////////////////////////////+XYtPDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAGkdJREFUeNrtnWd34sgShj02tsGenbDKEqAAEpJQQiIIkQzG4f//oltVLYJt9hvM2PdQ47Cz955ZPfNW6K6uli8uzna2s53tbGc729nOdrazne1sZzvb2b643Z5RPhfCzeXNxe3t11finyy5+nb7pVHw0a9/PD7VUu/79cWXRSGMnw9PqyANk8C6+6IoDGP29BgFg2EPUBLn7uZrohBGlgyGgyzKojCOUvuLodCjXv5clBi9XhZFQRQgCqnyRZIxPuXt5Y8HxKgthr0eAwmCKAn7UUKx8vlloee7/uffx6eHKBkshgPSIyBLEoj6fhR1v3+7+dws9GQ3lz/mTy/rIBoMCaOXZRkwbC2Ogyz9fXd5+1lZ6JluL3/++/K06gXZcDFA62VAEjt9QkmTNE0RJYHY/313zVhuP1t0gxY/waUe11E0XKBTkR69XuJr2tjqIwRav58m/bgfEMvl7cWnEaZ8CkbxMsuiwWI2HKJbIccgsCeaPFIRBSCIo9/vJ8CSBr0o/n1H8fK3hSn/4zeX//yYvzw9LrKotpjNFsMFgfQGg8CZEoYsytrYiQGBOPogSZrGoEsv6v/+fn99e/F3aG63/8lbhJg9Pj2t1lk2YBQMAyxxpxonqhraSJG1qh2mBAGfcQgcffgaZCTM/fXN7s8+LdD7Px4Zfv77ABCPs1rUG87mgLFADIQY9mJzonEKYKijkQzfZIXTqrpHJDGBhN0wRpY06vWC/u9f99+ub9//fZ2Q6fbm5hoQfhDDy2pW6yHEfL5gFBjmw0HQqmiqKDIMRRTFkUwo6qSwQqKAzzAMu136R4ABZbKgH/76dQ881zcnfP7Lf/75+fPnjx///jt/fHlBhvm61hsQBFCAHDN0KrBe34fQUEYow0gUldJkjBVRnVT1dkxyIAeYhzTwmzBNo6xX60UBhM8vsru7u8tjh/Xl6gntBezxYbau1WqDxfwBbIYGYuAnBEgvtccgBoQEYCCEVJqiiICmcqKsTipuC58dKEoWD2m6QAeICaxmejVKFr1heHVzZJB/nh5ra7BabbheI8Jq9fAwn2NkzEgNFGWQOGN0oZGGPiUqPAAIgmDAp4AoCjqbzAHQpOK34dG9UhIg8VotrwX/TO5GjBBA7db4+qhrTASp4d//igwRtkYk89ki67tEQXlKHqEYhmBsbYNCgc9xwDLWrS7K4m2t1Wq32u0WIBFhq5vr+bcjg/x8qq2QZL79nKMgQIBfe0Ern4Lf7ChADKDoGB2wHQoPJApLYhx8nVRzF4Xpghjwq5SljTTtttW2Wv7pQLZGYgASREXbnFJAYHiDS1FgwIMjQ6fZYUYgQMJj3IvEosqyisLkdpsxIAVaSQLmm+b9kbcvP156K3x2pgez2SAK7QKUgOCm6EYt4FFJi86Go9lpNjulJOBeqApLyMiyhfGdtrfBQQz8tFquqd8dHaTGQChEACFt+cWU0hBfSiGzHCWUUpDRt40kGxKURRQ5VihRGPw+mY4L3bVYhBCLZbXs/Ogg/77UWISnjmsW1elEw5BQGAM8zKiEQC1IA+Jo1MEazcYbECYKoIxGI05mMERDONVxkeu+60CIWG2n8L8fF+T230dyrdmsio/NQZ2j/MPcCXPszp+YFo0GEBgGo2s2mpsooUBhqiALh8b+pJKG/akOBjsDuTgyCLgWaDKscqOSgHTAMgG5iUGUOoDV6wCxfA7TKIK9umVKUqMpCCWItPEvChZ0Mq4UhHDQtLBlgTmFfnVkkNnjYIVpajAFDJVU2AT0TgUUAn4160uj85zMHh9XWGVwHRlYVYmRgPGMhK1cCAWFkbmdICO16yGIBSDHDZGb2WpAhbw35bSRJGwBGuzpmTM18LNRXzYb8QOsZBa4Yw/SNEiCKAtyrokAwmbNwvP8PgyibEyVNAJxjg1ye3Ezfxji3+48m4iaAmI02UNvbPObeqOxrHfiR1gWD2A9G7vjiTbJY9ywB6bcwTIJJHyJsSNRRI7JwkxQQ8+xHOf4ilzDCpdAAgCRUAn23HV4dPjS2HKAV1mrp4chNubCgnLBSBtHSJJUFYPfSsKzkN+gKEwUQuHkjuohiNUuzMpxV43XD7SeWswTTdEE4iCCOjNiqtPvO9nT47AHu5Igx5UXPrMhZwDST2zVUFCNMm2xL5tVfhn3ZGpHtkIbXKudm5XjrhqvH3B1C6vcviZqAmalN8bqBaGtnuZDXIL3cU9CKy6hqfQS3K6HE5JA2qEwDl7h34NwVmyjJEcGub24Xq3XBBJritppbBR4h1Kv548v1F8chLhPx4iA3NboDKl/Ek4U0mGPRNkpokj02xLEjl0HYiTPjwxyuVoPcc8xDzVR7TT/A2PZeXzBrW5vEBOHwDgMax0jSJdA+JJC2oU7/kuBlyGrj0aUvjqi3y9BisvjgjzCdgo3T95BEEazNNYvC+JIJprCOKBW1g3oLUDPIXU0QdkClILwzLUMUa1A6yuxNchfAML7KYI4Zl58OzbIkEDaAELrj4+2bIZPZd96vOUwOksh7oXYOumPVUHhpV3q3ZogqXlSC8J+e6qJMoIIeuI6tm2ZxdFBagzEghih2ndAkMbjCo4RIEBs8CuegTSXglXDBlDYh79t3HDx70EUgxul66RthzY4pIwghmEGCOKcBgQ6JAtH/Q9FGvVm+jJkfdKJygQRhGZdatWwJRf2W5osifwBPQxVX0SQamMHdmUygUgdExRxTgWCXRK7BPlIsuzMV1QHB/hXT10HoWl0UvAraMP1vYkmidsQkfY52g+x3Wp3W8ChIgeC5ORajn4KELQSpNmofyTxHxcEghHCHKsj6bOoix3S1EIOkecP6BE+tCzYTYVTreQAkEaengxksQGRm81yOfLGjPZqQKEeTGTWegCWqp3iyUg311TgUEotqGKw78jRxu5JnGN87IPYBJIfF+QfUmSxAWl+5Kgb3qpHMRJMOKqE2AyStKnuuLDmkiVWL/jdIgvjBf2KNumho8GqV2aVHUESBLHNE4AMdop0mCa41i2XWvBFaD/0hnT0WZUlRmIIPM/RLpJKN61OtmkLK7wh6ivaoHvd6taxAESo54mPipiV4hSKDIczW4UlygakwRjYt6Y+y+ioLdNVgXEYgqRsF1SbZdaeJOB689QCv2qFujaSNxxQR+p5CiAugOQnC3YC2XDUN2tg+I0EDPARRelE6lAfgnWyeNICfrEeypuElfUs7M212hPMWCWHKHcaZnJKEFh+OAhibFyrvsvDjTrvwiloBCSZp/KsFWRs94PgazynGMIOAwJEtOYW9bE8c8+xUJGGfiLXulz1MCUNhlbpWm/2hyRLsylbMOGA8xpRvxiVz8o26KzpEJqyZOwqomRU5yFitFrWRN1GOoI0Gj64luva+fFBaniAM1i0NyBvWFAaUEA2YSAgwoGNLAmhLxW3NdwQCtQuMrgosqa8sXMsOak5HnXkzP0IgeO6Rsfvo2udAqRHEwAL8BqVuiaN3a6dbaqgi9VRpjabcoAtOk4KeBrsblEOrCtKrx93p7xQ6iHw+bxNgnjtt4KI6tKw45Mp0iOQrsarQinJtudQZ/0H6GUpWpAlxJJ2qS3cKV0L6/y6242tCQsTSL1qFu0ipBRELEF4J/ZdAqkcF+R6XqMYWcRbEOpg7TjqywbfaEXrIcycBGlLp46kIrFOKnLwVg1OPeIxJ1EWExR/brEmb3uq7nsWgbRDAikqx96zz9Z05DzsT6SNImUXqF42gQQ3W61mvSSJYjhDpI0uLdvLrlxTiRI4vIl1VaLK2JFriUUcnq/t60EgSssj16ocHWSxzkgSqBGqtEtbZScImkD6+vGhB7ERwaJJG0FcEIW04TAEf+3hsZquEYghujOrPKGios5x+4qIYYsUGRfQDjomyM1wFuFUBuw1JJVnTdJdX265FJIXmKWBY8wANkdKp/SeLQYIIgYJnqeFuUa7K0OupXQI0mq52s6vyt7WkutbO5DjNrHn0RCHfaIpryob19pw1Iv5ywCny7J0rI06sO+QpD0IyFodEATO2ECSqoqQgmgvSBD4KLT9AEEbLeWUQFwAOW6n8fbHPFjQ+FVVkZW9swOI+GVDf1kFxNGdaJBmd4EhbCNEzFI6i7ZgHAL+d0Me9tvsaAqL4TsQ7nmU2C6B5Efuxl/8WAVscmmsyCM4R9icIABH0395wHIeIUeHtrObM+mNdXhr2MLjaPAs3JbA4mQNtRDNyzVOfcehLKsBCeKPiyOfj1z8XCU0ujTIcU23OUYARep1EzlwiRVONIM2uRLDMLYwzc66T6MBrYmKx+9NZQ1n6OygcPpBELmzLAIdQfRq8f3Yp7qrlHUWfFmR6XytRIGm3AOIkUE5n0Lfqtzk7mNIQpNLM0hZMBBgoiBSRwzXlHphj0u59y2I2oDFL4LY5ri4O/bAwEPARskcWKNsQcCxlPUjLhQhQHJN2oSHsS9HmXo9mAyAtYgi8oIxnnfp4BY+xh9CnVPrTTvWXR8K+7i4PzLI5TzrEYmnQkWk0yo6Ymu2XmjpHvVacAC0CXODULaOpdT6Hg2cQIRAx6sjBzWnPEq3PwoCZURqeQDi28V4/O3Ip7rX616GHZIMS7u0BVl2Vgu2BwmqGqXd0q/2OcQ0wykTz7NwPgiOHfWHcrjBYrn3LYmoPoux5fsgyXh85FkUqIi9dTDA/V8wlVTFKJ2rboSPmK7gA3qp+3l3B9KRXCghHo6WFCRIk1vD4gRPn+HYlnLvO9caLZUEMhbkrWpx5OkgKiTpIEOriLLIBjQARJgNI2YVaD/ze1VwwwH/T8pYsKOFigGCdLhwZnlsIqBtarL6nkOWlmPIvj4YgBx9DvPnQ0rTyAMTRi2x00Ou5a9QD6iGoTbatBf3DIChFAY0AkTbJzjPNopVWDqWZU3fhwj14pdmaiKIeezsS2lrlWTYI+nhrt0Q2JGuET7QjjCIXBBE4YU3lRATF2TenkfDTC2vioI05XXkdNn0T9unKQHufawbToggbj6u3B8d5Ns8oCbJoKuxtAXOVeeTRcAm+Cvq2wgpORpcXPNaYQtCHTolMEHU5OJ54cUWE6RywLNwER9aOgjiVo6ftCBtQQsRXStLJ3wZ7Z2GEvUSNsBfVXlF+uBaTa67Dl29j7NYsKiSxQ7vrpwpVnXksPeXWeLeSiulCHGr48qxYx00CRYpZq0sG8NZDHbfOkZDxEpI9xCmMr8JdWMT7UaT89ahpdn9FsYIKNLk84dwUqQWcbTzA4LQAiUxEUSvVq5OMG76a97vUaKFRYpqsECGpQeMNeDmtqpK7zwLDrG5eB06E83qs9m4QlPcWVrRvJDGMyxnqn5c+IJnNeyYQMxq5fvRPQuifZ7iEjfI2iqWRJaRvB5ywMbQ1N77FXQiklrX1lTNTWkEC45Akho23RPGYZkHQh3LoRK3MUT8onqCEIFFyhDWU5igsLYrLLfyeg8aP3ATIehqrH21daymmGdRy8TDmyKxPNYu6UIK1uzUATXAph+XJ7iGfx4FPoXIeFy5PsE9pptg2M8C1KQiinJ50jmCk1h2LUTXmruVotEUlNYgbcMCZCSLk9DD5hWsEWH1K49SDyMETmw19QCHWl/mSY4Rok9PEiIQJLOYrhlF9ta3DDEP+owkLdRydBEqpST6WS+04QxqBENq8jjEvo8XwqD5SM4DGCpDRaqHBAHPkrwuhIju59PK3QkEub24X6Ss+MUTofQtwVCtIAYKnNDQVZFAJEWwI2gtwCkVjMbiULk6dXEMVp9oI1ENY5zNcCz9UIQAyTMX2KiHPz5FiFAlibI+3sMLggrMAQrlwYFqJTFdC4mD2M2LIvettFZL6KkVWaaxMhhBnUynOEorc0JECcuBme0DuZdTl5R8dfSsU1QR0uTXuosYSWCrglpGtiRpOl0EieNuDBGEq5ggtmASGOWA2UeRzcvAbBwMaMA9DC8hQRy2OjngWbznAYiu56dIvhvfiqmMB5C3ZJFOpaCRK6kT36O7FOwGgmf5FbyPNCI5FHE7wwQcMFqbtR2c+ykF+VANJchZLvjVCT0LEnAQxBGWDRjrU1SWbekagqpVc98Gd7FdszJl02by7soFDZLTFJPEWZFLqdc/GCFYDXXIWSDI6TwLfWvoYRlPEg/DnRVAmvVRNoOnNHo6KjHEchhrN10miL0WYtj2YUG40bOaWqbum3oxPZFnkW8N4/Iy4VgBL+CpRQIHHXtjcCMFPAiGrEsM5c3oIgmCkxmO/h8RAqEekSB+tVq9PBnIdRp1A7xNGFgQ7spmlbg3XE1RIYpbp+I3itAXQ8za5IF29WDKEuVnOfZMdCzzVNWwrInDdnkzssrL2/XudvqV7ozs5GEA2wNqReDaKIgFZ5wHObCqjyPkMHUI9fuTXbOG3VXQ7xJJYMNI63bhvhkcRWdTqqOtQ239in0TqjWL9ICSj0dt8kdBuBAuv5Agpwt1Fu4DK0npUmRVkuXtga0glaPiRicYyx9AyvEANU4gZcGhc3Ew0jFCqiSI7lem47sT3nsHSaIwpHuqiS3Dgovf7kEYTZNLAq2cOVHewQi82bNRD8efHNqHgCCvcswEgdxbvT7pBf7bX5mT0F3VPrTlZYl/ewzCmzSsxSvSBz14YZR5BFJG+iFByghBQb6fluPiPmqVF1VZ4tqXBI7Sw4hA3oz7MZKOHNMsmW0fdiwgeVXhllMZIScWBHYlvyMnodu2aQHLWomVRYmdpRtiAPN8bHBRegtiiHaP5kZtLCEHi/pzRw9yHUlOLghJEnhdumwLw32GKkp7kkjCOIKGO7t/+HZ4UeCLGhRC0MOdHi4hauNZjVxaLv4JQVCSwE7xfm2Y+rKh8pu8RcFegONVOTbYIO0N+EJW7nnMsar/4VijV7Ubs1XW+PSCkCR9r9XHu7VhPOaVbfOEnrwSwCVItbzpshm4RtRRFDOOco11YPneKDKWsfLJafbqH1B+Ry7deIYJ2Ikhj2jWXWC3KaoJjl6VIcJQsLjwCnAgho2txf90LJsV9Wr1pDVkr5Z4sd1HkLCvq4a6vVYMdV0O4ZKnrhnSngkGl2chUrgbjg96oGPFMUQ6WDEZX91c/BG7CxwvpGu2cYWDsri53MILnNt32tAqEbYTZ0aH59o1b+dXhwIEM5abQYAgyKRa/faHXmZz8zvx4/IG97QMkzJNQVsXJ0annFBeouQ5M4rsXb46pIeiPi/HNXAqwNCrfyLSt87V7box3eCGsSWDk6VNvpXkvA+N9rjvVuEBYdXRsZPMw6E+WPFCN+KgHoq6fFYzByIdOP6gY5FzpW47pLu1oQv3iDiKbhpLVv0Q+oitfhp7bQ9f5eK5NIkM4aEezFfA0XjVkpAFSP4HHYs5V2rCmSBe347hMhvWRbYqATfJuy1Asagf0bLhjNm1LSef0HzyQY7OqxomhY8c5nT6RzLWnnNZXZ0k6bbCQsbUVe48sBtnw7Ql9CHgVBbEwFVJTm95ObSV4hRZeIWhTqYHlsKrP/pylNuLu9BxQ49mdrsVjtYqGxJ4A4ru4NEatXjdvEqduYPlHPSQXkW/R/Fh6pXJn1ibvEP53vetLs0et7pjcZ8EunFwDbpaKYpiXJ1QX+UghogcwitvlgmLAuT+T3NAmPTNtsfeCdAdKxgnyuZOtIhX1TfXu0fvcq64+weMDyWv+TuOuz/+OjRo19ndnL0QAI46kQSmLjc3CrlRaZvbt9whw3zFEYdeBvrVX3gXEgS808o9NouBcUIke7c8R9zogyvtvopYB5evsllzWYCYUAmvbi7+Csl928rZ9JjVhtzVhAbRm/uqdNWTfoniGyL274BDdTd+ZVb/QqDvUlfLyT2LTTHA4HtHVHctxz2Y7eVVhkWiwHuEnl81q6ezxGuOgePb33pf4O3F97ad06sAkMRVDUkV9zR5x0IA5XeYJ3x91sIsN7cc029/8b2Ht9/bTt4uD2m7OMKvyltFyovqe5ps4gPcqvnaUJOk2OO4/5scb0gcSMNcE91L3KCI4ntNEEfB8ODGcN9d33BU/yoHI4GFlEWHgvABgWIIKsdvKfYk4cTStRR19Pys2TV4MwUD+fscLOIdpyAS/AjBvTqyTD6liPsUG6cCORqvda2fYZjrZk756u9zEIlrFU7bIbNhTE42eHwd0sdoR1GgPfmMbpUWeqnH9G/mq3f1RLcKdqCGnd3QncCgtczylvjeYFGy1KyaRW4Fv3Ko55+Dg2q8Di9naLMTA9v2PCjzSinKGyM5+GkQ+azxg50GqOfXn+V9s3CUdWX5OXHgp9V1YeRPVt9jYHQsIcq7GwwM8+rfWZf851r4OzSnXQs54APmHApZUFT5DYcqPr8q1STzS7cy8ylwfL/5TO//hTR8p9uFadnMXDt0qpwgqtzOq6B21CE6yhMpk7kV7D8+13uM4cWQ33K4Rm87Lt4ogl/tri6Df8kUKrCy6rw+q0UU6NTeLavH+Orb53tXLgaK61d8h138gA271yrgvBRQRE4Vnp/5Ub9nbaODstXncqt998phrMYuSVzf9qwxh68JUZ6fO3KrF+bmRo4KyPHp3GrPvS6vXL2i20wR+HS6dpWTOs8N2clS8ipqlmCUU9a9/bQvk74BUYoCQoRm+eCr5blVceRGiVvorLeLcoBb3d1+5reVkyg63N0GEsai++2WEwR2bpZOBUMmWDwuP/mbym9JFD8H//JL03XL3qZcM69idHxuObYo11fgPgWTxCeH0lmy0vMxetVnjo536ev+yoRbRYCiEwnTA1xuCm8vrNzffpUfrEL+VZjFOHd3GCw4wKtuvtiPV7j+Dq9dq8DtiRIDggNL4PUX+zk3+Jf+7SrPx2Mc4dVLDMhVX+8Hd9xSqOQFoiAGpNyv+gNuGAq05Mewrhpf3X/hn9ODUX9PxwuV+y/+k5Pwpz/dX13Rj4K5+NKGMtDnxcX/w8/kuv1/4Djb2c52trOd7WxnO9vZzna2s53tbGc729nOdrazne1sZzvb2c52trOd7eJ/o7lRDC0l3OgAAAAASUVORK5CYII=" alt="은연 로고">
    <div class="nav-logo-text">
      <span class="nav-logo-name">은연</span>
      <span class="nav-logo-sub">EUNYEON SECURITY</span>
    </div>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="#services">서비스</a></li>
    <li><a href="#about">회사소개</a></li>
    <li><a href="#why-us">전문성</a></li>
    <li><a href="#process">업무절차</a></li>
    <li><a href="#contact" class="nav-cta">문의하기</a></li>
  </ul>
  <button class="nav-toggle" id="navToggle" aria-label="메뉴">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- ===== HERO ===== -->
<section class="hero" id="home">
  <div class="hero-bg-pattern"></div>
  <div class="hero-grid"></div>
  <div class="hero-content">
    <div class="hero-badge">
      <i class="fas fa-shield-halved"></i>
      <span>PREMIUM SECURITY &amp; FACILITY SERVICE</span>
    </div>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA21BMVEVMaXEVEQtEPDMcGBIlIh0WEgwKCQcrJR8bGRWdmZMiHhceGhQeGhNnX1WTi4F8dGpcU0lRST+ro5oIERkMGSMPHSgKFBwOGyUHDxQMFx8ECg8DBAYaLTsZKjcWJjM7OTQRICw3NTBVUUpfWlJbVk9LSEFQTEYWIy5GQj1jXlZAPThpYlqLgnhtZ1+QiH5ybGSEfHOdlIl+d26Xj4R5cWilm4+soZUMExgyLyohHxorKSQODQoVExC4rqO9tKizqJzCuq8oOETIwLbSzMSppJ7r5t5ATVff2tNRX2oCR85BAAAAPXRSTlMAUkzV+y8WA/7+knGsdb+fv9zc///////////////////////////////////////////////////////+XYtPDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAGkdJREFUeNrtnWd34sgShj02tsGenbDKEqAAEpJQQiIIkQzG4f//oltVLYJt9hvM2PdQ47Cz955ZPfNW6K6uli8uzna2s53tbGc729nOdrazne1sZzvb2b643Z5RPhfCzeXNxe3t11finyy5+nb7pVHw0a9/PD7VUu/79cWXRSGMnw9PqyANk8C6+6IoDGP29BgFg2EPUBLn7uZrohBGlgyGgyzKojCOUvuLodCjXv5clBi9XhZFQRQgCqnyRZIxPuXt5Y8HxKgthr0eAwmCKAn7UUKx8vlloee7/uffx6eHKBkshgPSIyBLEoj6fhR1v3+7+dws9GQ3lz/mTy/rIBoMCaOXZRkwbC2Ogyz9fXd5+1lZ6JluL3/++/K06gXZcDFA62VAEjt9QkmTNE0RJYHY/313zVhuP1t0gxY/waUe11E0XKBTkR69XuJr2tjqIwRav58m/bgfEMvl7cWnEaZ8CkbxMsuiwWI2HKJbIccgsCeaPFIRBSCIo9/vJ8CSBr0o/n1H8fK3hSn/4zeX//yYvzw9LrKotpjNFsMFgfQGg8CZEoYsytrYiQGBOPogSZrGoEsv6v/+fn99e/F3aG63/8lbhJg9Pj2t1lk2YBQMAyxxpxonqhraSJG1qh2mBAGfcQgcffgaZCTM/fXN7s8+LdD7Px4Zfv77ABCPs1rUG87mgLFADIQY9mJzonEKYKijkQzfZIXTqrpH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" alt="은연 로고" class="hero-logo">
    <h1 class="hero-title">
      신뢰와 전문성으로<br>
      <span class="accent">당신의 안전</span>을 지킵니다
    </h1>
    <div class="hero-divider"></div>
    <p class="hero-subtitle">
      은연은 경호·경비·환경미화 분야의 전문 기업으로,<br>
      오랜 경험과 철저한 교육을 바탕으로 최고 수준의 서비스를 제공합니다.
    </p>
    <div class="hero-buttons">
      <a href="#contact" class="btn-primary">
        <i class="fas fa-envelope"></i> 무료 상담 문의
      </a>
      <a href="#services" class="btn-secondary">
        <i class="fas fa-arrow-down"></i> 서비스 보기
      </a>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-number">10+</span>
        <span class="stat-label">업력 (년)</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">500+</span>
        <span class="stat-label">계약 고객사</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">99%</span>
        <span class="stat-label">고객 만족도</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">24/7</span>
        <span class="stat-label">상시 대응 체계</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== SERVICES ===== -->
<section class="section" id="services">
  <div class="section-inner">
    <div class="services-header fade-in">
      <div class="section-label">OUR SERVICES</div>
      <h2 class="section-title">전문 서비스</h2>
      <p class="section-desc" style="margin: 0 auto;">경호부터 환경미화까지, 은연이 제공하는 통합 보안·시설 관리 서비스를 만나보세요.</p>
    </div>
    <div class="services-grid">
      <div class="service-card fade-in">
        <div class="service-icon"><i class="fas fa-user-shield"></i></div>
        <h3 class="service-title">경호 서비스</h3>
        <p class="service-desc">VIP 및 기업 임원 경호부터 행사 경호까지, 전문 훈련된 경호원이 24시간 완벽한 신변 보호를 제공합니다.</p>
        <div class="service-features">
          <div class="service-feature"><i class="fas fa-check"></i> VIP 신변 경호</div>
          <div class="service-feature"><i class="fas fa-check"></i> 행사·집회 경호</div>
          <div class="service-feature"><i class="fas fa-check"></i> 이동 차량 경호</div>
          <div class="service-feature"><i class="fas fa-check"></i> 위협 상황 대응</div>
        </div>
      </div>
      <div class="service-card fade-in">
        <div class="service-icon"><i class="fas fa-shield-halved"></i></div>
        <h3 class="service-title">경비 서비스</h3>
        <p class="service-desc">건물, 시설, 공사현장까지 다양한 환경에서 체계적인 경비 시스템으로 재산과 인명을 보호합니다.</p>
        <div class="service-features">
          <div class="service-feature"><i class="fas fa-check"></i> 시설 상주 경비</div>
          <div class="service-feature"><i class="fas fa-check"></i> 아파트 단지 경비</div>
          <div class="service-feature"><i class="fas fa-check"></i> 공사현장 경비</div>
          <div class="service-feature"><i class="fas fa-check"></i> CCTV 통합 관제</div>
        </div>
      </div>
      <div class="service-card fade-in">
        <div class="service-icon"><i class="fas fa-broom"></i></div>
        <h3 class="service-title">환경미화 서비스</h3>
        <p class="service-desc">쾌적하고 위생적인 환경 조성을 위해 전문 장비와 인력으로 체계적인 청결 관리 서비스를 제공합니다.</p>
        <div class="service-features">
          <div class="service-feature"><i class="fas fa-check"></i> 건물 내·외부 청소</div>
          <div class="service-feature"><i class="fas fa-check"></i> 정기 위생 관리</div>
          <div class="service-feature"><i class="fas fa-check"></i> 소독·방역 서비스</div>
          <div class="service-feature"><i class="fas fa-check"></i> 특수 청소 서비스</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== ABOUT ===== -->
<section class="section" id="about">
  <div class="section-inner">
    <div class="about-grid">
      <div class="about-image-side fade-in">
        <div class="about-emblem">
          <div class="about-corner tl"></div>
          <div class="about-corner tr"></div>
          <div class="about-corner bl"></div>
          <div class="about-corner br"></div>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA21BMVEVMaXEVEQtEPDMcGBIlIh0WEgwKCQcrJR8bGRWdmZMiHhceGhQeGhNnX1WTi4F8dGpcU0lRST+ro5oIERkMGSMPHSgKFBwOGyUHDxQMFx8ECg8DBAYaLTsZKjcWJjM7OTQRICw3NTBVUUpfWlJbVk9LSEFQTEYWIy5GQj1jXlZAPThpYlqLgnhtZ1+QiH5ybGSEfHOdlIl+d26Xj4R5cWilm4+soZUMExgyLyohHxorKSQODQoVExC4rqO9tKizqJzCuq8oOETIwLbSzMSppJ7r5t5ATVff2tNRX2oCR85BAAAAPXRSTlMAUkzV+y8WA/7+knGsdb+fv9zc///////////////////////////////////////////////////////+XYtPDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAGkdJREFUeNrtnWd34sgShj02tsGenbDKEqAAEpJQQiIIkQzG4f//oltVLYJt9hvM2PdQ47Cz955ZPfNW6K6uli8uzna2s53tbGc729nOdrazne1sZzvb2b643Z5RPhfCzeXNxe3t11finyy5+nb7pVHw0a9/PD7VUu/79cWXRSGMnw9PqyANk8C6+6IoDGP29BgFg2EPUBLn7uZrohBGlgyGgyzKojCOUvuLodCjXv5clBi9XhZFQRQgCqnyRZIxPuXt5Y8HxKgthr0eAwmCKAn7UUKx8vlloee7/uffx6eHKBkshgPSIyBLEoj6fhR1v3+7+dws9GQ3lz/mTy/rIBoMCaOXZRkwbC2Ogyz9fXd5+1lZ6JluL3/++/K06gXZcDFA62VAEjt9QkmTNE0RJYHY/313zVhuP1t0gxY/waUe11E0XKBTkR69XuJr2tjqIwRav58m/bgfEMvl7cWnEaZ8CkbxMsuiwWI2HKJbIccgsCeaPFIRBSCIo9/vJ8CSBr0o/n1H8fK3hSn/4zeX//yYvzw9LrKotpjNFsMFgfQGg8CZEoYsytrYiQGBOPogSZrGoEsv6v/+fn99e/F3aG63/8lbhJg9Pj2t1lk2YBQMAyxxpxonqhraSJG1qh2mBAGfcQgcffgaZCTM/fXN7s8+LdD7Px4Zfv77ABCPs1rUG87mgLFADIQY9mJzonEKYKijkQzfZIXTqrpH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" alt="은연 엠블럼" class="about-emblem-logo">
        </div>
      </div>
      <div class="about-content fade-in">
        <div class="section-label">ABOUT EUNYEON</div>
        <h2 class="section-title">믿을 수 있는<br>파트너, 은연</h2>
        <p class="section-desc" style="max-width: 100%; margin-top: 1rem;">
          은연은 경기도 성남시를 기반으로 경호, 경비, 환경미화 분야에서 
          전문적인 서비스를 제공하는 기업입니다. 엄격한 채용 기준과 
          지속적인 교육 훈련을 통해 최고 수준의 전문 인력을 양성하며,
          고객의 안전과 만족을 최우선으로 생각합니다.
        </p>
        <div class="values-grid">
          <div class="value-item">
            <div class="value-title">🛡️ 신뢰</div>
            <div class="value-desc">투명한 계약과 성실한 이행으로 고객과의 신뢰를 쌓아갑니다.</div>
          </div>
          <div class="value-item">
            <div class="value-title">⚡ 전문성</div>
            <div class="value-desc">지속적인 교육과 훈련으로 최고 수준의 전문성을 유지합니다.</div>
          </div>
          <div class="value-item">
            <div class="value-title">🎯 책임감</div>
            <div class="value-desc">맡은 임무에 대한 철저한 책임 의식으로 완벽하게 수행합니다.</div>
          </div>
          <div class="value-item">
            <div class="value-title">💎 품질</div>
            <div class="value-desc">타협 없는 서비스 품질로 업계 최고 기준을 제시합니다.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== WHY US ===== -->
<section class="section" id="why-us">
  <div class="section-inner">
    <div style="text-align:center;" class="fade-in">
      <div class="section-label">WHY EUNYEON</div>
      <h2 class="section-title">은연을 선택하는 이유</h2>
    </div>
    <div class="why-grid">
      <div class="why-item fade-in">
        <i class="fas fa-certificate why-icon"></i>
        <div class="why-title">공인 자격 보유</div>
        <div class="why-desc">관련 법령에 따른 모든 인허가 및 전문 자격을 완비한 합법적 기업입니다.</div>
      </div>
      <div class="why-item fade-in">
        <i class="fas fa-users-cog why-icon"></i>
        <div class="why-title">정예 전문 인력</div>
        <div class="why-desc">엄선된 채용 절차와 체계적인 교육 프로그램으로 양성된 전문 인력을 운용합니다.</div>
      </div>
      <div class="why-item fade-in">
        <i class="fas fa-clock why-icon"></i>
        <div class="why-title">24시간 대응 체계</div>
        <div class="why-desc">365일 24시간 긴급 대응 시스템을 갖추고 언제든지 신속하게 대처합니다.</div>
      </div>
      <div class="why-item fade-in">
        <i class="fas fa-handshake why-icon"></i>
        <div class="why-title">고객 맞춤 서비스</div>
        <div class="why-desc">고객의 상황과 요구에 최적화된 맞춤형 서비스 방안을 제안합니다.</div>
      </div>
    </div>
  </div>
</section>

<!-- ===== PROCESS ===== -->
<section class="section" id="process">
  <div class="section-inner">
    <div class="process-header fade-in">
      <div class="section-label">HOW WE WORK</div>
      <h2 class="section-title">업무 진행 절차</h2>
      <p class="section-desc" style="margin: 0 auto;">
        체계적인 프로세스로 고객 맞춤형 최적 서비스를 제공합니다.
      </p>
    </div>
    <div class="process-steps">
      <div class="process-step fade-in">
        <div class="step-number"><span>01</span></div>
        <div class="step-title">초기 상담</div>
        <div class="step-desc">고객의 요구사항과 환경을 면밀히 파악하고 맞춤형 서비스 방향을 협의합니다.</div>
      </div>
      <div class="process-step fade-in">
        <div class="step-number"><span>02</span></div>
        <div class="step-title">현장 조사</div>
        <div class="step-desc">전문 담당자가 직접 현장을 방문하여 보안 취약점과 서비스 범위를 분석합니다.</div>
      </div>
      <div class="process-step fade-in">
        <div class="step-number"><span>03</span></div>
        <div class="step-title">서비스 설계</div>
        <div class="step-desc">분석 결과를 바탕으로 최적화된 서비스 방안과 인력 배치 계획을 수립합니다.</div>
      </div>
      <div class="process-step fade-in">
        <div class="step-number"><span>04</span></div>
        <div class="step-title">운영 및 관리</div>
        <div class="step-desc">계약 체결 후 즉시 서비스 시작, 지속적인 품질 관리와 고객 피드백을 반영합니다.</div>
      </div>
    </div>
  </div>
</section>

<!-- ===== CONTACT ===== -->
<section class="section" id="contact">
  <div class="section-inner">
    <div class="contact-grid">
      <div class="fade-in">
        <div class="section-label">CONTACT US</div>
        <h2 class="section-title">지금 바로<br>문의하세요</h2>
        <p class="section-desc" style="margin-top: 1rem; margin-bottom: 3rem;">
          경호, 경비, 환경미화 서비스에 관한 모든 궁금증을 해결해 드립니다. 
          전문 상담원이 신속하게 답변드리겠습니다.
        </p>
        <div class="contact-info-item">
          <div class="contact-icon"><i class="fas fa-location-dot"></i></div>
          <div>
            <div class="contact-info-title">회사 주소</div>
            <div class="contact-info-value">경기도 성남시 중원구 산성대로 136, 202호<br>(성남동, 지앤느모란)</div>
          </div>
        </div>
        <div class="contact-info-item">
          <div class="contact-icon"><i class="fas fa-phone"></i></div>
          <div>
            <div class="contact-info-title">전화 문의</div>
            <div class="contact-info-value">대표번호로 연락주시면<br>신속하게 안내해 드리겠습니다.</div>
          </div>
        </div>
        <div class="contact-info-item">
          <div class="contact-icon"><i class="fas fa-clock"></i></div>
          <div>
            <div class="contact-info-title">운영 시간</div>
            <div class="contact-info-value">평일 09:00 – 18:00<br>긴급 상황 24시간 대응</div>
          </div>
        </div>
      </div>
      <div class="fade-in">
        <div class="contact-form">
          <form id="contactForm">
            <div class="form-group">
              <label class="form-label">성함 / 회사명</label>
              <input type="text" class="form-input" id="formName" placeholder="이름 또는 회사명을 입력하세요" required>
            </div>
            <div class="form-group">
              <label class="form-label">연락처</label>
              <input type="tel" class="form-input" id="formPhone" placeholder="010-0000-0000" required>
            </div>
            <div class="form-group">
              <label class="form-label">이메일</label>
              <input type="email" class="form-input" id="formEmail" placeholder="example@email.com">
            </div>
            <div class="form-group">
              <label class="form-label">서비스 종류</label>
              <select class="form-select" id="formService">
                <option value="">서비스를 선택하세요</option>
                <option value="경호">경호 서비스</option>
                <option value="경비">경비 서비스</option>
                <option value="환경미화">환경미화 서비스</option>
                <option value="복합">복합 서비스</option>
                <option value="기타">기타 문의</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">문의 내용</label>
              <textarea class="form-textarea" id="formMessage" placeholder="서비스 규모, 위치, 기간 등 상세 내용을 적어주시면 더욱 정확한 안내가 가능합니다."></textarea>
            </div>
            <button type="submit" class="form-submit">
              <i class="fas fa-paper-plane"></i> 문의 접수하기
            </button>
            <div class="form-notification" id="formNotification"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-logo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAA21BMVEVMaXEVEQtEPDMcGBIlIh0WEgwKCQcrJR8bGRWdmZMiHhceGhQeGhNnX1WTi4F8dGpcU0lRST+ro5oIERkMGSMPHSgKFBwOGyUHDxQMFx8ECg8DBAYaLTsZKjcWJjM7OTQRICw3NTBVUUpfWlJbVk9LSEFQTEYWIy5GQj1jXlZAPThpYlqLgnhtZ1+QiH5ybGSEfHOdlIl+d26Xj4R5cWilm4+soZUMExgyLyohHxorKSQODQoVExC4rqO9tKizqJzCuq8oOETIwLbSzMSppJ7r5t5ATVff2tNRX2oCR85BAAAAPXRSTlMAUkzV+y8WA/7+knGsdb+fv9zc///////////////////////////////////////////////////////+XYtPDgAAAAlwSFlzAAALEwAACxMBAJqcGAAAGkdJREFUeNrtnWd34sgShj02tsGenbDKEqAAEpJQQiIIkQzG4f//oltVLYJt9hvM2PdQ47Cz955ZPfNW6K6uli8uzna2s53tbGc729nOdrazne1sZzvb2b643Z5RPhfCzeXNxe3t11finyy5+nb7pVHw0a9/PD7VUu/79cWXRSGMnw9PqyANk8C6+6IoDGP29BgFg2EPUBLn7uZrohBGlgyGgyzKojCOUvuLodCjXv5clBi9XhZFQRQgCqnyRZIxPuXt5Y8HxKgthr0eAwmCKAn7UUKx8vlloee7/uffx6eHKBkshgPSIyBLEoj6fhR1v3+7+dws9GQ3lz/mTy/rIBoMCaOXZRkwbC2Ogyz9fXd5+1lZ6JluL3/++/K06gXZcDFA62VAEjt9QkmTNE0RJYHY/313zVhuP1t0gxY/waUe11E0XKBTkR69XuJr2tjqIwRav58m/bgfEMvl7cWnEaZ8CkbxMsuiwWI2HKJbIccgsCeaPFIRBSCIo9/vJ8CSBr0o/n1H8fK3hSn/4zeX//yYvzw9LrKotpjNFsMFgfQGg8CZEoYsytrYiQGBOPogSZrGoEsv6v/+fn99e/F3aG63/8lbhJg9Pj2t1lk2YBQMAyxxpxonqhraSJG1qh2mBAGfcQgcffgaZCTM/fXN7s8+LdD7Px4Zfv77ABCPs1rUG87mgLFADIQY9mJzonEKYKijkQzfZIXTqrpH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" alt="은연 로고">
          <span class="footer-brand-name">은연</span>
        </div>
        <p class="footer-brand-desc">
          경호·경비·환경미화 전문기업 은연은<br>
          신뢰와 전문성을 바탕으로<br>
          고객의 안전과 쾌적한 환경을 책임집니다.
        </p>
      </div>
      <div>
        <div class="footer-title">서비스</div>
        <ul class="footer-links">
          <li><a href="#services">경호 서비스</a></li>
          <li><a href="#services">경비 서비스</a></li>
          <li><a href="#services">환경미화 서비스</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-title">회사정보</div>
        <ul class="footer-links">
          <li><a href="#about">회사 소개</a></li>
          <li><a href="#why-us">전문성</a></li>
          <li><a href="#process">업무절차</a></li>
          <li><a href="#contact">문의하기</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">
        © 2024 <span>은연 (Eunyeon)</span>. All Rights Reserved. |
        경기도 성남시 중원구 산성대로 136, 202호 (성남동, 지앤느모란)
      </div>
    </div>
  </div>
</footer>

<!-- ===== SCROLL TO TOP ===== -->
<button class="scroll-top" id="scrollTop" aria-label="맨 위로">
  <i class="fas fa-chevron-up"></i>
</button>

<script>
  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== MOBILE NAV =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close nav on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // ===== SCROLL TO TOP =====
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ===== INTERSECTION OBSERVER (ANIMATIONS) =====
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  fadeEls.forEach(el => observer.observe(el));

  // ===== CONTACT FORM =====
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const notification = document.getElementById('formNotification');

    if (!name || !phone) {
      notification.className = 'form-notification error';
      notification.innerHTML = '<i class="fas fa-circle-exclamation"></i> 성함과 연락처는 필수 입력 항목입니다.';
      return;
    }

    // Simulate form submission
    const btn = this.querySelector('.form-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 전송 중...';
    btn.disabled = true;

    setTimeout(() => {
      notification.className = 'form-notification success';
      notification.innerHTML = '<i class="fas fa-circle-check"></i> 문의가 접수되었습니다. 빠른 시간 내에 연락드리겠습니다.';
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> 문의 접수하기';
      btn.disabled = false;
      this.reset();
    }, 1500);
  });

  // ===== SMOOTH ANCHOR SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== COUNTER ANIMATION =====
  function animateCounter(el, end, suffix) {
    let start = 0;
    const duration = 2000;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * end);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stats = entry.target.querySelectorAll('.stat-number');
        stats.forEach(stat => {
          const text = stat.textContent;
          if (text.includes('+')) {
            const num = parseInt(text);
            animateCounter(stat, num, '+');
          } else if (text.includes('%')) {
            const num = parseInt(text);
            animateCounter(stat, num, '%');
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) statsObserver.observe(heroStats);
</script>
</body>
</html>`)
})

export default app
