"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

import type { Product } from "./catalog-data";

export function ProductModal({
  product,
  onClose,
  onRequestSpec,
}: {
  product: Product;
  onClose: () => void;
  onRequestSpec: (target: string) => void;
}) {
  return (
    <div className="product-modal-backdrop" role="presentation" onClick={onClose}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onClick={(event) => event.stopPropagation()}>
        <div className="product-modal-head">
          <div>
            <div className="product-center-kicker">FULL TECHNICAL PARAMETERS</div>
            <h2 id="product-modal-title">{product.model}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="关闭">×</button>
        </div>
        <p className="product-modal-lead">{product.description}</p>
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
        </dl>
        <button type="button" className="product-primary-button" onClick={() => onRequestSpec(product.model)}>
          申请该型号规格书
        </button>
      </section>
    </div>
  );
}

export function SpecificationInquiryModal({ target, onClose }: { target: string; onClose: () => void }) {
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
      <section className="product-inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="product-inquiry-title" onClick={(event) => event.stopPropagation()}>
        <div className="product-inquiry-head">
          <div>
            <span>规格书申请</span>
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
            <select required name="product" defaultValue="规格书申请">
              <option value="规格书申请">规格书申请</option>
            </select>
          </label>
          <label>
            咨询内容
            <textarea required name="content" rows={4} defaultValue={`申请规格书：${target}\n请与我联系，并告知规格书申请所需资料。`} />
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
