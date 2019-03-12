export default (sequelize, DataType) => {
  const Company = sequelize.define('company',
  {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    empolyeeID: DataType.STRING,
    foudedOn: DataType.STRING,
    numberOfEmployees: DataType.STRING,
    location: {
      type: DataType.STRING,
      allowNull: false,
    },
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
  })
  return Company;
}