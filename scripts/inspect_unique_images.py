import os, hashlib
from PIL import Image

img_dir = r'public/assets/images'
files = [f for f in os.listdir(img_dir) if f.endswith(('.jpg', '.png', '.jpeg'))]

seen = {}
unique = []

for f in sorted(files):
    p = os.path.join(img_dir, f)
    with open(p, 'rb') as fp:
        h = hashlib.md5(fp.read()).hexdigest()
    if h not in seen:
        seen[h] = f
        unique.append(f)

html = ['<!DOCTYPE html><html><head><style>body{background:#111;color:#fff;font-family:sans-serif;display:flex;flex-wrap:wrap;gap:20px;padding:20px;} .card{background:#222;padding:10px;border-radius:8px;max-width:250px;} img{max-width:100%;height:auto;display:block;} </style></head><body>']

for u in unique:
    p = os.path.join(img_dir, u)
    with Image.open(p) as img:
        w, h = img.size
        sz = os.path.getsize(p)
    html.append(f'<div class="card"><h4>{u} ({w}x{h}, {sz//1024}KB)</h4><img src="/assets/images/{u}" /></div>')

html.append('</body></html>')

with open('public/contact_sheet.html', 'w', encoding='utf-8') as fp:
    fp.write('\n'.join(html))

print('contact_sheet.html created with', len(unique), 'unique images')
