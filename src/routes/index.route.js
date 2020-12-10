const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const coursesRouter = require('./course.route');
const meRouter = require('./me.route');

function route(app) {
  app.use('/me', meRouter);
  app.use('/news', newsRouter);
  app.use('/course', coursesRouter);
  app.use('/', siteRouter);
}

module.exports = route;
