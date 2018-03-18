const { DataTypes } = require('sequelize');
const { toSQL, toJSON, isSQL } = require('../../helpers/location.helper');

DataTypes.POLYGON = class Polygon extends DataTypes.GEOMETRY {
  constructor (value) {
    super();
    this.key = 'POLYGON'
  }

  toSql() {
    return 'polygon'
  }

  // Todo
  validate (value) {
    // const Validator = require('./utils/validator-extras').validator
    // if (!Validator.isDate(String(value))) {
    //   throw new sequelizeErrors.ValidationError(util.format('%j is not a valid date', value))
    // }
    return true
  }

  _sanitize (value, options) {
    if (!isSQL(value)) {
      return toSQL(value);
    } else {
      return toJSON(value);
    }
  }

  _isChanged (value, originalValue) {
    return value !== originalValue;
  }

  _stringify (location) {
    return location;
  }
};
