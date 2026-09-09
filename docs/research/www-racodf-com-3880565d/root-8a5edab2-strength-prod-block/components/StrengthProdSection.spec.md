# StrengthProdSection

## Target
- Hash `#strength-prod-block` on `/`; render inside shared `#strength` section.
- Heading `生产能力`; intro: `产能与品控是企业交付实力的核心体现。公司拥有标准化、规模化、智能化的生产基地，配套完善的生产厂房与自动化生产线，建立了从采购、精密生产、全程品控到成品出库的全闭环生产管理体系，以高效产能、严苛品控与稳定交付为客户提供高品质产品与一站式交付服务。`
- Cards: 规模化生产基地; 智能化生产设备; 严苛品控与交付能力; 柔性定制生产实力. Use exact source text from cached section and local images `shared/strength/strength-prod-*.jpg`.

## Layout / behavior
- Four cards in `sm:grid-cols-2 lg:grid-cols-4`, gap 5/6, image aspect-video object-contain, white card, gray border, hover primary border/shadow/lift.
- Hash navigation shows only `#strength` and scrolls to this block; desktop and mobile preserve source spacing.
