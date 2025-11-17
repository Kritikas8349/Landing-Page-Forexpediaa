const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({
      success: true,
      message: "Lead saved successfully!",
      data: lead,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
