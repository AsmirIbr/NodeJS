export default (sequelize, DataType) => {
  const Menagement = sequelize.define('menagement', 
  {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
    },
    role: {
      type: DataType.ENUM,
      values: ['supervisior', 'teamManager', 'CEO'],
      defaultValue: 'supervisior'
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
  });
  return Menagement;
}