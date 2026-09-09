"use client";

import { useEffect } from "react";
import translations from "./translations.json";

/** Progressive enhancement for the server-rendered overview sections. */
export function HomepageInteractions() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("mobile-menu");
    const mask = document.getElementById("menu-mask");
    const searchInput = document.getElementById("search-input");
    const results = document.getElementById("search-results");
    const frames = new Set<number>();
    let currentView = "home";
    let activeDialog: HTMLElement | null = null;
    let returnFocus: HTMLElement | null = null;
    let english = false;
    const originalText = new Map<Text, string>();
    const originalAttributes = new Map<Element, Map<string, string>>();
    const languageLabels = new Map(Array.from(document.querySelectorAll(".lang-label"), (label) => [label, label.textContent ?? "EN"]));
    const dictionary: Record<string, string> = translations;

    const onScroll = () => navbar?.classList.toggle("scrolled", window.scrollY > 20 || currentView !== "home");
    const closeMenu = () => {
      menu?.classList.remove("is-open");
      mask?.classList.remove("is-open");
      document.getElementById("menu-toggle")?.setAttribute("aria-expanded", "false");
      if (!activeDialog) document.body.classList.remove("overflow-hidden");
    };
    const closeDialog = () => {
      activeDialog?.classList.add("hidden");
      activeDialog?.classList.remove("flex");
      activeDialog = null;
      document.body.classList.remove("overflow-hidden");
      returnFocus?.focus();
    };
    const openDialog = (id: string) => {
      closeMenu();
      returnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      activeDialog = document.getElementById(id);
      activeDialog?.classList.remove("hidden");
      if (id !== "search-modal") activeDialog?.classList.add("flex");
      document.body.classList.add("overflow-hidden");
      activeDialog?.querySelector<HTMLElement>("input, button")?.focus();
    };
    const navigate = (id: string, isolated = true) => {
      const catalogTarget = /^(radar|sat-|ctrl-|storage-|connected-)/.test(id);
      const solutionTarget = id.startsWith("sol-");
      currentView = isolated && ["business", "industry"].includes(id) ? id : id.startsWith("about") ? "about" : id.startsWith("service") ? "service" : id === "news" ? "news" : id.startsWith("strength") ? "strength" : solutionTarget ? "solution" : catalogTarget ? "catalog" : "home";
      document.querySelectorAll<HTMLElement>("main > section").forEach((section) => {
        const homeSections = new Set(["hero", "stats", "business", "industry", "home-profile", "advantages", "contact"]);
        const visible = currentView === "home" ? homeSections.has(section.id) : currentView === "about" ? section.id === "about" : currentView === "service" ? section.id === "service" : currentView === "news" ? section.id === "news" : currentView === "strength" ? section.id === "strength" : currentView === "catalog" ? section.id === "catalog" : currentView === "solution" ? section.id === "solution" : section.id === currentView;
        section.classList.toggle("view-hidden", !visible);
      });
      document.querySelector("main")?.classList.toggle("overview-view", currentView !== "home");
      if (currentView === "about") {
        const part = id === "about" ? "about-profile" : id;
        document.querySelectorAll<HTMLElement>("#about .about-part").forEach((panel) => panel.classList.toggle("hidden", panel.id !== part));
        document.querySelectorAll<HTMLElement>("[data-about-part]").forEach((tab) => {
          const active = tab.getAttribute("data-about-part") === part;
          tab.classList.toggle("border-primary", active);
          tab.classList.toggle("text-primary", active);
          tab.classList.toggle("border-transparent", !active);
          tab.classList.toggle("text-gray-500", !active);
        });
      }
      if (currentView === "service") {
        const part = id === "service" ? "service-downloads" : id;
        document.querySelectorAll<HTMLElement>("#service .service-part").forEach((panel) => panel.classList.toggle("hidden", panel.id !== part));
        document.querySelectorAll<HTMLElement>("[data-service-part]").forEach((tab) => {
          const active = tab.getAttribute("data-service-part") === part;
          tab.classList.toggle("border-primary", active);
          tab.classList.toggle("text-primary", active);
          tab.classList.toggle("border-transparent", !active);
          tab.classList.toggle("text-gray-500", !active);
        });
      }
      closeMenu();
      onScroll();
      const destination = document.getElementById(id);
      if ((currentView === "strength" || currentView === "catalog" || currentView === "solution") && id !== currentView) destination?.scrollIntoView({ behavior: "smooth" });
      else if (id === "hero" || currentView !== "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else destination?.scrollIntoView({ behavior: "smooth" });
    };

    const search = () => {
      if (!(searchInput instanceof HTMLInputElement) || !results) return;
      results.replaceChildren();
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;
      let count = 0;
      document.querySelectorAll<HTMLElement>("#business h3, #industry h3, #advantages h3, #home-profile h2, #contact h2").forEach((heading) => {
        const section = heading.closest("section");
        const text = heading.parentElement?.textContent ?? "";
        if (!text.toLowerCase().includes(query) || !section) return;
        const link = document.createElement("a");
        link.href = `#${section.id}`;
        link.className = "search-result";
        link.dataset.searchResult = "true";
        link.textContent = heading.textContent;
        results.append(link);
        count++;
      });
      if (!count) {
        const message = document.createElement("p");
        message.className = "search-result";
        message.textContent = english ? "No matching results" : "未找到相关内容，请尝试其他关键词";
        results.append(message);
      }
    };

    const toggleLanguage = () => {
      english = !english;
      document.documentElement.lang = english ? "en" : "zh-CN";
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!(node instanceof Text) || node.parentElement?.closest("script,style")) continue;
        if (!originalText.has(node)) originalText.set(node, node.data);
        const original = originalText.get(node) ?? node.data;
        const translated = dictionary[original.trim()];
        node.data = english && translated ? original.replace(original.trim(), translated) : original;
      }
      document.querySelectorAll("[placeholder], [aria-label], [title]").forEach((element) => {
        const originals = originalAttributes.get(element) ?? new Map<string, string>();
        for (const attribute of ["placeholder", "aria-label", "title"]) {
          const value = element.getAttribute(attribute);
          if (value === null) continue;
          if (!originals.has(attribute)) originals.set(attribute, value);
          const original = originals.get(attribute) ?? value;
          element.setAttribute(attribute, english ? dictionary[original] ?? original : original);
        }
        originalAttributes.set(element, originals);
      });
      document.querySelectorAll(".lang-label").forEach((label) => { label.textContent = english ? "中文" : languageLabels.get(label) ?? "EN"; });
      document.querySelectorAll(".stat-unit").forEach((unit) => unit.classList.toggle("view-hidden", english));
      search();
    };

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target;
      if (element.closest("#menu-toggle")) {
        menu?.classList.add("is-open");
        mask?.classList.add("is-open");
        document.body.classList.add("overflow-hidden");
        document.getElementById("menu-toggle")?.setAttribute("aria-expanded", "true");
      } else if (element.closest("#menu-close, #menu-mask")) closeMenu();
      else if (element.closest("#search-btn")) openDialog("search-modal");
      else if (element.closest(".open-privacy")) { event.preventDefault(); openDialog("privacy-modal"); }
      else if (element.closest(".open-legal")) { event.preventDefault(); openDialog("legal-modal"); }
      else if (element.closest("#search-close, #privacy-close, #legal-close") || element === activeDialog) closeDialog();
      else if (element.closest(".lang-toggle")) toggleLanguage();
      const anchor = element.closest<HTMLAnchorElement>('a[href^="#"]');
      if (anchor && !event.ctrlKey && !event.metaKey && !event.shiftKey && event.button === 0) {
        const id = anchor.hash.slice(1);
        if (!document.getElementById(id)) return;
        event.preventDefault();
        if (activeDialog) closeDialog();
        history.pushState(null, "", `#${id}`);
        navigate(id, !anchor.dataset.searchResult);
        const category = anchor.dataset.newsCategory;
        if (category) window.newsSelectCat?.(category);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { closeDialog(); closeMenu(); }
      if (event.key === "Tab" && activeDialog) {
        const focusable = Array.from(activeDialog.querySelectorAll<HTMLElement>('button, input, a[href], select, textarea, [tabindex="0"]'));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const onHistory = () => navigate(location.hash.slice(1) || "hero");
    const reveal = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); reveal.unobserve(entry.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".fade-in-up").forEach((element) => reveal.observe(element));
    const counters = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) return;
        const element = entry.target;
        const target = Number(element.dataset.counter);
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / 1400, 1);
          element.textContent = String(Math.floor(target * progress));
          if (progress < 1) {
            const frame = requestAnimationFrame((time) => { frames.delete(frame); step(time); });
            frames.add(frame);
          }
        };
        step(start);
        counters.unobserve(element);
      });
    }, { threshold: 0.5 });
    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((element) => {
      element.textContent = "0";
      counters.observe(element);
    });
    document.getElementById("menu-toggle")?.setAttribute("aria-expanded", "false");
    if (searchInput instanceof HTMLInputElement) searchInput.placeholder = "搜索产品、业务、行业应用…";
    const hint = document.getElementById("search-hint");
    if (hint) hint.textContent = "输入关键词搜索 · 按 ESC 关闭";
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", onHistory);
    window.addEventListener("hashchange", onHistory);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    searchInput?.addEventListener("input", search);
    onHistory();
    return () => {
      reveal.disconnect(); counters.disconnect();
      frames.forEach(cancelAnimationFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onHistory);
      window.removeEventListener("hashchange", onHistory);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      searchInput?.removeEventListener("input", search);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return null;
}
