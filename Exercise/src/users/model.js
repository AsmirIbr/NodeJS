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
        email: DataType.STRING,
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