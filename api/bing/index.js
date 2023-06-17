const fetch = require('node-fetch');
const url = require('url');

module.exports = async (req, res) => {
  try {
    const bingApiUrl = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';
    const response = await fetch(bingApiUrl);
    const data = await response.json();
    const imageUrl = `https://cn.bing.com${data.images[0].url}`;
    const urlObj = url.parse(imageUrl);
    return res.redirect(302, url.format(urlObj));
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Error');
  }
};
