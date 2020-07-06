/**
 * Search.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    updatedAt: false,
    createdAt: false,
    tableName: 'search',
    jobName: {
      type: 'string', required: true
    },
    date: {
      type: 'string', required: true,
    },
    time: {
      type: 'string', required: true,
    }
  },
  datastores: 'search',
};
