const { sendToLeegality } = require("../services/leegalityServices");

exports.submitDocument = async (req, res) => {
  try {
    const { company, payload } = req.body;

    const response = await sendToLeegality(company, payload);

    res.json(response);
  } catch (err) {
    console.error(err.response?.data || err.message);

    res.status(err.response?.status || 500).json({
      success: false,
      message: err.response?.data || err.message,
    });
  }
};