const { DataTypes } = require('sequelize');

module.exports = db => {

  db.define('Notification', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    time: DataTypes.TIME,
    location: DataTypes.POLYGON,
  });

  return ({ Notification, Reminder, User }) => {
    Notification.belongsTo(Reminder);
    Notification.belongsToMany(User, {through: 'UserNotification'});
  }
};
