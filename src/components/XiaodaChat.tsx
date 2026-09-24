"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import styles from "./XiaodaChat.module.css";

const assetRoot = "/sites/www-racodf-com-3880565d/shared/home";
const chatUrl = "https://hd.hdmicrowave.com/xiaoda.html?channel=hdmicrowave_window";
const edgeGap = 12;

type Position = { left: number; top: number };
type DragState = { pointerId: number; startX: number; startY: number; left: number; top: number; moved: boolean };

export function XiaodaChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<DragState | null>(null);
  const suppressClickRef = useRef(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const keepInViewport = () => {
      const button = buttonRef.current;
      if (!button) return;
      setPosition((current) => current ? {
        left: Math.max(edgeGap, Math.min(current.left, window.innerWidth - button.offsetWidth - edgeGap)),
        top: Math.max(edgeGap, Math.min(current.top, window.innerHeight - button.offsetHeight - edgeGap)),
      } : null);
    };
    window.addEventListener("resize", keepInViewport);
    return () => window.removeEventListener("resize", keepInViewport);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const launcher = buttonRef.current;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      launcher?.focus();
    };
  }, [isOpen]);

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0) return;
    const rect = event.currentTarget.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (!drag.moved && Math.hypot(dx, dy) < 6) return;
    drag.moved = true;
    const button = event.currentTarget;
    setPosition({
      left: Math.max(edgeGap, Math.min(drag.left + dx, window.innerWidth - button.offsetWidth - edgeGap)),
      top: Math.max(edgeGap, Math.min(drag.top + dy, window.innerHeight - button.offsetHeight - edgeGap)),
    });
  }

  function endDrag(event: PointerEvent<HTMLButtonElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    suppressClickRef.current = drag.moved;
    dragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={`${styles.launcher} ${isOpen ? styles.launcherHidden : ""}`}
        style={position ?? undefined}
        aria-label="打开小达智能客服"
        title="小达智能客服"
        tabIndex={isOpen ? -1 : 0}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClick={() => {
          if (suppressClickRef.current) {
            suppressClickRef.current = false;
            return;
          }
          setHasOpened(true);
          setIsOpen(true);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${assetRoot}/xiaoda-full.gif`} alt="" draggable={false} />
      </button>
      {hasOpened && (
        <section className={`${styles.window} ${isOpen ? "" : styles.windowHidden}`} role="dialog" aria-modal={isOpen} aria-label="小达智能客服" aria-hidden={!isOpen}>
          <header className={styles.header}>
            <span>小达智能客服</span>
            <button ref={closeRef} type="button" className={styles.close} aria-label="关闭小达智能客服" title="关闭" onClick={() => setIsOpen(false)}>
              <X size={20} aria-hidden="true" />
            </button>
          </header>
          <iframe className={styles.frame} src={chatUrl} title="小达智能客服会话" />
        </section>
      )}
    </>
  );
}
