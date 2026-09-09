"""Reproduce homepage assets and JSX from the recorded browser DOM."""
from pathlib import Path
from bs4 import BeautifulSoup, Comment, NavigableString
from urllib.parse import urljoin, urlparse
from urllib.request import urlopen, Request
from concurrent.futures import ThreadPoolExecutor
import hashlib, json, re, os

ROOT = Path(__file__).resolve().parents[1]
KEY = 'www-racodf-com-3880565d/root-8a5edab2'
RESEARCH = ROOT / 'docs/research' / KEY
COMPONENTS = ROOT / 'src/components/sites' / KEY
ASSETS = ROOT / 'public/sites' / KEY
ORIGIN = 'https://www.racodf.com/'
data = json.loads((RESEARCH / 'extraction-1440.json').read_text(encoding='utf-8'))
source = BeautifulSoup((RESEARCH / 'source.html').read_text(encoding='utf-8'), 'html.parser')
names = {'navbar':'SiteHeader','hero':'HeroSection','stats':'StatsSection','business':'BusinessSection','industry':'IndustrySection','home-profile':'ProfileSection','advantages':'AdvantagesSection','contact':'ContactSection','footer':'SiteFooter'}
soups = {item['id']: BeautifulSoup(item['html'], 'html.parser') for item in data}
soups['dialogs'] = BeautifulSoup(''.join(str(source.find(id=id)) for id in ['search-modal','privacy-modal','legal-modal']), 'html.parser')
names['dialogs'] = 'SiteDialogs'
urls = set()
for soup in soups.values():
    for img in soup.find_all('img'):
        urls.add(urljoin(ORIGIN, img['src']))
mapping = {}
for url in sorted(urls):
    path = urlparse(url).path
    filename = hashlib.sha256(url.encode()).hexdigest()[:8] + '-' + Path(path).name
    mapping[url] = '/sites/' + KEY + '/' + filename

def download(url):
    dest = ROOT / 'public' / mapping[url].lstrip('/')
    if not dest.exists():
        with urlopen(Request(url, headers={'User-Agent':'Mozilla/5.0'}), timeout=45) as response:
            dest.write_bytes(response.read())
    return {'source':url, 'local':mapping[url], 'bytes':dest.stat().st_size}

with ThreadPoolExecutor(max_workers=6) as pool:
    manifest = list(pool.map(download, sorted(urls)))
(RESEARCH / 'ASSETS.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
css = Path(os.environ['TEMP'], 'racodf-styles.css').read_text(encoding='utf-8')
(COMPONENTS / 'source.css').write_text(css,encoding='utf-8')
styles = {}
attr_map = {'class':'className','for':'htmlFor','tabindex':'tabIndex','viewbox':'viewBox','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','fill-rule':'fillRule','clip-rule':'clipRule','stroke-dasharray':'strokeDasharray','stroke-dashoffset':'strokeDashoffset','fill-opacity':'fillOpacity','stroke-opacity':'strokeOpacity','preserveaspectratio':'preserveAspectRatio','maxlength':'maxLength','minlength':'minLength','autocomplete':'autoComplete','fetchpriority':'fetchPriority','readonly':'readOnly','colspan':'colSpan','rowspan':'rowSpan'}
bools = {'required','disabled','multiple','readOnly','autoFocus','hidden','open'}
voids = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
local = {'hero','business','industry','contact','home-profile','advantages','stats'}

def render(node):
    if isinstance(node,Comment): return ''
    if isinstance(node,NavigableString):
        text = str(node)
        if not text.strip(): return ' ' if '\n' not in text else '\n'
        return '{'+json.dumps(text,ensure_ascii=False)+'}'
    if node.name in ['script','style']: return ''
    attrs = []
    for key,value in node.attrs.items():
        if key.startswith('on'): continue
        if isinstance(value,list): value = ' '.join(value)
        if key == 'style':
            clean = re.sub(r'(?:^|;)\s*display:\s*(?:none|block)\s*;?', ';',value).strip('; ')
            if clean:
                cls = 'extracted-' + hashlib.sha256(clean.encode()).hexdigest()[:10]
                styles[cls] = clean
                existing = next((i for i,x in enumerate(attrs) if x.startswith('className=')),None)
                # Class is emitted after all attributes to avoid duplicate attributes.
                node['data-extracted-style'] = cls
            continue
        if key == 'src': value = mapping.get(urljoin(ORIGIN,value),value)
        if key == 'href' and value.startswith('#') and value[1:] not in local:
            value = ORIGIN + value
        if key == 'class':
            value = value.replace(' is-visible','')
            if node.get('id') == 'navbar': value = value.replace(' scrolled','')
            if 'hero-slide' in value or 'hero-dot' in value: value = value.replace(' is-active','')
        if key == 'selected': continue
        if key == 'checked': key = 'defaultChecked'
        if key == 'value' and node.name in ['input','textarea']: key = 'defaultValue'
        key = attr_map.get(key,key)
        if key in bools or key == 'defaultChecked': attrs.append(key)
        else: attrs.append(key+'='+json.dumps(str(value),ensure_ascii=False))
    if node.get('data-extracted-style'):
        cls=node['data-extracted-style']
        for i,a in enumerate(attrs):
            if a.startswith('className='):
                attrs[i]='className='+json.dumps(json.loads(a[10:])+' '+cls,ensure_ascii=False)
                break
        else: attrs.append('className='+json.dumps(cls))
    if node.name == 'button' and not node.has_attr('type'): attrs.append('type="button"')
    opening = '<'+node.name+(' '+' '.join(attrs) if attrs else '')
    if node.name in voids: return opening+' />'
    return opening+'>'+''.join(render(child) for child in node.children)+'</'+node.name+'>'

for id,soup in soups.items():
    # Copy attributes before rendering; render adds a stable style class.
    for node in soup.find_all(style=True):
        raw=node['style']
        clean=re.sub(r'(?:^|;)\s*display:\s*(?:none|block)\s*;?', ';',raw).strip('; ')
        del node['style']
        if clean:
            cls='extracted-'+hashlib.sha256(clean.encode()).hexdigest()[:10]
            styles[cls]=clean
            node['class']=node.get('class',[])+[cls]
    markup=''.join(render(child) for child in soup.children)
    (COMPONENTS/(names[id]+'.tsx')).write_text('/* Original image sizing is preserved for visual fidelity. */\n/* eslint-disable @next/next/no-img-element */\nexport function '+names[id]+'() {\n  return (<>\n'+markup+'\n  </>);\n}\n',encoding='utf-8')
    sample = next((x for x in data if x['id']==id),None)
    spec = '# '+names[id]+'\n\nSource: https://www.racodf.com/\n\n## DOM and content\nExact extracted DOM is reproduced in '+names[id]+'.tsx. All copy and SVG paths are verbatim from browser DOM.\n\n## Computed styles\n'
    if sample:
        spec += json.dumps(sample['styles'][0],ensure_ascii=False,indent=2)+'\n'
    spec += '\n## Responsive\nExact per-element styles and rectangles: extraction-1440.json, extraction-768.json, extraction-390.json. Original utility breakpoints: sm 640px, md 768px, lg 1024px.\n\n## States and behaviors\nSee BEHAVIORS.md for recorded triggers and transitions. Static content uses reveal threshold 0.15 and source CSS.\n\n## Assets\nLocal mappings: ASSETS.json. No generated or placeholder imagery.\n'
    (RESEARCH/'components'/(names[id]+'.spec.md')).write_text(spec,encoding='utf-8')
(COMPONENTS/'extracted.css').write_text('\n'.join('.'+key+'{'+value+'}' for key,value in styles.items()),encoding='utf-8')
print(f'Created {len(names)} JSX components; downloaded {len(manifest)} assets.')
