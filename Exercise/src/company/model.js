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