const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Pdfs extends Model {
}
Pdfs.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Pdfs',
    tableName: 'pdfs',
    timestamps: false,
});

module.exports = Pdfs;