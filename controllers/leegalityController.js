const { sendToLeegality } = require("../services/leegalityServices");

exports.submitDocument = async (req, res) => {
  try {
    const { company, documentType, payload } = req.body;

    if (!company) {
      return res.status(400).json({
        success: false,
        message: "Company is required.",
      });
    }

    if (!documentType) {
      return res.status(400).json({
        success: false,
        message: "Document type is required.",
      });
    }

    if (!payload) {
      return res.status(400).json({
        success: false,
        message: "Payload is required.",
      });
    }

    const response = await sendToLeegality(
      company,
      documentType,
      payload
    );

    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (err) {
    console.error(err.response?.data || err.message);

    return res.status(err.response?.status || 500).json({
      success: false,
      message:
        err.response?.data?.message ||
        err.response?.data ||
        err.message,
    });
  }
};