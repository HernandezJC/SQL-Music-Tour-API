'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('band', [
      {
        name: 'Suicide Boys',
        genre: 'Trap',
        available_start_time: '12:00:00',
        end_time: '18:00:00'
      },
      {
        name: 'Bad Bunny',
        genre: 'Spanish Trap',
        available_start_time: '14:00:00',
        end_time: '19:00:00'
      },
      {
        name: 'Da Baby',
        genre: 'Rap',
        available_start_time: '16:00:00',
        end_time: '21:00:00'
      },
      {
        name: 'That Mexican OT',
        genre: 'Rap',
        available_start_time: '18:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Maxo Cream',
        genre: 'Trap',
        available_start_time: '19:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Wiz Khalifa',
        genre: 'Rap',
        available_start_time: '17:00:00',
        end_time: '22:00:00'
      },
      {
        name: 'Juicy J',
        genre: 'Rap',
        available_start_time: '21:00:00',
        end_time: '23:00:00'
      },
      {
        name: 'Snoop Dogg',
        genre: 'Rap',
        available_start_time: '15:00:00',
        end_time: '20:00:00'
      },
      {
        name: 'ASAP Rocky',
        genre: 'Rap',
        available_start_time: '14:00:00',
        end_time: '19:00:00'
      },
      {
        name: 'Peso Pluma',
        genre: 'Spanish Trap',
        available_start_time: '13:00:00',
        end_time: '19:00:00'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('band', null, {})
  }
};