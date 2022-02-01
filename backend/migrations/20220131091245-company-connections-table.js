'use strict';

const {DataTypes} = require("sequelize");
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('company_connections', {
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
                references: {
                    model: {
                        tableName: 'companies',
                    },
                    key: 'id'
                },
            },
            to_company: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'companies',
                    },
                    key: 'id'
                },
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: 'pending',
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('company_connections');
    }
};
