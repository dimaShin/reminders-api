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
  },
  auth0: {
    clientId: 'evZPYtjHAh_L70WOw_3m1xDl_C2iiTEC',
    domain: 'geo-reminder.auth0.com',
    clientSecret: 'WCXJW51tdMpPW27ZjYmRO0-kQS4WEXm0ZFMHUdJldt8Wrr5CTAlWCBr6xUdtieCY',
    endpoints: {
      auth: 'https://geo-reminder.auth0.com/authorize',
      token: 'https://geo-reminder.auth0.com/oauth/token',
      userInfo: 'https://geo-reminder.auth0.com/userinfo',
      openIdConf: 'https://geo-reminder.auth0.com/.well-known/openid-configuration',
      webKeySet: 'https://geo-reminder.auth0.com/.well-known/jwks.json',
    }
  },
  memcached: {
    host: 'localhost',
    port: 11211,
    username: 'app',
    password: '123456',
  }
};