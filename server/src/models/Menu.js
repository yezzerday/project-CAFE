module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        size: DataTypes.STRING,
        sweet: DataTypes.STRING,
        price: DataTypes.STRING
    })
    return Menu;
   }