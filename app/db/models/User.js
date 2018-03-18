const { DataTypes } = require('sequelize');

module.exports = {
  name: 'User',
  define: {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  associate({ Notification, User }) {
    User.belongsToMany(Notification, { through: 'UserNotification' });
  }
};
