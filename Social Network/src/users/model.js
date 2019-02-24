export default (sequelize, DataType) => {
  const User = sequelize.define('users', 
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
      values: ['admin', 'user'],
      defaultValue: 'user'   
    },
    status: {
      type: DataType.ENUM,
      values: ['active', 'disabled'],
      defaultValue: 'active'
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
  return User;
}