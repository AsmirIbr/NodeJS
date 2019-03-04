export default (sequelize, DataType) => {
  const Student = sequelize.define('students', 
  {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    mentorId: {
      type: DataType.STRING,
      allowNull: false,
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
  return Student;
}