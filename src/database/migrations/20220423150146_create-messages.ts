import { Knex } from 'knex';

const tableName = 'messages';

export async function up(knex: Knex){
    return knex.schema.createTable(tableName, table => {
        table.uuid('id').primary().notNullable();
        table.text('message_name');
        table.text('message_category');
        table.timestamps(true);
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable(tableName);
}