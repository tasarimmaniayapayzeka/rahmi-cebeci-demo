/* Yerel önizleme sunucusu — port 8060 (34-Rahmi-Cebeci) */
const http = require('http');
const fs = require('fs');
const path = require('path');

const KOK = path.join(__dirname, '..', 'docs');
const PORT = Number(process.argv[2]) || Number(process.env.PORT) || 8060;
const TIP = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg',
  '.png': 'image/png', '.webp': 'image/webp', '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  let p = path.join(KOK, u);
  if (u.endsWith('/')) p = path.join(p, 'index.html');
  if (!p.startsWith(KOK)) { res.writeHead(403).end('403'); return; }
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) {
    const alt = path.join(p, 'index.html');
    if (fs.existsSync(alt)) p = alt;
    else {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      const s404 = path.join(KOK, '404.html');   /* GitHub Pages davranışıyla aynı */
      res.end(fs.existsSync(s404) ? fs.readFileSync(s404) : '<h1>404 — ' + u + '</h1>');
      return;
    }
  }
  res.writeHead(200, { 'Content-Type': TIP[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
}).listen(PORT, () => console.log('http://localhost:' + PORT));
