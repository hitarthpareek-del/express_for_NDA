const axios = require("axios");
const companies = require("../config/companies");

exports.sendToLeegality = async (
  companyName,
  documentType,
  payload
) => {
  const company = companies[companyName];

  if (!company) {
    throw new Error("Invalid company selected.");
  }

  const form = company.forms[documentType];

  if (!form) {
    throw new Error(
      `Document type '${documentType}' is not configured for '${companyName}'.`
    );
  }

  // Inject profileId into payload
  payload.profileId = form.profileId;

  const response = await axios.post(
    "https://sandbox.leegality.com/api/v3.0/sign/request",
    payload,
    {
      headers: {
        Authorization: `Bearer ${company.token}`,
        "Content-Type": "application/json",
        "X-Profile-Id": form.profileId,
      },
    }
  );

  return response.data;
};