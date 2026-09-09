# AboutCultureSection

## Target
- Hash: `#about-culture` on `/`, nested in shared `#about` shell.
- Root `<div id="about-culture" className="about-part">`.

## Content
- Vision card label `愿景 VISION`; value `成为世界一流的传感、导航与数字系统高科技公司`.
- Values: 国家 / 使命为先，服务国防与国民经济; 团队 / 凝聚专业力量，协同攻坚; 拼搏 / 持续摸索前进，冲破黎明前的黑暗; 创新 / 自主知识产权，创新引领发展.
- Conduct: 严格 / 规范严格、执行严格、功过严格、赏罚严格; 用心 / 主动、负责、认真、处处留心、注重学习; 专业 / 使自己的工作达到专业水平，不断提高，并为提高专业水平技能持续学习; 节约 / 成为公司永远的特征，并体现在研发、管理的每一个细节.

## Layout / behavior
- Vision is a rounded pale-primary bordered card, p-8/lg:p-10, eye icon and tracking label.
- Values and conduct each have a small primary rule + heading, then 2 columns mobile / 4 columns md; white cards vs gray conduct cards, hover border/shadow/lift.
- Source dimensions: about 1297x697 desktop and 335x1094 mobile. Existing fade-in-up observer handles reveals. No active mission card is shown.
