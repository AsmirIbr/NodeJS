import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Users: connection.import('../users/model'),
  Company: connection.import('../company/model')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.Users.belongsTo(models.Company);
models.Company.hasMany(models.Users);

models.connection = connection;
models.Sequelize = Sequelize;

export default models;
