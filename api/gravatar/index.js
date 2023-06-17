const crypto = require('crypto');
const url = require('url');

module.exports = async (req, res) => {
  try {
    const { proxy, email } = req.query;

    if (!email) {
      if (proxy) {
        const proxyUrl = 'https://gravatar.loli.top/avatar/';
        return res.redirect(302, proxyUrl);
      } else {
        const defaultUrl = 'https://gravatar.com/avatar';
        return res.redirect(302, defaultUrl);
      }
    }

    const emailmd5 = crypto.createHash('md5').update(email).digest('hex');
    const urlObj = url.parse(proxy ? `https://gravatar.loli.top/avatar/${emailmd5}` : `https://gravatar.com/avatar/${emailmd5}`);
    return res.redirect(302, url.format(urlObj));

  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
};