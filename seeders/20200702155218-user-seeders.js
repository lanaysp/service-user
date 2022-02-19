'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('users', [
      {
        name: "Etnicode",
        profession: "Admin Etnicode",
        role: "admin",
        email: "etnicode@gmail.com",
        password: await bcrypt.hash('secret1234', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Maulana",
        profession: "Back End Developer",
        role: "student",
        email: "lanaysps@mail.com",
        password: await bcrypt.hash('secret123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {   
    await queryInterface.bulkDelete('users', null, {});
  }
};
