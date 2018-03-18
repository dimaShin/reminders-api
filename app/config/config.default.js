module.exports = {
  staticOptions: {
    maxage: 0
  },
  server: {
    PORT: 3000,
  },
  db: {
    host: 'localhost',
    dialect: 'postgres',
    database: 'rmd_db',
    username: 'postgres',
    password: '123456',
    port: 5433,
    define: {
      underscored: false,
      freezeTableName: false,
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      },
      timestamps: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },

    operatorsAliases: false,
    sync: {
      force: process.env.FORCE_SYNC || false
    },
  },
  amqp: {
    host: 'amqp://localhost',
  }
};