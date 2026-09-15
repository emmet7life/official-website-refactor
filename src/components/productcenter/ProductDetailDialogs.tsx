"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";

import type { Product } from "./catalog-data";

function useDialogFocus(onClose: () => void) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector<HTMLElement>("button, input")?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { event.preventDefault(); onClose(); }
      if (event.key !== "Tab") return;
      const controls = Array.from(ref.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input, select, textarea, a[href]') ?? []);
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
      if (previous instanceof HTMLElement && previous.isConnected) previous.focus();
    };
  }, [onClose]);
  return ref;
}

export function ProductModal({
  product,
  onClose,
  onRequestSpec,
}: {
  product: Product;
  onClose: () => void;
  onRequestSpec: (target: string) => void;
}) {
  const dialogRef = useDialogFocus(onClose);
  return (
    <div className="product-modal-backdrop" role="presentation" onClick={onClose}>
      <section ref={dialogRef} className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onClick={(event) => event.stopPropagation()}>
        <div className="product-modal-head">
          <div>
            <div className="product-center-kicker">FULL TECHNICAL PARAMETERS</div>
            <h2 id="product-modal-title">{product.model}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="关闭">×</button>
        </div>
        <p className="product-modal-lead">{product.description}</p>
        {product.image ? <Image src={product.image} alt={product.name ?? product.model} width={640} height={360} className="mx-auto mb-6 h-48 w-full object-contain" /> : null}
        {product.specifications ? <dl className="product-parameter-list">{product.specifications.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl> :
        <dl className="product-parameter-list">
          <div>
            <dt>频率范围</dt>
            <dd>{product.frequency} GHz</dd>
          </div>
          <div>
            <dt>增益 / 系统增益</dt>
            <dd>{product.gain} dB</dd>
          </div>
          <div>
            <dt>接口 / 法兰</dt>
            <dd>{product.interface}</dd>
          </div>
          <div>
            <dt>工作带宽</dt>
            <dd>{product.bandwidth} GHz</dd>
          </div>
          <div>
            <dt>轴比 / 静态精度</dt>
            <dd>{product.axis}</dd>
          </div>
          <div>
            <dt>产品类型</dt>
            <dd>恒达微波标准产品 / 可按项目配置</dd>
          </div>
        </dl>}
        <button type="button" className="product-primary-button" onClick={() => onRequestSpec(product.model)}>
          获取规格书
        </button>
      </section>
    </div>
  );
}

export function SpecificationInquiryModal({ target, onClose }: { target: string; onClose: () => void }) {
  const dialogRef = useDialogFocus(onClose);
  const [submitted, setSubmitted] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    };
  }, [onClose]);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
    closeTimerRef.current = window.setTimeout(onClose, 2600);
  }

  return (
    <div className="product-inquiry-backdrop" role="presentation" onClick={onClose}>
      <section ref={dialogRef} className="product-inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="product-inquiry-title" onClick={(event) => event.stopPropagation()}>
        <div className="product-inquiry-head">
          <div>
            <span>获取规格书</span>
            <h2 id="product-inquiry-title">{target}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="关闭询单弹窗">
            <X aria-hidden="true" size={22} />
          </button>
        </div>
        <p className="product-inquiry-lead">请留下联系方式，我们会尽快与您确认规格书获取方式和项目需求。</p>
        <form className="product-inquiry-form" onSubmit={submitInquiry}>
          <label>
            姓名
            <input required name="name" autoComplete="name" placeholder="请输入姓名" />
          </label>
          <label>
            联系电话
            <input required name="phone" type="tel" autoComplete="tel" placeholder="请输入联系电话" />
          </label>
          <label>
            咨询产品类型
            <select required name="product" defaultValue="获取规格书">
              <option value="获取规格书">获取规格书</option>
            </select>
          </label>
          <label>
            咨询内容
            <textarea required name="content" rows={4} defaultValue={`获取规格书：${target}\n请与我联系，并告知获取规格书所需资料。`} />
          </label>
          <button type="submit" disabled={submitted}>
            {submitted ? "已提交" : "提交询单"}
          </button>
          {submitted ? <p role="status">提交成功，我们将尽快与您联系！</p> : null}
        </form>
      </section>
    </div>
  );
}
