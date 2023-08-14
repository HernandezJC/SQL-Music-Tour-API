'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stage', [
      {
        name: 'Bonita',
        capacity: 100
      },
      {
        name: 'Ampithere',
        capacity: 500
      },
      {
        name: 'Snapdragon',
        capacity: 1000
      },
      {
        name: 'Starlight Theater',
        capacity: 200
      },
      {
        name: 'Center for the Arts',
        capacity: 10000
      },
      {
        name: 'San Diego',
        capacity: 60000
      },
      {
        name: 'Pechanga',
        capacity: 6000
      },
      {
        name: 'Moonshine Beach',
        capacity: 800
      },
      {
        name: 'Private Party',
        capacity: 40
      },
      {
        name: 'Viejas Arena',
        capacity: 1200
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stage', null, {});
  }
};