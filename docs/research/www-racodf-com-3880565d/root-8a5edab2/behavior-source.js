
    // ---- 导航栏滚动状态切换 ----
    const navbar = document.getElementById('navbar');
    let currentView = 'home';
    const onScroll = () => {
      if (window.scrollY > 20 || currentView !== 'home') navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    // ---- 移动端菜单开关 ----
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose  = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuMask   = document.getElementById('menu-mask');
    const openMenu  = () => { mobileMenu.classList.add('is-open'); menuMask.classList.add('is-open'); document.body.classList.add('overflow-hidden'); };
    const closeMenu = () => { mobileMenu.classList.remove('is-open'); menuMask.classList.remove('is-open'); document.body.classList.remove('overflow-hidden'); };
    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    menuMask.addEventListener('click', closeMenu);

    // ---- 单页路由：一级栏目分视图展示（首页只显示概览类区块，业务/行业/服务/投资者点击后单独展开）----
    const VIEWS = {
      home: ['hero', 'stats', 'business', 'industry', 'home-profile', 'advantages', 'contact'],
      about: ['about'],
      strength: ['strength'],
      news: ['news'],
      business: ['business'],
      'radar-products': ['radar-products'],
      'satellite-products': ['satellite-products'],
      'control-products': ['control-products'],
      'storage-products': ['storage-products'],
      'connected-products': ['connected-products'],
      product: ['product'],
      industry: ['industry'],
      service: ['service'],
      solution: ['solution']
    };
    const viewOf = (sectionId) => {
      for (const v in VIEWS) if (VIEWS[v].includes(sectionId)) return v;
      return 'home';
    };
    const showView = (view) => {
      if (!VIEWS[view]) view = 'home';
      currentView = view;
      const visible = new Set(VIEWS[view]);
      document.querySelectorAll('section[id]').forEach((s) => { s.style.display = visible.has(s.id) ? '' : 'none'; });
      const sub = view !== 'home';
      document.body.classList.toggle('pt-16', sub);
      document.body.classList.toggle('lg:pt-[72px]', sub);
      onScroll();
    };
    // ---- 走进雷科：子栏目单页切换（集团概况 / 发展历程 / 资质荣誉 / 企业文化）----
    const ABOUT_PARTS = ['about-profile', 'about-culture', 'about-history', 'about-honor', 'about-brand', 'about-hr'];
    const showAboutPart = (rawId) => {
      const id = ABOUT_PARTS.includes(rawId) ? rawId : 'about-profile';
      document.querySelectorAll('.about-part').forEach((el) => el.classList.toggle('hidden', el.id !== id));
      const part = document.getElementById(id);
      if (part) part.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('is-visible'));
      document.querySelectorAll('#about-tabs [data-part]').forEach((a) => {
        const on = a.getAttribute('data-part') === id;
        a.classList.toggle('border-primary', on);
        a.classList.toggle('text-primary', on);
        a.classList.toggle('border-transparent', !on);
        a.classList.toggle('text-gray-500', !on);
      });
    };
    // ---- 服务支持：子栏目标签切换（资料下载 / 销售网络 / 常见问题）----
    const SERVICE_PARTS = ['service-downloads', 'service-sales', 'service-faq'];
    const showServicePart = (rawId) => {
      const id = SERVICE_PARTS.includes(rawId) ? rawId : 'service-downloads';
      document.querySelectorAll('.service-part').forEach((el) => el.classList.toggle('hidden', el.id !== id));
      const part = document.getElementById(id);
      if (part) part.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('is-visible'));
      document.querySelectorAll('#service-tabs [data-spart]').forEach((a) => {
        const on = a.getAttribute('data-spart') === id;
        a.classList.toggle('border-primary', on);
        a.classList.toggle('text-primary', on);
        a.classList.toggle('border-transparent', !on);
        a.classList.toggle('text-gray-500', !on);
      });
    };
    // ---- 行业解决方案：数据驱动渲染 ----
    let solByAnchor = {}, RADAR = [], PRODUCT_INDEX = {}, showProductPage = null;
    const esc2 = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
    const renderSolution = (rawSol) => {
      let sol = rawSol;
      const gateAnchor = sol.anchor;
      document.getElementById('solution-breadcrumb').innerHTML = '<span>行业应用</span> / <span>' + esc2(sol.industry || '') + '</span>';
      document.getElementById('solution-title').textContent = sol.title || '解决方案';
      const gateEl = document.getElementById('solution-gate');
      const bodyEl = document.getElementById('solution-body');
      const leadBtn = document.getElementById('solution-lead-btn');
      if (sol.gated) {
        const curLang = (localStorage.getItem('lang') === 'en') ? 'en' : 'zh';
        const cached = sessionStorage.getItem('unlock.v2-' + gateAnchor + '-' + curLang);
        if (cached) { try { const full = JSON.parse(cached); if (full && full.anchor === gateAnchor) sol = full; } catch (e) {} }
      }
      if (sol.gated) { // 未解锁：显示邀请码门控，隐藏正文
        if (gateEl) { gateEl.classList.remove('hidden'); gateEl.setAttribute('data-anchor', gateAnchor); }
        if (bodyEl) bodyEl.classList.add('hidden');
        if (leadBtn) leadBtn.classList.add('hidden');
        const inp = document.getElementById('solution-gate-input'); if (inp) inp.value = '';
        const m = document.getElementById('solution-gate-msg'); if (m) { m.classList.add('hidden'); m.textContent = ''; }
        return;
      }
      if (gateEl) gateEl.classList.add('hidden');
      if (bodyEl) bodyEl.classList.remove('hidden');
      if (leadBtn) leadBtn.classList.remove('hidden');
      document.getElementById('solution-lead-btn').setAttribute('data-lead', '解决方案 · ' + (sol.title || ''));
      document.getElementById('solution-overview').textContent = sol.overview || '';
      const img = document.getElementById('solution-overview-img');
      if (sol.overviewImage) { img.src = sol.overviewImage; img.style.display = ''; } else { img.style.display = 'none'; }
      const feats = Array.isArray(sol.features) ? sol.features.filter(Boolean) : [];
      const fb = document.getElementById('solution-features-block');
      if (feats.length) {
        const check = '<svg class="w-5 h-5 shrink-0 text-primary mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>';
        document.getElementById('solution-features').innerHTML = feats.map((t) => `<li class="flex gap-3 is-visible">${check}<span class="text-sm text-gray-600 leading-relaxed">${esc2(t)}</span></li>`).join('');
        fb.style.display = '';
      } else fb.style.display = 'none';
      const scn = Array.isArray(sol.scenarios) ? sol.scenarios.filter((s) => s && (s.image || s.name)) : [];
      const sb = document.getElementById('solution-scenarios-block');
      if (scn.length) {
        document.getElementById('solution-scenarios').innerHTML = scn.map((s) => s.image
          ? `<div class="group rounded-lg overflow-hidden border border-gray-200 bg-white"><div class="aspect-[16/9] overflow-hidden bg-gray-100"><img src="${esc2(s.image)}" alt="${esc2(s.name)}" loading="lazy" class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"></div><div class="p-4"><p class="text-sm md:text-base font-medium text-gray-900">${esc2(s.name)}</p></div></div>`
          : `<div class="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-5"><span class="w-2 h-2 rounded-full bg-primary shrink-0"></span><p class="text-sm md:text-base font-medium text-gray-900">${esc2(s.name)}</p></div>`).join('');
        sb.style.display = '';
      } else sb.style.display = 'none';
      // 应用案例（引语 + 案例图/名称/说明卡片；形式与产品应用案例一致）
      const cb = document.getElementById('solution-cases-block');
      const caseLeadLines = String(sol.caseLead || '').split('\n').map((x) => x.trim()).filter(Boolean);
      const caseLeadHtml = caseLeadLines.map((x, k) => `<p class="text-sm text-gray-600 leading-relaxed${k > 0 ? ' mt-3' : ''}">${esc2(x)}</p>`).join('');
      const solCaseCards = (Array.isArray(sol.cases) ? sol.cases : []).filter((c) => c && typeof c === 'object' && (c.name || c.image || c.desc));
      let solCasesHtml = '';
      if (solCaseCards.length) {
        solCasesHtml = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">${solCaseCards.map((c) => `<div class="bg-white border border-gray-200 rounded-lg overflow-hidden">${c.image ? `<div class="aspect-[16/9] overflow-hidden bg-gray-100"><img src="${esc2(c.image)}" alt="${esc2(c.name || '')}" loading="lazy" class="w-full h-full object-cover"></div>` : ''}<div class="p-4 md:p-5">${c.name ? `<h5 class="text-base font-medium text-gray-900">${esc2(c.name)}</h5>` : ''}${c.desc ? `<p class="mt-1.5 text-sm text-gray-600 leading-relaxed">${esc2(c.desc)}</p>` : ''}</div></div>`).join('')}</div>`;
      }
      if (caseLeadHtml || solCasesHtml) {
        document.getElementById('solution-cases').innerHTML = `<div class="rounded-lg border border-gray-200 bg-gray-50 p-6 md:p-8">${caseLeadHtml}${solCasesHtml ? `<div class="${caseLeadHtml ? 'mt-4' : ''}">${solCasesHtml}</div>` : ''}</div>`;
        cb.style.display = '';
      } else cb.style.display = 'none';
      const rb = document.getElementById('solution-related-block');
      const isEn = (localStorage.getItem('lang') === 'en');
      const devBadge = isEn ? 'Counter-UAV · Equipment' : '反无人机 · 相关设备';
      const cards = [];
      // 锚点方式关联站内产品：支持多个（relatedAnchors 列表 + 兼容旧的单值 relatedAnchor）
      const anchors = [];
      if (Array.isArray(sol.relatedAnchors)) sol.relatedAnchors.forEach((a) => anchors.push(a));
      if (sol.relatedAnchor) anchors.push(sol.relatedAnchor);
      const seenAnchor = {};
      anchors.forEach((a) => {
        a = (a || '').trim(); if (!a || seenAnchor[a]) return; seenAnchor[a] = 1;
        const p = PRODUCT_INDEX[a] || RADAR.find((x) => x.anchor === a);
        if (!p) return;
        const relBadge = isEn ? 'Related Product' : (p.__backLabel || '相关产品');
        cards.push(`<a href="#${esc2(p.anchor)}" class="group flex items-center gap-5 bg-white border border-gray-200 rounded-lg p-5 hover:border-primary-mid hover:shadow-card-hover hover-lift transition-all duration-200"><div class="w-28 h-20 shrink-0 overflow-hidden rounded bg-gray-100"><img src="${esc2(p.image)}" alt="${esc2(p.name)}" loading="lazy" class="w-full h-full object-cover"></div><div class="min-w-0 flex-1"><span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">${esc2(relBadge)}</span><h4 class="mt-2 text-base font-medium text-gray-900">${esc2(p.name)}</h4><p class="mt-1 text-sm text-gray-500 line-clamp-2">${esc2(p.overview)}</p></div><svg class="w-5 h-5 shrink-0 text-gray-400 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>`);
      });
      (sol.relatedProducts || []).forEach((rp) => {
        const bdg = rp.badge ? `<span class="inline-flex items-center px-2.5 py-1 rounded-sm text-xs bg-primary-light text-primary">${esc2(rp.badge)}</span>` : '';
        const inner = `<div class="w-28 h-20 shrink-0 overflow-hidden rounded bg-gray-100"><img src="${esc2(rp.image)}" alt="${esc2(rp.name)}" loading="lazy" class="w-full h-full object-cover"></div><div class="min-w-0 flex-1">${bdg}<h4 class="mt-2 text-base font-medium text-gray-900">${esc2(rp.name)}</h4><p class="mt-1 text-sm text-gray-500 line-clamp-2">${esc2(rp.desc || '')}</p></div>`;
        const cls = 'group flex items-center gap-5 bg-white border border-gray-200 rounded-lg p-5 hover:border-primary-mid hover:shadow-card-hover hover-lift transition-all duration-200';
        const arrow = '<svg class="w-5 h-5 shrink-0 text-gray-400 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
        const u = (rp.url || '').trim();
        let href = '', ext = false;
        if (u) {
          if (u.startsWith('#') || u.startsWith('/')) { href = u; }                 // 站内锚点/相对路径 → 同页 SPA 跳转
          else if (/^https?:\/\//i.test(u)) {
            try { const uo = new URL(u); if (uo.origin === location.origin) { href = uo.hash || (uo.pathname + uo.search); } else { href = u; ext = true; } } // 同站→取锚点内跳；外站→新标签
            catch (e) { href = u; ext = true; }
          } else { href = u; }                                                       // mailto: / tel: 等 → 直接使用
        }
        cards.push(!href
          ? `<div class="flex items-center gap-5 bg-white border border-gray-200 rounded-lg p-5">${inner}</div>`
          : ext
            ? `<a href="${esc2(href)}" target="_blank" rel="noopener noreferrer" class="${cls}">${inner}${arrow}</a>`
            : `<a href="${esc2(href)}" class="${cls}">${inner}${arrow}</a>`);
      });
      if (cards.length) {
        document.getElementById('solution-related').innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${cards.join('')}</div>`;
        rb.style.display = '';
      } else rb.style.display = 'none';
      // 解决方案为 SPA 路由切换显示（非滚动进入），强制显示渐入元素，避免观察器漏触发导致应用场景配图/内容不显示
      document.querySelectorAll('#solution .fade-in-up').forEach((el) => el.classList.add('is-visible'));
    };
    const route = () => {
      const id = (location.hash || '').replace(/^#\/?/, '');
      if (id && solByAnchor[id]) { renderSolution(solByAnchor[id]); showView('solution'); closeMenu(); window.scrollTo({ top: 0, behavior: 'instant' }); return; }
      if (id && PRODUCT_INDEX[id] && showProductPage) { showProductPage(PRODUCT_INDEX[id]); showView('product'); closeMenu(); window.scrollTo({ top: 0, behavior: 'instant' }); return; } // 产品：独立详情页
      if (id === 'about' || ABOUT_PARTS.includes(id)) { showView('about'); showAboutPart(id); closeMenu(); window.scrollTo({ top: 0, behavior: 'instant' }); return; } // 走进雷科子栏目：单页显示
      if (id === 'service' || SERVICE_PARTS.includes(id)) { showView('service'); showServicePart(id); closeMenu(); window.scrollTo({ top: 0, behavior: 'instant' }); return; } // 服务支持子栏目：标签切换
      let view = 'home', target = null;
      if (id) {
        const el = document.getElementById(id);
        if (el) { const sec = el.closest('section[id]'); view = sec ? viewOf(sec.id) : 'home'; target = el; }
      }
      const prevView = currentView;
      showView(view);
      closeMenu();
      const sb = (view === prevView) ? 'smooth' : 'instant';   // 切换视图→瞬时到位；同页内滚动→保持平滑
      requestAnimationFrame(() => {
        if (target && target.id !== VIEWS[view][0]) target.scrollIntoView({ block: 'start', behavior: sb });
        else window.scrollTo({ top: 0, behavior: sb });
      });
    };
    window.addEventListener('hashchange', route);
    route();

    // ---- 解决方案邀请码门控：验证后下发正文并解锁 ----
    const solGateForm = document.getElementById('solution-gate-form');
    if (solGateForm) solGateForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const gateEl = document.getElementById('solution-gate');
      const anchor = gateEl ? gateEl.getAttribute('data-anchor') : '';
      const code = (document.getElementById('solution-gate-input').value || '').trim();
      const m = document.getElementById('solution-gate-msg');
      const showErr = (t) => { if (m) { m.textContent = t; m.classList.remove('hidden'); } };
      if (!code) { showErr('请输入邀请码'); return; }
      const btn = solGateForm.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = '验证中…'; }
      try {
        const r = await fetch('/api/solution-unlock', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ anchor, code, lang: (localStorage.getItem('lang') === 'en' ? 'en' : 'zh') }) });
        if (!r.ok) { try { window.__track && window.__track('gate_unlock', { anchor: anchor, result: 'fail' }); } catch (_) {} showErr('邀请码错误，请重试'); return; }
        const full = await r.json();
        try { window.__track && window.__track('gate_unlock', { anchor: anchor, result: 'success' }); } catch (_) {}
        const curLang = (localStorage.getItem('lang') === 'en') ? 'en' : 'zh';
        try { sessionStorage.setItem('unlock.v2-' + anchor + '-' + curLang, JSON.stringify(full)); } catch (_) {}
        if (typeof solByAnchor === 'object' && solByAnchor[anchor]) solByAnchor[anchor] = full;
        renderSolution(full);
        window.scrollTo(0, 0);
      } catch (_) { showErr('验证失败，请稍后重试'); }
      finally { if (btn) { btn.disabled = false; btn.textContent = '验证并进入'; } }
    });

    // ---- Hero 首屏轮播（可被后台注水后重建）----
    let heroSlides = [], heroDots = [], heroCur = 0, heroTimer = null;
    const heroShow = (n) => {
      if (!heroSlides.length) return;
      heroCur = (n + heroSlides.length) % heroSlides.length;
      heroSlides.forEach((s, k) => s.classList.toggle('is-active', k === heroCur));
      heroDots.forEach((d, k) => d.classList.toggle('is-active', k === heroCur));
    };
    const heroStop = () => { if (heroTimer) { clearInterval(heroTimer); heroTimer = null; } };
    const heroPlay = () => { heroStop(); if (heroSlides.length > 1) heroTimer = setInterval(() => heroShow(heroCur + 1), 6000); };
    window.initHeroCarousel = function () {
      const hero = document.getElementById('hero');
      if (!hero) return;
      heroSlides = Array.from(hero.querySelectorAll('.hero-slide'));
      const dotsWrap = document.getElementById('hero-dots');
      if (dotsWrap) {
        dotsWrap.innerHTML = heroSlides.map((_, i) => `<button class="hero-dot${i === 0 ? ' is-active' : ''}" aria-label="切换到第 ${i + 1} 张"></button>`).join('');
        heroDots = Array.from(dotsWrap.querySelectorAll('.hero-dot'));
        heroDots.forEach((d, k) => d.addEventListener('click', () => { heroShow(k); heroPlay(); }));
      }
      heroCur = 0; heroShow(0); heroPlay();
    };
    (function () {
      const hero = document.getElementById('hero');
      if (!hero) return;
      const next = document.getElementById('hero-next'), prev = document.getElementById('hero-prev');
      if (next) next.addEventListener('click', () => { heroShow(heroCur + 1); heroPlay(); });
      if (prev) prev.addEventListener('click', () => { heroShow(heroCur - 1); heroPlay(); });
      hero.addEventListener('mouseenter', heroStop);
      hero.addEventListener('mouseleave', heroPlay);
      window.initHeroCarousel();
    })();

    // ---- 其余区块：滚动到可视区域时渐入 ----
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      if (el.closest('#hero')) return; // Hero 已单独处理
      revealObserver.observe(el);
    });

    // ---- 数据统计数字滚动 ----
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const isDecimal = !Number.isInteger(target);
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const value = target * progress;
          el.textContent = isDecimal ? value.toFixed(1) : Math.floor(value);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = isDecimal ? target.toFixed(1) : target;
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-counter]').forEach((el) => counterObserver.observe(el));

    // ---- 资质证书放大查看 ----
    const lightbox = document.getElementById('honor-lightbox');
    const lightboxImg = document.getElementById('honor-img');
    const lightboxCaption = document.getElementById('honor-caption');
    const openLightbox = (src, title) => {
      lightboxImg.src = src;
      lightboxImg.alt = title;
      lightboxCaption.textContent = title;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    };
    const closeLightbox = () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      lightboxImg.src = '';
      document.body.classList.remove('overflow-hidden');
    };
    // 事件委托：兼容后台动态渲染出来的证书卡片
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-honor]');
      if (btn) openLightbox(btn.dataset.honor, btn.dataset.title);
    });
    document.getElementById('honor-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) closeLightbox(); });

    // ---- 留资咨询弹窗（产品 / 解决方案通用，事件委托兼容动态渲染）----
    const leadModal = document.getElementById('lead-modal');
    const leadForm = document.getElementById('lead-form');
    const leadSource = document.getElementById('lead-source');
    const leadMsg = document.getElementById('lead-msg');
    const setLeadMsg = (text, ok) => { leadMsg.textContent = text; leadMsg.className = 'text-sm ' + (ok ? 'text-green-600' : 'text-red-500'); };
    let pendingDownload = null;
    const triggerDownload = (url, title) => {
      const a = document.createElement('a');
      const ext = (String(url).match(/\.[a-zA-Z0-9]+$/) || [''])[0];
      let name = String(title || 'download').replace(/[\\/:*?"<>|]/g, '_');
      if (ext && !name.toLowerCase().endsWith(ext.toLowerCase())) name += ext;
      a.href = url; a.download = name; a.rel = 'noopener';
      document.body.appendChild(a); a.click(); a.remove();
    };
    const openLead = (source, displayLabel) => {
      leadForm.reset();
      leadMsg.className = 'hidden text-sm';
      leadForm.elements.source.value = source || '';
      if (source) { leadSource.textContent = displayLabel || ('咨询：' + source); leadSource.classList.remove('hidden'); }
      else leadSource.classList.add('hidden');
      leadModal.classList.remove('hidden');
      leadModal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
      setTimeout(() => { try { leadForm.elements.name.focus(); } catch (_) {} }, 50);
    };
    const closeLead = () => {
      leadModal.classList.add('hidden');
      leadModal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
      pendingDownload = null;
    };
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-lead]');
      if (btn) { e.preventDefault(); try { window.__track && window.__track('consult', { source: btn.getAttribute('data-lead') || '' }); } catch (_) {} openLead(btn.getAttribute('data-lead')); }
    });
    document.addEventListener('click', (e) => {
      const dl = e.target.closest('[data-download]');
      if (!dl) return;
      e.preventDefault();
      const url = dl.getAttribute('data-download');
      const title = dl.getAttribute('data-dl-title') || '';
      pendingDownload = { url, title };
      try { window.__track && window.__track('download_click', { file: title }); } catch (_) {}
      const label = (localStorage.getItem('lang') === 'en' ? 'Download: ' : '资料下载：') + title;
      openLead(label, label);
    });
    // 文中超链接指向可下载文件（PDF/Word/Excel/PPT/ZIP）时，也走"先留资再下载"，与资料下载一致
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href]');
      if (!a || a.hasAttribute('data-download') || a.hasAttribute('download')) return; // 资料下载按钮/程序触发的真实下载(带download属性)不拦
      const href = a.getAttribute('href') || '';
      if (!/\.(pdf|docx?|xlsx?|pptx?|zip)(?:[?#]|$)/i.test(href)) return; // 仅拦可下载文件链接
      e.preventDefault();
      const nm = document.getElementById('news-modal'); if (nm && !nm.classList.contains('hidden')) { nm.classList.add('hidden'); document.body.classList.remove('overflow-hidden'); } // 若在文章弹窗中，先收起再留资
      const title = (a.textContent || '').trim() || decodeURIComponent((href.split('#')[0].split('?')[0].split('/').pop()) || '资料');
      pendingDownload = { url: href, title };
      try { window.__track && window.__track('download_click', { file: title }); } catch (_) {}
      const label = (localStorage.getItem('lang') === 'en' ? 'Download: ' : '资料下载：') + title;
      openLead(label, label);
    });
    document.getElementById('lead-close').addEventListener('click', closeLead);
    leadModal.addEventListener('click', (e) => { if (e.target === leadModal) closeLead(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !leadModal.classList.contains('hidden')) closeLead(); });
    leadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const f = leadForm.elements;
      const data = { name: f.name.value.trim(), phone: f.phone.value.trim(), company: f.company.value.trim(), message: f.message.value.trim(), source: f.source.value };
      if (!data.name || !data.phone) { setLeadMsg('请填写姓名和联系电话', false); return; }
      if (!f.consent || !f.consent.checked) { setLeadMsg('请先阅读并勾选同意《隐私政策》', false); return; }
      data.consent = true;
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true; submitBtn.textContent = '提交中…';
      try {
        const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
        if (!r.ok) throw new Error('bad');
        try { if (window.__track) { window.__track('form_submit', { source: data.source || '' }); if (pendingDownload) window.__track('download', { file: pendingDownload.title || pendingDownload.url || '' }); } } catch (_) {}
        if (pendingDownload) {
          const dl = pendingDownload; pendingDownload = null;
          if (dl.url) { triggerDownload(dl.url, dl.title); setLeadMsg('提交成功，正在开始下载…', true); }
          else { setLeadMsg('提交成功，我们会尽快将资料发送给您！', true); }
        } else {
          setLeadMsg('提交成功，我们会尽快与您联系！', true);
        }
        leadForm.reset();
        setTimeout(closeLead, 1500);
      } catch (_) {
        setLeadMsg('提交失败，请稍后重试或拨打咨询热线', false);
      } finally {
        submitBtn.disabled = false; submitBtn.textContent = '提交';
      }
    });
  