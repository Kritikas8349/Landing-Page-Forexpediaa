const express = require("express");
const router = express.Router();
const { createLead, getLeads } = require("../controllers/leadController");

router.post("/submit", createLead);
router.get("/", getLeads);

module.exports = router;
