const exprees = require("express");

const router = exprees.Router();
const {
  ClientP,
  ClientG,
  AllClient,
} = require("../controller/ClientController");
const { AdminMiddelware , AdminAndTrainer } = require("../Midldleware/AdminMiddelware");
router.post("/Client", AdminMiddelware, ClientP);
router.get("/Client/:id", AdminAndTrainer("admin", "trainer"), ClientG);
router.get("/allclinet", AdminMiddelware , AllClient);

module.exports = router;
