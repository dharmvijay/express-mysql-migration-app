# Node MySQL Database Migration Demo 🛰

This is a demo application built with the [NodeJs](https://db-migrate.readthedocs.io) package.

Be sure to check out the [official documentation] (https://github.com/felixge/node-mysql/).

## Usage

1. Clone this repository
2. `npm install -g db-migrate` && `npm install -g db-migrate-mysql` && `npm install`
3. Configure your database details from database.json file
4. `db-migrate up` this command will run all migration that you have written into the migrations folder in up function
5. `db-migrate down` this command will rever all migration that you have written into the migrations folder in down function
6. `db-migrate create my_table` this command will create new migration file after that you need to write up and down command
7. `db-migrate up --config config/database.json -e prod` for the production mode we need to add the new block in database.json same like dev block and run this command if we have put database.json file in config folder.

## Usefull other migration commands

1. `db-migrate up -c 5` To limit the number of executed migrations you can execute:
2. `db-migrate up 20181207125459-user-bank-details` o execute one migration by its name you can pass the name like this
3. `db-migrate db:create testDB` This command would create a database named testDB.
4. `db-migrate db:drop testDB` This command would drop a database named testDB.

## Credits

- [Dharmesh Vasani](https://dharmeshvasani.info)
- [All Contributors](../../contributors)
