export default (sequelize, DataType) => {
  const Users = sequelize.define('users',
  {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    companyId: {
          type: DataType.STRING,
          allowNUll: false
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [6, 128],
            msg: "Email address must be between 6 and 128 characters in length"
          },
          isEmail: {
            msg: "Email address must be valid"
          }
        }
    },
    username: {
      type: DataType.STRING,
      validate: {
        isAlphanumeric: true,
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 6
        }
      }
    },
    passHash: DataType.STRING,
    // personal: [
      // personelDetails: {
      personelID: DataType.STRING,
        firstName: {
          type: DataType.STRING,
          allowNUll: false
        },
        lastName: DataType.STRING,
        gender: DataType.STRING,
        dateOfBirth: DataType.STRING,
        driverLicense: DataType.STRING,
        citizenship: DataType.STRING,
        currentLocation: DataType.STRING,
      // },
      // contactDetails: {
        address: DataType.STRING,
        city: DataType.STRING,
        municipality: DataType.STRING,
        zip: DataType.STRING,
      // },
    // ],
    // contacts: {
      legalEntity: DataType.STRING,
      jobTitle: DataType.STRING,
      jobSeniority: DataType.STRING,
      placeOfWork: DataType.STRING,
      branchOffice: DataType.STRING,
      startData: DataType.STRING,
      endData: DataType.STRING,
      pastExperience: DataType.STRING,
    // },
    dOfEmpl: DataType.STRING,
    yearOfExpi: DataType.STRING,
    // deparment:{
    //   type: DataType.ENUM,
    // }
     createdAt: {
      type: DataType.DATE,
      default: new Date(Date.now()),
    },
    updatedAt: {
      type: DataType.DATE
    },
    deletedAt: {
      type: DataType.DATE
    }
  });
  return Users;
}