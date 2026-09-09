# StrengthRdSection

## Target
- Hash `#strength-rd-block` on `/`; render inside shared `#strength` section.
- Heading `研发能力`; intro: `创新是企业持续发展的核心驱动力。公司始终坚持以技术研发为核心战略，深耕电子信息领域，聚焦产品迭代、技术攻坚与工艺优化，构建了完善、高效、自主可控的研发创新体系，具备独立研发、定制开发、技术升级及成果转化的综合实力。`
- Cards: 强大的研发平台; 专业的研发团队; 完善的研发体系; 技术成果与创新实力. Use exact source text from cached section and local images `shared/strength/strength-rd-*.jpg`.

## Layout / behavior
- Four cards in `sm:grid-cols-2 lg:grid-cols-4`, gap 5/6, image aspect-video object-contain, white card, gray border, hover primary border/shadow/lift.
- Hash navigation shows only `#strength` and scrolls to this block; desktop and mobile preserve source spacing.
