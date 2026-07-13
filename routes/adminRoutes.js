const express = require("express");
const router = express.Router();
const axios = require("axios");


router.post("/admin", async (req, res) => {
  try {

    const documentId = "01KP8B306EJGZGF66M7FGT5E6H";

    const response = await axios.post(
      `https://sandbox.leegality.com/api/v3.3/document/details?documentId=${documentId}`,
      {},
      {
        headers: {
          "X-Auth-Token": process.env.LEEGALITY_TOKEN,
          "Content-Type": "application/json"
        }
      }
    );


    const leegalityData = response.data;


    const documentName =
      leegalityData.data.document.name;


    const invitees =
      leegalityData.data.invitations.map(
        (invitee) => invitee.name
      );


    res.status(200).json({
      success: true,
      documentName,
      invitees
    });


  } catch (error) {

    console.error(
      "Leegality Admin Error:",
      error.response?.data || error.message
    );


    res.status(500).json({
      success:false,
      message:"Failed to fetch document details"
    });

  }
});


module.exports = router;