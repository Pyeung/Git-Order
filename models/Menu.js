module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define("Menu", {
    Item: DataTypes.STRING,
    Ingredients: DataTypes.STRING,
    Cost: DataTypes.INTEGER,
  },
  {timestamps: false}
  );
  return Menu;
};