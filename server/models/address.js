'use strict';
const uuidV4 = require('uuid').v4

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User)
    }
  };

  Address.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidV4()
    },
    street_name: DataTypes.STRING,
    street_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  
  return Address;
};