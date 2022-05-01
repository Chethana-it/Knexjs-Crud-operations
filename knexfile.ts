import { knexSnakeCaseMappers } from "objection";
require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: './src/database/migrations',
    stub: './src/database/stubs/migration.stub',
  },
  seeds: {
    directory: './src/database/seeds',
    stub: './src/database/stubs/seed.stub',
  },
  ...knexSnakeCaseMappers()
};