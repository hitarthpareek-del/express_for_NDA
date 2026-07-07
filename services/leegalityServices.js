const axios = require("axios");

const companies = require("../config/companies");

exports.sendToLeegality = async (companyName, payload) => {
  const company = companies[companyName];

  if (!company) {
    throw new Error("Invalid company selected.");
  }

  const response = await axios.post(
    "https://sandbox.leegality.com/api/v3.0/sign/request",
    payload,
    {
      headers: {
        Authorization: `Bearer ${company.token}`,
        "Content-Type": "application/json",
        "X-Profile-Id": company.profileId,
      },
    }
  );

  return response.data;
};