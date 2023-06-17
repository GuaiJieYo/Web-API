const https = require('https');
const { URL } = require('url');

module.exports = (req, res) => {
  // 构建请求 URL
  const apiUrl = new URL('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN');
  if (req.query.uhd === 'true') {
    apiUrl.searchParams.append('uhd', '1');
  }

  // 发送 HTTP 请求
  https.get(apiUrl, (apiRes) => {
    let body = '';
    apiRes.on('data', (chunk) => {
      body += chunk;
    });
    apiRes.on('end', () => {
      // 解析 JSON 响应
      const data = JSON.parse(body);
      const imageUrl = `https://bing.com${data.images[0].url}`;

      // 发送重定向响应
      res.setHeader('Location', imageUrl);
      res.status(302).send();
    });
  }).on('error', (err) => {
    console.error(`请求失败：${err.message}`);
    res.status(500).send('请求失败');
  });
};
