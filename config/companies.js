module.exports = {
  Mediccapress: {
    token: process.env.MEDICCAPRESS_TOKEN,

    forms: {
      appointment: {
        profileId: process.env.MEDICCAPRESS_APPOINTMENT_PROFILE,
      },

      nda: {
        profileId: process.env.MEDICCAPRESS_NDA_PROFILE,
      },
    },
  },

  "Akar Limited": {
    token: process.env.AKAR_TOKEN,

    forms: {
      appointment: {
        profileId: process.env.AKAR_APPOINTMENT_PROFILE,
      },

      nda: {
        profileId: process.env.AKAR_NDA_PROFILE,
      },
    },
  },
};