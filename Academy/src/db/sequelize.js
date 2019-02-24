import Sequelize from 'sequelize';
import dbConfig from '../../config/mysqlDB.json';

const currentDb = dbConfig[process.env.NODE_ENV || 'dev'];
const sequelize = new Sequelize(currentDb);

sequelize.sync({ force: true });

export default sequelize;