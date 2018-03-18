const { DataTypes } = require('sequelize');

module.exports = db => {

  db.define('UserNotification', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  });

  return async ({ Notification, User, UserNotification }) => {
    UserNotification.belongsTo(Notification);
    UserNotification.belongsTo(User);
  }
};
