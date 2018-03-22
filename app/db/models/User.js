const { DataTypes } = require('sequelize');

module.exports = db => {

  db.define('User', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    meta: DataTypes.JSON,
  });

  return async ({ Notification, User }) => {
    User.belongsToMany(Notification, { through: 'UserNotification' });

    const totalUsers = await User.count();

    if (!totalUsers) {
      await User.create({});
    }
  }
};
