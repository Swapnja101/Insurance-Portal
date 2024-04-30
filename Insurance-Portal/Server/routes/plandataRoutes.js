const express = require("express");
const planDataController = require("../controllers/plandataController");
const planDataValidator = require("../validators/plandataValidator");

const router = express.Router();

router.post(
  "/create",
  planDataValidator.createPlanDataValidator,
  planDataController.createPlanData
);
router.get("/getAll", planDataController.getAllPlanData);
router.get("/:id", planDataController.getPlanDataById);
router.delete("/:id", planDataController.deletePlanDataById);
router.put(
  "/:id",
  planDataValidator.createPlanDataValidator,
  planDataController.updatePlanDataById
);

module.exports = router;
/*
// plandataRoutes.js
const express = require("express");
const planController = require("../controllers/planController"); // Corrected import

const router = express.Router();

router.post(
  "/create",
  planController.createPlanValidator, // Assuming you have a validator for plan creation
  planController.createPlan // Corrected function reference
);
router.get("/getAll", planController.getAllPlans);
router.get("/:id", planController.getPlanById);
router.delete("/:id", planController.deletePlanById);
router.put(
  "/:id",
  planController.updatePlanValidator, // Assuming you have a validator for plan update
  planController.updatePlanById
);

module.exports = router;
*/