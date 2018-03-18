module.exports = [
  './User',
  './Notification',
  './Reminder',
  './UserNotification',
].map(path => require(path));
