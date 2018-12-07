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

## Credits

- [Dharmesh Vasani](https://dharmeshvasani.info)
- [All Contributors](../../contributors)
