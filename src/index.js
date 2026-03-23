// Org Mirror: BlackRoad-Ventures — Organization index for BlackRoad-Ventures
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const cors = {"Access-Control-Allow-Origin":"*","Content-Type":"application/json"};
    if (url.pathname === "/api/health") return new Response(JSON.stringify({status:"ok",service:"Org Mirror: BlackRoad-Ventures"}), {headers:cors});
    return new Response(`<html><body style="background:#0a0a0a;color:#f5f5f5;font-family:monospace;padding:40px;max-width:600px;margin:0 auto"><h1>Org Mirror: BlackRoad-Ventures</h1><p style="color:#737373">Organization index for BlackRoad-Ventures</p><pre>GET /api/health</pre><p style="color:#333;margin-top:24px">Part of <a href="https://blackroad.io" style="color:#525252">BlackRoad OS</a></p></body></html>`, {headers:{"Content-Type":"text/html"}});
  }
};
