var mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    type: [Object],
    coop_smile: [Object],
    tiki_book: [Object],
    bhx: [Object],
    lavie: [Object],
    tiger: [Object],
    vinamilk: [Object],
  },
  { versionKey: false }
);

var Collection = mongoose.model("product", schema, "product");

module.exports = {
  findByLambda: async function (lambda) {
    return await Collection.find(lambda);
  },
  createByLambda: async function (lambda) {
    return await Collection.insertMany(lambda);
  },
  updateByLambda: async function (id, lambda) {
    return await Collection.updateOne(id, lambda);
  },
  deleteByLambda: async function (lambda) {
    return await Collection.deleteOne(lambda);
  },
};
