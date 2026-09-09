# ServiceSalesSection

## Target
- Hash `#service-sales` on `/`; render inside shared `#service` shell.
- Root `<div id="service-sales" className="service-part hidden">`.
- Heading `销售网络`.

## Content
One source card: title `北京总部`; address `北京市海淀区远大南街6号院鲁迅文创园5号楼`; phone `010-68916700`; email `market@racodf.com`.

## Layout / behavior
- Responsive card grid is `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`, gap 5/6. The current source has one card.
- Card is white with gray border, rounded-lg, p-6; each contact row has a primary icon and gray text. Static links/text; no map or external submission.
