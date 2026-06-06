// Run this ONCE from your project root:  node download-slides.js
// It downloads all 10 hero slider images into public/slides/

const https = require('https')
const fs = require('fs')
const path = require('path')

const images = [
  ['slide-01.jpg', 'https://images.unsplash.com/photo-1604519099058-d5b0f7db5eb0?w=1200&auto=format&fit=crop'],
  ['slide-02.jpg', 'https://images.unsplash.com/photo-1625869141006-80e80aa4ed47?w=1200&auto=format&fit=crop'],
  ['slide-03.jpg', 'https://images.unsplash.com/photo-1574570320474-c17ee5870e26?w=1200&auto=format&fit=crop'],
  ['slide-04.jpg', 'https://images.unsplash.com/photo-1616684000067-36952fde56ec?w=1200&auto=format&fit=crop'],
  ['slide-05.jpg', 'https://images.unsplash.com/photo-1550069173-79f5a3a9f9c7?w=1200&auto=format&fit=crop'],
  ['slide-06.jpg', 'https://images.unsplash.com/photo-1543702303-d5b1c9a3e082?w=1200&auto=format&fit=crop'],
  ['slide-07.jpg', 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=1200&auto=format&fit=crop'],
  ['slide-08.jpg', 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=1200&auto=format&fit=crop'],
  ['slide-09.jpg', 'https://images.unsplash.com/photo-1602596399478-e89e59caf1e6?w=1200&auto=format&fit=crop'],
  ['slide-10.jpg', 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=1200&auto=format&fit=crop'],
]

const outDir = path.join(__dirname, 'public', 'slides')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

function download(filename, url) {
  return new Promise((resolve, reject) => {
    const dest = path.join(outDir, filename)
    const file = fs.createWriteStream(dest)
    const get = (u) => https.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        get(res.headers.location)
        return
      }
      if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode} for ${u}`)); return }
      res.pipe(file)
      file.on('finish', () => { file.close(); console.log(`✓ ${filename}`); resolve() })
    }).on('error', reject)
    get(url)
  })
}

;(async () => {
  for (const [name, url] of images) {
    try { await download(name, url) }
    catch (e) { console.error(`✗ ${name}: ${e.message}`) }
  }
  console.log('\nAll done! Images saved to public/slides/')
})()
