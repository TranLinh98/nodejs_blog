const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String },
    image: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
  },
  {
    timestamps: true,
  },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
