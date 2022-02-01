import {DataTypes} from "sequelize";

const model = (sequelize, Sequelize) => sequelize.define("company", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.NUMBER,
            allowNull: false,
            defaultValue: 0,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {timestamps: false}
);

export default model