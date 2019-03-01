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

models.Students.belongsTo(models.Mentors, {
  through: 'students_mentors',
  foreignKey: 'students_id',
  otherKey: 'mentors_id'
});  
models.Mentors.belongsToMany(models.Students, {
  through: 'students_mentors',
  foreignKey: 'mentors_id',
  otherKey: 'students_id'
});  

models.Mentors.belongsTo(models.Menagement);  
models.Menagement.hasMany(models.Mentors);

models.Students.belongsTo(models.Menagement);  
models.Menagement.hasMany(models.Students);

models.connection = connection;
models.Sequelize = Sequelize;

export default models;
