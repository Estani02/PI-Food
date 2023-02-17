const { DataTypes, Model } = require('sequelize');

class Recipe extends Model {}

module.exports = (sequelize) => {
  return Recipe.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    health_score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }

  },
  {
    sequelize,
    timestamps: false,
    modelName: "recipe"
  })
}

