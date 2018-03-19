const { DataTypes } = require('sequelize');

module.exports = db => {

  db.define('Reminder', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  });

  return ({ Reminder, Notification }) => {
    Reminder.hasOne(Notification)
  }
};
