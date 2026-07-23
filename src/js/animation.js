//jshint esversion:8
'use strict';

// ======================== DOM REFERENCES ========================

const button    = document.querySelector('.btn'),
      darkroom  = document.querySelector('.darkroom'),
      giftroom  = document.querySelector('.giftroom'),
      hallway   = document.querySelector('.hallway'),
      room      = document.querySelector('.empty-room'),
      flash     = document.querySelector('.flash');

const blackText = document.querySelectorAll('.bb-text'),
      giftText  = document.querySelectorAll('.gift-text'),
      hallText  = document.querySelectorAll('.hall-text'),
      roomText  = document.querySelectorAll('.room-text'),
      CTAtext   = document.querySelector('.btn-ref');

const frames     = document.querySelectorAll('.frame'),
      msgWindow  = document.querySelector('.scroll'),
      msg        = document.querySelector('.text');

const light = document.querySelector('.switch-aud'),
      blast = document.querySelector('.blast-aud'),
      door  = document.querySelector('.door-aud'),
      haunt = document.querySelector('.haunt-aud'),
      music = document.querySelector('.hbd-aud');

// ======================== PASSWORD GATE ========================

/**
 * Shows the password gate and calls `onSuccess` after the correct
 * password is entered and the gate finishes fading out.
 */
const initPasswordGate = (onSuccess) => {
  const gate       = document.getElementById('passwordGate');
  const input      = document.getElementById('passwordInput');
  const btn        = document.getElementById('passwordBtn');
  const toggleBtn  = document.getElementById('togglePassword');
  const errorMsg   = document.getElementById('passwordError');
  const PASSWORD   = '140470';

  // Show / hide password toggle
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';
      toggleBtn.innerHTML = isHidden ? '🙈' : '👁️';
    });
  }

  const unlock = () => {
    if (input.value === PASSWORD) {
      gate.classList.add('gate-unlocking');
      setTimeout(() => {
        gate.style.display = 'none';
        if (typeof onSuccess === 'function') onSuccess();
      }, 800);
    } else {
      errorMsg.classList.add('visible');
      input.classList.add('shake');
      setTimeout(() => {
        input.classList.remove('shake');
        input.value = '';
        input.focus();
      }, 600);
    }
  };

  btn.addEventListener('click', unlock);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') unlock();
    errorMsg.classList.remove('visible');
  });
};

// ======================== PASSWORD INTRO ========================

/**
 * Shows a short cinematic intro ("User identified — It's Mrunmayee! But hey…")
 * before the dark-room experience begins, then calls `onDone`.
 */
const showPasswordIntro = (onDone) => {
  const intro  = document.getElementById('passwordIntro');
  if (!intro) { onDone(); return; }

  intro.style.display = 'flex';
  const lines = intro.querySelectorAll('.intro-line');

  const revealLines = async () => {
    // Staggered reveal
    for (let i = 0; i < lines.length; i++) {
      await delay(i === 0 ? 300 : 900);
      lines[i].classList.add('intro-visible');
    }

    await delay(1800);

    // Fade out whole overlay
    intro.style.transition = 'opacity 1s ease';
    intro.style.opacity    = '0';
    await delay(1000);
    intro.style.display = 'none';
    onDone();
  };

  revealLines();
};

// ======================== CORE HELPERS ========================

const readMsg = (text) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      text[i].classList.add('read');
      if (i === text.length - 1) {
        button.style.display = 'inline-block';
        CTAtext.style.display = 'block';
      }
    }, 5000 * i);
  }
};

const transition = (currentScene) => {
  currentScene.classList.add('fade-in');
  currentScene.style.opacity = '0';
  button.style.display = 'none';
  CTAtext.style.display = 'none';
};

// ======================== SCROLL ANIMATION ========================

/**
 * Animates the scroll container using scrollTop (so users can also scroll manually).
 * Returns the total duration in seconds so callers can schedule fade-out.
 */
const animateScroll = (container) => {
  // Speed factor: 0.4 = ~2.5× faster than original
  const rawReadTime = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--readTime')
  ) || 120;
  const SPEED_FACTOR    = 0.38;
  const durationMs      = rawReadTime * SPEED_FACTOR * 1000;  // total ms for auto-scroll
  const durationSeconds = rawReadTime * SPEED_FACTOR;

  // Make the container manually scrollable too
  container.style.overflowY = 'auto';

  let startTime  = null;
  let cancelled  = false;

  const maxScroll = () => container.scrollHeight - container.clientHeight;

  const tick = (timestamp) => {
    if (cancelled) return;
    if (!startTime) startTime = timestamp;
    const elapsed  = timestamp - startTime;
    const progress = Math.min(elapsed / durationMs, 1);

    // Only push scrollTop forward — never override manual scroll-back
    const target = progress * maxScroll();
    if (target > container.scrollTop) {
      container.scrollTop = target;
    }

    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);

  // Return controller
  return {
    durationSeconds,
    cancel: () => { cancelled = true; },
  };
};

// ======================== ENDING SEQUENCE ========================

// --- Confetti ---
const launchConfetti = () => {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const COLORS = [
    'rgba(255, 180, 200, 0.85)',
    'rgba(200, 160, 255, 0.85)',
    'rgba(255, 220, 160, 0.8)',
    'rgba(255, 160, 180, 0.8)',
    'rgba(200, 140, 255, 0.75)',
    'rgba(255, 200, 220, 0.7)',
  ];

  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 8 + 4,
    h: Math.random() * 4 + 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: Math.random() * Math.PI * 2,
    speed: Math.random() * 2 + 0.8,
    drift: Math.random() * 1.2 - 0.6,
    spin: (Math.random() - 0.5) * 0.1,
    opacity: Math.random() * 0.4 + 0.5,
  }));

  let running = true;
  const tick = () => {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.y += p.speed;
      p.x += p.drift;
      p.rotation += p.spin;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
      if (p.y > canvas.height) { p.y = -p.h; p.x = Math.random() * canvas.width; }
    });
    requestAnimationFrame(tick);
  };
  tick();

  canvas._stopConfetti = () => {
    running = false;
    canvas.style.transition = 'opacity 2s ease';
    canvas.style.opacity    = '0';
    setTimeout(() => { canvas.style.display = 'none'; }, 2100);
  };
};

// --- Rising Balloons ---
const launchBalloons = () => {
  const container = document.getElementById('risingBalloons');
  if (!container) return;
  container.style.display = 'block';

  const BALLOON_COLORS = ['#ffb3c6', '#d4a8e8', '#ffcba4', '#f9a8d4', '#c4b5fd'];
  for (let i = 0; i < 10; i++) {
    const b = document.createElement('div');
    b.className = 'rising-balloon';
    b.style.cssText = `
      left: ${5 + Math.random() * 90}%;
      animation-delay: ${Math.random() * 3}s;
      animation-duration: ${6 + Math.random() * 4}s;
      background: ${BALLOON_COLORS[i % BALLOON_COLORS.length]};
      width: ${38 + Math.random() * 28}px;
      height: ${48 + Math.random() * 36}px;
    `;
    container.appendChild(b);
  }

  container._dismiss = () => {
    container.style.transition = 'opacity 2s ease';
    container.style.opacity    = '0';
    setTimeout(() => { container.style.display = 'none'; }, 2100);
  };
};

// --- Particle Background (warm romantic tones) ---
const startParticles = (canvasId) => {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  // Warm rose/amber particles
  const PARTICLE_COLORS = [
    [255, 182, 193],  // light pink
    [221, 160, 221],  // plum
    [255, 218, 185],  // peach puff
    [255, 192, 203],  // pink
    [216, 191, 216],  // thistle
  ];

  const stars = Array.from({ length: 90 }, () => {
    const c = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.4,
      speed: Math.random() * 0.25 + 0.05,
      opacity: Math.random() * 0.45 + 0.15,
      pulse: Math.random() * Math.PI * 2,
      color: c,
    };
  });

  const tick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      s.pulse   += 0.012;
      s.opacity  = 0.15 + 0.35 * (0.5 + 0.5 * Math.sin(s.pulse));
      s.y       -= s.speed;
      if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color[0]},${s.color[1]},${s.color[2]},${s.opacity.toFixed(2)})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  };
  tick();
};

// --- Typewriter helper ---
const typewriterReveal = (el, text, speed = 40) => {
  return new Promise((resolve) => {
    el.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i >= text.length) { clearInterval(interval); resolve(); }
    }, speed);
  });
};

const fadeIn = (el, duration = 800) => {
  return new Promise((resolve) => {
    el.style.transition = `opacity ${duration}ms ease`;
    el.style.opacity    = '1';
    setTimeout(resolve, duration);
  });
};

const fadeOut = (el, duration = 800) => {
  return new Promise((resolve) => {
    el.style.transition = `opacity ${duration}ms ease`;
    el.style.opacity    = '0';
    setTimeout(resolve, duration);
  });
};

const delay = (ms) => new Promise(r => setTimeout(r, ms));

// --- Calm Ending ---
const showCalmEnding = async () => {
  const screen = document.getElementById('calmEnding');
  if (!screen) return;
  screen.style.display = 'flex';
  startParticles('particleCanvas');

  // Fade in the screen itself
  await delay(100);
  fadeIn(screen, 1400);

  const container = document.getElementById('endingTextContainer');
  container.style.opacity = '1';

  // Reveal lines one by one
  const headLines = ['endLine0', 'endLine1'];
  for (const id of headLines) {
    const el = document.getElementById(id);
    if (!el) continue;
    el.style.opacity    = '0';
    el.style.transition = 'opacity 1.1s ease, transform 1.1s ease';
    el.style.transform  = 'translateY(14px)';
    await delay(200);
    el.style.opacity    = '1';
    el.style.transform  = 'translateY(0)';
    await delay(700);
  }

  await delay(300);

  const paras = ['endPara0','endPara1','endPara2','endPara3','endPara4',
                 'endPara5','endPara6','endPara7','endPara8',
                 'endPara9','endPara10'];
  for (const id of paras) {
    const el = document.getElementById(id);
    if (!el) continue;
    el.style.opacity    = '0';
    el.style.transition = 'opacity 1.5s ease, transform 1.3s ease';
    el.style.transform  = 'translateY(16px)';
    await delay(150);
    el.style.opacity    = '1';
    el.style.transform  = 'translateY(0)';
    await delay(1200);
  }

  await delay(500);
  const lastBtn = document.getElementById('lastClickBtn');
  if (lastBtn) {
    lastBtn.style.opacity    = '0';
    lastBtn.style.transition = 'opacity 1.5s ease';
    lastBtn.style.display    = 'inline-block';
    await delay(200);
    lastBtn.style.opacity    = '1';
    lastBtn.addEventListener('click', () => triggerFinalFade(screen), { once: true });
  }
};

// --- Final Fade to Black ---
const triggerFinalFade = async (calmScreen) => {
  await fadeOut(calmScreen, 1500);
  calmScreen.style.display = 'none';

  const blackScreen = document.getElementById('fadeBlack');
  const loveLetter  = document.getElementById('loveLetter');
  blackScreen.style.display = 'flex';
  await delay(200);
  await fadeIn(blackScreen, 1300);

  const loveLines = [
    { id: 'loveLine0', text: 'Before you go...' },
    { id: 'loveLine1', text: 'Thank you...' },
    { id: 'loveLine2', text: 'for giving me one more reason...' },
    { id: 'loveLine3', text: 'to look forward to every tomorrow.' },
    { id: 'loveLine4', text: 'I love you.' },
    { id: 'loveLine5', text: 'See you outside this website. ❤️' },
  ];

  loveLetter.style.opacity = '1';
  for (const { id, text } of loveLines) {
    const el = document.getElementById(id);
    if (!el) continue;
    await delay(700);
    await typewriterReveal(el, text, 42);
    await delay(300);
  }

  await delay(3500);
  await fadeOut(loveLetter, 1200);
  loveLetter.style.display = 'none';

  const closing = document.getElementById('closingScreen');
  closing.style.display  = 'flex';
  closing.style.opacity  = '0';
  await delay(400);
  await fadeIn(closing, 1400);

  await delay(2800);
  const badge = document.getElementById('achievementBadge');
  if (badge) badge.classList.add('badge-in');
};

// --- Master Trigger (skips popup — Continue is on the card itself) ---
const triggerEndingSequence = () => {
  const confettiCanvas = document.getElementById('confettiCanvas');
  const balloonCont    = document.getElementById('risingBalloons');

  launchConfetti();
  launchBalloons();

  // After a brief beat, stop celebrations and go into calm ending
  setTimeout(() => {
    if (confettiCanvas && confettiCanvas._stopConfetti) confettiCanvas._stopConfetti();
    if (balloonCont    && balloonCont._dismiss)        balloonCont._dismiss();
    showCalmEnding();
  }, 2000);
};

// ======================== CARD CONTINUE BUTTON ========================

/**
 * Shows the Continue button on the birthday card (frame[0]).
 * Clicking it hides the card, fires confetti, and transitions to the ending.
 */
const showCardContinue = () => {
  const btn = document.getElementById('cardContinueBtn');
  if (!btn) return;

  btn.style.display  = 'inline-block';
  btn.style.opacity  = '0';
  btn.style.transition = 'opacity 1.4s ease';
  requestAnimationFrame(() => {
    setTimeout(() => { btn.style.opacity = '1'; }, 100);
  });

  btn.addEventListener('click', () => {
    // Fade out the entire content area
    const contentEl = document.querySelector('.content');
    if (contentEl) {
      contentEl.style.transition = 'opacity 1.2s ease';
      contentEl.style.opacity    = '0';
      setTimeout(() => { contentEl.style.display = 'none'; }, 1300);
    }
    triggerEndingSequence();
  }, { once: true });
};

// ======================== MAIN ANIMATION ========================

// Factored out so it only starts after password + intro
const startMainFlow = () => {
  CTAtext.innerHTML = 'Click the Light Bulb.';
  readMsg(blackText);

  button.addEventListener('click', function () {

    // ── Dark Room → Empty Room ──────────────────────────────────
    if (button.classList.contains('switch')) {
      light.play();
      transition(darkroom);
      CTAtext.innerHTML = 'Click the Door';
      setTimeout(function () {
        button.classList.add('door-out');
        button.classList.remove('switch');
        darkroom.style.display = 'none';
        readMsg(roomText);
      }, 4000);

    // ── Empty Room → Hallway ────────────────────────────────────
    } else if (button.classList.contains('door-out')) {
      door.play();
      transition(room);
      setTimeout(function () {
        haunt.play();
        haunt.loop = true;
        button.classList.add('door-in');
        button.classList.remove('door-out');
        room.style.display = 'none';
        readMsg(hallText);
      }, 4000);

    // ── Hallway → Gift Room ─────────────────────────────────────
    } else if (button.classList.contains('door-in')) {
      door.play();
      transition(hallway);
      CTAtext.innerHTML = 'Click the Gift';
      setTimeout(function () {
        button.classList.add('gift');
        button.classList.remove('door-in');
        hallway.style.display = 'none';
        readMsg(giftText);
      }, 4000);

    // ── Gift → Scroll / Card ────────────────────────────────────
    } else if (button.classList.contains('gift')) {
      haunt.pause();
      blast.play();
      giftroom.style.display = 'none';
      transition(flash);

      music.loop = true;
      music.play();

      // Hide button & CTA
      button.style.display  = 'none';
      CTAtext.style.display = 'none';

      if (!process.env.SCROLL_MSG) {
        // No scroll text — jump straight to card
        frames[0].style.display = 'flex';
        setTimeout(() => {
          frames[0].classList.add('appear');
          frames[0].style.opacity = '1';
          setTimeout(() => { flash.style.display = 'none'; }, 500);
          setTimeout(showCardContinue, 2000);
        }, 1500);
        return;
      }

      // ── Scroll message frame ────────────────────────────────
      frames[1].style.display = 'flex';
      setTimeout(() => {
        frames[1].classList.add('appear');
        frames[1].style.opacity = '1';
        flash.style.display     = 'none';

        // JS-based smooth scroll (user can also scroll manually)
        const ctrl = animateScroll(msgWindow);

        // Fade out scroll frame when auto-scroll finishes
        setTimeout(() => {
          msgWindow.style.transition = 'opacity 2s ease';
          msgWindow.style.opacity    = '0';
        }, ctrl.durationSeconds * 1000);

        // Show birthday card frame 3s after scroll fades
        setTimeout(() => {
          frames[1].style.display = 'none';
          frames[0].style.display = 'flex';
          frames[0].classList.add('appear');
          frames[0].style.opacity = '1';

          // Show Continue button after card settles
          setTimeout(showCardContinue, 2500);
        }, (ctrl.durationSeconds + 3) * 1000);

      }, 1500);
    }
  });
};

export const animate = function () {
  // Gate → Intro → Main flow (sequentially)
  initPasswordGate(() => {
    showPasswordIntro(() => {
      startMainFlow();
    });
  });
};
