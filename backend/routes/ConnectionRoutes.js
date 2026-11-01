const express = require("express");

const router = express.Router();

const {
    createConnection,
    getConnections,
    updateConnectionStatus
} = require("../controllers/Connectioncontroller");


router.post("/", createConnection);

router.get("/", getConnections);

router.patch("/:id", updateConnectionStatus);


module.exports = router;