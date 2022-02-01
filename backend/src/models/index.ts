'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import database from '../../config/database.js';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db: any = {};

const sequelize = new Sequelize(database[env].database, database[env].username, database[env].password, {
    host: database[env].host,
    dialect: database[env].dialect

});

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file));
        const dbModel = model.default(sequelize, Sequelize.DataTypes)
        db[dbModel.name] = dbModel;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

//Joins
console.log(db)
db.user.hasOne(db.company, {foreignKey: 'id', sourceKey: 'company_id'})

db.company_connection.hasOne(db.company, {foreignKey: 'id', sourceKey: 'from_company'})
db.company_connection.hasOne(db.company, {foreignKey: 'id', sourceKey: 'to_company'})

db.company.hasMany(db.user, {foreignKey: 'company_id', sourceKey: 'id'})
db.company.hasMany(db.company_connection, {foreignKey: 'from_company', sourceKey: 'id'})
db.company.hasMany(db.company_connection, {foreignKey: 'to_company', sourceKey: 'id'})

db.company_connection.hasOne(db.company, {foreignKey: 'id', sourceKey: 'from_company'})
db.company_connection.hasOne(db.company, {foreignKey: 'id', sourceKey: 'to_company'})
//
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
