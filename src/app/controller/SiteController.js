const Course = require('../models/Course');
const { multiMongooseToObject } = require('../../util/mongoose');

class SiteController {
  //GET /home
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', { courses: multiMongooseToObject(courses) });
      })
      .catch(next);
    // res.render('home');
  }

  //GET /serch
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
