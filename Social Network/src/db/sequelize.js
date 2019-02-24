import Sequelize from 'sequelize';
import dbConfig from '../../config/mysqlDB.json';

const currentDb = dbConfig[process.env.NODE_ENV || 'dev'];
const sequelize = new Sequelize(currentDb);
// console.log(sequelize)

sequelize.sync({ force: false });

export default sequelize;