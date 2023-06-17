const crypto = require('crypto');
const http = require('http');

const url = new URL(window.location.href);
const proxy = url.searchParams.get('proxy') === 'true';
const email = url.searchParams.get('email');

if (email) {
  const emailmd5 = crypto.createHash('md5').update(email).digest('hex');
  const proxyurl = `https://gravatar.loli.top/avatar/${emailmd5}`;
  const avatarurl = `https://gravatar.com/avatar/${emailmd5}`;

  if (proxy) {
    res.writeHead(302, { Location: proxyurl });
  } else {
    res.writeHead(302, { Location: avatarurl });
  }

} else if (proxy) {
  const emailmd5 = crypto.createHash('md5').update(email).digest('hex');
  const proxyurl = `https://gravatar.loli.top/avatar/${emailmd5}`;
  res.writeHead(302, { Location: proxyurl });

} else {
  res.writeHead(302, { Location: 'https://gravatar.com/avatar' });
}

res.end();