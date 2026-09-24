"use client";

import { useEffect } from "react";
import translations from "./translations.json";

type Props = {
  initialPart?: string;
  newsCategory?: string;
  solidHeader?: boolean;
};

export function HengdaPageInteractions({ initialPart, newsCategory, solidHeader = false }: Props) {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const menu = document.getElementById("mobile-menu");
    const mask = document.getElementById("menu-mask");
    const toggle = document.getElementById("menu-toggle");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const frames = new Set<number>();
    let activeDialog: HTMLElement | null = null;
    let returnFocus: HTMLElement | null = null;
    let english = false;
    const originalText = new Map<Text, string>();
    const languageLabels = new Map(Array.from(document.querySelectorAll(".lang-label"), (label) => [label, label.textContent ?? "EN"]));

    const updateHeader = () => navbar?.classList.toggle("scrolled", solidHeader || window.scrollY > 20);
    const closeMenu = () => {
      menu?.classList.remove("is-open");
      mask?.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("overflow-hidden");
    };
    const openMenu = () => {
      menu?.classList.add("is-open");
      mask?.classList.add("is-open");
      toggle?.setAttribute("aria-expanded", "true");
      document.body.classList.add("overflow-hidden");
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
      document.body.classList.add("overflow-hidden");
      activeDialog?.querySelector<HTMLElement>("input, button")?.focus();
    };
    const search = () => {
      if (!(searchInput instanceof HTMLInputElement) || !(searchResults instanceof HTMLElement)) return;
      searchResults.replaceChildren();
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return;
      const matches = Array.from(document.querySelectorAll<HTMLElement>("main h2, main h3")).filter((heading) => (heading.parentElement?.textContent ?? "").toLowerCase().includes(query));
      matches.slice(0, 12).forEach((heading) => {
        const result = document.createElement("a");
        result.className = "search-result";
        result.href = `#${heading.closest("section")?.id ?? "hero"}`;
        result.textContent = heading.textContent ?? "";
        searchResults.append(result);
      });
      if (!matches.length) {
        const message = document.createElement("p");
        message.className = "search-result";
        message.textContent = english ? "No matching results" : "未找到相关内容，请尝试其他关键词";
        searchResults.append(message);
      }
    };
    const toggleLanguage = () => {
      english = !english;
      document.documentElement.lang = english ? "en" : "zh-CN";
      const dictionary: Record<string, string> = translations;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (!(node instanceof Text) || node.parentElement?.closest("script,style")) continue;
        if (!originalText.has(node)) originalText.set(node, node.data);
        const original = originalText.get(node) ?? node.data;
        const translated = dictionary[original.trim()];
        node.data = english && translated ? original.replace(original.trim(), translated) : original;
      }
      document.querySelectorAll(".lang-label").forEach((label) => { label.textContent = english ? "中文" : languageLabels.get(label) ?? "EN"; });
      search();
    };
    const selectPart = (part: string) => {
      const group = part.startsWith("about-") ? "about" : part.startsWith("service-") ? "service" : "";
      if (!group) return;
      document.querySelectorAll<HTMLElement>(`#${group} .${group}-part`).forEach((panel) => panel.classList.toggle("hidden", panel.id !== part));
      document.querySelectorAll<HTMLElement>(`[data-${group}-part]`).forEach((tab) => {
        const active = tab.dataset[`${group}Part`] === part;
        tab.classList.toggle("border-primary", active);
        tab.classList.toggle("text-primary", active);
        tab.classList.toggle("border-transparent", !active);
        tab.classList.toggle("text-gray-500", !active);
      });
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest("#menu-toggle")) {
        if (menu?.classList.contains("is-open")) closeMenu(); else openMenu();
      }
      if (event.target.closest("#menu-close, #menu-mask")) closeMenu();
      if (event.target.closest("#search-btn")) openDialog("search-modal");
      if (event.target.closest("#search-close") || event.target === activeDialog) closeDialog();
      if (event.target.closest(".lang-toggle")) toggleLanguage();
      if (event.target.closest("#mobile-menu a")) closeMenu();
      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const part = anchor.hash.slice(1);
      if (part.startsWith("about-") || part.startsWith("service-")) {
        event.preventDefault();
        history.replaceState(null, "", anchor.hash);
        selectPart(part);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { closeMenu(); closeDialog(); } };

    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible", "in");
        reveal.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll(".fade-in-up, .animate").forEach((element) => reveal.observe(element));

    const counters = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) return;
      const element = entry.target;
      const target = Number(element.dataset.counter ?? 0);
      const started = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - started) / 1200, 1);
        element.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) {
          const frame = requestAnimationFrame((time) => { frames.delete(frame); step(time); });
          frames.add(frame);
        }
      };
      step(started);
      counters.unobserve(element);
    }), { threshold: 0.4 });
    document.querySelectorAll<HTMLElement>("[data-counter]").forEach((element) => counters.observe(element));

    toggle?.setAttribute("aria-expanded", "false");
    if (initialPart) selectPart(initialPart);
    if (newsCategory) window.setTimeout(() => window.newsSelectCat?.(newsCategory), 0);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    searchInput?.addEventListener("input", search);
    if (searchInput instanceof HTMLInputElement) searchInput.placeholder = "搜索产品、业务、行业应用…";
    return () => {
      reveal.disconnect();
      counters.disconnect();
      frames.forEach(cancelAnimationFrame);
      window.removeEventListener("scroll", updateHeader);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      searchInput?.removeEventListener("input", search);
      document.body.classList.remove("overflow-hidden");
    };
  }, [initialPart, newsCategory, solidHeader]);
  return null;
}
