import {DataTypes} from "sequelize";

const model = (sequelize, Sequelize) => sequelize.define("company_connection", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        from_company: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        to_company: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'pending',
        },
    },
    {timestamps: false}
);

export default model