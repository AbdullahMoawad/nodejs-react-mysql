import {DataTypes} from "sequelize";

const model = (sequelize, Sequelize) => sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: null,
            references: {
                model: {
                    tableName: 'companies',
                },
                key: 'id'
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {timestamps: false}
);

export default model
