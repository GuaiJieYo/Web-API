const crypto = require('crypto');

const DEFAULT_URL = 'https://gravatar.com/avatar';
const PROXY_URL = 'https://gravatar.loli.top/avatar/';

module.exports = async (req, res) => {
  try {
    const { proxy, email } = req.query;

    const emailmd5 = crypto.createHash('md5').update(email).digest('hex');
    const redirectUrl = proxy ? `${PROXY_URL}${emailmd5}` : `${DEFAULT_URL}/${emailmd5}`;
    return res.redirect(302, redirectUrl);

  } catch (err) {
    console.error(err);
    return res.status(500).send('网络服务错误');
  }
};
