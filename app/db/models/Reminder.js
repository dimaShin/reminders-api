const { DataTypes } = require('sequelize');

module.exports = {
  name: 'Reminder',
  define: {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  associate({ Reminder, Notification }) {
    Reminder.hasOne(Notification)
  }
};