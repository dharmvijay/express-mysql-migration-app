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
  db.addForeignKey('user_bank_details', 'user', 'user_id_fk',
    {
      'user_id': 'id'
    },
    {
      onDelete: 'CASCADE',
      onUpdate: 'RESTRICT'
    }, callback);
};

exports.down = function (db, callback) {
  db.removeForeignKey('user_bank_details', 'user_id_fk',
    {
      dropIndex: true,
    }, callback);
};

exports._meta = {
  "version": 1
};
