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
  db.createTable('user_details',
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
        foreignKey: {
          name: 'user_id_fk',
          table: 'user',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'id'
        }
      },
      education_details: {
        type: 'string',
        length: 40
      },
      education_extra_details: {
        type: 'string',
        length: 40
      },
      social_details: {
        type: 'string'
      }
    }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('user_details', callback);
};

exports._meta = {
  "version": 1
};
