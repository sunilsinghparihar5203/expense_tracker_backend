const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const expense = sequelize.define("expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  amount: Sequelize.DOUBLE,
  date: Sequelize.DATE,
});

module.exports  = expense