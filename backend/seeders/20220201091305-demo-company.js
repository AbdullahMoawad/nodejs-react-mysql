'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('companies', [{
            id: 1,
            name: 'demo company',
            industry: 'demo company',
            size: 10,
            status: true,
        }]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('companies', null, {});
    }
};
