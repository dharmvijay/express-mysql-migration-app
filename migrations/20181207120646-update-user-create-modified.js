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
  db.addColumn('user', 'created', {
    type: 'datetime'
  }, function (err) {
    if (err) return callback(err);

    db.addColumn('user', 'modified', {
      type: 'datetime'
    }, function (err) {
      if (err) return callback(err);
    });
  });
};

exports.down = function (db, callback) {
  db.removeColumn('user', 'created', function (err) {
    if (err) return callback(err);
    db.removeColumn('user', 'modified', callback)
  });
};
