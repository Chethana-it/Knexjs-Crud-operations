import { Knex } from 'knex';

const tableName = 'users';

export async function up(knex: Knex){
    return knex.schema.createTable(tableName, table => {
        table.uuid('id').primary().notNullable();
        table.text('user_name');
        table.text('user_category');
        table.timestamps(true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable(tableName);
}