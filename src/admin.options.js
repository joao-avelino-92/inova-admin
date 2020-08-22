const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const  AdminUser  = require('./user/user.admin')

/** @type {import('admin-bro').AdminBroOptions} */
const options = { 
    resources: [AdminUser],
    branding: {
        companyName: 'Desafio Inova',
    }
}

module.exports = options;