const Sequelize = require('sequelize');
const db = require('../config/db');

const OrgMarketsTable = db.define('OrgMarkets', {
    name: {
        type: Sequelize.STRING(20)
    }
})



module.exports = OrgMarketsTable;