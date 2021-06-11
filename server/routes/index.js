const path = require('path');
const cors = require('cors');
const postController = require('../controllers/postController');
const notionController = require('../controllers/notionController')
const memberController = require('../controllers/memberController')
const faqController = require('../controllers/faqController')
const bannerController = require('../controllers/bannerController')

const logoController = require('../controllers/logoController');

module.exports = (app) => {
  app.use(cors());

  app.get('/api/posts', postController.getPostController);

  app.get('/api/members', memberController.getMemberController);

  app.get('/api/notion', notionController.getNotionController);

  app.get('/api/FAQ', faqController.getFAQController);

  app.get('/api/banner', bannerController.getBannerController);
  
  app.get('/api/logo', logoController.getLogoController);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('*', (req, res) => {
    res.redirect('/');
  });
};