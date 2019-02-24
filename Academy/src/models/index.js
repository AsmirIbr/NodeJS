import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Students: connection.import('../students/model'),
  Mentors: connection.import('../mentors/model'),
  Menagement: connection.import('../menagement/model')
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.Students.belongsTo(models.Mentors);  
models.Mentors.hasMany(models.Students);  

models.Mentors.belongsTo(models.Menagement);  
models.Menagement.hasMany(models.Mentors);

models.Students.belongsTo(models.Menagement);  
models.Menagement.hasMany(models.Students);

models.connection = connection;
models.Sequelize = Sequelize;

export default models;
