const express = require("express");
const PlanterLiquidRouter = express.Router();
const dbTable = require("../../../models/planter/PlanterLiquidTable");

// GET ALL
PlanterLiquidRouter.get("/", async (req, res) => {
  dbTable
    .findAll()
    .then(products => {
      console.log('products');
      res.json(products);
    })
    .catch(err => console.log(err));
});

//GET ONE BY ID
// WOStatusesRouter.get('/:id', async (req, res, next) => {
//   dbTable
//     .findOne({
//       where: { id: req.params.id }
//     })
//     .then(product => {
//       //console.log(product);
//       res.json(product);
//     })
//     .catch(err => console.log(err));
// });

module.exports = PlanterLiquidRouter;
