'use strict';
module.exports = (sequelize, DataTypes) => {
  const Presence = sequelize.define('Presence', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Presence.associate = function(models) {
    // associations can be defined here
  };
  return Presence;
};