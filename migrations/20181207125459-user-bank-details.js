'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {

  //automatic mapping, the mapping key resolves to the column
  db.createTable('user_bank_details',
    {
      id:
      {
        type: 'int',
        unsigned: true,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 10
      },
      user_id:
      {
        type: 'int',
        unsigned: true,
        length: 10,
        notNull: true,
      },
      account_number: {
        type: 'string',
        length: 40
      },
      iifc_code: {
        type: 'string',
        length: 40
      },
      account_type: {
        type: 'string',
        defaultValue: 'saving'
      },
      bank_name: {
        type: 'string',
        defaultValue: 'saving'
      },
    }, callback);
};

exports.down = function (db) {
  db.dropTable('user_bank_details', callback);
};

exports._meta = {
  "version": 1
};
