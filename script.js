/* ═══════════════════════════════════════════════════════════
   Para ti · lógica y animaciones
   ───────────────────────────────────────────────────────────
   1. CONFIG ........ textos, foto y canción (edita aquí)
   2. Utilidades
   3. Sky ........... cielo de corazones, destellos y partículas (canvas)
   4. Music ......... YouTube IFrame API
   5. Escritura ..... efecto máquina de escribir
   6. Escenas ....... transiciones GSAP, carta y final
   ═══════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  /* ───────────── 1. CONFIG ───────────── */
  const CONFIG = {
    photo: 'imagen.jpg',                       // ← tu fotografía (misma carpeta que index.html)
    audioFile: 'song.mp3',                // ← opcional: tu canción en mp3 (misma carpeta). Si no existe, se usa YouTube
    youtubeId: 'mcdO9UP0hp8',
    youtubeUrl: 'https://www.youtube.com/watch?v=mcdO9UP0hp8',
    musicVolume: 65,                         // 0–100
    introText: 'Necesito decirte algo...',
    typingSpeed: 26,                         // ms por letra en la carta
    letter: ["Amor mío, hay tantas cosas que quisiera decirte que a veces siento que las palabras no son suficientes para expresar todo lo que llevo dentro. No sé si alguna vez lograré explicarte completamente lo que significas para mí, pero quiero intentarlo, porque mereces saber lo especial que eres en mi vida y lo inmensamente afortunada que me siento de tenerte.",
      "Desde que llegaste a mi vida, te convertiste en alguien que ocupa un lugar que nadie más podría ocupar. No eres simplemente mi novia, eres una persona que ha llegado a significar muchísimo para mí, alguien con quien he compartido momentos que guardo con muchísimo cariño, alguien que ha conseguido despertar en mí sentimientos que no cambiaría por nada. Eres esa persona en la que pienso cuando quiero compartir algo bonito, a quien quisiera contarle mis días, mis pensamientos, mis alegrías y hasta aquellas cosas que no siempre sé cómo expresar.",
      "Quiero que entiendas que para mí eres muchísimo más de lo que quizás imaginas. Eres especial de una manera que no sabría comparar con ninguna otra persona. No necesito que seas perfecta, no necesito que tengas todas las respuestas ni que siempre tengas un buen día. Te quiero con tus virtudes, con tus defectos, con tus momentos de alegría, con tus días difíciles, con tus ocurrencias, con tu manera de ser y con cada pequeño detalle que te hace ser tú. Precisamente eso es lo que me enamora: que seas tú, que tengas esa esencia tan tuya que te hace diferente y que no cambiaría por la de nadie.",
      "Admiro tantas cosas de ti. Admiro tu forma de ser, tu personalidad, tu manera de expresarte, tu forma de ver las cosas y esos pequeños detalles que quizás tú consideras insignificantes, pero que para mí tienen un valor enorme. Admiro lo que eres, lo que llevas dentro, tu manera de enfrentar las cosas y esa capacidad que tienes de hacer que un momento sencillo se convierta en un recuerdo bonito. Me encanta descubrir cada día algo nuevo de ti, conocer más de tu mundo, de tus pensamientos, de tus sueños y de todo aquello que te hace feliz.",
      "Y quiero hablarte de cómo te veo, porque quisiera que pudieras mirarte alguna vez a través de mis ojos. Para mí eres una persona increíblemente hermosa, pero no hablo solamente de tu apariencia. Hablo de esa belleza que también está en tu forma de ser, en tu esencia, en tu manera de hablar, en tus gestos y en esos pequeños detalles que probablemente ni siquiera notas. Cuando te miro, no veo solamente a una chica hermosa; veo a la persona que amo, a alguien que me importa profundamente, a alguien con quien quiero seguir compartiendo mi tiempo y creando recuerdos. Veo a una persona que tiene muchísimo valor y que merece sentirse querida, respetada, comprendida y apreciada.",
      "Este año a tu lado ha significado muchísimo para mí. Hemos vivido momentos bonitos, hemos aprendido cosas, hemos compartido experiencias y también hemos tenido dificultades. Pero incluso en medio de todo eso, quiero que sepas que no considero nuestra historia algo insignificante. Cada momento contigo forma parte de algo que valoro muchísimo. No cambiaría los recuerdos que hemos construido, las conversaciones, las risas, los detalles ni todas esas pequeñas cosas que, aunque parezcan simples, para mí significan tanto.",
      "Sé que no siempre todo será perfecto. Sé que podemos equivocarnos, tener diferencias, no entendernos en determinados momentos o atravesar situaciones que pongan a prueba nuestra relación. Pero quiero que sepas que mi deseo es que podamos mejorar, aprender de nuestros errores, comunicarnos mejor y comprendernos cada vez más. No quiero que seamos dos personas que simplemente se quieren, quiero que seamos dos personas que también sepan cuidarse, escucharse, respetarse y apoyarse. Quiero que podamos crecer juntos sin dejar de ser nosotras mismas.",
      "No quiero que cuando las cosas se compliquen olvidemos todo lo bonito que hemos construido. Quiero que aprendamos a solucionar las cosas, que nunca nos falten las ganas de intentarlo y que ambos podamos sentir que estamos en un lugar donde somos queridos. No espero una relación perfecta, porque sé que eso no existe; lo que deseo es una relación sincera, en la que los dos podamos seguir eligiéndonos, incluso cuando tengamos días difíciles.",
      "Quiero seguir conociéndote, seguir descubriendo cosas de ti, seguir escuchando tus historias, compartir nuevas experiencias, celebrar tus logros, acompañarte en tus momentos difíciles y estar presente en tantos momentos de tu vida como podamos compartir. Quiero que tengas la confianza de ser tú misma conmigo, que nunca sientas que debes esconder lo que piensas o sientes y que sepas que tu felicidad, tus sueños y tu bienestar también me importan.",
      "A veces quisiera detener el tiempo en algunos momentos contigo, simplemente porque hay instantes que me hacen pensar en lo bonito que es tenerte en mi vida. Quizás no siempre encuentre las palabras correctas para demostrártelo, quizás a veces no sepa expresar todo lo que siento de la manera que mereces, pero nunca quiero que confundas eso con falta de amor. Porque te amo muchísimo, más de lo que probablemente consigo demostrarte.",
      "Te amo por quien eres, por lo que representas para mí, por todo lo que hemos vivido y por todo lo que todavía sueño con vivir a tu lado. Te amo en los momentos bonitos y también en aquellos en los que necesitamos un poquito más de paciencia. Te amo cuando estamos cerca y cuando simplemente quisiera tenerte conmigo. Te amo por los detalles grandes y por esas pequeñas cosas que hacen que seas tú.",
      "Y si hay algo que quiero que recuerdes después de leer todo esto, es que no eres una persona más en mi vida. Eres alguien a quien le tengo un cariño inmenso, alguien que ha marcado este año de una manera muy especial y alguien a quien no quisiera perder. No sé exactamente qué nos deparará el futuro, pero sí sé que me gustaría seguir construyéndolo contigo, paso a paso, con amor, paciencia, comprensión y muchas ganas de hacer las cosas bien.",
      "Ojalá nunca dudes de lo importante que eres para mí. Ojalá puedas recordar siempre que existe alguien que te mira con muchísima admiración, que se siente orgulloso de ti, que encuentra belleza en tus pequeños detalles y que desea verte feliz. Quiero que nunca olvides que eres suficiente, que tienes un valor enorme y que mereces todo lo bonito que la vida pueda ofrecerte.",
      "Gracias por este año, por tu tiempo, por tus momentos, por tus detalles, por las risas, por las experiencias y por permitirme formar parte de tu vida. Gracias por ser tú y por haberme permitido conocer esa parte de ti que tanto amo.",
      "Te amo, mi niña. Y si pudiera volver al principio de nuestra historia, sabiendo todo lo que hemos vivido y todo lo que todavía nos queda por descubrir, volvería a elegir conocerte, volvería a elegir enamorarme de ti y volvería a elegir intentarlo contigo. Porque entre tantas personas en este mundo, tú eres esa persona con la que quiero seguir escribiendo nuestra historia."
    ],
    finalQuote: '«Y si pudiera volver a elegir, volvería a encontrarte a ti».'
  };

  /* ───────────── 2. UTILIDADES ───────────── */
  const $ = (s, r = document) => r.querySelector(s);
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  const rand = (a, b) => a + Math.random() * (b - a);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGsap = typeof window.gsap !== 'undefined';
  if (!hasGsap) document.documentElement.classList.add('no-gsap');

  // Si GSAP no carga (sin conexión), todo sigue funcionando sin animaciones coreografiadas.
  const g = hasGsap ? window.gsap : (() => {
    const chain = (opts) => {
      const t = {
        to: () => t, fromTo: () => t, set: () => t,
        add: (fn) => { try { fn && fn(); } catch (e) { /* noop */ } return t; }
      };
      setTimeout(() => opts && opts.onComplete && opts.onComplete(), 0);
      return t;
    };
    return { set() {}, to() {}, fromTo() {}, quickTo: () => () => {}, timeline: chain };
  })();

  function setVh() {
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
  }

  const HEART_D = 'M16 28C6 20 1 14 1 8.5C1 4.5 4.2 1.5 8 1.5C11.3 1.5 14.2 3.4 16 6.5C17.8 3.4 20.7 1.5 24 1.5C27.8 1.5 31 4.5 31 8.5C31 14 26 20 16 28Z';
  const HEART_PATH = new Path2D(HEART_D);
  const HEART_SVG = `<svg viewBox="0 0 32 29" aria-hidden="true"><defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb3c4"/><stop offset=".5" stop-color="#e2476f"/><stop offset="1" stop-color="#8f1d3f"/></linearGradient></defs><path d="${HEART_D}" fill="url(#hg)"/></svg>`;

  /* ───────────── 3. SKY (canvas) ───────────── */
  class Sky {
    constructor(canvas) {
      this.cv = canvas;
      this.ctx = canvas.getContext('2d');
      this.hearts = [];
      this.sparks = [];
      this.parts = [];
      this.mx = 0; this.my = 0; this.tx = 0; this.ty = 0;
      this.t = 0; this.last = 0; this.raf = 0;
      this.lastTrail = { x: -99, y: -99, t: 0 };
      this.speed = reduced ? 0.5 : 1;
      this.sprites = this.buildSprites();
      this.loop = this.loop.bind(this);
      this.resize();
      this.populate();
      window.addEventListener('resize', () => {
        clearTimeout(this.rt);
        this.rt = setTimeout(() => { this.resize(); this.populate(); }, 180);
      });
      document.addEventListener('visibilitychange', () => (document.hidden ? this.stop() : this.start()));
      window.addEventListener('pointermove', (e) => {
        this.tx = (e.clientX / window.innerWidth - 0.5) * 2;
        this.ty = (e.clientY / window.innerHeight - 0.5) * 2;
        if (e.pointerType === 'mouse') this.trail(e.clientX, e.clientY);
      }, { passive: true });
    }

    buildSprites() {
      const make = (color) => {
        const s = 96;
        const c = document.createElement('canvas');
        c.width = c.height = s;
        const x = c.getContext('2d');
        const k = 72 / 32;
        x.translate(12, 16);
        x.scale(k, k);
        const grad = x.createLinearGradient(0, 0, 32, 29);
        grad.addColorStop(0, '#fff2f5');
        grad.addColorStop(0.35, color);
        grad.addColorStop(1, color);
        x.shadowColor = color;
        x.shadowBlur = 14 / k;
        x.fillStyle = grad;
        x.fill(HEART_PATH);
        return c;
      };
      const dot = document.createElement('canvas');
      dot.width = dot.height = 48;
      const dx = dot.getContext('2d');
      const rg = dx.createRadialGradient(24, 24, 0, 24, 24, 24);
      rg.addColorStop(0, 'rgba(255,255,255,1)');
      rg.addColorStop(0.18, 'rgba(255,232,190,.95)');
      rg.addColorStop(0.5, 'rgba(230,195,122,.28)');
      rg.addColorStop(1, 'rgba(230,195,122,0)');
      dx.fillStyle = rg;
      dx.fillRect(0, 0, 48, 48);
      return { hearts: ['#ffb3c4', '#f06a8d', '#c2335a', '#8f1d3f', '#ffd0da'].map(make), dot };
    }

    resize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      this.cv.width = Math.round(this.w * this.dpr);
      this.cv.height = Math.round(this.h * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }

    populate() {
      const area = this.w * this.h;
      const nh = clamp(Math.round(area / 42000), 16, 44);
      const ns = clamp(Math.round(area / 22000), 28, 70);
      this.hearts = Array.from({ length: Math.round(reduced ? nh * 0.6 : nh) }, () => this.spawnHeart(true));
      this.sparks = Array.from({ length: ns }, () => ({
        x: rand(0, this.w), y: rand(0, this.h),
        r: rand(0.6, 2.2), z: Math.random(), o: rand(0.5, 1),
        sp: rand(0.6, 2.2), ph: rand(0, 6.28), vy: rand(1.5, 8) * this.speed,
        cross: Math.random() < 0.14
      }));
    }

    spawnHeart(initial) {
      const bokeh = Math.random() < 0.07;
      const z = bokeh ? 1.1 : Math.pow(Math.random(), 1.4);
      const size = bokeh ? rand(70, 130) : 7 + z * z * 34 + z * 6;
      return {
        z, size,
        x: rand(0, this.w),
        y: initial ? rand(0, this.h) : this.h + size + rand(0, 90),
        vy: (bokeh ? rand(6, 10) : 9 + z * 34 + rand(0, 6)) * this.speed,
        amp: rand(6, 30) * (0.4 + z),
        fq: rand(0.25, 0.75), ph: rand(0, 6.28), tw: rand(0, 6.28),
        rot: rand(-0.3, 0.3), vr: rand(-0.12, 0.12),
        a: bokeh ? rand(0.07, 0.14) : 0.14 + z * 0.5,
        sp: this.sprites.hearts[(Math.random() * this.sprites.hearts.length) | 0]
      };
    }

    start() {
      if (this.raf) return;
      this.last = performance.now();
      this.raf = requestAnimationFrame(this.loop);
    }
    stop() { cancelAnimationFrame(this.raf); this.raf = 0; }

    loop(now) {
      this.raf = requestAnimationFrame(this.loop);
      const dt = Math.min(0.05, (now - this.last) / 1000 || 0.016);
      this.last = now;
      this.t += dt;
      const k = Math.min(1, dt * 2.2);
      this.mx += (this.tx - this.mx) * k;
      this.my += (this.ty - this.my) * k;

      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.w, this.h);

      // Corazones
      ctx.globalCompositeOperation = 'source-over';
      for (const h of this.hearts) {
        h.y -= h.vy * dt;
        h.rot += h.vr * dt;
        if (h.y < -h.size * 1.6) Object.assign(h, this.spawnHeart(false));
        const sway = Math.sin(this.t * h.fq + h.ph);
        const x = h.x + sway * h.amp + this.mx * h.z * 36;
        const y = h.y + this.my * h.z * 20;
        ctx.globalAlpha = h.a * (0.88 + 0.12 * Math.sin(this.t * 1.3 + h.tw));
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(h.rot * 0.5 + sway * 0.15);
        const d = h.size * 1.43;
        ctx.drawImage(h.sp, -d / 2, -d / 2, d, d);
        ctx.restore();
      }

      // Destellos
      ctx.globalCompositeOperation = 'lighter';
      for (const s of this.sparks) {
        s.y -= s.vy * dt;
        if (s.y < -10) { s.y = this.h + 10; s.x = rand(0, this.w); }
        const tw = Math.max(0, Math.sin(this.t * s.sp + s.ph));
        const a = 0.12 + 0.88 * tw * tw * tw;
        const x = s.x + this.mx * s.z * 22;
        const y = s.y + this.my * s.z * 14;
        const d = s.r * 7;
        ctx.globalAlpha = a * s.o;
        ctx.drawImage(this.sprites.dot, x - d / 2, y - d / 2, d, d);
        if (s.cross && a > 0.5) {
          const L = s.r * 5 * a;
          ctx.strokeStyle = 'rgba(255,236,200,.85)';
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(x - L, y); ctx.lineTo(x + L, y);
          ctx.moveTo(x, y - L); ctx.lineTo(x, y + L);
          ctx.stroke();
        }
      }

      // Partículas (clics, estela del cursor, lluvia final)
      for (let i = this.parts.length - 1; i >= 0; i--) {
        const p = this.parts[i];
        p.life -= dt;
        if (p.life <= 0) { this.parts.splice(i, 1); continue; }
        p.vx *= 1 - p.drag * dt;
        p.vy = p.vy * (1 - p.drag * dt) - p.lift * dt;
        p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt;
        const a = Math.min(1, (p.life / p.max) * 2.4);
        if (p.type === 'heart') {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = a * 0.92;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          const d = p.s * 1.43;
          ctx.drawImage(p.sp, -d / 2, -d / 2, d, d);
          ctx.restore();
        } else {
          ctx.globalCompositeOperation = 'lighter';
          ctx.globalAlpha = a;
          const d = p.s * 6;
          ctx.drawImage(this.sprites.dot, p.x - d / 2, p.y - d / 2, d, d);
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }

    push(p) {
      this.parts.push(p);
      if (this.parts.length > 180) this.parts.splice(0, this.parts.length - 180);
    }

    burst(x, y, n = 8) {
      for (let i = 0; i < n; i++) {
        const ang = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.3;
        const sp = rand(70, 220);
        const life = rand(1.2, 2.1);
        this.push({
          type: 'heart', x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp,
          life, max: life, s: rand(9, 21), rot: rand(-0.6, 0.6), vr: rand(-1.2, 1.2),
          drag: 1.7, lift: 24,
          sp: this.sprites.hearts[(Math.random() * this.sprites.hearts.length) | 0]
        });
      }
      for (let i = 0; i < Math.ceil(n / 2); i++) {
        const ang = Math.random() * Math.PI * 2;
        const sp = rand(30, 120);
        const life = rand(0.7, 1.3);
        this.push({ type: 'dot', x, y, vx: Math.cos(ang) * sp, vy: Math.sin(ang) * sp, life, max: life, s: rand(1.2, 2.8), rot: 0, vr: 0, drag: 2.2, lift: 0 });
      }
    }

    trail(x, y) {
      const now = performance.now();
      const L = this.lastTrail;
      if (now - L.t < 55 || Math.hypot(x - L.x, y - L.y) < 16) return;
      this.lastTrail = { x, y, t: now };
      const life = rand(0.6, 1.1);
      this.push({ type: 'dot', x: x + rand(-6, 6), y: y + rand(-6, 6), vx: rand(-14, 14), vy: rand(-22, -4), life, max: life, s: rand(1, 2.2), rot: 0, vr: 0, drag: 1.2, lift: 6 });
    }

    shower() {
      const n = this.w < 600 ? 14 : 24;
      for (let i = 0; i < n; i++) {
        const life = rand(2.4, 3.8);
        this.push({
          type: 'heart', x: rand(0, this.w), y: this.h + rand(10, 80),
          vx: rand(-14, 14), vy: -rand(90, 210), life, max: life,
          s: rand(8, 22), rot: rand(-0.5, 0.5), vr: rand(-0.6, 0.6), drag: 0.08, lift: 0,
          sp: this.sprites.hearts[(Math.random() * this.sprites.hearts.length) | 0]
        });
      }
    }
  }

  /* ───────────── 4. MÚSICA (archivo propio o YouTube) ───────────── */
  const toastEl = $('#toast');
  let toastTimer = 0;
  function toast(msg, ms = 4200) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), ms);
  }

  const music = {
    mode: 'none',                       // 'file' | 'yt' | 'none'
    audio: null, fileReady: false,
    player: null, ready: false, audible: false,
    want: false, playing: false, failed: false, userPaused: false,
    fid: 0, revealed: false,
    btn: $('#music'),

    init() {
      this.btn.addEventListener('click', () => this.toggle());
      if (CONFIG.audioFile) {
        // 1) Intenta con el archivo de audio de la carpeta (funciona incluso abriendo index.html con doble clic)
        const a = new Audio();
        a.loop = true; a.preload = 'auto'; a.volume = 0;
        a.addEventListener('canplay', () => {
          if (this.mode !== 'none') return;
          this.mode = 'file'; this.fileReady = true;
          if (this.want && !this.userPaused) this.play();
        }, { once: true });
        a.addEventListener('play', () => { this.playing = true; this.ui(); });
        a.addEventListener('pause', () => { this.playing = false; this.ui(); });
        // 2) Si el archivo no existe, usa YouTube
        a.addEventListener('error', () => { if (this.mode === 'none') { this.audio = null; this.loadYouTube(); } }, { once: true });
        this.audio = a;
        a.src = CONFIG.audioFile;
      } else {
        this.loadYouTube();
      }
    },

    loadYouTube() {
      this.mode = 'yt';
      window.onYouTubeIframeAPIReady = () => this.create();
      const s = document.createElement('script');
      s.src = 'https://www.youtube.com/iframe_api';
      s.async = true;
      s.onerror = () => this.fail('No se pudo cargar el reproductor de YouTube.');
      document.head.appendChild(s);
    },

    create() {
      const vars = { autoplay: 0, controls: 0, disablekb: 1, fs: 0, iv_load_policy: 3, modestbranding: 1, playsinline: 1, rel: 0 };
      if (/^https?:$/.test(location.protocol)) vars.origin = location.origin;
      try {
        this.player = new window.YT.Player('yt-player', {
          width: 200, height: 200, videoId: CONFIG.youtubeId, playerVars: vars,
          events: {
            onReady: () => {
              this.ready = true;
              if (this.want && !this.userPaused) { this.play(); return; }
              // Precarga en silencio: así el sonido entra al instante con el primer toque
              try { this.player.mute(); this.player.playVideo(); } catch (e) { /* noop */ }
            },
            onStateChange: (e) => this.onState(e.data),
            onError: () => this.fail()
          }
        });
      } catch (err) { this.fail(); }
    },

    onState(st) {
      const S = window.YT.PlayerState;
      if (st === S.PLAYING) this.playing = this.audible;
      else if (st === S.PAUSED) this.playing = false;
      else if (st === S.ENDED) { try { this.player.seekTo(0); this.player.playVideo(); } catch (e) { /* noop */ } }
      this.ui();
    },

    fail(msg) {
      this.failed = true; this.playing = false; this.ui();
      if (this.revealed) toast(msg || 'No pude reproducir la canción aquí. Toca el icono para abrirla en YouTube.');
    },

    ui() {
      this.btn.classList.toggle('is-playing', this.playing);
      this.btn.setAttribute('aria-pressed', String(this.playing));
      this.btn.setAttribute('aria-label', this.failed ? 'Abrir la canción en YouTube' : (this.playing ? 'Pausar la música' : 'Reproducir la música'));
    },

    reveal() {
      if (this.revealed) return;
      this.revealed = true;
      this.btn.hidden = false;
      g.fromTo(this.btn, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.8)', clearProps: 'scale' });
      if (this.failed) toast('No pude reproducir la canción aquí. Toca el icono para abrirla en YouTube.');
    },

    // Se llama con el primer toque/clic de la persona (requisito de los navegadores)
    start() {
      this.want = true;
      this.reveal();
      if (!this.playing && !this.userPaused) this.play();
    },

    play() {
      this.userPaused = false;
      if (this.mode === 'file') {
        if (!this.fileReady) return;
        this.audio.volume = 0;
        const pr = this.audio.play();
        if (pr && pr.catch) pr.catch(() => {});
        this.fadeTo(CONFIG.musicVolume / 100, 2600);
      } else if (this.mode === 'yt') {
        if (!this.ready || !this.player) return;
        try {
          this.audible = true;
          this.player.unMute();
          this.player.setVolume(0);
          this.player.playVideo();
          this.playing = true; this.ui();
          this.fadeTo(CONFIG.musicVolume, 2600);
        } catch (e) { /* noop */ }
      }
    },

    pause() {
      if (this.mode === 'file') { try { this.audio.pause(); } catch (e) { /* noop */ } }
      else {
        this.audible = false;
        try { this.player.pauseVideo(); } catch (e) { /* noop */ }
        this.playing = false; this.ui();
      }
    },

    fadeTo(v, ms) {
      clearInterval(this.fid);
      const file = this.mode === 'file';
      let cur = 0;
      try { cur = file ? this.audio.volume : this.player.getVolume(); } catch (e) { /* noop */ }
      const steps = Math.max(1, Math.round(ms / 60));
      let i = 0;
      this.fid = setInterval(() => {
        i++;
        const val = cur + (v - cur) * (i / steps);
        try {
          if (file) this.audio.volume = clamp(val, 0, 1);
          else this.player.setVolume(Math.round(val));
        } catch (e) { /* noop */ }
        if (i >= steps) clearInterval(this.fid);
      }, 60);
    },

    toggle() {
      if (this.failed) { window.open(CONFIG.youtubeUrl, '_blank', 'noopener'); return; }
      const ready = (this.mode === 'file' && this.fileReady) || (this.mode === 'yt' && this.ready);
      if (!ready) { this.want = true; this.userPaused = false; toast('Cargando la música…', 2200); return; }
      if (this.playing) { this.userPaused = true; this.pause(); }
      else { this.want = true; this.play(); }
    }
  };

  /* ───────────── 5. ESCRITURA ───────────── */
  const state = { scene: 'intro', busy: false, token: 0, typing: false, letterDone: false, manualUntil: 0 };

  const TYPED_HTML = '<span class="typed"></span><span class="caret" aria-hidden="true"></span><span class="ghost" aria-hidden="true"></span>';

  function pauseFor(ch, next) {
    if (ch === ',') return 150;
    if (ch === ';' || ch === ':') return 220;
    if ('.!?…'.includes(ch) && next !== '.') return 340;
    return 0;
  }

  // Escribe `text` dentro de `el` (que contiene .typed/.caret/.ghost). Devuelve false si se canceló.
  async function typeInto(el, text, token, speed, scrollBox) {
    const typed = $('.typed', el);
    const ghost = $('.ghost', el);
    const caret = $('.caret', el);
    ghost.textContent = text;
    for (let i = 1; i <= text.length; i++) {
      if (token !== state.token) return false;
      typed.textContent = text.slice(0, i);
      ghost.textContent = text.slice(i);
      if (scrollBox && (i % 5 === 0 || i === text.length)) ensureVisible(scrollBox, caret);
      const ch = text[i - 1];
      await sleep(speed * rand(0.7, 1.3) + pauseFor(ch, text[i]));
    }
    return true;
  }

  function ensureVisible(box, el) {
    if (performance.now() < state.manualUntil) return;
    const b = box.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const margin = 52;
    if (r.bottom > b.bottom - margin) box.scrollTop += r.bottom - (b.bottom - margin) + 4;
  }

  function fillTyped(el, text) {
    $('.typed', el).textContent = text;
    $('.ghost', el).textContent = '';
    const c = $('.caret', el);
    if (c) c.remove();
  }

  /* ───────────── 6. ESCENAS ───────────── */
  const sceneIntro = $('#scene-intro');
  const sceneStory = $('#scene-story');
  const letterEl = $('#letter');
  const skipBtn = $('#btn-skip');
  const nextBtn = $('#btn-next');
  const titleEl = $('#intro-title');
  const bloom = $('#bloom');
  const frame = $('#photo-frame');
  let sky;

  function swap(to) {
    const intro = to === 'intro';
    sceneIntro.classList.toggle('is-active', intro);
    sceneStory.classList.toggle('is-active', !intro);
    sceneIntro.setAttribute('aria-hidden', String(!intro));
    sceneStory.setAttribute('aria-hidden', String(intro));
  }

  /* — Intro — */
  async function runIntro() {
    titleEl.setAttribute('aria-label', CONFIG.introText);
    titleEl.innerHTML = TYPED_HTML;
    const tok = ++state.token;
    g.fromTo('.intro-orb', { opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' });
    await sleep(reduced ? 200 : 1200);
    const ok = await typeInto(titleEl, CONFIG.introText, tok, reduced ? 20 : 78);
    if (!ok) return;
    $('.caret', titleEl).style.opacity = '.7';
    await sleep(350);
    g.fromTo(['.intro-hint', '.btn-wrap'], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.18, ease: 'power3.out' });
    nextBtn.disabled = false;
  }

  function showIntroInstant() {
    titleEl.innerHTML = TYPED_HTML;
    fillTyped(titleEl, CONFIG.introText);
    nextBtn.disabled = false;
  }

  /* — Intro → Historia — */
  function goStory() {
    if (state.busy || state.scene !== 'intro') return;
    state.busy = true;

    const r = nextBtn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    bloom.style.setProperty('--bx', cx + 'px');
    bloom.style.setProperty('--by', cy + 'px');

    music.start();
    sky.burst(cx, cy, 12);
    resetLetter();
    g.set('.story', { clearProps: 'all' });

    const tl = g.timeline({
      onComplete: () => { state.busy = false; state.scene = 'story'; startLetter(); }
    });

    tl.to('.intro > *', { opacity: 0, y: -16, filter: 'blur(8px)', duration: 0.8, stagger: 0.07, ease: 'power2.in' })
      .fromTo(bloom, { opacity: 0, scale: 0.15 }, { opacity: 1, scale: 1.4, duration: 1, ease: 'power2.inOut' }, '-=0.5')
      .add(() => {
        swap('story');
        frame.classList.remove('shine');
        void frame.offsetWidth;
        frame.classList.add('shine');
      })
      .fromTo('#photo-wrap', { opacity: 0, scale: 1.08, y: 22, filter: 'blur(14px)' },
        { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 1.9, ease: 'power3.out', clearProps: 'filter' })
      .fromTo('#photo-glow', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 2.2, ease: 'power2.out' }, '<')
      .to(bloom, { opacity: 0, duration: 1.3, ease: 'power1.out' }, '<0.1')
      .fromTo('#panel', { opacity: 0, x: 36, y: 12 }, { opacity: 1, x: 0, y: 0, duration: 1.3, ease: 'power3.out' }, '-=1.4')
      .fromTo(['.panel-head > *', '.panel-actions'], { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, '-=0.9');
  }

  /* — Historia → Intro — */
  function goIntro() {
    if (state.busy || state.scene !== 'story') return;
    state.busy = true;
    state.token++; // cancela la escritura en curso
    state.typing = false;
    g.timeline({ onComplete: () => { state.busy = false; } })
      .to('.story', { opacity: 0, y: 12, duration: 0.6, ease: 'power2.in' })
      .add(() => {
        swap('intro');
        state.scene = 'intro';
        g.set('.story', { clearProps: 'all' });
        showIntroInstant();
      })
      .fromTo('.intro > *', { opacity: 0, y: 14, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.1, ease: 'power3.out', clearProps: 'filter,transform' });
  }

  /* — Carta — */
  function makeParagraph(i) {
    const p = document.createElement('p');
    if (i === CONFIG.letter.length - 1) p.classList.add('sign');
    p.innerHTML = TYPED_HTML;
    return p;
  }

  function setSkipMode(mode) {
    skipBtn.dataset.mode = mode;
    skipBtn.textContent = mode === 'skip' ? 'Mostrar todo' : 'Releer';
  }

  function resetLetter() {
    state.token++;
    state.typing = false;
    state.letterDone = false;
    letterEl.innerHTML = '';
    letterEl.scrollTop = 0;
    setSkipMode('skip');
  }

  async function startLetter() {
    const tok = ++state.token;
    state.typing = true;
    state.letterDone = false;
    letterEl.innerHTML = '';
    await sleep(reduced ? 150 : 700);
    for (let i = 0; i < CONFIG.letter.length; i++) {
      if (tok !== state.token) return;
      const p = makeParagraph(i);
      letterEl.appendChild(p);
      g.fromTo(p, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
      const ok = await typeInto(p, CONFIG.letter[i], tok, reduced ? 8 : CONFIG.typingSpeed, letterEl);
      if (!ok) return;
      fillTyped(p, CONFIG.letter[i]);
      await sleep(reduced ? 120 : 650);
    }
    if (tok === state.token) finishLetter(false);
  }

  function skipLetter() {
    state.token++;
    letterEl.innerHTML = '';
    CONFIG.letter.forEach((text, i) => {
      const p = makeParagraph(i);
      letterEl.appendChild(p);
      fillTyped(p, text);
    });
    finishLetter(true);
  }

  function replayLetter() {
    if (state.busy) return;
    resetLetter();
    startLetter();
  }

  function finishLetter(instant) {
    state.typing = false;
    state.letterDone = true;
    setSkipMode('replay');

    const wordList = CONFIG.finalQuote.split(' ');
    const words = wordList.map((w) => `<span class="w">${w}</span>`).join(' ');
    const f = document.createElement('div');
    f.className = 'finale';
    f.innerHTML =
      `<span class="finale-rule"></span>` +
      `<blockquote class="finale-quote">${words}</blockquote>` +
      `<button class="heart-btn" type="button" aria-label="Un corazón para ti" data-burst>${HEART_SVG}</button>`;
    letterEl.appendChild(f);

    if (!instant) {
      g.fromTo(f.querySelector('.finale-rule'), { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 1.2, ease: 'power2.out' });
      g.fromTo(f.querySelectorAll('.w'), { opacity: 0, y: 14, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, stagger: 0.13, delay: 0.4, ease: 'power2.out', clearProps: 'filter' });
      g.fromTo(f.querySelector('.heart-btn'), { opacity: 0, scale: 0.2 },
        { opacity: 1, scale: 1, duration: 1.4, delay: 0.4 + 0.13 * wordList.length + 0.6, ease: 'elastic.out(1,.55)' });
      sleep(500).then(() => letterEl.scrollTo({ top: letterEl.scrollHeight, behavior: 'smooth' }));
      sleep(1700).then(() => sky.shower());
    } else {
      sleep(60).then(() => letterEl.scrollTo({ top: letterEl.scrollHeight, behavior: 'smooth' }));
    }
  }

  /* — Interacciones: ondas, corazones, imán, paralaje — */
  function ripple(btn, e) {
    const r = btn.getBoundingClientRect();
    const d = Math.max(r.width, r.height) * 2;
    const s = document.createElement('span');
    s.className = 'ripple';
    s.style.width = s.style.height = d + 'px';
    s.style.left = (e.clientX - r.left - d / 2) + 'px';
    s.style.top = (e.clientY - r.top - d / 2) + 'px';
    btn.appendChild(s);
    setTimeout(() => s.remove(), 800);
  }

  function bindInteractions() {
    document.addEventListener('pointerdown', (e) => {
      const btn = e.target.closest('.btn');
      if (btn && !btn.disabled) ripple(btn, e);
    });

    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-burst]');
      if (!t) return;
      let x = e.clientX, y = e.clientY;
      if (!x && !y) { const r = t.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
      sky.burst(x, y, t.classList.contains('heart-btn') ? 14 : 8);
    });

    frame.addEventListener('click', () => {
      g.fromTo(frame, { scale: 1 }, { scale: 1.02, duration: 0.25, yoyo: true, repeat: 1, ease: 'power2.out', clearProps: 'scale' });
    });

    // La música arranca con el primer toque o tecla, en cualquier parte de la pantalla
    const unlock = () => {
      document.removeEventListener('pointerdown', unlock);
      document.removeEventListener('keydown', unlock);
      music.start();
    };
    document.addEventListener('pointerdown', unlock);
    document.addEventListener('keydown', unlock);

    nextBtn.addEventListener('click', goStory);
    $('#btn-back').addEventListener('click', goIntro);
    skipBtn.addEventListener('click', () => (state.typing ? skipLetter() : replayLetter()));

    // Si la persona desplaza la carta a mano, no forzamos el scroll automático por unos segundos
    const hold = () => { state.manualUntil = performance.now() + 3500; };
    letterEl.addEventListener('wheel', hold, { passive: true });
    letterEl.addEventListener('touchstart', hold, { passive: true });

    // Botones magnéticos (solo con ratón)
    if (finePointer && hasGsap && !reduced) {
      const btn = nextBtn;
      const qx = g.quickTo(btn, 'x', { duration: 0.5, ease: 'power3' });
      const qy = g.quickTo(btn, 'y', { duration: 0.5, ease: 'power3' });
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        qx((e.clientX - (r.left + r.width / 2)) * 0.22);
        qy((e.clientY - (r.top + r.height / 2)) * 0.3);
      });
      btn.addEventListener('pointerleave', () => { qx(0); qy(0); });
    }

    // Paralaje sutil (luces de fondo y fotografía)
    if (finePointer && hasGsap && !reduced) {
      const orbs = [['.orb-a', 18], ['.orb-b', -26], ['.orb-c', 40]].map(([sel, amt]) => ({
        amt, x: g.quickTo(sel, 'x', { duration: 1.6, ease: 'power3' }), y: g.quickTo(sel, 'y', { duration: 1.6, ease: 'power3' })
      }));
      const px = g.quickTo('#photo-par', 'x', { duration: 1.2, ease: 'power3' });
      const py = g.quickTo('#photo-par', 'y', { duration: 1.2, ease: 'power3' });
      window.addEventListener('pointermove', (e) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        orbs.forEach((o) => { o.x(nx * o.amt * 2); o.y(ny * o.amt * 2); });
        px(nx * -14); py(ny * -10);
      }, { passive: true });
    }
  }

  /* — Fotografía — */
  function setupPhoto() {
    const img = $('#photo');
    const ph = $('#photo-placeholder');
    img.addEventListener('load', () => { img.hidden = false; ph.hidden = true; });
    img.addEventListener('error', () => { img.hidden = true; ph.hidden = false; });
    img.src = CONFIG.photo;
  }

  /* ───────────── ARRANQUE ───────────── */
  async function init() {
    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', () => setTimeout(setVh, 250));

    sky = new Sky($('#sky'));
    sky.start();

    setupPhoto();
    bindInteractions();
    music.init();

    try { await Promise.race([document.fonts.ready, sleep(1500)]); } catch (e) { /* noop */ }
    runIntro();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
