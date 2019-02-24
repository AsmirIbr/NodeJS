export default (sequelize, DataType) => {
  const Mentor = sequelize.define('mentors', 
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
      values: ['mentor', 'assistant'],
      defaultValue: 'mentor'
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
  return Mentor;
}