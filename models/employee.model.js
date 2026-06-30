const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
      enum: ["Akar Limited", "Medicca Press"],
    },

    employee: {
      designation: String,

      offerLetterDate: Date,

      dateOfJoining: Date,

      title: String,

      firstName: String,

      lastName: String,

      gender: String,

      dateOfBirth: Date,

      guardianName: String,

      guardianRelation: String,

      presentAddress: String,

      landmark: String,

      location: String,

      pin: String,

      permanentAddress: String,

      nationality: String,

      phoneNumber: String,

      emergencyContactPerson: String,

      emergencyContactNumber: String,

      email: String,

      panNumber: String,

      aadhaarNumber: String,

      highestQualification: String,

      ndaFullName: String,

      ndaAddress: String,
    },

    documents: {
      panCardCopy: String,

      aadhaarCopy: String,

      passportPhoto: String,

      cancelledCheque: String,

      dobProof: String,

      educationCertificates: [String],

      salarySlips: [String],

      relievingLetter: [String],

      resume: String,
    },

    leegality: {
      appointmentLetter: {
        requestId: String,

        documentId: String,

        status: {
          type: String,
          default: "Pending",
        },
      },

      nda: {
        requestId: String,

        documentId: String,

        status: {
          type: String,
          default: "Pending",
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);