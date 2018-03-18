const { db } = require('../db');
const { pointToSQL } = require('../helpers/location.helper');

module.exports = {
  async get(ctx) {
    const { location } = ctx.request.query;
    const { Notification } = db.models;
    let rows = [];

    if (location) {
      rows = await Notification.findAll({
        where: {
          location: {
            [db.Op.contains]: `point${pointToSQL(JSON.parse(location))}`
          }
        }
      })
    }
    ctx.body = { rows }
  },

  async create(ctx) {
    const { location, time } = ctx.request.body;

    const { Notification } = db.models;

    const response = await Notification.create({ location, time });

    ctx.body = response.toJSON();
  }
};