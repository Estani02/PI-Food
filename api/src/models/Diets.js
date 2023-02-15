const {DataTypes, Model} = require('sequelize');

class Diet extends Model {}

module.exports = (sequelize) => {
    return Diet.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "diet",
        timestamps: false
    })
}