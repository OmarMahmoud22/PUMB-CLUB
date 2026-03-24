const exprees = require("express");

const router = exprees.Router();
const { ClientP  , ClientG} = require("../controller/ClientController");
const AdminMiddelware = require("../Midldleware/AdminMiddelware");

router.post("/Client", AdminMiddelware, ClientP);
router.get("/Client/:id" , AdminMiddelware ,ClientG)

module.exports = router;
