# 行为记录

- Hash 导航由首页交互层拦截，进入 `#about-history` 后只显示 `#about` 主 section 和该 `.about-part`。
- 时间轴本身为静态内容；滚动只触发既有 `.fade-in-up` IntersectionObserver，卡片 hover 提升阴影并改变边框。
- 1440px 为居中双列交替时间轴，390px 改为左侧单列时间轴。
