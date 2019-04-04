export default (sequelize, DataType) => {
  const Message = sequelize.define('messages',
  {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    msg: DataType.STRING,
  });
  return Message;
}