const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Question extends Model {
}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Question",
    }
),

    module.exports = Question