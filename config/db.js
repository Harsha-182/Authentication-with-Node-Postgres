require('dotenv').config();

module.exports={
  "development": {
    username: "postgres",
    password:"password",
    database: "Backend1",
    host: "localhost",
    dialect: "postgres",
    seederStorage:"sequelize",
    seederStorageTableName:"sequelize_seed_data",
    logging:false
  },
  "test": {
    username: "postgres",
    password:"password",
    database: "Backend1",
    host: "localhost",
    dialect: "postgres",
    seederStorage:"sequelize",
    seederStorageTableName:"sequelize_seed_data",
    logging:false
  },
  "production": {
    username: "postgres",
    password:"password",
    database: "Backend1",
    host: "localhost",
    dialect: "postgres",
    seederStorage:"sequelize",
    seederStorageTableName:"sequelize_seed_data",
    logging:false
  }
}
