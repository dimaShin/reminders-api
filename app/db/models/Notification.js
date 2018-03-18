const { DataTypes } = require('sequelize');

module.exports = {
  name: 'Notification',
  define: {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    time: DataTypes.TIME,
  },
  afterCreate(connection) {
    connection.query('﻿ALTER TABLE "Notifications" ADD COLUMN IF NOT EXISTS location polygon;');
  },
  associate({ Notification, Reminder, User }) {
    Notification.belongsTo(Reminder);
    Notification.belongsToMany(User, { through: 'UserNotification' });
  }
};
