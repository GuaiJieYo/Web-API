const fetch = require('node-fetch');

const BING_API_URL = 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN';

module.exports = async (req, res) => {
  try {
    const uhd = req.query.uhd === 'true';
    const response = await fetch(BING_API_URL);
    const { images } = await response.json();
    let imageUrl = `https://cn.bing.com${images[0].url}`;
    
    return res.redirect(302, imageUrl);
  } catch (err) {
    console.error(err);
    return res.status(500).send('网络错误');
  }
};