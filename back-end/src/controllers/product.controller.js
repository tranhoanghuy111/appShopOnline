let product = require("../models/product.model");
const resSuccess = require("../response/res-success");
const resFail = require("../response/res-fail");
const moment = require("moment");

module.exports = {
  getList: async function (req, res, next) {
    let data = await product.findByLambda();
    res.json(resSuccess(data[0]));
  },

  // findById: async function (req, res) {
  //   let id = req.params.id;
  //   let data = await product.findByLambda({ _id: id });
  //   res.json(resSuccess({ data: data[0] }));
  // },
};
