const { DataTypes } = require('sequelize');

module.exports = {
  name: 'UserNotification',
  define: {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  associate({ Notification, User, UserNotification }) {
    UserNotification.belongsTo(Notification);
    UserNotification.belongsTo(User);
  }
};