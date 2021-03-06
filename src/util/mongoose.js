module.exports = {
  multiMongooseToObject: function (mongooseArray) {
    return mongooseArray.map((mongooseArray) => mongooseArray.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
