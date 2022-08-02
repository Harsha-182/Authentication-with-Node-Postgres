require('dotenv').config();

module.exports={
  "development": {
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.LOCALHOST,
    dialect:"postgres",
    seederStorage:"sequelize",
    seederStorageTableName:"sequelize_seed_data",
    logging:false
  },
  "test": {
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE_NAME,
    host: process.env.LOCALHOST,
    dialect: "postgres",
    seederStorage:"sequelize",
    seederStorageTableName:"sequelize_seed_data",
    logging:false
  },
  "production": {
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host:  process.env.LOCALHOST,
    dialect: "postgres",
    seederStorage:"sequelize",
    seederStorageTableName:"sequelize_seed_data",
    logging:false
  }
}
